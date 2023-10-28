function toggleNav() {
    var leftNav = document.getElementById("sec-nav-left");
    var rightNav = document.getElementById("sec-nav-right");
    if (leftNav.style.display === "none") {
        leftNav.style.display = "flex";
        rightNav.style.display = "flex";
    } else {
        leftNav.style.display = "none";
        rightNav.style.display = "none";
    }
}
