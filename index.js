const productForm = document.querySelector('.product__form');
const createButton = document.querySelector(
  '.button__section span:first-child'
);

const hiddenForm = () => {
  productForm.classList.toggle('hidden');
};

createButton.addEventListener('click', hiddenForm);
