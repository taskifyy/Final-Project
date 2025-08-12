function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    // Light mode
    document.body.classList.remove("dark");
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--header-bg", "#eee");
    document.documentElement.style.setProperty("--search-bg", "white");
    document.documentElement.style.setProperty("--search-border", "#ccc");
  } else {
    // Dark mode
    document.body.classList.add("dark");
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--header-bg", "#333");
    document.documentElement.style.setProperty("--search-bg", "#1e1e1e");
    document.documentElement.style.setProperty("--search-border", "#555");
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#theme-btn").addEventListener("click", toggleTheme);
});
