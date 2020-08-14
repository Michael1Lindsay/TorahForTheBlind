const apiTexts = {
    url: 'https://www.sefaria.org/api/',
    type: 'texts',
    id: 'Genesis',
}
const {url, type, id} = apiTexts;

const apiUrl = `${url}${type}/${id}`;
console.log(apiUrl);
let div1 = document.createElement('div');
const br = document.createElement('br');
let span1 = document.createElement('span');
let span2 = document.createElement('span');
let x = 1;

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (texts) => dom(texts,))


const dom = (data,) => {
    console.log(data);
    textState = 0;
    while(textState <= data.he.length-1){
    this['spanen'+textState] = document.createElement('span');
    this['spanhe'+textState] = document.createElement('span');
    this['br1'+textState] = document.createElement('br')
    this['br2'+textState] = document.createElement('br')
    this['br3'+textState] = document.createElement('br')
    document.getElementById('text').appendChild(this['spanen'+textState])
    document.getElementById('text').appendChild(this['spanhe'+textState])
    this['spanhe'+textState].classList.add('he'+textState)
    this['spanen'+textState].classList.add('en'+textState)
    span1 = (`${data.he[textState]}`);
    span2 = (`${data.text[textState]}`);
    this['spanen'+textState].classList.add('en'+textState)
    this['spanhe'+textState].classList.add('he'+textState)
    document.querySelector('.he'+textState).innerHTML = span2
    document.querySelector('.he'+textState).appendChild(this['br1'+textState])
    document.querySelector('.he'+textState).appendChild(this['br3'+textState])
    document.querySelector('.en'+textState).innerHTML = span1
    document.querySelector('.en'+textState).appendChild(this['br2'+textState])

    
    textState++;
}
}