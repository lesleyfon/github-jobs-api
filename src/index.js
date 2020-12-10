const Header = require("./main/Header.js");
const Main = require("./main/Main.js");
require("bootstrap");
import "./sass/main.scss";
import { fetchJobsData } from "./utils/fetchJobsUtils";

// Run function on page load
(async function () {
	// HEader Component
	const header = new Header();
	header.buildHeader();

	// Query loader to set display loader when data fetching is still on pending state
	const loaderSpinnerContainer = document.querySelector(".loader-container");
	loaderSpinnerContainer.style.display = "block";

	// fetches the jobs data
	let data = await fetchJobsData();

	// Body Component
	const main = new Main(data);

	// Set loader container to display none
	loaderSpinnerContainer.style.display = "none";
	main.renderMain();
})();
