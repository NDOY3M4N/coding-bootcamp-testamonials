// Grab elements from the DOM
const heroImg = document.querySelector('.hero__img img');
const heroDesc = document.querySelector('.hero__desc');
const personName = document.querySelector('.person__name');
const personTitle = document.querySelector('.person__title');

const hero = [
  {
    picture: 'images/image-tanya.jpg',
    description: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
    name: 'Tanya Sinclair',
    title: 'UX Engineer'
  },
  {
    picture: 'images/image-john.jpg',
    description: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer'
  }
];

let i = 0;

function changeContent(increment) {
  i += increment;

  if (i >= hero.length) {
    i = 0;
  }

  if (i < 0) {
    i = hero.length - 1;
  }

  heroImg.src = hero[i].picture;
  heroDesc.innerText = `“ ${hero[i].description} ”`;
  personName.innerText = hero[i].name;
  personTitle.innerText = hero[i].title;
}

window.onload = () => {
  heroImg.src = hero[i].picture;
  heroDesc.innerText = `“ ${hero[i].description} ”`;
  personName.innerText = hero[i].name;
  personTitle.innerText = hero[i].title;
}
