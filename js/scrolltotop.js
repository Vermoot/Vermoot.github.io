var scrollToTopBtn = document.getElementById("scrollToTop");
var rootElement = document.documentElement;

window.onscroll = function() {showScrollToTopBtn()};


function showScrollToTopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // scrollToTopBtn.style.display = "block";
    scrollToTopBtn.style.right = "5%";
  } else {
    scrollToTopBtn.style.right = "calc(-50px - 5%)";
  }
}
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
