document.addEventListener("DOMContentLoaded", () => {
	// Target elements for hover
	const container = document.querySelectorAll(".sidebar__container");
	const icon = container.children[0];
	const anchor = container.children[1];

	// Trigger function when sidebar container is hovered
	container.forEach(element => {
		element.addEventListener("mouseenter", () => {
			// Change CSS style when hovered
			element.style.backgroundColor = "rgba(61, 31, 16, 0.8)";
		});

		element.addEventListener("mouseleave", () => {
			// Change CSS style to default when unhovered
			element.style.backgroundColor = "";
		});
	});
});
