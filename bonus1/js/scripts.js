/*
1. scrivo ciclo che faccia incrementare di 1 da 1 a 100
2. faccio dei controlli dove:
    a. se numero è divisibile per 3 e anche per 5 scrive FizzBuzz
    b. se numero è divisibile solo per 3 scrivo Fizz
    c. se numero è divisibile solo per 5 scrivo Buzz
    d. altrimenti scrive il numero stesso
3. procedo alla fase dove mando gli elementi nell'html
*/

const container = document.querySelector("div.container");

for (let i = 1; i <= 100; i++) {

      if (i % 3 == 0 && i % 5 ==0) {

            console.log('FizzBuzz');
            const newDiv = document.createElement('div');
            newDiv.innerHTML = 'FizzBuzz';
            container.append(newDiv);

      } else if (i % 3 == 0) {

            console.log('Fizz');
            const newDiv = document.createElement('div');
            newDiv.innerHTML = 'Fizz';
            container.append(newDiv);

      } else if (i % 5 == 0) {

            console.log('Buzz');
            const newDiv = document.createElement('div');
            newDiv.innerHTML = 'Buzz';
            container.append(newDiv);
      } else {

            console.log(i);
            const newDiv = document.createElement('div');
            newDiv.innerHTML = i;
            container.append(newDiv);

      }

}