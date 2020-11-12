const { default: JobDescription } = require("./JobDescription.js");
const { default: JobList } = require("./JobList.js");
const SearchBar = require("./SearchBar.js");

class Main {
	constructor() {
		this.searchBar = new SearchBar();
		this.jobList = new JobList();
		this.jobDescription = new JobDescription();
	}
	renderMain() {
		const mainBody = document.getElementById("wrapper");
		mainBody.appendChild(this.searchBar.renderSearchBar());
		mainBody.appendChild(this.jobList.render());
		this.jobDescription.clickHandler();
	}
}

module.exports = Main;
