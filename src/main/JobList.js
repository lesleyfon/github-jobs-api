/**
 * Renders a list of all the job cards
 */
class JobList {
	constructor(data) {
		this.jobListings = [...data];
		this.imagePlaceHolder =
			"https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80";
	}

	formatDate(dateString) {
		`
            - Get todays date and save it to a variable
            - get the date from the date string and save it to the variable 
        
        `;

		const year = new Date().getFullYear() - new Date(dateString).getFullYear();
		const month = new Date().getMonth() - new Date(dateString).getMonth();
		let day = new Date().getDate() - new Date(dateString).getDate();
		dateString = "";

		if (year > 0) {
			dateString = `${year}yr(s)`;
		}
		if (month > 0) {
			dateString += ` ${month}mo`;
		}

		if (month === 0 && year === 0) {
			dateString = day >= 7 ? ` ${Math.floor(day / 7)}w` : day <= 0 ? `today` : `${day}d`;
		}
		return dateString;
	}
	jobCard() {
		let listingInnerHTML = "";
		this.jobListings.forEach((jobListing) => {
			let logo = jobListing.company_logo;
			listingInnerHTML += `
			<div class='job-card'>
				<div 
				class='job-logo' 
				style= '
                	background-image: url(${logo ? logo : this.imagePlaceHolder});
				'
				type="button"
				data-toggle="modal" 
				data-target="#descriptionModal"
				data-id ="${jobListing.id}"
				></div>
                <p class='created-at'> 
					<span> 
					${this.formatDate(jobListing.created_at)} 
					${this.formatDate(jobListing.created_at).includes("today") ? "" : "ago"}</span> 
                    • 
                    <span class='job-type'>${jobListing.type}</span>    
                </p>
                <h3 class='job-title'>${jobListing.title}</h3>
				<a class='company' href="${jobListing.company_url}" target='_blank' rel="noopener">
					<p>${jobListing.company}</p>
				</a>
				<p class="location"><span></span>${jobListing.location}</p>
        	</div>`;
		});

		return listingInnerHTML;
	}

	loadMoreButton() {
		let self = this;
		const loadButton = document.createElement("button");
		loadButton.setAttribute("id", "load-more");
		loadButton.textContent = "Load More";
		loadButton.addEventListener("click", () => {
			console.log("Hello");
		});

		return loadButton;
	}

	render() {
		const jobListSection = document.createElement("section");
		jobListSection.classList = "container";
		jobListSection.innerHTML = `
            <section class='job-list-card-wrapper'>
                ${this.jobCard()}
            </section>
		`;
		return jobListSection;
	}
}

export default JobList;
