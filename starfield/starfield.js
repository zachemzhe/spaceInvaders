import { runInThisContext } from 'vm';
import './starfield.scss'

function Starfield() {
	this.fps = 30;
	this.canvas = null;
	this.width = 0;
	this.height = 0;
	this.minVelocity = 15;
	this.maxVelocity = 15;
	this.stars = 100;
	this.intervalId = 0;
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

	let self = this;
	// timer
	this.intervalId = setInterval(function () {
		self.update();
		self.draw();
	}, 1000 / this.fps);
}

Starfield.prototype.update = function () {
	var dt = 1 / this.fps;
	for (let i = 0; i < this.stars.length; i++) {
		let star = this.stars[i];
		star.y += dt * star.velocity;
		// from bottom to top
		if (star.y > this.height) {
			this.stars[i] = new Star(Math.random() * this.width, 0,
				Math.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
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
}

function Star(x, y, size, velocity) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.velocity = velocity;
}

let container = document.querySelector('.container');
let starfield = new Starfield();
starfield.initialise(container);
starfield.start();