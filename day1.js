let num = 123456;
let reverse = 0;
while(num>0){
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10);
}
console.log(reverse);