const modal = document.querySelector("#modalTerm")

function openCloseModal() {
  modal.toggleAttribute("hidden")
}

function acceptTerm() {
  openCloseModal()
  console.log('bora aceitar o termo');
}

document.querySelector('body').addEventListener('keydown', function (event) {
  if (event.keyCode === 27 && modal.getAttribute("hidden") === null) {
    openCloseModal();
  }
})