document.addEventListener("DOMContentLoaded", () => {
	// Target elements for hover
	const container = document.querySelectorAll(".sidebar__container");

	// Trigger function when sidebar container is hovered
	container.forEach(element => {
		element.addEventListener("mouseenter", () => {
			// Change CSS style when hovered
			element.style.backgroundColor = "rgba(122, 79, 42, 0.5)";
			element.children[0].style.color = "rgb(61, 38, 14)"; // Icon

			// Anchor
			element.children[1].style.color = "rgb(61, 38, 14)";
			element.children[1].style.fontWeight = "700";
		});

		element.addEventListener("mouseleave", () => {
			// Change CSS style to default when unhovered
			element.style.backgroundColor = "";
			element.children[0].style.color = "black"; // Icon

			// Anchor
			element.children[1].style.color = "black";
			element.children[1].style.fontWeight = "400";
		});
	});
});
