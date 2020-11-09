const Header = require("./main/Header.js");
const Main = require("./main/Main.js");
import "./sass/main.scss";
// RUn function on page load
(function () {
	const header = new Header();
	header.buildHeader();

	const main = new Main();
	main.renderMain();
})();
