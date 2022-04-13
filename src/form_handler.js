const radios = document.querySelector('.radios');
const other = document.querySelector('.other');

radios.addEventListener('click', e => {
  if (e.target.id == 'Other') {
    other.classList.remove('hide');
  } else {
    other.classList.add('hide');
  }
});
