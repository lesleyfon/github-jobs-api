const { data } = require("./../main/data.js");

class JobList {
	constructor() {
		this.jobListings = [...data];
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
			// <img src='${logo ? logo : "#"}' alt="company Logo">
			listingInnerHTML += `
                <div class='job-card'>
                    <div class='job-logo'>
                        

                    </div>
                    <p> 
                        <span> ${this.formatDate(jobListing.created_at)} </span> 
                        • 
                        <span>${jobListing.type}</span></p>
                    <h3>${jobListing.title}</h3>
                    <p>${jobListing.company}</p>
                    <p> ${jobListing.location}</p>
        </div>`;
		});

		return listingInnerHTML;
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
