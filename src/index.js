const Header = require("./main/Header.js");
const Main = require("./main/Main.js");
require("bootstrap");
import "./sass/main.scss";
import { fetchJobsData } from "./utils/fetchJobsUtils";

// Run function on page load
(async function () {
	// fetches the jobs data
	let data = await fetchJobsData();

	// HEader Component
	const header = new Header();
	header.buildHeader();

	// Body Component
	const main = new Main(data);
	main.renderMain();
})();
