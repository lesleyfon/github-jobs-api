import { data } from "./data";
import JobDescriptionBody from "./JobDescriptionBody";

class JobDescription {
	constructor() {
		this.modalBodyClass = new JobDescriptionBody();
	}
	clickHandler() {
		const jobCards = document.querySelectorAll(".job-logo");

		const $self = this;
		let currentElementId = null;

		// Handle Click event for Logos
		jobCards.forEach((element) => {
			element.addEventListener("click", function (event) {
				// Only display modal if user clicks on the logo
				currentElementId = event.target.dataset["id"];
				let currentJobDescription = data.find(
					(jobDescData) => jobDescData.id === currentElementId
				);
				const {
					company,
					company_logo,
					company_url,
					created_at,
					type,
					location,
					title,
					description,
					url,
				} = currentJobDescription;

				$self.renderDescriptionHeader(company, company_url, company_logo);
				$self.modalBodyClass.render(created_at, type, location, title, description, url);
			});
		});
	}

	renderDescriptionHeader(companyName, companyUrl, companyLogo) {
		const modalHeader = document.querySelector(".modal-header");
		modalHeader.innerHTML = "";
		// De-structure this call and get node elements
		const [companyNameElement, companySiteButton] = this.descriptionHeaderBody(
			companyName,
			companyUrl
		);
		// Append the header to the description Modal
		modalHeader.append(this.descriptionHeaderLogo(companyLogo));
		modalHeader.append(companyNameElement);
		modalHeader.append(companySiteButton);
	}

	// Job Description header Logo
	descriptionHeaderLogo(companyLogo) {
		const logoWrapper = document.createElement("div");
		// Header div  attrs
		logoWrapper.setAttribute("id", "job-desc-image-wrapper");
		logoWrapper.style.backgroundImage = `url("${companyLogo}")`;
		return logoWrapper;
	}

	// Job description header body
	descriptionHeaderBody(companyName, companyUrl) {
		// H2 Text element
		const companyNameElement = document.createElement("h2");
		companyNameElement.setAttribute("id", "companyName");
		companyNameElement.textContent = companyName;

		// Locations
		//  Button element
		const companySiteButton = document.createElement("button");
		companySiteButton.setAttribute("id", "company-site");

		const companySiteButtonAnchor = document.createElement("a");
		companySiteButtonAnchor.href = companyUrl;
		companySiteButton.appendChild(companySiteButtonAnchor);
		companySiteButtonAnchor.textContent = "Company Site";

		return [companyNameElement, companySiteButton];
	}
}

export default JobDescription;
