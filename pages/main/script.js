document.addEventListener("DOMContentLoaded", () => {
  const buttons = {
    all: document.getElementById("all"), // Кнопка "All"
    healthy: document.getElementById("healthy"),
    trending: document.getElementById("trending"),
    supreme: document.getElementById("supreme"),
  };

  const blocks = {
    healthy: document.querySelectorAll(".healthyBlock"),
    trending: document.querySelectorAll(".trendingBlock"),
    supreme: document.querySelectorAll(".supremeBlock"),
  };

  Object.keys(buttons).forEach((key) => {
    buttons[key].addEventListener("click", () => {

      Object.values(buttons).forEach((button) => button.classList.remove("tab_active"));


      buttons[key].classList.add("tab_active");

      if (key === "all") {

        Object.values(blocks).forEach((blockGroup) => {
          blockGroup.forEach((block) => block.classList.remove("d-none"));
        });
      } else {

        Object.values(blocks).forEach((blockGroup) => {
          blockGroup.forEach((block) => block.classList.add("d-none"));
        });


        blocks[key].forEach((block) => block.classList.remove("d-none"));
      }
    });
  });
});
