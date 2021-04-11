// function censor(object) {
//     if (!object.naughty) {
//       return true;
//     }
//   }

//   const rapLyrics = [
//     {
//       word: 'money',
//       naughty: false
//     },
//     {
//       word: 'lean',
//       naughty: true
//     },
//     {
//       word: 'money',
//       naughty: false
//     },
//     {
//       word: 'clothes',
//       naughty: false
//     }
//   ];
  
// const paragraph = document.createElement('p');

// rapLyrics.forEach((value) => {
//   const textElement = document.createTextNode(' ' + value.word + ' ');

//   if (value.naughty) {
//     const span = document.createElement('span');
//     span.append(textElement);
//     paragraph.append(span);
//   } else {
//     paragraph.append(textElement);
//   }
// });



// document.body.append(paragraph);


function createItem () {
  const button = document.createElement('button');
  button.innerHTML = 'push me';

  function deleteItem () {
    button.remove();
  }

  button.addEventListener('click', deleteItem);
  document.body.append(button);
}

createItem();