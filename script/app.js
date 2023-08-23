function updateCountdown() {
	let dateActuel = new Date();
	/* console.log(dateActuel); */

	var targetDate = new Date("2023-09-24");

	// Calcul de la différence en millisecondes
	var timeDifference = targetDate - dateActuel;

	var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	var hoursDifference = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutesDifference = Math.floor(
		(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
	);
	var secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);
	/* 
	console.log("Différence en jours : " + daysDifference);
	console.log("Différence en heures : " + hoursDifference);
	console.log("Différence en minutes : " + minutesDifference);
	console.log("Différence en secondes : " + secondsDifference); */
	document.getElementById("days").textContent =
		daysDifference + (daysDifference !== 1 ? " Days" : " Day");
	document.getElementById("hours").textContent =
		hoursDifference + (hoursDifference !== 1 ? " Hours" : " Hour");
	document.getElementById("minutes").textContent =
		minutesDifference + (minutesDifference !== 1 ? " Minutes" : " Minute");
	document.getElementById("seconds").textContent =
		secondsDifference + (secondsDifference !== 1 ? " Seconds" : " Second");
}
updateCountdown(); // Appel initial pour éviter le délai initial
var countdownInterval = setInterval(updateCountdown, 1000);
