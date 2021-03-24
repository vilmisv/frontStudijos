// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//  const element = arr[i];
//  console.log(element);
//  arr2.push(element * 2);
// }

// console.log(arr2);


// const arr2 = arr.filter((element) => element % 2 === 0);

// console.log(arr2);


  
// arr.forEach(function (element) {
//     console.log(element);
//     arr2.push(element * 2);
//   });
  
//   console.log(arr2);
  const superArray = [
    {
      name: "Jonas",
      age: 29
    },
    {
      name: "ANtanas",
      age: 13
    },
    {
      name: "Julija",
      age: null
    },
    {
      name: "Ernestas",
      age: undefined
    },
    {
      name: "Maksas",
      age: "40"
    }
  ];

  const arr2 = superArray.map(x =>  x.age > 0 ? x.age : x.age === 0);

  console.log(arr2);
  // Atfiltruoti elementus kurie turi skaitoma amziu ir poto grazinti tik amzius
  
  // [29, 13, 40]
  
