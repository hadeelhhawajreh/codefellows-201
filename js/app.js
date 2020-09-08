'use strict';
//to enter user name
var name= prompt(" Enter Your Name ,please !");
//greeting
var greeting=prompt('How Are You Today ? ');
// greeing alert 
alert("Hey, " +name + ", have a nice day and stay safe . \n  Greetings "  );
// yes/no question about my name
 var answer = prompt("My name is Hadeel? \n  Yes/No ,and you can put y/n also").toLowerCase();
 if(answer=='yes' ||answer=='y' ){
    console.log('YEEEEEEEES, You   get it right');
    alert("True , my name is hadeel hussam .")
}
else{
    alert('You didnt  get it right.')
}
// promot to guess my major 
var mymajor= prompt("My Major is  Software engineering ? \n Yes/No  ,and you can put y/n also  ").toLowerCase();
 if(mymajor=='yes'||mymajor=='y'){
    // alert appers when the user click true
    console.log('YEEEEEEEES, great ');

    alert(' Yes true , i am  a senior software engineering  ');
}
else{
    alert('You didnt  get it right.')
}
// promote to guess my age
 var myage=prompt(" Is my age in 22 ?  \n Yes/No  ,and you can put y/n also  ").toLowerCase();
if(myage=='yes'||myage=='y'){ // alert appers when the user click true
    alert('  Yes true ,  i was born in 1998 :) ');
}
else{
    alert('You didnt  get it right.')
}

var cat=prompt(" I don't like cat?").toLowerCase();
if(cat=='yes' || cat=='y'){
   // alert appers when the user click true
    console.log('True');
    alert("I'm really afraid of cats.");
}
else{
    alert('You didnt  get it right.')
}

var eat=prompt("I don't eat mansaf ? \n Yes/No  ,and you can put y/n also ").toLowerCase();
if(eat=='no'||eat=='n'){
   // alert appers when the user click false
    console.log(' does anyone hate a  mansaf?');
    alert(" does anyone hate a  mansaf?");
}
else{
    alert('You didnt  get it right.')
}

var dif=prompt(" I have a different twines?   \n Yes/No  ,and you can put y/n also  ",'yes').toLowerCase();
if(dif=='yes'|| dif=='y'){
    // alert appers when the user click true

    console.log('True');
    alert("Yah ,I have a twin brother.");
}
else{
    alert('You didnt  get it right.')
}
