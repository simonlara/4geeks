let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let avoid=['my home work','my leg','your son','the world']
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let a=  who[ Math.floor(Math.random()*who.length)];
let b=  what[ Math.floor(Math.random()*what.length)];
let c=  avoid[ Math.floor(Math.random()*avoid.length)];
let d=  when[ Math.floor(Math.random()*when.length)];

   



let frase=a+' '+b+' '+c+' '+d;

let excusa= document.getElementById("excusa");
excusa.innerHTML=frase;
