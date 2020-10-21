class Header {
	constructor() {}

	addLogo() {
		return `<div id="id_logo"></div>`;
	}
	buildHeader() {
		const header = document.getElementById("id_header");

		const logoThemeContainer = `
		<div id="logo-theme-container">
			${this.addLogo()}
			${this.themeContainer()}
		</div>`;

		header.innerHTML = logoThemeContainer;
	}

	themeContainer() {
		const themeContainer = `
			<div class = "theme-container"> 
				<div id="lightMode"></div>
				<label class="switch">
					<input type="checkbox" checked>
					<span class="slider round"></span>
				</label>
				<div id="darkMode"></div>
		</div>`;

		return themeContainer;
	}
}
module.exports = Header;
