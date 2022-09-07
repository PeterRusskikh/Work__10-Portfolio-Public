/* Gallery----------------------------------------------------- */
const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const soc = document.querySelector(".soc");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	list.classList.toggle("active");
	soc.classList.toggle("active");
})

document.querySelectorAll(".list-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active")
	list.classList.remove("active")
	soc.classList.remove("active")
}))


