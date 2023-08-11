const lines = [];

function validateEmail(email) {
	return email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

function registerMail() {
	const email = document.getElementById('email').value;
	if (!validateEmail(email)) {
		document.getElementById('error').classList.remove('hidden');
		return;
	}
	document.getElementById('submit').innerHTML = 'loading...';
	fetch(`https://api.leem.it/v0/register?email=${email}`).then((res) => {
		document.getElementById('error').classList.add('hidden');
		document.getElementById('form').classList.add('hidden');
		document.getElementById('success').classList.remove('hidden');
	});
}

function init() {
	if (window.innerWidth < 767) return;
	const options = {
		endPlug: 'behind',
		path: 'straight',
		color: '#4a4a4a',
		size: 2,
	};
	lines.push(
		new LeaderLine(document.getElementById('center-image'), document.getElementById('time-tracking'), options)
	);
	lines.push(
		new LeaderLine(
			document.getElementById('center-image'),
			document.getElementById('students-freelancers'),
			options
		)
	);
	lines.push(new LeaderLine(document.getElementById('center-image'), document.getElementById('days'), options));
}

function resize() {
	if (window.innerWidth <= 767) {
		lines.forEach((element) => {
			element.hide();
		});
	} else {
		lines.forEach((element) => {
			element.show('none');
		});
	}
}
