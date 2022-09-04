
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

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.buttons-prev');
const btnNext = document.querySelector('.buttons-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
})

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtns();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;

};
const checkBtns = () => {
	btnPrev.disabled = position === 0
	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

/* ----------------------------------------------------- */
