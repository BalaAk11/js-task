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

// task 2
function myFunction() {
    var input, filter, ul,a, i, li, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUl');
    li = ul.getElementsByTagName('li');
    for ( i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    
    }


