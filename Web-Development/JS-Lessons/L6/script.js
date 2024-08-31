const url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';

let body = document.querySelector('#desc');
let op = document.querySelector('#opnions');
let genders = document.querySelector('#genders');
let cast = document.querySelector('#cast');
let similarTitles = document.querySelector('#titles');

let film_List = [];
const loadFilms = (list) => {
    list.forEach(element => {
        film_List.push(element)
    });
    generate_body();
}

const generate_body = () => {
    film_List.forEach(element => {

        //console.log(element)

        let opnionsList = '';
        element.opinioes.forEach(opniao => {
           opnionsList += `<li>${opniao.rating} | ${opniao.descricao}</li>`
        });

        let gendersList = ''
        element.generos.forEach(genero => {
            gendersList += `<li>${genero}</li>`
        });

        let castList = '';
        element.elenco.forEach(elenco => {
            castList += `<li>${elenco}</li>`
        });

        let relationedTitles = '';
        element.titulosSemelhantes.forEach(titulo => {
            relationedTitles += `<li>${titulo}</li>`
        });

        body.innerHTML += `<p class='film-name'>${element.titulo}</p>
                          <p class="film-desc">${element.resumo}</p>
                          <p class="classification">${element.classificacao}</p>
                          <img src="${element.figura}">
                          <ul><strong>Opnions</strong>: ${opnionsList}</ul>
                          <ul><strong>Generos: ${gendersList}</strong></ul>
                          <ul><strong>Titulos semelhantes: ${relationedTitles}</strong></ul>
                          `

        // for (let i = 0; i < element.generos.length; i++) {
        //     genders.innerHTML += `<li>${element.generos[i]}</li>`
        // }
        // for (let i = 0; i < element.elenco.length; i++) {
        //     cast.innerHTML += `<li>${element.elenco[i]}</li>`
        // }
        // for (let i = 0; i < element.titulosSemelhantes.length; i++) {
        //     let similarTitles_var = element.titulosSemelhantes;
        //     similarTitles.innerHTML += `<li>${film_List[similarTitles_var[i]].titulo}</li>`
        // }
    });
}





const my_fetch = () => {
    headers = new Headers();

    const init = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };

    fetch(url, init)
        //first then is related to the status response, if it's ok or not
        .then((response) => {
            return response.text()
        })
        .then(response => {
            //for this function, you have first to convert to an object recognized by JS
            const list = JSON.parse(response);
            console.log(list)
            loadFilms(list)
        })
};



const btn = document.querySelector('#btn');

btn.addEventListener('click', my_fetch);