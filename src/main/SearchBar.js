class SearchBar {
	constructor() {}

	searchInputField() {
		return `
		<label id="search-input-field-label">
			<span id="search-input-field-svg"></span>
			<input id="search-text-field" type="text" placeholder="Filter by title...">
		</label>
	`;
	}
	filter() {
		return `
			<label id = "filter-location-field-label">
				<span id="filter-location-svg-span"></span>
				<input id="filter-input-field" type="text" placeholder="Filter by location...">
			</label>
	`;
	}

	submitButton() {
		const submitButton = `
			<label id ="submit-button-label">
				<span id="submit-svg"></span>
				<input id="submit-field" type="submit" placeholder="Search">
			</label>
		`;
		return submitButton;
	}
	createForm() {
		const form = document.createElement("form");

		form.setAttribute("id", "form_id");

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			console.log("hello");
		});
		return `<form>
			${this.searchInputField()}
			${this.filter()}
			${this.submitButton()}
		</form>`;
	}

	renderSearchBar() {
		const section = document.createElement("section");
		section.className = "search-bar-section";
		section.innerHTML = this.createForm();

		return section;
	}
}

module.exports = SearchBar;
