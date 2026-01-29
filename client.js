document.addEventListener("DOMContentLoaded", () => {
	// Target elements for hover
	const container = document.querySelectorAll(".sidebar__container");
	const icon = document.querySelectorAll(".sidebar__icon");
	const anchor = document.querySelectorAll(".sidebar__anchor");

	// Trigger function when sidebar container is hovered
	container.forEach(element => {
		element.addEventListener("mouseenter", () => {
			// Change CSS style when hovered
			element.style.backgroundColor = "#5a4e43";
		});
	});
});
