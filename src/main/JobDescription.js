import { data } from "./data";

class JobDescription {
	clickHandler() {
		const jobCards = document.querySelectorAll(".job-card");

		const $self = this;
		let currentElementId = null;
		jobCards.forEach((element) => {
			element.addEventListener("click", function (event) {
				currentElementId = event.target.dataset["id"];
				let currentJobDescription = data.find(
					(jobDescData) => jobDescData.id === currentElementId
				);
				console.log(currentJobDescription);
				const { company, company_logo, company_url } = currentJobDescription;
				$self.renderDescriptionHeader(company, company_url, company_logo);
			});
		});
	}

	renderDescriptionHeader(companyName, companyUrl, companyLogo) {
		const modalHeader = document.querySelector(".modal-header");

		// Append the header to the description Modal
		modalHeader.append(this.headerDescComponent(companyLogo));
	}
	//
	headerDescComponent(companyLogo) {
		const headerDiv = document.createElement("div");
		// Header div  attrs
		headerDiv.setAttribute("id", "job-desc-image-wrapper");

		const headerLogo = document.createElement("img");
		headerLogo.src = companyLogo;
		// Append Image to the div
		headerDiv.append(headerLogo);
		return headerDiv;
	}
}

export default JobDescription;
