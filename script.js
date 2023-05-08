const carouselItems=document.querySelectorAll('.carousel-item');
const prevBut=document.querySelector('.previous-but');
const nextBut=document.querySelector('.next-but');
let currentSlide=0;
function showSlide(index){
    carouselItems.forEach(item=>item.classList.remove('active'));
    carouselItems[index].classList.add('active');
}
function prevSlide(){
    if(currentSlide===0){
        currentSlide=carouselItems.length-1;
    }
    else{
        currentSlide=currentSlide-1;
    }
    showSlide(currentSlide);
}
function nextSlide(){
    if(currentSlide===carouselItems.length-1){
        currentSlide=0;
    }
    else{
        currentSlide=currentSlide+1;
    }
    showSlide(currentSlide);
}
showSlide(currentSlide);
prevBut.onclick=prevSlide;
nextBut.onclick=nextSlide;
const cardsContainer=document.querySelector('.cards');
const objectsArray=[
    {
        title: 'FLIGHT BOOKING',
        description:'   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iste quo nesciunt quam, eum reprehenderit.',
        imagePath: 'resources/card-1.jpg',
        id: 0,
    },
    {
        title: 'HOTEL & RESORT BOOKING',
        description:'   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iste quo nesciunt quam, eum reprehenderit.',
        imagePath: 'resources/card-2.jpg',
        id: 1,
    },
    {
        title: 'FAMILY TRIP PLANNER',
        description:'   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iste quo nesciunt quam, eum reprehenderit.',
        imagePath: 'resources/card-3.jpg',
        id: 2,
    },
    {
        title: 'CRUIS TOUR',
        description:'   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iste quo nesciunt quam, eum reprehenderit.',
        imagePath: 'resources/card-4.jpg',
        id: 3,
    },
    {
        title: 'FREE CAMP',
        description:'   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iste quo nesciunt quam, eum reprehenderit.',
        imagePath: 'resources/card-5.jpg',
        id: 4,
    },
    {
        title: 'CORPORATE HOLIDAYS',
        description:'   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iste quo nesciunt quam, eum reprehenderit.',
        imagePath: 'resources/card-6.jpg',
        id: 5,
    }
];
function renderItems(array,location){
    array.forEach(item=>{
        const cardWrapper=document.createElement('div');
        const cardImage=document.createElement('img');
        cardImage.setAttribute('src',item.imagePath);
        const cardTitle=document.createElement('h3');
        cardTitle.textContent=item.title;
        const cardDescription=document.createElement('p');
        cardDescription.textContent=item.description;
        cardWrapper.append(cardImage,cardTitle,cardDescription);
        location.append(cardWrapper);
    })
}
renderItems(objectsArray,cardsContainer);;
