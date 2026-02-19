const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strengthText = document.getElementById("strengthText");
const bars = document.querySelectorAll(".bars div");

lengthEl.addEventListener("input", () => {
  lengthValue.textContent = lengthEl.value;
});

function generatePassword() {
  let characters = "";
  let password = "";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?";

  if (uppercaseEl.checked) characters += uppercase;
  if (lowercaseEl.checked) characters += lowercase;
  if (numbersEl.checked) characters += numbers;
  if (symbolsEl.checked) characters += symbols;

  if (characters === "") {
    alert("Selecciona al menos una opción");
    return;
  }

  for (let i = 0; i < lengthEl.value; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordEl.value = password;
  checkStrength(password);
}

function checkStrength(password) {
  let strength = 0;

  if (password.length > 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  bars.forEach(bar => bar.style.background = "gray");

  for (let i = 0; i < strength; i++) {
    bars[i].style.background = "#22c55e";
  }

  const levels = ["DÉBIL", "MEDIA", "BUENA", "FUERTE"];
  strengthText.textContent = levels[strength - 1] || "DÉBIL";
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordEl.value);
  alert("Contraseña copiada!");
});
