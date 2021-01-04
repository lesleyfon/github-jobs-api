class SearchBar {
	constructor() {}

	/**
	 *
	 * @param {string} elementName Name of HTML tag
	 * @returns {HTMLElement} returns a html element
	 */
	createElement(elementName) {
		const elem = document.createElement(elementName);
		return elem;
	}
	searchInputField() {
		const searchLabel = this.createElement("label");
		searchLabel.setAttribute("id", "search-input-field-label");

		// Span
		const span = this.createElement("span");
		span.setAttribute("id", "search-input-field-svg");

		// Input element
		const input = this.createElement("input");
		input.placeholder = "Filter by title...";
		input.disabled = true;
		input.type = "text";

		// appending child elements
		searchLabel.append(span);
		searchLabel.append(input);

		return searchLabel;
	}
	filter() {
		const filterLabel = this.createElement("label");
		filterLabel.setAttribute("id", "filter-location-field-label");

		// Span
		const span = this.createElement("span");
		span.setAttribute("id", "filter-location-svg-span");

		// Input element
		const input = this.createElement("input");
		input.setAttribute("id", "filter-input-field");
		input.placeholder = "Filter by location...";
		input.disabled = true;
		input.type = "text";

		// appending child elements
		filterLabel.append(span);
		filterLabel.append(input);

		return filterLabel;
	}

	submitButton() {
		const btnLabel = this.createElement("label");
		btnLabel.setAttribute("id", "submit-button-label");

		const span = this.createElement("span");
		span.setAttribute("id", "submit-svg");

		const input = this.createElement("input");
		input.setAttribute("id", "submit-field");
		input.placeholder = "Search";

		input.disabled = true;
		input.type = "submit";

		btnLabel.append(span);
		btnLabel.append(input);

		return btnLabel;
	}

	createForm() {
		const form = document.createElement("form");

		form.setAttribute("id", "form_id");

		// appending child elements to form field
		form.appendChild(this.searchInputField());
		form.appendChild(this.filter());
		form.appendChild(this.submitButton());
		return form;
	}

	/**
	 * @returns {HTMLElement} returns section
	 */
	renderSearchBar() {
		const section = this.createElement("section");
		section.className = "search-bar-section";

		// Form
		section.append(this.createForm());
		return section;
	}
}

module.exports = SearchBar;
