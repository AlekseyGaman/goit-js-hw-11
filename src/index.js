import './css/styles.css';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const refs = {
  searchForm: document.querySelector('#search-form'),
  input: document.querySelector('form.input'),
  button: document.querySelector('form.button'),
};

const DEBOUNCE_DELAY = 300;
refs.searchForm.addEventListener(
  'input',
  debounce(onInputCountry, DEBOUNCE_DELAY)
);
