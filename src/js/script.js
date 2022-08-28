const formPages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currentstep = 1;

const handelNextBtn = () => {
	currentstep++;
	if (currentstep > steps.length) {
		currentstep = steps.length;
	}
	handelProgressBar();
};
const handelPrevBtn = () => {
	currentstep--;
	if (currentstep < 1) {
		currentstep = 1;
	}
	handelProgressBar();
};

const handelProgressBar = () => {
	steps.forEach((step, index) => {
		if (index < currentstep) {
			step.classList.add('active-step');
		} else {
			step.classList.remove('active-step');
		}
	});

	const activeSteps = document.querySelectorAll('.active-step');
	console.log(activeSteps.length);
	progressBar.style.width =
		((activeSteps.length - 1) / (steps.length - 1)) * 100 + '%';
	disabled();
	handelFormPage();
};

const disabled = () => {
	if (currentstep === 1) {
		prevBtn.disabled = true;
	} else if (currentstep === steps.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}
};

const handelFormPage = () => {
	formPages.forEach((page) => {
		if (currentstep == page.dataset.number) {
			page.classList.add('active-page');
		} else {
			page.classList.remove('active-page');
		}
	});
};

nextBtn.addEventListener('click', handelNextBtn);
prevBtn.addEventListener('click', handelPrevBtn);
