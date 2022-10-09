import Constants from '../utils/Constants';

export type TColors = {
  bg: string;
  bgLight: string;
  textTitle: string;
  textOnVariant: string;
  text: string;
  variant: string;
  mode: 'light' | 'dark';
};

const light = {
  bg: '#b2b7c6',
  bgLight: '#d9d9d9',
  textTitle: '#0a0a0a',
  textOnVariant: '#fcfcfc',
  text: '#2e2e2e',
  variant: '#ff0000',
  mode: 'light',
};

const dark = {
  bg: '#12141b',
  bgLight: '#232838',
  textTitle: '#fcfcfc',
  textOnVariant: '#fcfcfc',
  text: '#bdbdbd',
  variant: '#ff0000',
  mode: 'dark',
};

export const initTheme = () => {
  const mode = localStorage.getItem(Constants.THEME_ID);

  if (!mode) localStorage.setItem(Constants.THEME_ID, Constants.THEME_DARK_ID);

  setTheme();
};

const setTheme = () => {
  const mode = localStorage.getItem(Constants.THEME_ID);

  const colors = mode === Constants.THEME_DARK_ID ? dark : light;
  delete colors.mode;
  const colorsArr = Object.values(colors);
  Object.keys(colors).forEach((key, index) =>
    document.documentElement.style.setProperty('--' + key, colorsArr[index])
  );
  onThemeChange();
};

const onThemeChange = () => {
  const icon: HTMLImageElement = document.querySelector('#icon');
  const btnSetTheme: HTMLButtonElement = document.querySelector('#btn-set-theme');
  const mode = localStorage.getItem(Constants.THEME_ID);

  if (icon) icon.src = mode === Constants.THEME_LIGHT_ID ? 'images/icon.svg' : 'images/icon-dark.svg';
  if (btnSetTheme && btnSetTheme.querySelector('span')) {
    btnSetTheme.querySelector('span').textContent = mode === Constants.THEME_LIGHT_ID ? 'sunny' : 'dark_mode';
  }
};

const changeTheme = () => {
  const mode = localStorage.getItem(Constants.THEME_ID);

  switch (mode) {
    case Constants.THEME_DARK_ID:
      localStorage.setItem(Constants.THEME_ID, Constants.THEME_LIGHT_ID);
      break;
    default:
      localStorage.setItem(Constants.THEME_ID, Constants.THEME_DARK_ID);
      break;
  }
  setTheme();
};

export default changeTheme;
