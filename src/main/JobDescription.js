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
		modalHeader.append(this.descriptionLogo(companyLogo));
	}
	//
	descriptionLogo(companyLogo) {
		const logoWrapper = document.createElement("div");
		// Header div  attrs
		logoWrapper.setAttribute("id", "job-desc-image-wrapper");

		const imageElement = document.createElement("img");
		imageElement.src = companyLogo;

		// Append Image to the div
		logoWrapper.append(imageElement);
		return logoWrapper;
	}
}

export default JobDescription;
