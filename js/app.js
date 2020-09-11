'use strict';
//to enter user name
name();
var result = 0;
function name() {
  var name = prompt(" Enter Your Name ,please !");
  //greeting the user 
  var greeting = prompt('How Are You Today ? ');
  // greeing alert 
  alert("Hey, " + name + ", have a nice day and stay safe . \n  Greetings ");
}

function guessinfo() {
  // Q1  prompt to guess   my name
  var answer = prompt(" Is  my name Hadeel? \n  Yes/No ,and you can put y/n also").toLowerCase();
  if (answer == 'yes' || answer == 'y') {
    console.log('YEEEEEEEES, You   get it right');
    alert("True , my name is hadeel hussam .")
    result += 1;
  }

  else if (answer == 'no' || answer == 'n') {

    alert('You didnt  get it right.');
  }
  else {
    alert('You entered  invalid value');
  }




// Q2  promot to guess my major 

  var mymajor = prompt(" Is my major an software engineering? ? \n Yes/No  ,and you can put y/n also  ").toLowerCase();
  if (mymajor == 'yes' || mymajor == 'y') {
    // alert appers when the user click true
    console.log('YEEEEEEEES, great ');
    alert(' Yes true , i am  a senior software engineering  ');
    result += 1;

  }
  else if (mymajor == 'no' || mymajor == 'n') {
    alert('You didnt  get it right.');
  }
  else {
    alert('You entered  invalid value');
  }



//  Q3  promote to guess my age

  var myage = prompt(" Is my age in 22 ?  \n Yes/No  ,and you can put y/n also  ").toLowerCase();
  if (myage == 'yes' || myage == 'y') {
    // alert appers when the user click true
    alert('  Yes true ,  i was born in 1998 :) ');
    result += 1;

  }
  else if (myage == 'no' || myage == 'n') {
    alert('You didnt  get it right.');
  }
  else {
    alert('You entered  invalid value');
  }



//Q4

  var cat = prompt(" Do I like cats?").toLowerCase();
  if (cat == 'yes' || cat == 'y') {
    // alert appers when the user click true
    console.log('True');
    alert("I'm really afraid of cats.");
    result += 1;

  }
  else if (cat == 'no' || cat == 'n') {
    alert('You didnt  get it right.');
  }
  else {
    alert('You entered  invalid value');
  }




//Q5

  var eat = prompt("I don't eat mansaf ? \n Yes/No  ,and you can put y/n also ").toLowerCase();
  if (eat == 'no' || eat == 'n') {
    // alert appers when the user click false
    console.log(' does anyone hate a  mansaf?');
    alert(" does anyone hate a  mansaf? I eat it ");
    result += 1;

  }
  else if (eat == 'yes' || eat == 'y') {
    alert('You didnt  get it right.');
  }
  else {
    alert('You entered  invalid value');
  }



//Q6

  var dif = prompt("Do I have a different twin??   \n Yes/No  ,and you can put y/n also  ", 'yes').toLowerCase();
  if (dif == 'yes' || dif == 'y') {
    // alert appers when the user click true

    console.log('True');
    alert("Yah ,I have a twin brother.");
    result += 1;

  }
  else if (dif == 'no' || dif == 'n') {
    alert('You didnt  get it right.');
  }
  else {
    alert('You entered  invalid value');
  }}



//Q7
function guessnum() {
  var x = prompt('An even number consisting of two digits, located between 20 and 30, and the sum of the two numbers is an even number, and when divided by 2 gives 2');
  x = Number(x);

  for (var i = 0; i < 3; i++) {
    console.log(i);
    console.log(x);
    if (x == 22 && i < 3) {
      alert(" you get it the number is  " + x);
      result += 1;
      break;
    }
    else if (x > 22) {
      alert(" Too heigh");
      x = prompt('An even number consisting of two digits, located between 20 and 30, and the sum of the two numbers is an even number, and when divided by 2 gives 2');
    }
    else if (x < 22) {
      alert("Too Low");
      x = prompt('An even number consisting of two digits, located between 20 and 30, and the sum of the two numbers is an even number, and when divided by 2 gives 2');
    }

    if (i == 2) {
      alert(" you lose the number is 22");

    }


  }
}



function guessodd() {
  var att = 0;
  var arr = [1, 9, 7, 15, 3, 11, 25, 17, 29, 21];


  while (att < 6) {
    var y = prompt(" guess an odd  number berteen 1 to 30 that i put in my array");
    y = Number(y);
    var corr = false;

    for (var it = 0; it <= arr.length; it++) {
      if (y == arr[it]) {
        alert(" you guess right  a number in my array   the number is  " + y);
        //   result += 1;
        att = 6;
        corr = true;
        break;
      }
    }
    if (corr == false && att < 7) { y = alert(" guess again , you enter before  incorect answer "); }
    att += 1;

  }

  alert(" the correct value is" + arr);
  alert(" the final score " + result + "/8");
}

// name();
// guessname();
// guessmajor();
// guessage();
// guesspet();
// guessfood();
// guessdiff();
// // guessnum();
// // guessodd();
