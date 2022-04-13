/** Add any JavaScript you need to this file. */
console.log('this is script');

const cardContain = document.querySelector('.card_contain');
const hoods = document.querySelector('.option_hoodies');
const mugs = document.querySelector('.option_mugs');

let tshirtsData = [
  {
    id: '1',
    src: '/src/images/tshirts/1.jpg',
    title: 'Avengers Hoodie',
    desc: '',
    price: '15'
  },
  {
    id: '2',
    src: '/src/images/tshirts/2.jpg',
    title: 'Marvel Hoodie',
    desc: '',
    price: '16'
  },
  {
    id: '3',
    src: '/src/images/tshirts/3.jpg',
    title: 'Captian Marvel Hoodie',
    desc: '',
    price: '14'
  },
  {
    id: '4',
    src: '/src/images/tshirts/4.jpg',
    title: 'Spiderman Hoodie',
    desc: '',
    price: '20'
  },
  {
    id: '5',
    src: '/src/images/tshirts/5.jpg',
    title: 'AntMan Hoodie',
    desc: '',
    price: '15'
  },
  {
    id: '6',
    src: '/src/images/tshirts/6.jpg',
    title: 'IronMan Hoodie',
    desc: '',
    price: '13'
  },
  {
    id: '7',
    src: '/src/images/tshirts/7.jpg',
    title: 'Captian America Hoodie',
    desc: '',
    price: '18'
  },
  {
    id: '8',
    src: '/src/images/tshirts/8.jpg',
    title: 'Captian America Hoodie 2',
    desc: '',
    price: '20'
  }
];

let mugsData = [
  {
    id: '1',
    src: '/src/images/mugs/1.jpg',
    title: 'Avengers Hoodie',
    desc: '',
    price: '15'
  },
  {
    id: '2',
    src: '/src/images/mugs/2.jpg',
    title: 'Marvel Hoodie',
    desc: '',
    price: '16'
  },
  {
    id: '3',
    src: '/src/images/mugs/3.jpg',
    title: 'Captian Marvel Hoodie',
    desc: '',
    price: '14'
  },
  {
    id: '4',
    src: '/src/images/mugs/4.jpg',
    title: 'Spiderman Hoodie',
    desc: '',
    price: '20'
  },
  {
    id: '5',
    src: '/src/images/mugs/5.jpg',
    title: 'AntMan Hoodie',
    desc: '',
    price: '15'
  }
];

const populateData = (type = 'hoodies') => {
  if (type == 'hoodies') {
    tshirtsData.forEach(each => {
      hoods.style.color = 'red';
      mugs.style.color = 'black';
      cardContain.innerHTML += `<div class="card">
      <div class="thumb_contain">
      <img src="${each.src}" alt="" class="thumb" />
    </div>
    <h3 class="item_title">${each.title}</h3>
    <h4 class="price">$${each.price}</h4>
  </div>`;
    });
  } else {
    mugsData.forEach(each => {
      hoods.style.color = 'black';
      mugs.style.color = 'red';
      cardContain.innerHTML += `<div class="card">
      <div class="thumb_contain">
      <img src="${each.src}" alt="" class="thumb" />
    </div>
    <h3 class="item_title">${each.title}</h3>
    <h4 class="price">$${each.price}</h4>
  </div>`;
    });
  }
};

hoods.addEventListener('click', () => {
  cardContain.innerHTML = '';
  populateData('hoodies');
});

mugs.addEventListener('click', () => {
  cardContain.innerHTML = '';
  populateData('mugs');
});

populateData('hoodies');
