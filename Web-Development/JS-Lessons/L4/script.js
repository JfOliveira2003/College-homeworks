//import { pokedex } from "./myJson";


const presentation = document.querySelector('#presentation');

const btn = document.querySelector('#btn');

function searching(string){
    
    for(let i=0;i < pokedex.length;i++){
        if(pokedex[i].name.english.toLowerCase() === string){
            return pokedex[i]

        }
    }
}


btn.addEventListener('click', () => {
    let input = document.getElementById('inp_pokemon').value;
    console.log(input);
    //Datalist or something else:
    data = searching(input);
    console.log(data);

    //presentation:
    if(data == undefined){
        presentation.innerHTML = `<p>There is a problem with your code bro. Fix this!</p>`
    }
    else{
         presentation.innerHTML = `<img load="lazy" id="poke-img" height="80px" width="80px" src="${data.image.sprite}">`
         document.querySelector('#poke-name').innerHTML = data.name
         document.querySelector('#poke-desc').innerHTML = data.description
        }
})

//console.log(pokedex)

// pokedex.forEach(element => {
//     //console.log(element.name.english)
//     presentation.innerHTML += `<p>${element.name.english} 
//     <img src="${element.image.sprite}"></p>`
// });