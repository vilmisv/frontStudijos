
const triangleBtn = document.getElementById('triangle-btn');
const clear = document.getElementById('clear');
const output = document.querySelector('.output');



function triangle () {
    let line = '';

    for (let i = 1; i < 10; i++) {
        let rez = line += ' *';
        console.log(rez)
    }


}

// function pyramid () {
//     let line = '';

//     for (let i = 1; i < 10; i++) {
//         for (let j = 0; j < 10; i++) {
//             let star = '*'; 
//         }
//         let rez = line += star;
//         console.log(rez)
//     }
// }

// pyramid();


window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("myLog").appendChild(node);
    }
  }

  
triangleBtn.addEventListener('click', event =>  {
    const rez = console.log(triangle())

});
