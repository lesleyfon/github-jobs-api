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
				$self.renderDescriptionHeader();
			});
		});
	}

	renderDescriptionHeader() {
		const modalHeader = document.querySelector(".modal-header");
		console.dir(modalHeader);
	}
}

export default JobDescription;
