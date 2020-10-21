class SearchBar {
	constructor() {
		this.hello = "this.hello";
	}

	searchInputField() {
		const searchField = document.createElement("input");
		searchField.setAttribute("id", "search-text-field");
		searchField.type = "text";
		searchField.placeholder = "Filter by title...";

		return searchField;
	}
	filter() {
		const filterInputField = document.createElement("input");
		filterInputField.setAttribute("id", "filter-field");
		filterInputField.type = "text";
		filterInputField.placeholder = "filter by E.X location";

		return filterInputField;
	}

	submitButton() {
		const submitButton = document.createElement("input");
		submitButton.setAttribute("id", "submit-field");
		submitButton.type = "submit";
		return submitButton;
	}
	createForm() {
		const form = document.createElement("form");

		form.setAttribute("id", "form_id");
		form.appendChild(this.searchInputField());
		form.appendChild(this.filter());
		form.appendChild(this.submitButton());

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			console.log("hello");
		});
		return form;
	}

	renderSearchBar() {
		const section = document.createElement("section");
		section.className = "search-bar-section";

		section.appendChild(this.createForm());

		return section;
	}
}

module.exports = SearchBar;
