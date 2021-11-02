var deadline = 'Jul 25 2023 18:40:18 GMT-0400';
function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);

	// get spans where our clock numbers are held
	var days_span = clock.querySelector('.days');
	var hours_span = clock.querySelector('.hours');
	var minutes_span = clock.querySelector('.minutes');
	var seconds_span = clock.querySelector('.seconds');

	function update_clock(){
		var t = time_remaining(endtime);

		// update the numbers in each part of the clock
		days_span.innerHTML = t.days;
		hours_span.innerHTML = ('0' + t.hours).slice(-2);
		minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
		seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock();
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);


////////////////////////////////////////////////////////////////////////
//
//таймер выше
//
////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////
//
//меню ниже
//
////////////////////////////////////////////////////////////////////////
// Designed by: Hoang Nguyen
// Original image: https://dribbble.com/shots/5919154-Tab-Bar-Label-Micro-Interaction

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("click", function() {
        if (this.classList.contains("active")) return;

        this.classList.add("active");
        
        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }
        
        handleTransition(this, text);
        activeButton = this;

    });

    
});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" || 
        !item.classList.contains("active")) return;

        text.classList.add("active");
        
    });

}


const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menu__show = document.querySelector('.menu__show');

const close = document.getElementById("close");
const button__burger = document.getElementById('button__burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active1');
    body.classList.toggle('no__scroll__modile');
	menu.classList.toggle('active2');
    menu__show.classList.toggle('menu__show--active'); 
    
    menu.addEventListener('click', () => {
        event.stopPropagation();
    });
});

close.addEventListener('click', ()=>{
    burger.classList.remove('active1');
    body.classList.remove('no__scroll__modile');
	menu.classList.remove('active2');
    menu__show.classList.remove('menu__show--active');
})

menu__show.addEventListener('click', () =>{
    burger.classList.remove('active1');
    body.classList.remove('no__scroll__modile');
	menu.classList.remove('active2');
    menu__show.classList.remove('menu__show--active');
})

// const body = document.querySelector('body');
// const modalClose = document.querySelector('.okno__close');
// const modal = document.querySelector('.comment__okno');
// const btn = document.querySelector('.btn_comment');
// const okno__content = document.querySelector('.okno__content');

// btn.addEventListener('click', () => {
//     modal.classList.add('show');
//     body.classList.add('no-scroll');

//     okno__content.addEventListener('click', () => {
//         event.stopPropagation();
//     });
// });

// modalClose.addEventListener('click', () =>{
//     modal.classList.remove('show');
//     body.classList.remove('no-scroll');
// })

// modal.addEventListener('click', () =>{
//     modal.classList.remove('show');
//     body.classList.remove('no-scroll');
// })


////////////////////////////////////////////////////////////////////////
//
//меню выше
//
////////////////////////////////////////////////////////////////////////


