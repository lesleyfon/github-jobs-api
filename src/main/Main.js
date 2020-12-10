const { default: JobDescription } = require("./JobDescription.js");
const { default: JobList } = require("./JobList.js");
const SearchBar = require("./SearchBar.js");

class Main {
	constructor(data) {
		// Search Bar Component
		this.searchBar = new SearchBar();
		this.lengthOfData = data.length;
		// List Of job  cards
		this.jobList = new JobList(data);
		this.jobDescription = new JobDescription(data);
	}
	renderMain() {
		const mainBody = document.getElementById("wrapper");

		// Cleans the body of the page before any render
		mainBody.innerHTML = "";

		// Renders the search bar
		mainBody.appendChild(this.searchBar.renderSearchBar());

		// Renders a list of job cards
		mainBody.appendChild(this.jobList.render());
		let $self = this;

		// This Logic to handle pagination by increasing the tabindex to load 10 more cards
		const loadMoreButton = document.getElementById("load-more");
		const loadLessButton = document.getElementById("load-less");

		// Load More
		loadMoreButton.addEventListener("click", () => {
			$self.jobList.tabIndex += 10;
			$self.renderMain();
		});
		// Load less
		loadLessButton.addEventListener("click", () => {
			if ($self.jobList.tabIndex <= 10) return;

			$self.jobList.tabIndex -= 10;
			$self.renderMain();
		});

		// Handles Displaying modal for a specific job listing
		this.jobDescription.clickHandler();
	}
}

module.exports = Main;
