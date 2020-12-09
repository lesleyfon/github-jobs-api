const { default: JobDescription } = require("./JobDescription.js");
const { default: JobList } = require("./JobList.js");
const { data: d } = require(`./../main/data.js`);
const SearchBar = require("./SearchBar.js");

class Main {
	constructor(data = d) {
		// Search Bar Component
		this.searchBar = new SearchBar();

		// List Of job  cards
		this.jobList = new JobList(data);
		this.jobDescription = new JobDescription(data);
	}
	renderMain() {
		const mainBody = document.getElementById("wrapper");
		mainBody.appendChild(this.searchBar.renderSearchBar());
		mainBody.appendChild(this.jobList.render());
		this.jobDescription.clickHandler();
	}
}

module.exports = Main;
