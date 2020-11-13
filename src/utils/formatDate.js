export function formatDate(dateString) {
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
