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
}
Qeust.prototype.start = function() {
	this.reCoin();
	if(this.startPage.nextSibling)
		this.startPage.nextSibling.remove();
	this.startPage.style.display = 'block';
	this.config = [];	
	let items = {};
	localStorage.setItem('items', JSON.stringify(items));
	localStorage.setItem('itemsContent', JSON.stringify(items));
}
Qeust.prototype.reCoin = function() {
	let coinDiv = document.querySelector('.balance');
	let balance = localStorage.getItem('parcoin');
	if(!!!balance) {
		localStorage.setItem('parcoin', 0);
		balance = 0;
	}
	coinDiv.innerHTML = balance +' ПК<span><svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="7.5" stroke="#802AD4" stroke-width="2"/><mask id="path-2-inside-1" fill="white"><path d="M12.1321 8.5C12.6114 8.5 13.0084 8.10789 12.9166 7.63744C12.7926 7.00283 12.5327 6.39891 12.1506 5.86884C11.5984 5.10266 10.8191 4.52964 9.92312 4.23096C9.02714 3.93227 8.05989 3.92307 7.15839 4.20464C6.25689 4.48622 5.46683 5.0443 4.90012 5.79984C4.33341 6.55538 4.01879 7.47007 4.00082 8.41435C3.98284 9.35864 4.26242 10.2846 4.79996 11.0612C5.33751 11.8378 6.10575 12.4255 6.99589 12.7412C7.6117 12.9596 8.26425 13.0401 8.90819 12.9815C9.38554 12.938 9.65085 12.4471 9.51668 11.9869V11.9869C9.3825 11.5267 8.89542 11.2774 8.4163 11.2629C8.13147 11.2543 7.84794 11.2016 7.57608 11.1052C7.0293 10.9113 6.5574 10.5503 6.22721 10.0732C5.89702 9.59624 5.72528 9.02743 5.73632 8.44739C5.74736 7.86735 5.94062 7.30549 6.28873 6.84139C6.63684 6.3773 7.12214 6.03449 7.6759 5.86153C8.22966 5.68856 8.8238 5.69422 9.37417 5.87769C9.92454 6.06116 10.4032 6.41314 10.7424 6.88378C10.9111 7.11779 11.041 7.37523 11.129 7.64627C11.2771 8.10217 11.6528 8.5 12.1321 8.5V8.5Z"/></mask><path d="M12.1321 8.5C12.6114 8.5 13.0084 8.10789 12.9166 7.63744C12.7926 7.00283 12.5327 6.39891 12.1506 5.86884C11.5984 5.10266 10.8191 4.52964 9.92312 4.23096C9.02714 3.93227 8.05989 3.92307 7.15839 4.20464C6.25689 4.48622 5.46683 5.0443 4.90012 5.79984C4.33341 6.55538 4.01879 7.47007 4.00082 8.41435C3.98284 9.35864 4.26242 10.2846 4.79996 11.0612C5.33751 11.8378 6.10575 12.4255 6.99589 12.7412C7.6117 12.9596 8.26425 13.0401 8.90819 12.9815C9.38554 12.938 9.65085 12.4471 9.51668 11.9869V11.9869C9.3825 11.5267 8.89542 11.2774 8.4163 11.2629C8.13147 11.2543 7.84794 11.2016 7.57608 11.1052C7.0293 10.9113 6.5574 10.5503 6.22721 10.0732C5.89702 9.59624 5.72528 9.02743 5.73632 8.44739C5.74736 7.86735 5.94062 7.30549 6.28873 6.84139C6.63684 6.3773 7.12214 6.03449 7.6759 5.86153C8.22966 5.68856 8.8238 5.69422 9.37417 5.87769C9.92454 6.06116 10.4032 6.41314 10.7424 6.88378C10.9111 7.11779 11.041 7.37523 11.129 7.64627C11.2771 8.10217 11.6528 8.5 12.1321 8.5V8.5Z" stroke="#802AD4" stroke-width="4" mask="url(#path-2-inside-1)"/><mask id="path-3-inside-2" fill="white"><path d="M15.5 11C16.8797 11 18.2235 11.439 19.3371 12.2534C20.4507 13.0679 21.2763 14.2156 21.6944 15.5303C22.1125 16.8451 22.1013 18.2588 21.6626 19.5669C21.2239 20.8749 20.3804 22.0095 19.2541 22.8063C18.1278 23.6031 16.7772 24.0209 15.3977 23.9992C14.0182 23.9775 12.6814 23.5174 11.5808 22.6855C10.4801 21.8536 9.67271 20.6931 9.27538 19.3719C8.87805 18.0507 8.91143 16.6374 9.37067 15.3364L11.2694 16.0066C10.9524 16.9046 10.9294 17.8801 11.2036 18.7921C11.4778 19.704 12.0351 20.505 12.7948 21.0792C13.5545 21.6534 14.4772 21.9709 15.4294 21.9859C16.3816 22.0009 17.3138 21.7125 18.0912 21.1626C18.8686 20.6126 19.4508 19.8295 19.7536 18.9266C20.0564 18.0238 20.0641 17.048 19.7755 16.1405C19.487 15.233 18.9171 14.4408 18.1485 13.8787C17.3799 13.3165 16.4523 13.0135 15.5 13.0135L15.5 11Z"/></mask><path d="M15.5 11C16.8797 11 18.2235 11.439 19.3371 12.2534C20.4507 13.0679 21.2763 14.2156 21.6944 15.5303C22.1125 16.8451 22.1013 18.2588 21.6626 19.5669C21.2239 20.8749 20.3804 22.0095 19.2541 22.8063C18.1278 23.6031 16.7772 24.0209 15.3977 23.9992C14.0182 23.9775 12.6814 23.5174 11.5808 22.6855C10.4801 21.8536 9.67271 20.6931 9.27538 19.3719C8.87805 18.0507 8.91143 16.6374 9.37067 15.3364L11.2694 16.0066C10.9524 16.9046 10.9294 17.8801 11.2036 18.7921C11.4778 19.704 12.0351 20.505 12.7948 21.0792C13.5545 21.6534 14.4772 21.9709 15.4294 21.9859C16.3816 22.0009 17.3138 21.7125 18.0912 21.1626C18.8686 20.6126 19.4508 19.8295 19.7536 18.9266C20.0564 18.0238 20.0641 17.048 19.7755 16.1405C19.487 15.233 18.9171 14.4408 18.1485 13.8787C17.3799 13.3165 16.4523 13.0135 15.5 13.0135L15.5 11Z" stroke="#802AD4" stroke-width="4" mask="url(#path-3-inside-2)"/></svg></span>';
}
Qeust.prototype.getCard = function() {
	let quest = this;
	let ids = JSON.parse(localStorage.getItem("items"));	
	var xhr = new XMLHttpRequest;
    xhr.open('POST', '/api/list_quest', true);
    xhr.setRequestHeader('Content-type', 'application/json');        
    xhr.onreadystatechange = function() { 
        if(xhr.readyState == 4 && xhr.status == 200) {  
            var response =  JSON.parse(xhr.responseText);

            let itemsContent = JSON.parse(localStorage.getItem('itemsContent'));
            if(response.success) {
            	let items = JSON.parse(localStorage.getItem('items'));
            	items[Object.keys(items).length] = response.next_card.id;
            	localStorage.setItem('items', JSON.stringify(items));
            	
            	itemsContent[Object.keys(items).length] = response.next_card;
            	localStorage.setItem('itemsContent', JSON.stringify(itemsContent));
            	quest.createListCards(itemsContent);
            } else {
            	quest.closeQuest(itemsContent);
            }            
        }
    }   
    xhr.send(JSON.stringify({conf: this.config, cards: ids}));
}
Qeust.prototype.progress = function(countItems) {
	return '<div class="progress animate-this"><div class="progress-bar">\
		'+'<div class="progress-bar__item"><span class="done"></span></div>'.repeat(countItems - 1)+'\
		'+'<div class="progress-bar__item"><span class="during"></span></div>'.repeat(1)+'\
		'+'<div class="progress-bar__item"><span></span></div>'.repeat(6-countItems)+'\
		</div><a href="#" id="closeQuest" class="btn btn-red">Завершить квест</a></div>';
}
Qeust.prototype.createListCards = function(items) {
	let countItems = Object.keys(items).length,
		i, content = this.progress(countItems), active = true;
	for (i in items) {
		if(countItems == i ) {
			active = false;
		}
		content += '<div class="info-block '+(active?'block-active':'')+' animate-this">\
			<a href="#" class="btn-map">На карте</a><h1 class="carousel-name">'+items[i].name+'</h1><p class="carousel-subtitle">'+items[i].text+'</p>\
			<div class="specifications">\
				<div class="specifications-block">\
					<span>Сложность</span>\
					<div class="complexity-box '+(items[i].diff>2?'hard-':'medium-')+'complexity">\
						<div class="complexity-box__item">\
							<span></span>\
						</div>\
						<div class="complexity-box__item">\
							'+(items[i].diff>1?'<span></span>':'')+'\
						</div>\
						<div class="complexity-box__item">\
							'+(items[i].diff>2?'<span></span>':'')+'\
						</div>\
					</div>\
				</div>\
					<div class="specifications-block"><span>Продолжительность</span><span>'+items[i].timing+' мин</span></div>\
					<div class="specifications-block">\
						<span>Вознаграждение</span>\
						<span>'+items[i].parcoin+' ПК\
							<span><img src="/html/img/coin.svg" alt=""></span>\
						</span>\
					</div>\
				</div>\
			</div>';
	}
	this.name = items[i].name;
	this.id = items[i].id;
	this.parcoin = items[i].parcoin;
	content += '<a id="toQr" href="#" class="btn btn-green animate-this" >Отметиться<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 12.25V11.375H11.375V12.25H10.5Z" fill="white"/><path d="M7.875 10.5V9.625H8.75V10.5H7.875Z" fill="white"/><path d="M7.875 13.125H9.625V12.25H8.75V11.375H7.875V13.125Z" fill="white"/><path d="M11.375 11.375V9.625H12.25V11.375H11.375Z" fill="white"/><path d="M12.25 11.375H13.125V13.125H11.375V12.25H12.25V11.375Z" fill="white"/><path d="M11.375 8.75V7.875H13.125V9.625H12.25V8.75H11.375Z" fill="white"/><path d="M10.5 8.75H9.625V10.5H8.75V11.375H10.5V8.75Z" fill="white"/><path d="M7.875 8.75V7.875H9.625V8.75H7.875Z" fill="white"/><path d="M2.625 9.625H4.375V11.375H2.625V9.625Z" fill="white"/><path d="M6.125 13.125H0.875V7.875H6.125V13.125ZM1.75 12.25H5.25V8.75H1.75V12.25Z" fill="white"/><path d="M9.625 2.625H11.375V4.375H9.625V2.625Z" fill="white"/><path d="M13.125 6.125H7.875V0.875H13.125V6.125ZM8.75 5.25H12.25V1.75H8.75V5.25Z" fill="white"/><path d="M2.625 2.625H4.375V4.375H2.625V2.625Z" fill="white"/><path d="M6.125 6.125H0.875V0.875H6.125V6.125ZM1.75 5.25H5.25V1.75H1.75V5.25Z" fill="white"/></svg></a>';
	this.newPage(content);

	let quest = this;
	let toQRButton = document.querySelector('#toQr');
	toQRButton.addEventListener('click', function(e) {
		e.preventDefault();
		quest.toQR();
	});
	let toEndQuest = document.querySelector('#closeQuest');
	toEndQuest.addEventListener('click', function(e) {
		e.preventDefault();
		quest.closeQuest(JSON.parse(localStorage.getItem('itemsContent')), true);
	});
}
Qeust.prototype.toQR = function() {
	let balance = localStorage.getItem('parcoin');
	if(!!!balance) {
		balance = 0;
	}
	balance = parseInt(this.parcoin)+parseInt(balance);
	localStorage.setItem('parcoin', balance);

	var xhr = new XMLHttpRequest;
    xhr.open('POST', '/api/saveCard', true);
    xhr.setRequestHeader('Content-type', 'application/json');        
    xhr.onreadystatechange = function() { 
        if(xhr.readyState == 4 && xhr.status == 200) {  
            var response =  JSON.parse(xhr.responseText);
        }
    }   
    xhr.send(JSON.stringify({attr: this.id}));

	let i = 5; stars = '', svg = '<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0245 0.463524C18.1741 0.00286877 18.8259 0.00287003 18.9755 0.463525L22.9903 12.8197C23.0572 13.0257 23.2492 13.1652 23.4658 13.1652H36.4578C36.9422 13.1652 37.1436 13.785 36.7517 14.0697L26.241 21.7062C26.0657 21.8335 25.9924 22.0592 26.0593 22.2652L30.0741 34.6213C30.2237 35.082 29.6965 35.465 29.3046 35.1803L18.7939 27.5438C18.6186 27.4165 18.3814 27.4165 18.2061 27.5438L7.69535 35.1803C7.30349 35.465 6.77625 35.082 6.92593 34.6213L10.9407 22.2652C11.0076 22.0592 10.9343 21.8335 10.759 21.7062L0.24829 14.0697C-0.143567 13.785 0.0578217 13.1652 0.542183 13.1652H13.5342C13.7508 13.1652 13.9428 13.0257 14.0097 12.8197L18.0245 0.463524Z" fill="#DDDDDD"/></svg>';
	do {
		stars +='<input type="radio" name="rating" id="rating-'+i+'" value="'+i+'" '+(i==5?'checked':'')+'><label for="rating-'+i+'">'+svg+'</label>';
		i--;
	} while(i>0);
	let content = '<div class="rating"><h1 class="carousel-name animate-this">Аттракцион <span>«'+this.name+'»</span></h1><span class="animate-this">Оцените, пожалуйста, аттракцион</span>\
						<div class="rating-box animate-this">'+stars+'</div></div><a href="#" id="continueQuest" class="btn btn-green animate-this">Продолжить путь</a>\
						<div class="recommendation animate-this"><h2>«Перекус рядом»</h2><div class="recommendation-block"><div class="recommendation-box">\
								<p>Чебуреки по <span>79 ₽</span></p>\
								<a href="#" class="recommendation-btn">Подробнее</a>\
							</div>\
							<div class="recommendation-box"><img src="/html/img/recommendation-back.png" alt=""></div>\
						</div></div>';
	this.newPage(content);
	let quest = this;
	let toQRButton = document.querySelector('#continueQuest');
	toQRButton.addEventListener('click', function(e) {
		e.preventDefault();
		quest.continue();
	});
}
Qeust.prototype.continue = function() {
	let items = JSON.parse(localStorage.getItem('itemsContent'));
	if(Object.keys(items).length==6) {
		this.closeQuest(items);
	}
	else {
		this.getCard();
	}		
}
Qeust.prototype.closeQuest = function(items, handle = false) {
	if(this.startPage.nextSibling)
		this.startPage.nextSibling.remove();
	let i, summ = 0;
	for(i in items) {//бонусы за квест
		summ += parseInt(items[i].parcoin);
	}
	if(handle) {//еслм завершил вручную последнюю сумму не учитываем,т.к. еще не прошел
		summ = summ - this.parcoin;
	}

	var xhr = new XMLHttpRequest;
    xhr.open('POST', '/api/saveCard', true);
    xhr.setRequestHeader('Content-type', 'application/json');        
    xhr.onreadystatechange = function() { 
        if(xhr.readyState == 4 && xhr.status == 200) {  
            var response =  JSON.parse(xhr.responseText);
        }
    }   
    xhr.send(JSON.stringify({attr: this.id, close: true}));

	this.newPage('<div class="end animate-this"><img src="/html/img/end-back.svg" alt="">\
						<p>Квест окончен!<br>Вам начислено <span>'+summ+' Паркоинов</span></p>\
					</div>\
					<a href="#" class="btn btn-green animate-this">В каталог бонусов</a>\
					<div class="recommendation animate-this">\
						<h2>«Перекус рядом»</h2>\
						<div class="recommendation-block"><div class="recommendation-box"><p>Чебуреки по <span>79 ₽</span></p><a href="#" class="recommendation-btn">Подробнее</a></div>\
							<div class="recommendation-box"><img src="/html/img/recommendation-back.png" alt=""></div>\
						</div>\
					</div>');
}
Qeust.prototype.newPage = function(content) {
	//TO DO leave
	
	this.reCoin();
	let page = document.createElement('div');
	page.classList.add('main');
	page.innerHTML = content;
	if(this.startPage.nextSibling) this.startPage.nextSibling.remove();
	this.startPage.parentNode.appendChild(page);	
}

new Qeust();
