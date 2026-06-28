// AURA Active - Client-Side Interaction Controller
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

            
            if (fullName.length < 3) {
                formIsValid = false;
            }
            if (!emailAddress.includes("@") || emailAddress.length < 5) {
                formIsValid = false;
            }
            if (!messageSubject) {
                formIsValid = false;
            }
            if (userMessage.length < 10) {
                formIsValid = false;
            }

            
            contactForm.classList.add("was-validated");

            if (formIsValid) {
                
                alertContainer.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>🎟️ Support Ticket Logged!</strong> Thank you, ${fullName}. Our team will review your inquiry regarding "${messageSubject}" and contact you within 24 hours.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                // Reset the form values clean
                contactForm.reset();
                contactForm.classList.remove("was-validated");
            } else {
                
                alertContainer.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>⚠️ Submission Halted:</strong> Please fix the highlighted errors inside the form before resubmitting.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
            }
        });
    }

});