const { data } = require("./../main/data.js");

class JobList {
	constructor() {
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
                <div class='job-logo' style= '
                background-image: url(${logo ? logo : this.imagePlaceHolder});
                '>
                </div>
                <p> 
                    <span> ${this.formatDate(jobListing.created_at)} </span> 
                    • 
                    <span>${jobListing.type}</span>    
                </p>
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
