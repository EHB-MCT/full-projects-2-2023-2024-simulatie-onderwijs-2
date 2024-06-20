// const imageDivs = document.querySelectorAll(".background > div[class^='image']");

// document.addEventListener("scroll", () => {
// 	const scroll = window.scrollY;
// 	imageDivs.forEach((div) => {
// 		const scaleValue = 1 + scroll / 1000; // Adjust the division value to control the scaling speed
// 		div.style.transform = `scale(${scaleValue})`;
// 	});
// });

const imageDivs = document.querySelectorAll(".background > div[class^='image']");
let lastScrollY = 0;
const threshold = 100; // Adjust this value to control how often the scale changes

document.addEventListener("scroll", () => {
	const scroll = window.scrollY;
	if (Math.abs(scroll - lastScrollY) >= threshold) {
		imageDivs.forEach((div) => {
			const scaleValue = 0.5 + Math.random() * 1.5;
			div.style.transform = `scale(${scaleValue})`;
		});
		lastScrollY = scroll;
	}
});
