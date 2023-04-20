'use strict'; 

let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorial',
    'Furyo Squad',
    'S Tiers',
    'Porto Rico',
    'Argentine',
    'Bresil',
    'France',
    'Italie',
    'Zinzin de l"espace',
];

const resultsBox = document.querySelector('[data-result-box]');
const inputBox = document.querySelector('[data-input]');



inputBox.onkeyup = function(){
    let result = [];
    const input = inputBox.value;
    resultsBox.style.display = 'block';

    if(input.length){
        result = availableKeywords.filter( item => {
            if(item.toLowerCase().includes(input.toLowerCase())){
                return item
            };
        });
    }

    if(!result.length){
        resultsBox.style.display = 'none';
    }

    display(result);
}

function display(result){
    const content = result.map( (list, index) => {
        return `
            <li id="${index}", data-click>${list}</li>
        `;
    });

    resultsBox.innerHTML = `
    <ul> ${content.join("")} </ul> 
    `;
}


window.addEventListener('click', (evt) => {
    if(evt.target.hasAttribute('data-click')){
        inputBox.value = evt.target.innerHTML;
        resultsBox.style.display = 'none';
    }
});