let menuBtn = document.querySelector(".menu");
let mobileNav = document.querySelector(".mobile_nav");

menuBtn.addEventListener("click", function () {
  console.log("Ming sum bering akajonlar");
  //   mobileNav.classList.toggle("showNav");

  if (mobileNav.classList.contains("showNav")) {
    mobileNav.classList.remove("showNav");
  } else {
    mobileNav.classList.add("showNav");
  }
});
