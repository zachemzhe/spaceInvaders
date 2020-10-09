import { runInThisContext } from 'vm';
import './starfield.scss'

function Starfield() {
	this.fps = 1;
	this.canvas = null;
	this.width = 0;
	this.height = 0;
	this.minVelocity = 15;
	this.maxVelocity = 30;
	this.stars = 300;
	this.intervalId = 0;
	this.planets = 3;
	this.planetVelocity = 10;
}

Starfield.prototype.initialise = function (div) {

	let self = this;

	this.containerDiv = div;
	self.width = window.innerWidth;
	self.height = window.innerHeight;

	window.addEventListener('resize', function resize(event) {
		self.width = window.innerWidth;
		self.height = window.innerHeight;
		self.canvas.width = self.width;
		self.canvas.height = self.height;
		self.draw();
	})

	// Create the canvas
	let canvas = document.createElement('canvas');
	div.appendChild(canvas);
	this.canvas = canvas;
	this.canvas.width = this.width;
	this.canvas.height = this.height;
}


Starfield.prototype.start = function () {

	let stars = [];
	for (let i = 0; i < this.stars; i++) {
		stars[i] = new Star(Math.random() * this.width, Math.random() * this.height,
			Math.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
	}
	this.stars = stars;

	let planets = [];
	for (let i = 0; i < this.planets; i++) {
		planets[i] = new Planet(Math.random() * this.width, Math.random() * this.height,
			Math.random() * 50 + 10, 0, 2 * Math.PI, this.planetVelocity);
	}
	this.planets = planets;

	let self = this;
	// timer
	this.intervalId = setInterval(function () {
		self.update();
		self.draw();
	}, 1000 / this.fps);
}

Starfield.prototype.update = function () {
	let dt = 1 / this.fps;
	for (let i = 0; i < this.stars.length; i++) {
		let star = this.stars[i];
		star.y += dt * star.velocity;
		// from bottom to top
		if (star.y > this.height) {
			this.stars[i] = new Star(Math.random() * this.width, 0,
				Math.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
		}
	}
	for (let j = 0; j < this.planets.length; j++) {
		let planet = this.planets[j];
		planet.y += dt * planet.velocity;
		// from bottom to top
		if (planet.y > this.height) {
			this.planets[j] = new Planet(Math.random() * this.width, 0,
				Math.random() * 50 + 10, 0, 2 * Math.PI, this.planetVelocity);
		}
	}
}


Starfield.prototype.draw = function () {

	let context = this.canvas.getContext('2d');

	//bg
	context.fillStyle = '#000';
	context.fillRect(0, 0, this.width, this.height);

	//stars
	context.fillStyle = '#fff';
	for (let i = 0; i < this.stars.length; i++) {
		let star = this.stars[i];
		context.fillRect(star.x, star.y, star.size, star.size);
	}

	function randColor() {
		return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
	}

	for (let i = 0; i < this.planets.length; i++) {
		let planet = this.planets[i];
		let randX = [planet.x, planet.x + planet.radius];
		let randY = [planet.y, planet.y + planet.radius];
		let randomX = randX[Math.floor(Math.random() * randX.length)];
		let randomY = randY[Math.floor(Math.random() * randY.length)];
		let gradient = context.createLinearGradient(planet.x, planet.y, randomX, randomY);
		gradient.addColorStop(0, randColor());
		gradient.addColorStop(0.5, randColor());
		// gradient.addColorStop(0.51, randColor());
		// gradient.addColorStop(1, randColor());
		context.fillStyle = gradient;
		context.beginPath();
		context.arc(planet.x, planet.y,
			planet.radius, planet.startAngle, planet.endAngle);
		context.fill();
	}
}

function Star(x, y, size, velocity) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.velocity = velocity;
}

function Planet(x, y, radius, startAngle, endAngle, velocity) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.velocity = velocity;
}


let container = document.querySelector('.container');
let starfield = new Starfield();
starfield.initialise(container);
starfield.start();