// убрать сообщение no-scripts
// window.onload = function () {
// 	var a = document.querySelector(".no-scripts");
// 	a.remove()
// }

// ============= Слайдеры ============
const ms = document.querySelector(".main-slider"),
	mb = document.querySelectorAll(".main-slider__block"),
	ss = document.querySelectorAll(".second-slider");
	

	// moving main slider --------------------------
for (i = 0; i < mb.length; i++) {
	mb[i].onclick = msmove;
}
function msmove() {
	var ind;
	for (var i = 0; i < mb.length; i++) {
		if (this !== mb[i]) { }
		else { ind = i };
	};
	ms.style.left = 300 - ind * 200;
			for (i = 0; i < mb.length; i++) {
				ss[i].style.overflow = "hidden"
				ss[i].style.opacity = "0"
			}
			ss[ind].style.overflow = "visible"
			ss[ind].style.opacity = "1"
	var sb = ss[ind].querySelectorAll(".second-slider__block"); // let second slider block (elems in arr)

	// moving second slider ------------------------
	for (i = 0; i < sb.length; i++) {
		sb[i].onclick = ssmove;
	}
	function ssmove() {
		var indss;
		for (var i = 0; i < sb.length; i++) {
			if (this !== sb[i]) { }
			else { indss = i };
		};
		ss[ind].style.top = 300 - indss * 140;
		for (i = 0; i < sb.length; i++) {
			sb[i].style.marginTop = "0"
		}
		sb[indss].style.marginTop = "170px"
	}
}
// // main-slaider move
// const m = document.querySelector(".main-slider"),
// 	mb = document.querySelector(".main-slider__block"),
// 	mb1 = document.querySelector(".main-slider__block_1"),
// 	mb2 = document.querySelector(".main-slider__block_2"),
// 	mb3 = document.querySelector(".main-slider__block_3"),
// 	mb4 = document.querySelector(".main-slider__block_4"),
// 	mb5 = document.querySelector(".main-slider__block_5"),
// 	mb6 = document.querySelector(".main-slider__block_6"),
// 	mb7 = document.querySelector(".main-slider__block_7"),
// 	mb8 = document.querySelector(".main-slider__block_8");

// mb1.onclick = this.slimove;
// mb2.onclick = this.slimove;
// mb3.onclick = this.slimove;
// mb4.onclick = this.slimove;
// mb5.onclick = this.slimove;
// mb6.onclick = this.slimove;
// mb7.onclick = this.slimove;
// mb8.onclick = this.slimove;
// mb1.pos = 300;
// mb2.pos = 100;
// mb3.pos = -100;
// mb4.pos = -300;
// mb5.pos = -500;
// mb6.pos = -700;
// mb7.pos = -900;
// mb8.pos = -1100;
// function slimove() {
// 	s.style.top = "300px";
// 	sb1.style.marginTop = "150px";
// 	sb2.style.marginTop = "0";
// 	sb3.style.marginTop = "0";
// 	sb4.style.marginTop = "0";
// 	sb5.style.marginTop = "0";
// 	sb6.style.marginTop = "0";
// 	sb7.style.marginTop = "0";
// 	sb8.style.marginTop = "0";
// 	m.style.left = this.pos + "px";
// }

// // second-slider move
// const s = document.getElementsByClassName("second-slider"),
// 	sb = document.querySelector(".second-slider__block"),
// 	sb1 = document.querySelector(".second-slider__block_1"),
// 	sb2 = document.querySelector(".second-slider__block_2"),
// 	sb3 = document.querySelector(".second-slider__block_3"),
// 	sb4 = document.querySelector(".second-slider__block_4"),
// 	sb5 = document.querySelector(".second-slider__block_5"),
// 	sb6 = document.querySelector(".second-slider__block_6"),
// 	sb7 = document.querySelector(".second-slider__block_7"),
// 	sb8 = document.querySelector(".second-slider__block_8");

// sb1.onclick = this.slimoveSecond;
// sb2.onclick = this.slimoveSecond;
// sb3.onclick = this.slimoveSecond;
// sb4.onclick = this.slimoveSecond;
// sb5.onclick = this.slimoveSecond;
// sb6.onclick = this.slimoveSecond;
// sb7.onclick = this.slimoveSecond;
// sb8.onclick = this.slimoveSecond;
// sb1.pos = 300;
// sb2.pos = 130;
// sb3.pos = -40;
// sb4.pos = -210;
// sb5.pos = -380;
// sb6.pos = -550;
// sb7.pos = -720;
// sb8.pos = -890;
// function slimoveSecond() {
// 	s.style.top = this.pos + "px";
// 	sb1.style.marginTop = "0";
// 	sb2.style.marginTop = "0";
// 	sb3.style.marginTop = "0";
// 	sb4.style.marginTop = "0";
// 	sb5.style.marginTop = "0";
// 	sb6.style.marginTop = "0";
// 	sb7.style.marginTop = "0";
// 	sb8.style.marginTop = "0";
// 	this.style.marginTop = "150px";
// }







