function handleHashChange()
{
	try {
		const week = ["monday", "tuesday", 'wednesday', "thursday", "friday"];
		const day = location.hash.slice(1);
		const schedule = document.querySelector(".schedule");

		if (week.includes(day)) {
			schedule.className = `schedule ${day}`;
		} else {
			schedule.className = "schedule";
		}
	} catch (e) {
		console.error(e);
	}
}
//function handleHashChange()
//{
//	try {
//		const week = ["monday", "tuesday", 'wednesday', "thursday", "friday"];
//		const day = location.hash.slice(1);
//
//		if (week.includes(day)) {
//			const lastStyleIndex = document.styleSheets.length - 1;
//			let sheet = document.styleSheets[lastStyleIndex];
//
//			if (lastStyleIndex == 0) {
//				const style = document.createElement("style");
//
//				document.head.appendChild(style);
//				style.appendChild(document.createTextNode(`
//					.day {
//						opacity: .2;
//					}
//				`));
//				sheet = style.sheet;
//			} else {
//					// remove any existing rule for making a particular day opaque
//				sheet.deleteRule(1);
//			}
//
//			sheet.insertRule(`
//				.day.${day} {
//					opacity: 1;
//				}
//			`, 1);
//		} else {
//			const styles = document.getElementsByTagName("style");
//			const count = styles.length;
//
//			if (count) {
//				styles[count - 1].remove();
//			}
//		}
//	} catch (e) {
//		console.error(e);
//	}
//}

window.addEventListener("hashchange", handleHashChange, false);
handleHashChange();
