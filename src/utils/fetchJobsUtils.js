import { data } from "../main/data";

// Fetch Data utils
export const fetchJobsData = async () => {
	try {
		let result = await fetch(
			"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
		);
		result = await result.json();

		return result;
	} catch (error) {
		// throw new Error(error);
		// Fix this and return an error
		return data;
	}
};
