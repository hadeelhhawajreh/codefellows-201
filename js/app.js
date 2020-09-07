'use strict';
//to enter user name
var name= prompt(" Enter Your Name ,Please!");
//greeting
var greeting=prompt('How Are You Today ? ');
// greeing alert 
alert(' Greeting ' + name + ' Wish To You A Nice Day and Stay Safe ');
// yes/no question about my name
 var answer = confirm('My name is Hadeel?');
 if(answer==true){
    console.log('YEEEEEEEES');
    alert("Truuuuuuuuuuuueeeeeeeee")
}
// promot to guess my major 
var mymajor= prompt(" Guess what is  my major   ( Software engineering ,computer science and computer engineering? )");
 if(mymajor.toLowerCase()=='software engineering'){
    // alert appers when the user click true

    alert(' Youre great');
}
// promote to guess my age
 var myage=prompt(" Guess my age :) hint **  \' i was born in 1998 \'  ");
 if( parseInt(myage) ==22){
  // alert appers when the user click true
    alert(' Youre Good in guess :) ');}
 var fav=prompt(' Guess what i love more (front, back) hint ** \' i like the  desin \'');
 
 if(fav.toLowerCase()=="front"){
  // promote to guess what i love fron or back

    // alert appers when the user click true

    alert('  GOOD  JOB :) ');

 }

var cat=confirm(" I don't like cat?");
if(cat==true){
   // alert appers when the user click true

    console.log('True');
    alert("TRUEEEEEEE")
}

var eat=confirm("I don't eat mansaf ?");
if(eat==true){
   // alert appers when the user click false

    console.log('False , does anyone hate a  mansaf?');
    alert("False , does anyone hate a  mansaf?")
}
// promote to guess my sleep hours

var sleep=confirm(" I don't sleep over than 7 hours daily?  ");
if(sleep==true){
    // alert appers when the user click true

 
    console.log('True');
    alert("TRUEEEEEEE")
}


var dif=confirm(" I have a different twines? ")
if(dif==true){
    // alert appers when the user click true

    console.log('True');
    alert("TRUEEEEEEE")
}

 

 
 

