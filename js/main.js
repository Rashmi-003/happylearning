// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    /* ================= THEME TOGGLE ================= */
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    if (toggleBtn) {
        // Load saved theme
        if (localStorage.getItem("theme") === "light") {
            body.classList.add("light-mode");
            toggleBtn.textContent = "☀️";
        }

        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("light-mode");

            if (body.classList.contains("light-mode")) {
                toggleBtn.textContent = "☀️";
                localStorage.setItem("theme", "light");
            } else {
                toggleBtn.textContent = "🌙";
                localStorage.setItem("theme", "dark");
            }
        });
    }

    /* ================= COURSE FILTER (HOME) ================= */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const courses = document.querySelectorAll(".course-item");

    if (filterBtns.length > 0 && courses.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filter = btn.dataset.filter;

                courses.forEach(course => {
                    course.style.display =
                        (filter === "all" || course.dataset.category === filter)
                            ? "block"
                            : "none";
                });
            });
        });
    }

    /* ================= CONTACT FORM VALIDATION ================= */
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;

            const name = document.getElementById("fullName");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const message = document.getElementById("message");

            const nameErr = document.getElementById("nameErr");
            const emailErr = document.getElementById("emailErr");
            const phoneErr = document.getElementById("phoneErr");
            const msgErr = document.getElementById("msgErr");

            // Reset errors
            nameErr.textContent = "";
            emailErr.textContent = "";
            phoneErr.textContent = "";
            msgErr.textContent = "";

            // Name validation
            if (!name.value.trim()) {
                nameErr.textContent = "Full name required*";
                isValid = false;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                emailErr.textContent = "Email required*";
                isValid = false;
            } else if (!emailPattern.test(email.value)) {
                emailErr.textContent = "Invalid email";
                isValid = false;
            }

            // Phone validation
            const phonePattern = /^[0-9]{10}$/;
            if (!phone.value.trim()) {
                phoneErr.textContent = "Phone number required*";
                isValid = false;
            } else if (!phonePattern.test(phone.value)) {
                phoneErr.textContent = "Invalid phone number";
                isValid = false;
            }

            // Message validation
            if (!message.value.trim()) {
                msgErr.textContent = "Message required*";
                isValid = false;
            }

            if (isValid) {
                alert("Form submitted successfully!");
                contactForm.reset();
            }
        });
    }

});
