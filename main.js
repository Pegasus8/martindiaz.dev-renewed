let lastname = document.getElementById("lastname");

lastname.addEventListener("click", (e) => {
    e.preventDefault();

    e.target.parentNode.style.fontFamily = "Fenix, serif";
});
