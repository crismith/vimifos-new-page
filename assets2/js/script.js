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
			console.log('mobile');
    } else {
			console.log('pc');
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
    menuMobile.classList.remove("menu-mobile-open");
    menuMobile.classList.add("menu-mobile-close");
  },
  false
);


function initPreload() {
  const element = document.getElementById("preload");
  element.remove();
}

setTimeout(() => {
  initPreload();
}, 2500);

window.onscroll = function () {
  activeHeader();
};

function activeHeader() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header-nav").className = "header-bg";
  } else {
    document.getElementById("header-nav").className = "";
  }
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
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
