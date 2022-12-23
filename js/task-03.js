const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallEl = document.querySelector('.gallery');

const makeGallCard = ({ url, alt } = {}) => {
  return `<li class="js-item"><img  class="js-image"  src="${url}" width="300px;" height="200px; alt="${alt}" ></li>`;
};


const galleryLiElements = images.map(makeGallCard).join('');

gallEl.insertAdjacentHTML('beforeend', galleryLiElements);

gallEl.style.listStyle = 'none';
gallEl.style.display = 'Flex';
gallEl.style.gap = '30px'