const form = document.querySelector('form');
const searchResult = document.querySelector('.search');
const container = document.querySelector('.container');
let userQuery = '';

let i = 0;
let txt="Search Your Food Item Recipe Here...";
let speed = 100;

function typeWriter(){
    if(i<txt.length){
        document.getElementById("intro-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const ID ='6e657aaa';
const KEY = '33ff06bd18f888120ba1053fb71adc08';

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    userQuery = e.target.querySelector('input').value;
    console.log(userQuery);
    fetchData();
});

async function fetchData(){
    const baseUrl = `https://api.edamam.com/search?q=${userQuery}&app_id=${ID}&app_key=${KEY}`;
    const response = await fetch(baseUrl);
    const data = await response.json();
    createContent(data.hits);
    console.log(data);
}

function createContent(results){
    initalContent = '';

    results.map(results=>{
        initalContent +=
        `<div class="search">
        <div class="item">
            <img src="${results.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${results.recipe.label}</h1>
                <a class="view-bin" target="_blank" href="${results.recipe.url}">View Recipe</a>
            </div>
            <p class="recipe-desc">Calories : ${results.recipe.calories.toFixed(2)}</p>
        </div>
    </div>
        `
    })

    searchResult.innerHTML = initalContent;
}










