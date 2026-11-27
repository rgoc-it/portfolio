const arrowContainer = document.getElementById("containerngarrow");

arrowContainer.addEventListener("mouseenter", function() {
    arrowContainer.classList.add("is-hovered");
});

arrowContainer.addEventListener("mouseleave", function() {
    arrowContainer.classList.remove("is-hovered");
});

const filterButtons = document.querySelectorAll(".iskinita");
const projectCards = document.querySelectorAll("#motherearth > div");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedCategory = button.dataset.category;

        projectCards.forEach(function(card) {
            if (selectedCategory === "all" || card.dataset.category === selectedCategory) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

        document.querySelector(".iskinita.active").classList.remove("active");
        button.classList.add("active");
    });
});

const cardPopup = document.getElementById("blurrycardpopup");
const popupImage = document.getElementById("popupimage");
const closePopup = document.getElementById("closepopup");
const popupCategory = document.getElementById("popupcategory");
const popupTitle = document.getElementById("popuptitle");
const popupDescription = document.getElementById("popupdescription");
const popupTags = document.getElementById("popuptags");

projectCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const cardImage = card.querySelector("img");
        const cardCategory = card.querySelector(".usa").textContent;
        const cardTitle = card.querySelector(".duha").textContent;
        const cardDescription = card.querySelector(".tulo").textContent;

        popupImage.src = cardImage.src;
        popupImage.alt = cardImage.alt;
        popupCategory.textContent = cardCategory.split("━━")[1].trim();
        popupTitle.textContent = cardTitle;
        popupDescription.textContent = cardDescription;
        popupTags.textContent = "";

        card.querySelectorAll(".aposatuhod, .aposapaa").forEach(function(tag) {
            const popupTag = document.createElement("span");
            popupTag.textContent = tag.textContent;
            popupTags.appendChild(popupTag);
        });

        cardPopup.style.display = "flex";
    });
});

function hideCardPopup() {
    cardPopup.style.display = "none";
    popupImage.removeAttribute("src");
}

closePopup.addEventListener("click", hideCardPopup);

cardPopup.addEventListener("click", function(event) {
    if (event.target === cardPopup) {
        hideCardPopup();
    }
});

