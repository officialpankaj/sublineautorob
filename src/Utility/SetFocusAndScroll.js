function setFocusAndScroll(selector, container = false) {
  var element = document.querySelector(selector);
  element.focus();
  var headerOffset = 150;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  if (container === false) {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    document.querySelector(container).scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export default setFocusAndScroll;
