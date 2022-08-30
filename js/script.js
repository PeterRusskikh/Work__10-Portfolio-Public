
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

/* Slider----------------------------------------------------- */
$(document).ready(function () {
	let position = 0;
	const slidesToShow = 3;
	const slidesToScroll = 2;
	const container = $('.slider-container');
	const track = $('.slider-track');
	const item = $('.slider-item');
	const btnPrew = $('.buttons-prew');
	const btnNext = $('.buttons-next');
	const itemWidth = container.width() / slidesToShow;

	item.each(function (index, item) {
		$(item).css({
			minWidth: itemWidth,
		})
	});
});