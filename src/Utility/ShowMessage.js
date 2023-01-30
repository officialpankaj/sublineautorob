function showMessage(message, classname, elementid, visible = false) {
  var element = document.getElementById(elementid);
  element.innerHTML = (classname === "text-success" ? "<i className='fa-solid fa-circle-check me-1'></i>" : "<i className='fa-solid fa-circle-exclamation me-1'></i>") + message;
  element.style.setProperty("visibility", "visible", "important");
  element.classList.add(classname);
  if (visible !== true) {
    setTimeout(() => {
      element.classList.remove(classname);
      element.style.visibility = "hidden";
    }, 4000);
  }
}

export default showMessage;
