import {books} from "./sampleBooks.js";
import {owners} from "./sampleOwners.js";
const carousel = document.querySelector('.carousel');
const selectionButtons = document.querySelectorAll('.selections button');
let lastRandomNumber = 0;

function generateRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function appendBook (){
    if (document.querySelector('.carousel').children.length != 0){
        document.querySelector('.carousel').removeChild(document.querySelector('.carousel').firstElementChild)
    }
    let randomNumber = generateRandomNumber(0,books.length -1);
    while(randomNumber === lastRandomNumber){
        randomNumber = generateRandomNumber(0,books.length -1);
    }
    lastRandomNumber = randomNumber;
    let owner = owners.find((owner)=> owner.id === books[randomNumber].dueño);
    let htmlElement = document.createElement('div');
    htmlElement.classList.add('book');
    let categories = '';
    books[randomNumber].categorias.forEach((categoria)=>{
        categories += `<span>${categoria}</span>`;
    })
    htmlElement.innerHTML= `
    <figure class="book__image">
                <img src=${books[randomNumber].portada} alt="" >
            </figure>
            <div class="book__genders">
                ${categories}
            </div>
            <div class="book__info">
                <div class="owner">
                    <figure class="owner__image">
                        <img src=${owner.foto} alt="">
                    </figure>
                    <h4 class="owner__name">${owner.nombre}</h4>
                    <div class="owner__puntuation">
                        <h4 class="owner__puntuation--number">${owner.puntuacion}.0</h4>
                        <div class="owner__puntuation--stars">
                            ${"⭐".repeat(owner.puntuacion)}
                        </div>
                    </div>
                </div>
                <div class="book__infoDescription">
                    <div class="pair">
                        <h6 class="pair__title">Título:</h6>
                        <h6 class="pair__text">${books[randomNumber].nombreLibro}</h6>
                    </div>
                    <div class="pair">
                        <h6 class="pair__title">Autor(A):</h6>
                        <h6 class="pair__text">${books[randomNumber].autor}</h6>
                    </div>
                    <div class="pair">
                        <h6 class="pair__title">Páginas:</h6>
                        <h6 class="pair__text">${books[randomNumber].paginas}</h6>
                    </div>
                    <div class="pair">
                        <h6 class="pair__title">Editorial:</h6>
                        <h6 class="pair__text">${books[randomNumber].editorial}</h6>
                    </div>
                    <div class="pair">
                        <h6 class="pair__title">Publicación:</h6>
                        <h6 class="pair__text">${books[randomNumber].publicacion}</h6>
                    </div>
                </div>
            </div>
    `;
    carousel.appendChild(htmlElement);
}

window.addEventListener('load', ()=>{
    
    appendBook();

    selectionButtons[0].addEventListener('click', ()=>{
        appendBook();
    });
    selectionButtons[1].addEventListener('click', ()=>{
        appendBook();
    });
    selectionButtons[2].addEventListener('click', ()=>{
        appendBook();
    })
    
})

