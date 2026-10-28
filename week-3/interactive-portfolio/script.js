// Interactive Portfolio: reusable helpers and DOM event listeners
"use strict";

const $ = (selector, parent = document) => parent.querySelector(selector);

function setFeedback(element, message, type = "") {
  element.textContent = message;
  element.className = `feedback${type ? ` ${type}` : ""}`;
}

function initThemeToggle() {
  const button = $("#theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const shouldUseDark = savedTheme === "dark";

  document.body.classList.toggle("dark-mode", shouldUseDark);
  updateThemeButton(button, shouldUseDark);

  button.addEventListener("click", () => {
    const darkModeEnabled = document.body.classList.toggle("dark-mode");
    localStorage.setItem("portfolio-theme", darkModeEnabled ? "dark" : "light");
    updateThemeButton(button, darkModeEnabled);
  });
}

function updateThemeButton(button, darkModeEnabled) {
  button.textContent = darkModeEnabled ? "☀️ Light mode" : "🌙 Dark mode";
  button.setAttribute("aria-label", darkModeEnabled ? "Switch to light mode" : "Switch to dark mode");
  button.setAttribute("aria-pressed", String(darkModeEnabled));
}

function initAboutToggle() {
  const button = $("#about-toggle");
  const extraContent = $("#more-about");

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    extraContent.hidden = isExpanded;
    button.textContent = isExpanded ? "Read more" : "Show less";
  });
}

function initCaptionSlider() {
  const captions = [
    "Learning, building, improving.",
    "Small steps make real progress.",
    "Curiosity turns into projects."
  ];
  let currentIndex = 0;
  const caption = $("#profile-caption");
  const indicator = $("#slide-indicator");

  function showCaption(index) {
    currentIndex = (index + captions.length) % captions.length;
    caption.textContent = captions[currentIndex];
    indicator.textContent = `${currentIndex + 1} / ${captions.length}`;
  }

  $("#previous-caption").addEventListener("click", () => showCaption(currentIndex - 1));
  $("#next-caption").addEventListener("click", () => showCaption(currentIndex + 1));
  showCaption(0);
}

function initTodoList() {
  const form = $("#todo-form");
  const input = $("#todo-input");
  const list = $("#todo-list");
  const feedback = $("#todo-feedback");
  const storageKey = "portfolio-tasks";
  let tasks = [];

  try {
    const savedTasks = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(savedTasks)) {
      tasks = savedTasks.filter(task =>
        task && typeof task.id === "string" &&
        typeof task.text === "string" &&
        typeof task.completed === "boolean"
      );
    }
  } catch {
    tasks = [];
  }

  function saveTasks() {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }

  function renderTasks() {
    list.replaceChildren();

    tasks.forEach(task => {
      const item = document.createElement("li");
      item.className = `todo-item${task.completed ? " completed" : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.setAttribute("aria-label", `Mark "${task.text}" as complete`);
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      const text = document.createElement("span");
      text.textContent = task.text;

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "delete-task";
      deleteButton.textContent = "Remove";
      deleteButton.setAttribute("aria-label", `Remove task: ${task.text}`);
      deleteButton.addEventListener("click", () => {
        tasks = tasks.filter(savedTask => savedTask.id !== task.id);
        saveTasks();
        renderTasks();
        setFeedback(feedback, "Task removed.", "success");
      });

      item.append(checkbox, text, deleteButton);
      list.append(item);
    });
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();

    if (!text) {
      setFeedback(feedback, "Please enter a task.", "error");
      input.focus();
      return;
    }

    tasks.push({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      text,
      completed: false
    });
    saveTasks();
    renderTasks();
    form.reset();
    input.focus();
    setFeedback(feedback, "Task added and saved in this browser.", "success");
  });

  renderTasks();
}

function initContactValidation() {
  const form = $("#contact-form");
  const feedback = $("#form-feedback");
  const fields = {
    name: $("#name"),
    email: $("#email"),
    message: $("#message")
  };
  const errors = {
    name: $("#name-error"),
    email: $("#email-error"),
    message: $("#message-error")
  };

  function validateField(fieldName) {
    const field = fields[fieldName];
    const value = field.value.trim();
    let errorMessage = "";

    if (fieldName === "name" && value.length < 2) {
      errorMessage = "Please enter at least 2 characters for your name.";
    } else if (fieldName === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) errorMessage = "Please enter a valid email address.";
    } else if (fieldName === "message" && value.length < 10) {
      errorMessage = "Your message must be at least 10 characters.";
    }

    errors[fieldName].textContent = errorMessage;
    field.setAttribute("aria-invalid", String(Boolean(errorMessage)));
    return !errorMessage;
  }

  Object.keys(fields).forEach(fieldName => {
    fields[fieldName].addEventListener("input", () => {
      validateField(fieldName);
      setFeedback(feedback, "");
    });
    fields[fieldName].addEventListener("blur", () => validateField(fieldName));
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const isValid = Object.keys(fields).map(validateField).every(Boolean);

    if (!isValid) {
      setFeedback(feedback, "Please correct the highlighted fields.", "error");
      const firstInvalid = Object.values(fields).find(field => field.getAttribute("aria-invalid") === "true");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    setFeedback(feedback, "Details look valid. Opening your email app…", "success");
    const recipient = "you@example.com"; // Replace with your email address.
    const subject = encodeURIComponent(`Portfolio contact from ${fields.name.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${fields.name.value.trim()}\nEmail: ${fields.email.value.trim()}\n\nMessage:\n${fields.message.value.trim()}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}

function initVisitCounter() {
  const key = "portfolio-visit-count";
  const currentCount = Number.parseInt(localStorage.getItem(key) || "0", 10);
  const nextCount = (Number.isFinite(currentCount) && currentCount >= 0 ? currentCount : 0) + 1;
  localStorage.setItem(key, String(nextCount));
  $("#visit-count").textContent = String(nextCount);
}

function initCurrentYear() {
  $("#current-year").textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initAboutToggle();
  initCaptionSlider();
  initTodoList();
  initContactValidation();
  initVisitCounter();
  initCurrentYear();
  console.log("Interactive portfolio initialized successfully.");
});
