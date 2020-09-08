'use strict';
//to enter user name

var name= prompt(" Enter Your Name ,please !");
//greeting the user 

var greeting=prompt('How Are You Today ? ');
// greeing alert 
alert("Hey, " +name + ", have a nice day and stay safe . \n  Greetings "  );
//  prompt to guess   my name
 var answer = prompt(" Is  my name Hadeel? \n  Yes/No ,and you can put y/n also").toLowerCase();
 if(answer=='yes' ||answer=='y' ){
    console.log('YEEEEEEEES, You   get it right');
    alert("True , my name is hadeel hussam .")
}

else if(answer=='no' ||answer=='n')
{

    alert('You didnt  get it right.');
}
else{
    alert('You entered  invalid value');
}
// promot to guess my major 
var mymajor= prompt(" Is my major an software engineering? ? \n Yes/No  ,and you can put y/n also  ").toLowerCase();
 if(mymajor=='yes'||mymajor=='y'){
    // alert appers when the user click true
    console.log('YEEEEEEEES, great ');
    alert(' Yes true , i am  a senior software engineering  ');
}
else if (mymajor=='no'||mymajor=='n')
{
    alert('You didnt  get it right.');
}
else{
    alert('You entered  invalid value');
}
// promote to guess my age
 var myage=prompt(" Is my age in 22 ?  \n Yes/No  ,and you can put y/n also  ").toLowerCase();
if(myage=='yes'||myage=='y'){
     // alert appers when the user click true
    alert('  Yes true ,  i was born in 1998 :) ');
}
else if(myage=='no'||myage=='n')
{
    alert('You didnt  get it right.');
}
else{
    alert('You entered  invalid value');
}

var cat=prompt(" Do I like cats?").toLowerCase();
if(cat=='yes' || cat=='y'){
   // alert appers when the user click true
    console.log('True');
    alert("I'm really afraid of cats.");
}
else if(cat=='no' || cat=='n')
{
    alert('You didnt  get it right.');
}
else{
    alert('You entered  invalid value');
}

var eat=prompt("I don't eat mansaf ? \n Yes/No  ,and you can put y/n also ").toLowerCase();
if(eat=='no'||eat=='n'){
   // alert appers when the user click false
    console.log(' does anyone hate a  mansaf?');
    alert(" does anyone hate a  mansaf? I eat it ");
}
else if(eat=='yes'||eat=='y')
{
    alert('You didnt  get it right.');
}
else{
    alert('You entered  invalid value');
}

var dif=prompt("Do I have a different twin??   \n Yes/No  ,and you can put y/n also  ",'yes').toLowerCase();
if(dif=='yes'|| dif=='y'){
    // alert appers when the user click true

    console.log('True');
    alert("Yah ,I have a twin brother.");
}
else if(dif=='no'|| dif=='n')
{
    alert('You didnt  get it right.');
}
else{
    alert('You entered  invalid value');
}
