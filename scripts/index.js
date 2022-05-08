const doc = document;
const log = console.log;

const nameInput = doc.querySelector('#name-input');
const namelabel = doc.querySelector('#name-label');
const surnameInput = doc.querySelector('#surname-input');
const surnamelabel = doc.querySelector('#surname-label');
const emailInput = doc.querySelector('#email-input');
const emaillabel = doc.querySelector('#emai-label');

function valid(inpute, label) {
  inpute.addEventListener('input', function (e) {
    if (inpute.value.length > 0) {
      label.classList.add('samples__label_valid');
    } else {
      label.classList.remove('samples__label_valid');
    }
  });
}

valid(nameInput, namelabel);
valid(surnameInput, surnamelabel);
valid(emailInput, emaillabel);
