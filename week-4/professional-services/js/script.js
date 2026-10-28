// Shared interactions for all Northstar Studio pages.
"use strict";

function initMobileNavigation() {
  const toggle = document.querySelector("#menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  if (!toggle || !navigation) return;

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      navigation.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.focus();
    }
  });
}

function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = String(new Date().getFullYear());
  });
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    message: form.querySelector("#message")
  };
  const feedback = form.querySelector("#form-feedback");
  const service = form.querySelector("#service");

  function setFeedback(message, type = "") {
    feedback.textContent = message;
    feedback.className = `feedback${type ? ` ${type}` : ""}`;
  }

  function validateField(fieldName) {
    const field = fields[fieldName];
    const errorElement = form.querySelector(`#${fieldName}-error`);
    const value = field.value.trim();
    let message = "";

    if (fieldName === "name" && value.length < 2) {
      message = "Please enter at least 2 characters for your name.";
    } else if (fieldName === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) message = "Please enter a valid email address.";
    } else if (fieldName === "message" && value.length < 10) {
      message = "Please enter at least 10 characters about your project.";
    }

    errorElement.textContent = message;
    field.setAttribute("aria-invalid", String(Boolean(message)));
    return !message;
  }

  Object.keys(fields).forEach(fieldName => {
    fields[fieldName].addEventListener("input", () => {
      validateField(fieldName);
      setFeedback("");
    });
    fields[fieldName].addEventListener("blur", () => validateField(fieldName));
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const isValid = Object.keys(fields).map(validateField).every(Boolean);

    if (!isValid) {
      setFeedback("Please fix the highlighted fields before continuing.", "error");
      const firstInvalid = Object.values(fields).find(field => field.getAttribute("aria-invalid") === "true");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const recipient = "hello@example.com"; // Replace with a real recipient before using this site.
    const chosenService = service ? service.value : "";
    const subject = encodeURIComponent(`Website enquiry from ${fields.name.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${fields.name.value.trim()}\nEmail: ${fields.email.value.trim()}\nService: ${chosenService || "Not specified"}\n\nProject details:\n${fields.message.value.trim()}`
    );

    setFeedback("Your details are valid. Opening your default email app…", "success");
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initFooterYear();
  initContactForm();
});
