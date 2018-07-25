document.addEventListener("DOMContentLoaded", () => {
    const listItems = Array.from(document.querySelectorAll("nav li"));
    const divContainer = document.getElementsByClassName("burger-nav")[0];
    const ul = document.getElementsByClassName("burger-list")[0];
    const mainBannerDiv = document.getElementsByClassName("main-banner")[0];

    listItems.forEach( (listItem) => {
        // document.createElement("li");
        const currentItem = document.createElement('li');
        currentItem.innerHTML = listItem.innerHTML;
        ul.appendChild(currentItem);

    });

    divContainer.addEventListener("click", () => {
        ul.classList.toggle("open");
        mainBannerDiv.classList.toggle("open");
    })


});