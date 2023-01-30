import { useEffect } from "react";

function BackToTopButton() {
  useEffect(() => {
    var mybutton = document.querySelector(".back-to-top-btn");
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, []);
  function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button className="back-to-top-btn bg-linear-color" type="button" onClick={scrollUp}>
      <i className="fa-solid fa-caret-up"></i>
    </button>
  );
}

export default BackToTopButton;
