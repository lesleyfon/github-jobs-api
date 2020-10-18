const Header = require("./main/Header.js");

// RUn function on page load
(function () {
	const header = new Header();
	header.buildHeader();
})();

// if (process.env.NODE_ENV === "development") {
// 	main();
// }
