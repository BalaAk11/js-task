// let num = 123456;
// let reverse = 0;
// while(num>0){
//     reverse = (reverse * 10) + (num % 10);
//     num = parseInt(num / 10);
// }
// console.log(reverse);

// let n = 12345;
// let rev = parseInt(n.toString().split('').reverse().join(''))
// console.log(rev);

let date1 = new Date('11-25-2022');
let date2 = new Date('11-30-2022');
function days(date1,date2){
    let timeDiff = date2.getTime() - date1.getTime();
    let totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    return totalDays
}
console.log(days(date1,date2));
