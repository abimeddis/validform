// 1- TRAER LOS ELEMENTOS DEL HTML

const FORM = document.getElementById("form");
const INPUTNAME = document.getElementById("input-name");
const INPUTSURNAME = document.getElementById("input-surname");
const INPUTEMAIL = document.getElementById("input-email");
const INPUTPHONE = document.getElementById("input-phone");
const INPUTPASSWORD = document.getElementById("input-password");

// COMENZAMOS A CHEQUEAR :

// VALIDACION DE LARGO
const isValidLength = (length, min, max) =>
  length < min || length > max ? false : true;

// - CHEQUEO DEL NAME:

const checkName = () => {
  let valid = false;

  const min = 2;
  const max = 12;

  const name = INPUTNAME.value.trim();

  if (!name) return showError(INPUTNAME, "El Nombre es obligatorio");
  else if (!isValidLength(name.length, min, max)) {
    showError(
      INPUTNAME,
      `El campo debe tener entre ${min} y ${max} caracteres.`
    );
  } else {
    ShowAproved(INPUTNAME);
    valid = true;
  }
  return valid;
};

// CHEQUEO DE APELLIDO
const checkSurname = () => {
  let valid = false;

  const min = 2;
  const max = 12;

  const surname = INPUTSURNAME.value.trim();

  if (!surname) return showError(INPUTSURNAME, "El Apellido es obligatorio");
  else if (!isValidLength(surname.length, min, max)) {
    showError(
      INPUTSURNAME,
      `El campo debe tener entre ${min} y ${max} caracteres.`
    );
  } else {
    ShowAproved(INPUTSURNAME);
    valid = true;
  }
  return valid;
};

// VALIDACION DE EMAIL
const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email);
};

// CHEQUEO DE EMAIL

const checkEmail = () => {
  let valid = false;

  const emailValue = INPUTEMAIL.value.trim();

  if (!emailValue) return showError(INPUTEMAIL, "El email es obligatorio");
  else if (!isEmailValid(emailValue)) {
    showError(INPUTEMAIL, "El email no es valido");
  } else {
    ShowAproved(INPUTEMAIL);
    valid = true;
  }
  return valid;
};

//VALIDACION TELEFONO
const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;
  //Testeamos el value
  return re.test(phone);
};

//CHEQUEO DE TELEFONO

const checkPhone = () => {
  let valid = false;

  let phoneValue = INPUTPHONE.value.trim();

  if (!phoneValue) return showError(INPUTPHONE, "El teléfono es obligatorio");
  else if (!isPhoneValid(phoneValue)) {
    showError(INPUTPHONE, "El teléfono no es válido.");
  } else {
    ShowAproved(INPUTPHONE);
    valid = true;
  }

  return valid;
};

// VALIDACION DE CONTRASEÑA
const isPasswordValid = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(password);
};

// CHEQUEO DE CONTRASEÑA

const checkPassword = () => {
  let valid = false;

  let passwordValue = INPUTPASSWORD.value.trim();

  if (!passwordValue)
    return showError(INPUTPASSWORD, "La contraseña es obligatoria");
  else if (!isPasswordValid(passwordValue)) {
    showError(
      INPUTPASSWORD,
      "La contraseña no es válida. Debe contener Mayuscúla, Minúscula, Números y Caracteres Especiales"
    );
  } else {
    ShowAproved(INPUTPASSWORD);
    valid = true;
  }
  return valid;
};

// MOSTRAR ERROR
const showError = (input, msj) => {
  const div = input.parentElement;
  const error = div.querySelector("span");
  error.innerText = msj;
  error.classList.remove("aproved");
  error.classList.add("error");
};

// MOSTRAR APROBADO

const ShowAproved = (input) => {
  const div = input.parentElement;
  const error = div.querySelector("span");
  error.innerText = "";
  error.classList.remove("error");
  error.classList.add("aproved");
};

// EVENTRO SUBMIT
FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  let isNameValidValue = checkName();
  let isSurnameValidValue = checkSurname();
  let isEmailValidValue = checkEmail();
  let isPhoneValidValue = checkPhone();
  let isPasswordValidValue = checkPassword();

  let isFormValid =
    isNameValidValue &&
    isSurnameValidValue &&
    isEmailValidValue &&
    isPhoneValidValue &&
    isPasswordValidValue;

  if (isFormValid) {
    FORM.submit();
    alert(
      "Se ha enviado su formulario",
      isNameValidValue,
      isSurnameValidValue,
      isEmailValidValue,
      isPhoneValidValue,
      isPasswordValidValue
    );
  }
});
