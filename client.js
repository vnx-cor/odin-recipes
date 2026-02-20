document.addEventListener("DOMContentLoaded", () => {
	// Target elements for hover
	const container = document.querySelectorAll(".sidebar__container");

	// Trigger function when sidebar container is hovered
	container.forEach(element => {
		element.addEventListener("mouseenter", () => {
			// Change CSS style when hovered
			element.style.backgroundColor = "rgba(120, 70, 30, 0.1)";
			element.children[0].style.color = "rgb(61, 38, 14)"; // Icon

			// Anchor
			element.children[1].style.color = "rgb(61, 38, 14)";
			element.children[1].style.fontWeight = "600";
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


	// Comment Input Animation
	const commentInputContainer = document.querySelector(".comment__section-user");
	const commentInput = document.querySelector(".comment__input");
	const btnSubmit = document.createElement("button");
	const btnCancel = document.createElement("button");

	// Container for the User Input Comment Buttons
	const btnContainer = document.createElement("div");
	btnContainer.append(btnCancel, btnSubmit);

	// Set Buttons and Container's Stylings
	btnContainer.classList.add("comment-buttons__container");
	btnSubmit.classList.add("button__submit");
	btnCancel.classList.add("button__cancel");

	// Set Text Content to User Input Comment
	btnSubmit.textContent = "Submit";
	btnCancel.textContent = "Cancel";

	// Disable Buttons
	btnSubmit.disabled = true;
	btnCancel.disabled = true;

	// User Comment Input (Focus) 
	commentInput.addEventListener("focus", () => { 
		commentInputContainer.appendChild(btnContainer);
	});

	// Update Buttons based on value of commentInput
	function updateButtons() {
		// Check if Comment Input is empty
		const isEmpty = commentInput.value.trim() === "";

		// Enable Buttons depending on isEmpty condition
		btnSubmit.disabled = isEmpty;
		btnCancel.disabled = isEmpty;

		// Change opacity (Enabled Styling) 
		btnSubmit.style.opacity = isEmpty ? "0.7" : "1.0";
		btnCancel.style.opacity = isEmpty ? "0.7" : "1.0";
	}

	// User Comment Input (User Adds Comment)
	commentInput.addEventListener("input", updateButtons)

	// Remove Input Value of User Comment if Submitted (Mock Submitted Effect)
	btnSubmit.addEventListener("click", () => {
		// Append User Comment when Submitted
		const commentSection = document.querySelector(".comment__section-others"); 	// Comment Section
		const commentContainer = document.querySelector("comment__section-other");  // Comment Container

		// Users Account Information
		const username = document.querySelector('.profile__name');
		const userProfileImage = document.querySelector('.profile__image');	A

		// Get User Comment Value to be appended
		const userComment = commentInput.value;

		// Get Current Date
		const currentDate = new Date();

		// Formatted Current Date
		const options = {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}
		const formattedDate = Intl.DateTimeFormat("en-US", options);

		// Elements to be Appended
		const elementProfile = document.createElement("div");
		const elementComment = document.createElement("p");

		// Append User Comment to Comment Section
		
		
		// Add Delay Effect when Submitted
		setTimeout(() => {
			commentInput.value = "";
			updateButtons();
			commentInputContainer.removeChild(btnContainer);
		}, 50);
	});

	// Dynamic Total Comment Counter
	const totalComment = document.querySelector(".comment__total");	  // Container for the number of comments
	const comments = document.querySelectorAll(".comment__text"); 	  // Comments to be counted

	totalComment.textContent = comments.length;
});
