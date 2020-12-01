import { formatDate } from "../utils/formatDate";

class JobDescriptionBody {
	topTextSection() {
		const createdAt = document.createElement("span");
		createdAt.setAttribute("id", "desc-created-at");
		createdAt.textContent = this.created_at;

		const jobType = document.createElement("span");
		createdAt.setAttribute("id", "desc-job-type");
		jobType.textContent = this.job_type;

		const period = document.createElement("span");
		period.setAttribute("id", "period");
		period.textContent = "•";

		const topText = document.createElement("p");
		topText.setAttribute("id", "top-text");

		topText.append(createdAt);
		topText.append(period);
		topText.append(jobType);

		return topText;
	}

	bottomSection() {
		const title = document.createElement("h3");
		title.setAttribute("id", "job-title");
		title.textContent = this.title;

		const location = document.createElement("p");
		location.setAttribute("id", "job-location");
		location.textContent = this.location;

		return [title, location];
	}
	bodyHeader() {
		const bodyHeaderWRapper = document.createElement("section");
		bodyHeaderWRapper.setAttribute("id", "modal-desc-body-header");
		bodyHeaderWRapper.appendChild(this.topTextSection());
		bodyHeaderWRapper.appendChild(this.bottomSection()[0]);
		bodyHeaderWRapper.appendChild(this.bottomSection()[1]);

		return bodyHeaderWRapper;
	}

	/**
	 *
	 * @param {*} created_at  Created at
	 * @param {*} job_type type
	 * @param {*} location location
	 * @param {*} title title
	 */
	render(
		created_at = null,
		job_type = null,
		location = null,
		title = null,
		descriptionInnerHTML = "",
		url
	) {
		this.created_at = formatDate(created_at);
		this.job_type = job_type;
		this.location = location;
		this.title = title;

		// Apply now button
		const applyNow = document.createElement("button");
		applyNow.innerHTML = `<a href='${url}'> Apply Now</a>`;
		applyNow.setAttribute("id", "apply-now");

		// Append text and header to the modal body
		const modal = document.querySelector(".modal-body");
		modal.textContent = "";
		modal.append(this.bodyHeader());
		modal.append(applyNow);

		// Wrapp all the inner html from the call in a section
		const description = document.createElement("section");
		description.setAttribute("id", "desc-body-html");

		description.innerHTML = descriptionInnerHTML;

		// Append description to the modal body
		modal.appendChild(description);
	}
}

export default JobDescriptionBody;
