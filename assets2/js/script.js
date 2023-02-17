$(document).ready(function () {
  function videoOpenDevice() {
    if (/Mobi/.test(navigator.userAgent)) {
      var videos2 = [
        "assets2/video/inicio-01-m.mp4",
        "assets2/video/inicio-02-m.mp4",
        "assets2/video/inicio-03-m.mp4",
        "assets2/video/inicio-04-m.mp4",
        "assets2/video/inicio-05-m.mp4",
      ];
      let current = Math.floor(Math.random() * videos2.length);
      $("#bgvid2").html(
        `
				<video preload="auto"
				style="width: 100%;"
				autoplay="true"
				playsinline
				muted><source src="${videos2[current]}" type="video/mp4"></video>
				`
      );

      $("#bgvid").remove();
    } else {
      var videos = [
        "assets2/video/inicio-01.mp4",
        "assets2/video/inicio-02.mp4",
        "assets2/video/inicio-03.mp4",
        "assets2/video/inicio-04.mp4",
        "assets2/video/inicio-05.mp4",
      ];

      let current = Math.floor(Math.random() * videos.length);

      $("#bgvid").html(
        `
					<video preload="auto"
					autoplay="true"
					style="width: 100%;"
					playsinline
					muted><source src="${videos[current]}" type="video/mp4"></video>
				`
      );

      $("#bgvid2").remove();
    }
  }

  videoOpenDevice();
});

function initPreload() {
  const element = document.getElementById("preload");
  element.remove();
}

setTimeout(() => {
  initPreload();
}, 2000);



var menuMobile = document.getElementById("menu-mobile");
var openMenu = document.querySelector("#img-hamburguesa");
var closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener(
  "click",
  function (event) {
    menuMobile.classList.remove("menu-mobile-close");
    menuMobile.classList.add("menu-mobile-open");
  },
  false
);

closeMenu.addEventListener(
  "click",
  function (event) {
		closeMenuFuncion();
  },
  false
);

function closeMenuFuncion() {
	menuMobile.classList.remove("menu-mobile-open");
	menuMobile.classList.add("menu-mobile-close");
}

let mobileUrls = document.querySelectorAll('.li-mobile-close');
mobileUrls.forEach(boton => {
	boton.addEventListener(
		"click",
		function (event) {
			closeMenuFuncion();
		},
		false
	);
});

var cargaYoutube = 0;
var cargaSpotify = 0;
var cargaFormulario = 0;
window.onscroll = function () {
  activeHeader();
	let scroll = document.documentElement.scrollTop;

	if (scroll >= 300 && cargaYoutube == 0) {
		loadIframeYoutube();
	}

	if (scroll >= 350 && cargaSpotify == 0) {
		loadIframeSpotify();
	}

	if (scroll >= 420 && cargaFormulario == 0) {
		loadIframeFormulario();
	}
};


window.onload = function() {
  let scroll = document.documentElement.scrollTop;
	if (scroll > 60) {
		activeHeader();
	}
}

function activeHeader() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header-nav").className = "header-bg";
  } else {
    document.getElementById("header-nav").className = "";
  }
}

function loadIframeYoutube() {
	var cargarYoutube = document.getElementById('iframe-youtube');
	let iframeYoutube = `
		<iframe
			title="youtube"
			class="iframe-youtube"
			width=""
			height=""
			style="width: 100%"
			src="https://www.youtube.com/embed/videoseries?list=UUDs8xn_37dZnEQPuQr8opAQ"
		>
		</iframe>
	`;

	cargarYoutube.innerHTML = iframeYoutube;
	cargaYoutube = 1;
}

function loadIframeYoutube() {
	let cargarYoutube = document.getElementById('iframe-youtube');
	let iframeYoutube = `
		<iframe
			title="youtube"
			class="iframe-youtube"
			style="width: 100%"
			src="https://www.youtube.com/embed/videoseries?list=UUDs8xn_37dZnEQPuQr8opAQ"
		>
		</iframe>
	`;

	cargarYoutube.innerHTML = iframeYoutube;
	cargaYoutube = 1;
}

function loadIframeSpotify() {
	let cargarSpotify = document.getElementById('iframe-spotify');
	let iframeSpotify = `
		<iframe
			title="spotify"
			class="iframe-spotify"
			allowtransparency="true"
			frameborder="0"
			src="https://open.spotify.com/embed/show/1WlpwFtJBWc7alYlS5oMC1?theme=0"
			allow="encrypted-media"
		></iframe>
	`;

	cargarSpotify.innerHTML = iframeSpotify;
	cargaSpotify = 1;
}

function loadIframeFormulario() {
	let cargarFormulario = document.getElementById('iframe-formulario');
	let iframeFormulario = `
		<iframe
			title="formulario"
			src="https://arbolserver.com/cuentas/vimifos/formulario/"
			width="100%"
			height="1100"
			frameborder="0"
			style="margin-top: 20px"> 
		</iframe>
	`;
	cargarFormulario.innerHTML = iframeFormulario;
	cargaFormulario = 1;
}

var swiper = new Swiper(".mySwiper", {
  // watchSlidesProgress: true,
  // watchSlidesVisibility: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
		1200: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});