(function () {
  const viewport = document.querySelector('meta[name="viewport"]');

  function switchViewport() {
    const value =
      window.outerWidth > 375
        ? "width=device-width,initial-scale=1"
        : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// ドロワーの開閉
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("body").toggleClass("is-fixed");
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("body").removeClass("is-fixed");
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// スムーススクロール jQuery ver
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" === id ? "html" : id);
  const position = jQuery(target).offset().top;

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or linear
  );
});

// aboutSwiper
const aboutSwiperWrap = document.querySelector("#js-about-swiper-wrap");
const aboutSwiperSlides = aboutSwiperWrap.querySelectorAll(".swiper-slide");

aboutSwiperWrap.style.transitionTimingFunction = "linear";

function cloneAndAppend(element, swiperWrap) {
  let clonedElement = element.cloneNode(true);
  swiperWrap.appendChild(clonedElement);
}
for (let aboutSwiperSlide of aboutSwiperSlides) {
  cloneAndAppend(aboutSwiperSlide, aboutSwiperWrap);
}

const swiper = new Swiper(".swiper", {
  loop: true,
  reverseDirection: false,
  width: 100,
  loopedSlides: 10,
  spaceBetween: 10,
  speed: 3000,
  keyboard: true,
  centeredSlides: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    900: {
      spaceBetween: 20,
      width: 200,
    },
  },
});

// prizes modal
// モーダルを開くボタンにイベントリスナーを設定
const modalTriggers = document.querySelectorAll("[data-modal-target]");
const body = document.querySelector("body");

// モーダルを開く処理
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetId = trigger.getAttribute("data-modal-target");
    const modal = document.querySelector(targetId);
    if (modal) {
      modal.showModal();
      body.classList.add("is-fixed"); // モーダルを開くときに.is-fixedを付与
    }
    event.preventDefault();
  });
});

// モーダル内の「閉じる」ボタンにイベントリスナーを設定
const closeModalButtons = document.querySelectorAll(".modal-close");
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    if (modal) {
      modal.close();
      body.classList.remove("is-fixed"); // モーダルを閉じるときに.is-fixedを削除
    }
  });
});

// モーダルの外側をクリックしたときにモーダルを閉じる処理
document.addEventListener("click", (e) => {
  if (e.target.tagName === "DIALOG") {
    e.target.close();
    body.classList.remove("is-fixed"); // モーダルを閉じるときに.is-fixedを削除
  }
});

// spots-swiper
const spotsSwiper = new Swiper("#js-spots-swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.5273,
  centeredSlides: true,
  keyboard: true,
  navigation: {
    nextEl: "#js-spots-next",
    prevEl: "#js-spots-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      centeredSlides: true,
    },

    900: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3.2234,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});

// // form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("js-form");
  const inputElements = form.querySelectorAll(".js-contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    inputElements.forEach((input) => input.classList.remove("is-error"));

    const isValid = form.checkValidity();
    if (isValid) {
      alert("ダミーメッセージです");
      form.reset();
    }
  });

  inputElements.forEach((input) => {
    input.addEventListener("invalid", function () {
      this.classList.add("is-error");
    });

    input.addEventListener("input", function () {
      if (this.checkValidity()) {
        this.classList.remove("is-error");
      }
    });
  });
});

// スクロールすると、page-topボタンが表示される
// JavaScript ver
const pageTop = document.querySelector("#js-page-top");
window.addEventListener("scroll", function () {
  if (100 < window.scrollY) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});
