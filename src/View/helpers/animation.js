function InputAnimation(input, label) {
  input.addEventListener('focus', () => {
    label.classList.add('label-form-hover');
  });

  input.addEventListener('blur', () => {
    if (input.value) return;
    label.classList.remove('label-form-hover');
  });
}

module.exports = InputAnimation;
