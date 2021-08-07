function handleHashChange()
{
	try {
		const week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
		const day = location.hash.slice(1);
		const schedule = document.querySelector(".schedule");

		schedule.className = week.includes(day)
			? `schedule ${day}`
			: "schedule";
	} catch (e) {
		console.error(e);
	}
}


document.addEventListener("DOMContentLoaded", handleHashChange);
window.addEventListener("hashchange", handleHashChange, false);
