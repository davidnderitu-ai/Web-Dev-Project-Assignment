document.addEventListener("DOMContentLoaded", () => {
    
    const contactForm = document.getElementById("contactForm");
    const alertContainer = document.getElementById("formAlertContainer");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alertContainer.innerHTML = "";
            const fullName = document.getElementById("fullName").value.trim();
            const emailAddress = document.getElementById("emailAddress").value.trim();
            const messageSubject = document.getElementById("messageSubject").value;
            const userMessage = document.getElementById("userMessage").value.trim();
            let formIsValid = true;

            if (fullName.length < 3) formIsValid = false;
            if (!emailAddress.includes("@") || emailAddress.length < 5) formIsValid = false;
            if (!messageSubject) formIsValid = false;
            if (userMessage.length < 10) formIsValid = false;

            contactForm.classList.add("was-validated");

            if (formIsValid) {
                alertContainer.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>🎟️ Support Ticket Logged!</strong> Thank you, ${fullName}. Our team will review your inquiry regarding "${messageSubject}" and contact you within 24 hours.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                contactForm.reset();
                contactForm.classList.remove("was-validated");
            } else {
                alertContainer.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>⚠️ Submission Halted:</strong> Please fix the highlighted execution errors inside the form layout before resubmitting.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
            }
        });
    }

   
    const faqSearch = document.getElementById('faqSearch');
    if (faqSearch) {
        faqSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.faq-item').forEach(item => {
                const match = item.textContent.toLowerCase().includes(query);
                item.style.display = match ? 'block' : 'none';
            });
        });
    }

});

    const galleryBtns = document.querySelectorAll('.gallery-filter-btn');
    const lookbookCards = document.querySelectorAll('.lookbook-card');

    if (galleryBtns.length > 0 && lookbookCards.length > 0) {
        galleryBtns.forEach(button => {
            button.addEventListener('click', () => {
                const currentFilter = button.getAttribute('data-filter');

                galleryBtns.forEach(btn => {
                    btn.classList.remove('btn-dark', 'active');
                    btn.classList.add('btn-outline-dark');
                });
                button.classList.add('btn-dark', 'active');
                button.classList.remove('btn-outline-dark');

                lookbookCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (currentFilter === 'all' || cardCategory === currentFilter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (darkModeToggle) darkModeToggle.textContent = '☀️';
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            let theme = 'light';
            if (document.documentElement.getAttribute('data-theme') !== 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                darkModeToggle.textContent = '☀️';
                theme = 'dark';
            } else {
                document.documentElement.removeAttribute('data-theme');
                darkModeToggle.textContent = '🌙';
            }
            localStorage.setItem('theme', theme);
        });
    }
