class Header {
	constructor() {}

	addLogo() {
		const logoDiv = document.createElement("div");
		logoDiv.setAttribute("id", "id_logo");
		return logoDiv;
	}
	buildHeader() {
		const header = document.getElementById("id_header");

		const logoThemeContainer = document.createElement("div");
		logoThemeContainer.setAttribute("id", "logo-theme-container");

		logoThemeContainer.appendChild(this.addLogo());
		logoThemeContainer.appendChild(this.themeContainer());

		header.appendChild(logoThemeContainer);
	}

	themeContainer() {
		const themeContainer = document.createElement("div");
		themeContainer.className = "theme-container";
		const themeLabel = `
				<div id="lightMode"></div>
				<label class="switch">
					<input type="checkbox" checked>
					<span class="slider round"></span>
				</label>
				<div id="darkMode"></div>
		`;

		themeContainer.innerHTML = themeLabel;

		return themeContainer;
	}
}
module.exports = Header;
