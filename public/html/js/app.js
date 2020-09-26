function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

function pageTransition() {
	var tl = gsap.timeline();
	tl.to(".loading-screen", {
		duration: 0.7,
		width: "100%",
		left: "0%",
		ease: "Expo.easeInOut"
	});

	tl.to(".loading-screen", {
		duration: 0.4,
		width: "100%",
		left: "100%",
		ease: "Expo.easeInOut",
		delay: 0.4
	});
	tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
	var tl = gsap.timeline();
	tl.from(".animate-this", {
		duration: 0.4,
		y: 50,
		opacity: 0,
		stagger: 0.2,
		delay: 0.1
	});
}

$(function () {
	barba.init({
		sync: true,
		transitions: [
			{
				async leave(data) {
					const done = this.async();

					pageTransition();
					await delay(1000);
					done();
				},

				async enter(data) {
					contentAnimation();
				},

				async once(data) {
					contentAnimation();
				}
			}
		]
	})
})



var Qeust = function() {
	this.init();
}

Qeust.prototype.init = function() {
	this.startPage = document.querySelector('#quest');
	this.startButton = document.querySelector('#startQuest');

	this.start();
	
	let quest = this;

	this.startButton.addEventListener('click', function(e) {
		e.preventDefault();
		quest.startPage.style.display = 'none';

		let configSelects = quest.startPage.querySelectorAll('.config');
		Array.prototype.forEach.call(configSelects, function(elem, i) {
			quest.config.push({'id': elem.getAttribute('name'), 'value': elem.value});
		});

		quest.getCard();
	});
	

	//this.form = document.querySelector('.calculator');
	//this.result = document.querySelector('.calculator-result');
	//this.errorBlock = this.form.querySelector('.calculator-error');
	//this.error = '';

	/*this.Summa();

	let calculator = this;

	

	let forInput = this.form.querySelectorAll('input');
	Array.prototype.forEach.call(forInput, function(elem, i) {
		elem.addEventListener('input', function(e) {
			calculator.Summa();
		});
	});*/
}
/*
Qeust.prototype.GetDays = function() {
}*/

Qeust.prototype.reCoin = function() {
	let coinDiv = document.querySelector('.balance');
	let balance = localStorage.getItem('parcoin');
	if(!!!balance) {
		localStorage.setItem('parcoin', 0);
		balance = 0;
	}
	coinDiv.innerHTML = balance +' ПК<span><svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="7.5" stroke="#802AD4" stroke-width="2"/><mask id="path-2-inside-1" fill="white"><path d="M12.1321 8.5C12.6114 8.5 13.0084 8.10789 12.9166 7.63744C12.7926 7.00283 12.5327 6.39891 12.1506 5.86884C11.5984 5.10266 10.8191 4.52964 9.92312 4.23096C9.02714 3.93227 8.05989 3.92307 7.15839 4.20464C6.25689 4.48622 5.46683 5.0443 4.90012 5.79984C4.33341 6.55538 4.01879 7.47007 4.00082 8.41435C3.98284 9.35864 4.26242 10.2846 4.79996 11.0612C5.33751 11.8378 6.10575 12.4255 6.99589 12.7412C7.6117 12.9596 8.26425 13.0401 8.90819 12.9815C9.38554 12.938 9.65085 12.4471 9.51668 11.9869V11.9869C9.3825 11.5267 8.89542 11.2774 8.4163 11.2629C8.13147 11.2543 7.84794 11.2016 7.57608 11.1052C7.0293 10.9113 6.5574 10.5503 6.22721 10.0732C5.89702 9.59624 5.72528 9.02743 5.73632 8.44739C5.74736 7.86735 5.94062 7.30549 6.28873 6.84139C6.63684 6.3773 7.12214 6.03449 7.6759 5.86153C8.22966 5.68856 8.8238 5.69422 9.37417 5.87769C9.92454 6.06116 10.4032 6.41314 10.7424 6.88378C10.9111 7.11779 11.041 7.37523 11.129 7.64627C11.2771 8.10217 11.6528 8.5 12.1321 8.5V8.5Z"/></mask><path d="M12.1321 8.5C12.6114 8.5 13.0084 8.10789 12.9166 7.63744C12.7926 7.00283 12.5327 6.39891 12.1506 5.86884C11.5984 5.10266 10.8191 4.52964 9.92312 4.23096C9.02714 3.93227 8.05989 3.92307 7.15839 4.20464C6.25689 4.48622 5.46683 5.0443 4.90012 5.79984C4.33341 6.55538 4.01879 7.47007 4.00082 8.41435C3.98284 9.35864 4.26242 10.2846 4.79996 11.0612C5.33751 11.8378 6.10575 12.4255 6.99589 12.7412C7.6117 12.9596 8.26425 13.0401 8.90819 12.9815C9.38554 12.938 9.65085 12.4471 9.51668 11.9869V11.9869C9.3825 11.5267 8.89542 11.2774 8.4163 11.2629C8.13147 11.2543 7.84794 11.2016 7.57608 11.1052C7.0293 10.9113 6.5574 10.5503 6.22721 10.0732C5.89702 9.59624 5.72528 9.02743 5.73632 8.44739C5.74736 7.86735 5.94062 7.30549 6.28873 6.84139C6.63684 6.3773 7.12214 6.03449 7.6759 5.86153C8.22966 5.68856 8.8238 5.69422 9.37417 5.87769C9.92454 6.06116 10.4032 6.41314 10.7424 6.88378C10.9111 7.11779 11.041 7.37523 11.129 7.64627C11.2771 8.10217 11.6528 8.5 12.1321 8.5V8.5Z" stroke="#802AD4" stroke-width="4" mask="url(#path-2-inside-1)"/><mask id="path-3-inside-2" fill="white"><path d="M15.5 11C16.8797 11 18.2235 11.439 19.3371 12.2534C20.4507 13.0679 21.2763 14.2156 21.6944 15.5303C22.1125 16.8451 22.1013 18.2588 21.6626 19.5669C21.2239 20.8749 20.3804 22.0095 19.2541 22.8063C18.1278 23.6031 16.7772 24.0209 15.3977 23.9992C14.0182 23.9775 12.6814 23.5174 11.5808 22.6855C10.4801 21.8536 9.67271 20.6931 9.27538 19.3719C8.87805 18.0507 8.91143 16.6374 9.37067 15.3364L11.2694 16.0066C10.9524 16.9046 10.9294 17.8801 11.2036 18.7921C11.4778 19.704 12.0351 20.505 12.7948 21.0792C13.5545 21.6534 14.4772 21.9709 15.4294 21.9859C16.3816 22.0009 17.3138 21.7125 18.0912 21.1626C18.8686 20.6126 19.4508 19.8295 19.7536 18.9266C20.0564 18.0238 20.0641 17.048 19.7755 16.1405C19.487 15.233 18.9171 14.4408 18.1485 13.8787C17.3799 13.3165 16.4523 13.0135 15.5 13.0135L15.5 11Z"/></mask><path d="M15.5 11C16.8797 11 18.2235 11.439 19.3371 12.2534C20.4507 13.0679 21.2763 14.2156 21.6944 15.5303C22.1125 16.8451 22.1013 18.2588 21.6626 19.5669C21.2239 20.8749 20.3804 22.0095 19.2541 22.8063C18.1278 23.6031 16.7772 24.0209 15.3977 23.9992C14.0182 23.9775 12.6814 23.5174 11.5808 22.6855C10.4801 21.8536 9.67271 20.6931 9.27538 19.3719C8.87805 18.0507 8.91143 16.6374 9.37067 15.3364L11.2694 16.0066C10.9524 16.9046 10.9294 17.8801 11.2036 18.7921C11.4778 19.704 12.0351 20.505 12.7948 21.0792C13.5545 21.6534 14.4772 21.9709 15.4294 21.9859C16.3816 22.0009 17.3138 21.7125 18.0912 21.1626C18.8686 20.6126 19.4508 19.8295 19.7536 18.9266C20.0564 18.0238 20.0641 17.048 19.7755 16.1405C19.487 15.233 18.9171 14.4408 18.1485 13.8787C17.3799 13.3165 16.4523 13.0135 15.5 13.0135L15.5 11Z" stroke="#802AD4" stroke-width="4" mask="url(#path-3-inside-2)"/></svg></span>';
}
Qeust.prototype.start = function() {
	this.reCoin();
	this.startPage.nextSibling.remove();
	this.startPage.style.display = 'block';
	this.config = [];	
	let items = {};
	localStorage.setItem('items', JSON.stringify(items));
	localStorage.setItem('itemsContent', JSON.stringify(items));
}
Qeust.prototype.getCard = function() {
	let ids = JSON.parse(localStorage.getItem("items"));	
	var xhr = new XMLHttpRequest;
    xhr.open('POST', '/api/list_quest', true);
    xhr.setRequestHeader('Content-type', 'application/json');        
    xhr.onreadystatechange = function() { 
        if(xhr.readyState == 4 && xhr.status == 200) {  
            var response =  JSON.parse(xhr.responseText);
        }
    }   
    xhr.send(JSON.stringify({conf: this.config, cards: ids}));
}


new Qeust();
