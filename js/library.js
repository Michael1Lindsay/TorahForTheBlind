  // async function getdata(){
  //  const response = await fetch('js/books.json');
  //  const data = await response.json();

  var testf;

  fetch('js/books.JSON')
  .then(response => response.json())
  .then(function(data){
    console.log(data);
    console.log('hello');
  });

  // {
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'cors', // no-cors, *cors, same-origin
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: 'same-origin', // include, *same-origin, omit
  //   ,



      // .then( (texts) => dom(texts,))


//   const dom = (data,) => {
//       console.log(data);


//    const texts = data.texts[0];
//  }
//    const apiTexts = {
//        url: 'https://www.sefaria.org/api/',
//        type: 'shape',
//        id: 'Genesis',
// }
// const {url, type, id} = apiTexts;
//    const apiUrl = `${url}${type}/${texts}`;
//    console.log(apiUrl);
//    fetch(apiUrl)
//        .then( (data) => data.json())
//        .then( (texts) => dod(texts,))


//    const dod = (data,) => {
//         console.log(data.title);
//    }





//  const apiTexts = {
//      url: 'https://www.sefaria.org/api/',
//      type: 'shape',
//      id: 'Genesis',

//  }

// const {url, type} = apiTexts;
//
// const apiUrl = `${url}${type}/${texts}`;
// console.log(apiUrl);
// fetch(apiUrl)
//     .then( (data) => data.json())
//     .then( (texts) => dom(texts,))
//
// const dom = (data,) => {
//
// }
