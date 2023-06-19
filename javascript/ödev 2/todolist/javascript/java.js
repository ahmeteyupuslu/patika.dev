// Listeye boşluk veya boş giriş eklenememesi kontrolü
function newElement() {
  var input = document.getElementById("task");
  var value = input.value.trim(); // Girişin başındaki ve sonundaki boşlukları temizle

  if (value !== "") {
    addElement(value);
    showToast("success", "Listeye eklendi.");
    input.value = ""; // Giriş alanını temizle
  } else {
    showToast("error", "Listeye boş ekleme yapamazsınız!");
  }
}

// Listeye yeni bir element ekleme
function addElement(value) {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));

  li.onclick = function() {
    this.classList.toggle("done");
  };

  var closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function() {
    deleteElement(li);
  };

  li.appendChild(closeButton);
  ul.appendChild(li);
}

// Elementi listeden silme
function deleteElement(element) {
  element.parentNode.removeChild(element);
}

// Toast bildirimi gösterme
function showToast(type, message) {
  var toastId = "liveToast-" + type;
  var toastElement = document.getElementById(toastId);

  if (toastElement) {
    // Eğer toast zaten görüntüleniyorsa, görünmez hale getir ve tekrar göster
    $(toastElement).toast("hide");
    $(toastElement).toast("show");
  } else {
    // Yeni bir toast elementi oluştur ve göster
    var toastDiv = document.createElement("div");
    toastDiv.setAttribute("id", toastId);
    toastDiv.classList.add("toast", type);
    toastDiv.setAttribute("role", "alert");
    toastDiv.setAttribute("aria-live", "assertive");
    toastDiv.setAttribute("aria-atomic", "true");
    toastDiv.setAttribute("data-delay", "4000");

    var closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("close");
    closeButton.setAttribute("data-dismiss", "toast");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';

    var toastBody = document.createElement("div");
    toastBody.classList.add("toast-body");
    toastBody.innerText = message;

    toastDiv.appendChild(closeButton);
    toastDiv.appendChild(toastBody);

    var toastContainer = document.getElementsByClassName("mr-1")[0];
    toastContainer.appendChild(toastDiv);

    $(toastDiv).toast("show");
  }
}
