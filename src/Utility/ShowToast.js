function showToast(message, classname) {
  document.querySelector(".toast-body").innerHTML = (classname === "toast-success" ? "<i className='fa-solid fa-circle-check me-2'></i>" : "<i className='fa-solid fa-circle-exclamation me-2'></i>") + message;
  var element = document.querySelector(".toast");
  element.classList.remove("toast-success");
  element.classList.remove("toast-warning");
  element.classList.remove("toast-error");
  element.classList.add(classname);
  var toastLiveExample = document.getElementById("liveToast");
  var toast = new window.bootstrap.Toast(toastLiveExample);
  toast.show();
}

export default showToast;
