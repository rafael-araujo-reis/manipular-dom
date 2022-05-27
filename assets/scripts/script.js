const modal = document.querySelector("#modalTerm")
const checkedTerm = document.querySelector("#termPayment")
const checkMarkTerm = document.querySelector("#checkMarkTerm")
const goForPayment = document.querySelector("#goForPayment")

function openCloseModal() {
  modal.toggleAttribute("hidden")
}

function acceptTerm() {
  checkedTerm.setAttribute('checked', 'checked');
  goForPayment.removeAttribute('disabled');

  openCloseModal()
}

function checkedAcceptTerm() {
  checkedTerm.toggleAttribute('checked');
  goForPayment.toggleAttribute('disabled');
}

document.querySelector('body').addEventListener('keydown', function (event) {
  if (event.keyCode === 27 && modal.getAttribute("hidden") === null) {
    openCloseModal();
  }
})

checkedTerm.addEventListener('click', checkedAcceptTerm)
checkMarkTerm.addEventListener('click', checkedAcceptTerm)