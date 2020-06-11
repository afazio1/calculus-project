// Game Constants //

let grade = 100;
let slideNumber = 0;


let slide1 = {
	image: "images/1.png",
	text: "Welcome! This is Jimonthee and he just enrolled in a very Cool class called AP Calculus AB! Jimonthee is a little scared because he has heard AP Calculus is very difficult. Jimonthee needs you to help him learn calculus so he can get a 5 on the AP test. Will you help him?",
	width: 960,
	height: 540,
	answerChoices: ["Yes"],
	correctAnswer: 0
};
let slide2 = {
	image: "images/2.png",
	text: "The first day of class Jimonthee learns about limits. The teacher asks him, “What is the value of a limit when the function approaches different values from the left and right?” Jimonthee responds with…",
	width: 960,
	height: 540,
	answerChoices: ["0", "1", "DNE"],
	correctAnswer: 2
}
let slide3 = {
	image: "images/3.png",
	text: "The next unit Jimonthee is learning derivatives. His teacher explains that a particle’s velocity is just the derivative of its position. So his classmate asks him, “If the position of a particle is modeled by the function sin(2x), then what equation would model it’s velocity?” Jimonthee responds with…",
	width: 960,
	height: 540,
	answerChoices: ["cos(2x)", "2cos(2x)", "2cos(x)"],
	correctAnswer: 1
}
let slide4 = {
	image: "images/4.png",
	text: "Well, if Jimonthee’s going to learn about derivatives he mine as well learn about increasing/decreasing functions and concavity. Jimonthee learns that for a function to be concave up on a specific interval... ",
	width: 960,
	height: 540,
	answerChoices: ["the derivative must be increasing", "the second derivative must be decreasing", "the second derivative must be increasing", "A and C"],
	correctAnswer: 3
}
let slide5 = {
	image: "images/5.png",
	text: "Jimonthee is feeling pretty confident about his knowledge of Calculus and he thinks he’s just about ready for anything. The unfortunate thing is, integrals exist. ",
	width: 960,
	height: 540,
	answerChoices: null,
	correctAnswer: null
}
let slide6 = {
	image: "images/6.png",
	text: "The first thing that Jimonthee needs to learn before he can move onto integrals is anti-derivatives. Jimonthee solves for the anti-derivative of 2x and gets x^2. Is he correct?",
	width: 960,
	height: 540,
	answerChoices: ["Yes", "No"],
	correctAnswer: 1
}
let slide7 = {
	image: "images/7.png",
	text: "His teacher explains that integrals are very similar to anti-derivatives. It’s like taking a derivative, but reversed. Jimontheé asks, “What do integrals measure?”",
	width: 960,
	height: 540,
	answerChoices: ["The value of a curve", "The area under a curve", "The volume under a curve"],
	correctAnswer: 1
}
let slide8 = {
	image: "images/8.png",
	text: "“Ok so if we can find the area under a curve, then can we find the volume?” Jimonthee questions. “Good thinking Jimonthee! We can actually revolve the curve around an axis to find the volume of a solid,” his teacher explains. What’s the formula for this?",
	width: 960,
	height: 540,
	answerChoices: ["images/8a.png", "images/8b.png", "images/8c.png"], 
	correctAnswer: 0
}
let slide9 = {
	image: "images/9.png",
	text: "Oh my goodness! That year flew by so quickly! The AP exam is in a few weeks and Jimonthee needs to start studying. Let’s do a recap.",
	width: 960,
	height: 540,
	answerChoices: null,
	correctAnswer: null
}
let slide10 = {
	image: "images/10.png",
	text: "How would one derive 2x * cos(x)?",
	width: 960,
	height: 540,
	answerChoices: ["Quotient rule", "Product rule", "Chain rule"],
	correctAnswer: 1
}
let slide11 = {
	image: "images/10.png",
	text: "What is the integral of acceleration?",
	width: 960,
	height: 540,
	answerChoices: ["Speed", "Position", "Velocity"],
	correctAnswer: 2
}
let slide12 = {
	image: "images/11.png",
	text: "It’s the day of the AP test and Jimonthee is quite nervous. He studied a lot but he doesn’t know what sneaky tricks Collegebird will pull this time. ",
	width: 960,
	height: 540,
	answerChoices: null,
	correctAnswer: null
}


let book = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12];

 // Selected Elements //

let container = document.getElementById('container');
let description = document.getElementById('description');
let nextButton = document.getElementById('button');
let image = document.createElement('img');
let answerContainer = document.getElementById('choices');
let gradeContainer = document.getElementById('gradePoint');




window.onload = function() {
	gradeContainer.innerHTML = 100;
	container.append(image);
	displaySlide(slide1)

}

nextButton.onclick = function() {	
	slideNumber++;
	answerContainer.innerHTML = "";
	if (slideNumber === 12) {
		let slide13 = {
			image: "images/12.png",
			text: "",
			width: 960,
			height: 540,
			answerChoices: null,
			correctAnswer: null
		}
		slide13 = results(grade, slide13);
		displaySlide(slide13);
	}
	else {
		displaySlide(book[slideNumber]);
	}
	
}

function displaySlide(slide) {
	// set up text
	description.innerHTML = slide.text;

	// set up image
	image.src = slide.image;
	image.width = slide.width;
	image.height = slide.height;

	// set up answers
	if (slideNumber == 7) {
		slide.answerChoices.forEach(function(choice) {
			let span = document.createElement('img');
			span.src = choice;
			span.class = "special";
			answerContainer.append(span);
		});
	}
	else if (slide.answerChoices != null) {
		slide.answerChoices.forEach(function(choice) {
			let span = document.createElement('span');
			span.innerHTML = choice;

			answerContainer.append(span);
		});
	}
	
	clicks = 0;
	answerContainer.onclick = function(e) {
		if (clicks < 1 && slide.answerChoices != null) {
			if (slideNumber === 7) {
				src = e.target.src;
				src = src.substring(src.length - 13, src.length);
				console.log(src);
				console.log(slide.answerChoices[slide.correctAnswer]);

				if (src === slide.answerChoices[slide.correctAnswer]) {
					//grade = calculateGrade(grade, 5);
					//gradeContainer.innerHTML = grade;
					let span = document.createElement('span');
					span.innerHTML = "Correct!";
					answerContainer.append(span);
					clicks = 1;
				}
				else {
					grade = calculateGrade(grade, -5);
					gradeContainer.innerHTML = grade;
					let span = document.createElement('span');
					span.innerHTML = "Incorrect :(";
					answerContainer.append(span);
					clicks = 1;
				}
			}
			else if (e.target.innerHTML === slide.answerChoices[slide.correctAnswer]) {
				// correct
				//grade = calculateGrade(grade, 5);
				//gradeContainer.innerHTML = grade;
				e.target.innerHTML = "Correct!";
				clicks = 1;
			}
			else {
				// incorrect
				grade = calculateGrade(grade, -5);
				gradeContainer.innerHTML = grade;
				e.target.innerHTML = "Incorrect :(";
				clicks = 1;
			}
		}
	}
	
}

function calculateGrade(currentGrade, points) {
	if (points < 0) {
		currentGrade = currentGrade + points;
	}
	else if (points > 0 && currentGrade < 100) {
		currentGrade = currentGrade + points;
		if (currentGrade > 100) {
			currentGrade = 100;
		}
	}
	
	return currentGrade;
}

function results(currentGrade, slide) {
	if (currentGrade >= 95) {
		slide.text = "Congrats! Jimonthee got a 5 on his AP Calc Exam!!!";
	}
	else if (currentGrade >= 90) {
		slide.text = "Congrats! Jimonthee got a 4 on his AP Calc Exam!";
	}
	else if (currentGrade >= 80) {
		slide.text = "Congrats! Jimonthee got a 3 on his AP Calc Exam.";
	}
	else {
		slide.text = "Oh darn! Jimonthee did not pass his AP Calc Exam. I guess he'll have to take it in college!!";
	}
	return slide;
}
