const words = ["C", "Linux", "github", "churrasco", "Pandas", "numpy"]

console.log(Math.floor(Math.random() * words.length));
let word = words[Math.floor(Math.random() * words.length)];
word = [...word];
const btn = document.querySelector('#btn');
let times = 4;

const w = word;
function toArray(arr){
    for(let i=0;i < arr.length; i++){
        arr[i] = arr[i];
    }
}

function removeLetter(word, letters){
    for(let i=0;i< word.length;i = i +1){
        if(word[i].toLowerCase() == letters[i]){
            //console.log(word[i])
            word.splice(i, 1);
            letters.splice(i, 1);
        }
    }
}

function inputs(word){
    for(let i=0;i< word.length;i++){
        document.querySelector().innerHTML = '__ ' * word.length;
    }
}
btn.addEventListener('click', () => {
    document.querySelector('#interface').innerHTML = '__ ' * word.length;
    const w = word;
    let letters = [];
    console.log('xablau');
    let input = document.getElementById('inp').value;
    console.log(word);
    for(let i=0;i < Number(word.length);i++){
        if(word[i].toLowerCase() === input){ 
            letters[i] = word[i];
            console.log(letters[i]);
        }
    }
    console.log(letters);



    if(letters.length == 0){
        --times
        document.querySelector('#result').innerHTML = `You still have ${times} chances.`;
        console.log(letters);
    }
    
    else{
        //toArray(word);
        removeLetter(word, letters);
        letters = [];
        console.log(word);
        document.querySelector('#result').innerHTML = `Success!`;
        //document.querySelector('#interface').innerHTML = 
    }

    
    if(word.length == 0){
        document.querySelector('#result').innerHTML = `You have gained the Game. Well done!`;
        document.querySelector('#interface').innerHTML = '<button onclick="reset()">Play again</button>'
    }


    if(times == 0){
        times = 4;
        document.querySelector('#result').innerHTML = `You failed. The word was ${w}`
        document.querySelector('#interface').innerHTML = '<button onclick="reset()">Play again</button>'

    }
})

const reset = () => {
    let r = document.getElementById('clear');
    r.submit();
    r.reset();
}