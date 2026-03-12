export const validationFunc = (input, errorLabel, message) => {
  const value = input.value.trim();
  if (!value) {
    errorLabel.textContent = message;
    errorLabel.classList.add("show");
    input.classList.add("error");
    return false;
  }

  errorLabel.textContent = "";
  errorLabel.classList.remove("show");
  input.classList.remove("error");
  return true;
};
