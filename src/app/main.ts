import changeTheme, { initTheme } from '../resources/colors';
import map from '../utils/map';
import cipher from './modules/apollo/cipher';
import encrypt from './modules/encrypt';

const btnSetTheme = document.querySelector('#btn-set-theme');
const cipherInput = document.querySelector('#cipher') as HTMLInputElement;
const input = document.querySelector('#content') as HTMLTextAreaElement;
const encryptButton = document.querySelector('#cr') as HTMLButtonElement;
const decryptButton = document.querySelector('#dc') as HTMLButtonElement;
const containerModal = document.querySelector('#container-modal') as HTMLDivElement;
const btnCopy = document.querySelector('#modal-copy') as HTMLButtonElement;
const modalMessage = document.querySelector('#modal-message') as HTMLParagraphElement;

if (btnSetTheme) btnSetTheme.addEventListener('click', () => changeTheme());

if (containerModal) {
  containerModal.addEventListener('click', ({ target }) => {
    const id = (target as HTMLDivElement).id;
    if (
      id === containerModal.id ||
      id === btnCopy.id ||
      btnCopy.querySelector('span').classList.contains(btnCopy.id)
    ) {
      containerModal.style.top = '-100vh';
    }
  });
}

if (btnCopy && btnCopy.querySelector('span')) {
  btnCopy.addEventListener('click', () => {
    const span = btnCopy.querySelector('span');
    const content = span.textContent;
    span.textContent = 'check_small';
    const text = modalMessage.textContent;
    window.navigator.clipboard.writeText(text);
    setTimeout(() => (span.textContent = content), 1500);
  });
}

if (encryptButton && cipherInput && decryptButton) {
  cipherInput.addEventListener('input', (event) => {
    const value = Number((event.target as HTMLTextAreaElement).value);
    if (value < 0 || typeof value !== 'number') return (cipherInput.value = '' + 1);
    if (value > 133) return (cipherInput.value = '139');
    cipherInput.value = String(Math.abs(value));
  });

  encryptButton.addEventListener('click', () => {
    const key = Number(cipherInput.value);
    modalMessage.textContent = cipher(input.value, typeof key === 'number' && key !== 0 ? key : 2);
    containerModal.style.top = '0';
  });

  decryptButton.addEventListener('click', () => {
    const key = Number(cipherInput.value);
    modalMessage.textContent = cipher(input.value, typeof key === 'number' && key !== 0 ? key : 2, true);
    containerModal.style.top = '0';
  });
}

initTheme();
