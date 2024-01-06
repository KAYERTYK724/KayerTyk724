// fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Thực hiện các tác vụ bất đồng bộ
      if (/* tác vụ */) {
        resolve(data);
      } else {
        reject('Error');
      }
    });
  }
  fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
//  Object Literal
const name = 'John';
const age = 30;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet();