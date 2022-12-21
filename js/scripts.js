/*
1. scrivo ciclo che faccia incrementare di 1 da 1 a 100
2. faccio dei controlli dove:
    a. se numero è divisibile per 3 e anche per 5 scrive FizzBuzz
    b. se numero è divisibile solo per 3 scrivo Fizz
    c. se numero è divisibile solo per 5 scrivo Buzz
    d. altrimenti scrive il numero stesso
3. procedo alla fase dove mando gli elementi nell'html
*/

for (let i = 1; i <= 100; i++) {

      if (i % 3 == 0 && i % 5 ==0) {

            console.log('FizzBuzz');

      } else if (i % 3 == 0) {

            console.log('Fizz');

      } else if (i % 5 == 0) {

            console.log('Buzz');

      } else {

            console.log(i);

      }

}