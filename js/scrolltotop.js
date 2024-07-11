var scrollToTopBtn = document.getElementById("scrollToTop");
var rootElement = document.documentElement;

window.onscroll = function() {showScrollToTopBtn()};


function showScrollToTopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
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
