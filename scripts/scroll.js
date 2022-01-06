const booklist = document.querySelector('.booklist-container');
const addnew = document.querySelector('.addnew-container');
const contact = document.querySelector('.contact-container');

const listLink = document.querySelector('#list-link');
const addnewLink = document.querySelector('#addnew-link');
const contactLink = document.querySelector('#contact-link');

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  booklist.classList.remove('d-none');
  addnew.classList.add('d-none');
  contact.classList.add('d-none');
  listLink.classList.add('active');
  addnewLink.classList.remove('active');
  contactLink.classList.remove('active');
});

addnewLink.addEventListener('click', (e) => {
  e.preventDefault();
  booklist.classList.add('d-none');
  addnew.classList.remove('d-none');
  contact.classList.add('d-none');
  listLink.classList.remove('active');
  addnewLink.classList.add('active');
  contactLink.classList.remove('active');
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  booklist.classList.add('d-none');
  addnew.classList.add('d-none');
  contact.classList.remove('d-none');
  listLink.classList.remove('active');
  addnewLink.classList.remove('active');
  contactLink.classList.add('active');
});