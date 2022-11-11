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

// let date1 = new Date('11-25-2022');
// let date2 = new Date('11-30-2022');
// function days(date1,date2){
//     let timeDiff = date2.getTime() - date1.getTime();
//     let totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
//     return totalDays
// }
// console.log(days(date1,date2));

// day 2
// function myFunction() {
//     var input,  ul, i, li;
//     input = document.getElementById('myInput');
//     input = input.toLowerCase();
//     // ul = document.getElementById('myUl');
//     // li = ul.getElementsByTagName('li');
    
//     for ( i=0; i<li.length; i++){
   
//         if (!li[i].innerHTML.toLowerCase().includes(input)) {
//           li[i].style.display = "";
//         } else {
//           li[i].style.display = "none";
//         }
//       }
    
//     }

// function vowelsConsonants(s){
//   const letters = s.toString().split('');
//   console.log(letters);
//   let vowels = letters.filter((letter) =>{
//     return letter.includes('a','e','i','o','u');
//   } );
//   console.log(vowels);
// }
// vowelsConsonants('bala');

// day 3
function romanize(num){
    let lookup = {M:1000, CM:900, D:500, CD:400, C:100,};
    let roman = "";
    let i;
    for (i in lookup){
        while (num >= lookup[i]){
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}
console.log(romanize(500));

