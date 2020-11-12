import { data } from "./data";

class JobDescription {
	clickHandler() {
		const jobCards = document.querySelectorAll(".job-card");

		let currentElementId = null;
		jobCards.forEach((element) => {
			element.addEventListener("click", function (event) {
				currentElementId = event.target.dataset["id"];
				let currentJobDescription = data.find(
					(jobDescData) => jobDescData.id === currentElementId
				);
				console.log(currentJobDescription);
			});
		});
	}
}

export default JobDescription;
