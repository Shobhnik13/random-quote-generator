let quote=document.querySelector(".quote");
let author=document.querySelector(".author");
let btn=document.querySelector(".btn");
  
const url="https://api.quotable.io/random";
let getquote= ()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.content);
        console.log(data.author);
        //replacing the selectos data by api data
        quote.innerHTML=data.content;
        author.innerHTML=data.author;
    })
};
//calls when we reload
//whenever we will reload getquote will be called
window.addEventListener("load",getquote);
//for clicking on button
btn.addEventListener("click",getquote);