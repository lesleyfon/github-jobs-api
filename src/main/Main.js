const SearchBar = require("./SearchBar.js");

class Main {
	constructor() {
		this.searchBar = new SearchBar();
	}
	renderMain() {
		const mainBody = document.getElementById("wrapper");
		mainBody.appendChild(this.searchBar.renderSearchBar());
	}
}

module.exports = Main;
