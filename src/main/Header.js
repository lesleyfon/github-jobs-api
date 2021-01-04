class Header {
	/**
	 *
	 * @param {string} elementName HTML element tag name
	 *  @returns { HTMLElement } HTML ELEMENT
	 */
	createElement(elementName) {
		const elem = document.createElement(elementName);
		return elem;
	}
	addLogo() {
		const logoContainer = this.createElement("div");
		logoContainer.setAttribute("id", "id_logo");
		// `<div id="id_logo"></div>`;
		return logoContainer;
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
	render() {
		const header = document.getElementById("id_header");

		const headerWrapper = this.createElement("div");
		headerWrapper.setAttribute("id", "logo-theme-container");
		headerWrapper.appendChild(this.addLogo());
		headerWrapper.innerHTML += this.themeContainer();
		header.appendChild(headerWrapper);
		return header;
	}
}
module.exports = Header;
