const systemData = {
  browserName: navigator.appName,
  browserVersion: navigator.appVersion,
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  cookiesEnabled: navigator.cookieEnabled,
  onlineStatus: navigator.onLine
};

localStorage.setItem("systemData", JSON.stringify(systemData));

const savedSystemData = JSON.parse(localStorage.getItem("systemData"));

const systemInfoBlock = document.getElementById("system-info");

systemInfoBlock.innerHTML = `
  <p><strong>Браузер:</strong> ${savedSystemData.browserName}</p>
  <p><strong>Версія браузера:</strong> ${savedSystemData.browserVersion}</p>
  <p><strong>User Agent:</strong> ${savedSystemData.userAgent}</p>
  <p><strong>Платформа:</strong> ${savedSystemData.platform}</p>
  <p><strong>Мова:</strong> ${savedSystemData.language}</p>
  <p><strong>Cookies увімкнено:</strong> ${savedSystemData.cookiesEnabled ? "Так" : "Ні"}</p>
  <p><strong>Статус мережі:</strong> ${savedSystemData.onlineStatus ? "Онлайн" : "Офлайн"}</p>
`;

fetch("https://jsonplaceholder.typicode.com/posts/8/comments")
  .then(response => response.json())
  .then(data => {
    const commentsBlock = document.getElementById("comments");

    data.forEach(comment => {
      const commentElement = document.createElement("div");

      commentElement.innerHTML = `
        <h4>${comment.name}</h4>
        <p><strong>${comment.email}</strong></p>
        <p>${comment.body}</p>
      `;

      commentsBlock.appendChild(commentElement);
    });
  })
  .catch(error => console.error("Error:", error));

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

setTimeout(() => {
  modal.style.display = "block";
}, 60000);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const toggleBtn = document.getElementById("theme-toggle");

function updateButtonText() {
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Світла тема";
  } else {
    toggleBtn.textContent = "Темна тема";
  }
}

const now = new Date();
const hours = now.getHours();

if (hours >= 7 && hours < 21) {
  document.body.classList.remove("dark");
} else {
  document.body.classList.add("dark");
}

updateButtonText();

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateButtonText();
});