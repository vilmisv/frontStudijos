const triangleBtn = document.getElementById('triangle-btn');
const clear = document.getElementById('clear');


function render(result) {
const output = document.querySelector('.output').textContent = result;  
}

clear.appendChild




// function triangle (result) {
//     let line = '-';

//     for (let i = 1; i < 10; i++) {
//         let result = line += '*';
//          console.log(result)
//     }
// }


// triangle();

function generatePyramid() {
  let totalNumberofRows = 5;
  let output = '';
  for (let i = 1; i <= totalNumberofRows; i++) {
      for (let j = 1; j <= i; j++) {
          output += j + '  ';
      }
      console.log(output);
      output = '';
  }

}


render(generatePyramid());


function pyramid(n) {  // Input or number of rows
  for (var i = 1; i <= n; i++) {
      var s = "";
      // For every each counter there exist 2*n-1 value
      for (var j = 1; j <= (2 * n - 1); j++) {
        // Hint: Check the workbook image
          (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";   
      }
      console.log(s);
      const output = document.querySelector('.output').innerHTML = s;
  }
}

pyramid(10);


function generatePyramidReverse(n) {

  let star = '* '; 
  let line = ' -';
 
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j < i; j++) {
      
    }
     let rez = line += star;
    console.log(rez);       
  }

}

generatePyramidReverse();


window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("myLog").appendChild(node);
    }
  }

  
// triangleBtn.addEventListener('click', event =>  {
//     const rez = console.log(triangle())

// });
