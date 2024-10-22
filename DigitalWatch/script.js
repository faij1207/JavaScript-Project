function updateTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	const timeString = `${hours}:${minutes}:${seconds}`;

	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const dateString = now.toLocaleDateString(undefined, options);

	document.getElementById('time').textContent = timeString;
	document.getElementById('date').textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime();