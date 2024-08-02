const btn = document.querySelector("#mybtn");

btn.onclick = () => {
    console.log("foi")

    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;

    let elementP = document.querySelector("#texto");
    let text = document.querySelector("#texto").textContent;

    for(let i = 0; i < Number.parseInt(text.length); i++){
        aux = text.split('');
        if(aux[i] != ' ' && aux[i] != ',' && aux[i] != '.' && aux[i] != '!')
            sum++;
    }
    console.log(sum);
    text = text.split(' ');
    sum2 = Number.parseInt(text.length);
    let novoTexto = ""
    console.log(sum2)
    for(let i =0;i< Number.parseInt(text.length);i++){
        if(text[i].toLowerCase() == 'lorem'){
            sum3++;
            novoTexto += 'Biscoito! ';
        }else{
            novoTexto += text[i]+" "
        }
    }
    //console.log(sum3)
    //console.log(text)
    elementP.innerHTML = novoTexto;
}