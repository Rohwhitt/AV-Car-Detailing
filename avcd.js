//function for responsive navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active-menu')
})

//function for services modal
function s1(){
	swal.fire({
		title: 'Full Detail (Pre-Sale)',
		html: 'From $225 <br> <br> (Please note, if paint is in poor condition, heavily contaminated with industiral or enviromental fallout an extra cleaning charge will be quoted upon viewing) <br> <br> <b>Outside</b> - Clean vehicle paint and apply quality wax polish by hand, clean rims and tyres, clean wheel arches, clean engine bay, dress all plastics and tyres<br> <br> <b>Inside</b> - Vacuum seats, carpets and boot then shampoo seats/carpets, clean dash, steering wheel, console and all trim, dress trim, clean door shuts and rubbers, spot clean roof lining and visors, clean inside of windows and deodorise. Leather seats are cleaned and rejuvenated with quality leather conditioner.',
		showCloseButton: true,
		footer: 'Cleaning Duration:</b> Allow 4-6 hours'
	});
}

function s2(){
	swal.fire({
		title: 'Hand Polish Detail',
		html: 'From $125 <br> <br> (Please note, if paint is in poor condition, heavily contaminated with industiral or enviromental fallout an extra cleaning charge will be quoted upon viewing) <br> <br>  <b>Outside</b> - Clean vehicle paint and apply quality wax polish by hand, clean rims and tyres, wheel arches, dress tyres. <br> <br> <b>Inside</b> - Vacuum seats, carpets and boot. Clean dash, steering wheel, console and trim. Clean door shuts, clean inside of windows and deodorise',
		showCloseButton: true,
		footer: 'Cleaning Duration:</b> Allow 2-3 hours'
	});
}

function s3(){
	swal.fire({
		title: 'Mini Detail',
		html: 'From $65 <br> <br> <b>Outside</b> - Wash and chamois dry, clean rims and tyres, dress tyres.<br> <br> <b>Inside</b> - Vacuum seats, carpets and boot. Clean dash and console, dry door shuts, clean inside of windows and deodorise.',
		showCloseButton: true,
		footer: 'Cleaning Duration:</b> Allow 1-2 hours'
	});
}

function s4(){
	swal.fire({
		title: 'Interior Detail',
		html: 'From $225 <br> <br> <b>Inside</b> - Vacuum seats, carpets and boot then shampoo seats/carpets, clean dash, steering wheel, console and all trim, dress trim, clean door shuts and rubbers, spot clean roof lining and visors, clean inside of windows and deodorise. Leather seats are cleaned and rejuvenated with quality leather conditioner.',
		showCloseButton: true,
		footer: 'Cleaning Duration:</b> Allow 4-6 hours'
	});
}

function s5(){
	swal.fire({
		title: 'Leather Cleaning',
		html: 'From $65 <br> <br> Deep clean leather and rejuvenate with quality leather moisturiser.',
		showCloseButton: true,
		footer: ''
	});
}

function s6(){
	swal.fire({
		title: 'Ceramic Paint Protection',
		html: 'From $600 <br> <br> Please ring for a quote. Packages start from $600 based on small-medium sized car in near new condition requiring no paint correction. Product will last up to 3-5 years depending on your regular vehicle maintenance regime.',
		showCloseButton: true,
		footer: ''
	});
}

function s7(){
	swal.fire({
		title: 'Machine Polish and Paint Correction',
		html: 'From $300 <br> <br> This package will remove minor swirls and scratches. If paint requires more correction due to deeper repairable scratches, a quote can be arranged by appointment.',
		showCloseButton: true,
		footer: 'Cleaning Duration:</b> Allow 6-8 hours'
	});
}

//function for image gallery popup
$(".gallery").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled: true
	}
});
