document.getElementById('myForm').addEventListener('submit', function (e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    this.classList.add('was-submitted');
  }
});
