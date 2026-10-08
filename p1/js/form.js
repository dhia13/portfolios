const form = () => {
  const contactForm = document.querySelector(".contactForm"),
    responseMessage = document.querySelector(".response"),
    submitButton = contactForm?.querySelector('button[type="submit"]');

  if (!contactForm) return;

  // Real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
    });
    input.addEventListener("input", () => {
      if (input.classList.contains("error")) {
        validateField(input);
      }
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    field.classList.remove("error");
    
    // Remove any existing error message
    const existingError = field.parentElement.querySelector(".field-error");
    if (existingError) {
      existingError.remove();
    }
    
    if (field.hasAttribute("required") && !value) {
      field.classList.add("error");
      showFieldError(field, `${field.placeholder || field.name} is required.`);
      return false;
    }
    
    if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        field.classList.add("error");
        showFieldError(field, "Please enter a valid email address.");
        return false;
      }
    }
    
    if (field.name === "message" && value.length < 10) {
      field.classList.add("error");
      showFieldError(field, "Message must be at least 10 characters long.");
      return false;
    }
    
    return true;
  }

  function showFieldError(field, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "field-error";
    errorDiv.textContent = message;
    errorDiv.style.color = "#d32f2f";
    errorDiv.style.fontSize = "12px";
    errorDiv.style.marginTop = "4px";
    field.parentElement.appendChild(errorDiv);
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate all fields
    let isValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      responseMessage.classList.add("open");
      responseMessage.textContent = "Please fill in all fields correctly.";
      responseMessage.style.backgroundColor = "#d32f2f";
      setTimeout(() => {
        responseMessage.classList.remove("open");
      }, 3000);
      return;
    }

    // Disable submit button
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    responseMessage.classList.add("open");
    responseMessage.textContent = "Please wait...";
    responseMessage.style.backgroundColor = "var(--primary-accent)";

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      
      if (response.ok) {
        responseMessage.textContent = result || "Message sent successfully!";
        responseMessage.style.backgroundColor = "#2e7d32";
        form.reset();
      } else {
        responseMessage.textContent = result || "Failed to send message. Please try again.";
        responseMessage.style.backgroundColor = "#d32f2f";
      }
    } catch (error) {
      // Only log errors in development mode
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.error(error.message);
      }
      responseMessage.textContent = "Network error. Please check your connection and try again.";
      responseMessage.style.backgroundColor = "#d32f2f";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }
      setTimeout(() => {
        responseMessage.classList.remove("open");
      }, 5000);
    }
  });
};
export default form;
