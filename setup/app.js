// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// console.log(clearBtn);

// edit option

let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********
// complete the function
function solution(string) {
  s = string.split('').map(function (a) {
    if (a === a.toUpperCase()) {
      a = ' ' + a;
    }
    return a;
  });

  return s.join('');
}
// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el;
//     }
//     return el;
//   });
//   return string.join('');
// }
console.log(solution('camelCasing'));
// ****** FUNCTIONS **********

// ****** SETUP ITEMS **********
