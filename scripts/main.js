// buttons
menuBtn = document.querySelector(".menu_icon span")
searchBtn = document.querySelector(".search_icon")
cancleBtn = document.querySelector(".cancle_icon")
nav_list = document.querySelector("ul.navbar_one")
searchBox= document.querySelector(".search_container")

menuBtn.onclick = () => {
    nav_list.classList.add("active");
    searchBtn.classList.add("hide");
    cancleBtn.classList.add("show");
    menuBtn.classList.add("hide")
}

cancleBtn.onclick = () => {
    nav_list.classList.remove("active");
    searchBtn.classList.remove("hide");
    cancleBtn.classList.remove("show");
    menuBtn.classList.remove("hide");
    searchBox.classList.remove("active");
    cancleBtn.style.color = "red"
}

searchBtn.onclick = () => {
    searchBox.classList.add("active")
    searchBtn.classList.add("hide")
    cancleBtn.classList.add("show")
}