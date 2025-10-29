const buttons = document.querySelectorAll("nav button");
const cards = document.querySelectorAll(".video-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        cards.forEach(card => {
            card.style.display = 
                category === "all" || card.dataset.category === category
                ? "block"
                : "none";
        });
    });
});
