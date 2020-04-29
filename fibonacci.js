function fib(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}


const num = process.argv.slice(2);

console.log('the number is', fib(num));
