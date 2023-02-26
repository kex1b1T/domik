//1 zad

 //let txt = document.querySelector(`#txt`)
 //let p = document.querySelector(`p`)
 //txt.addEventListener(`blur`,()=>{
 //p.textContent = txt.value
 //})

//2 zad

// let txt1 = document.querySelector(`#txt1`)
// let txt2 = document.querySelector(`#txt2`)
// let txt3 = document.querySelector(`#txt3`)
// let but = document.querySelector(`#but`)
// let p = document.querySelector(`p`)
// but.addEventListener(`click`,()=>{
// p.textContent = +txt1.value + +txt2.value + +txt3.value
// })

//3 zad

// var txt = document.querySelector(`#txt1`) 
// txt.addEventListener(`blur`,()=>{
//     let a = 0
//     let b = txt.value;
//     let ass = [];
//     ass.push(b);
//     ass = b.split(``);
//     for(let i = 0; i < ass.length; i++){
//      a += +ass[i]
// }
//     txt.value = a
// })

//4 zad

// let txt = document.querySelector(`#txt1`)
// txt.querySelector(`blur`, ()=>{ 
//     let a = 0
//     let c = 0
//     let b = txt.value;
//     let ass = [];
//     ass.push(b);
//     ass = b.split(`,`);
//     for(let i = 0; i < ass.length; i++){
//      a += +ass[i]
//      c = a / ass.length
// }
//     txt.value = c
// })

//5 zad

// let txt1 = document.querySelector("#txt1")
// let txt2 = document.querySelector("#txt2")
// let txt3 = document.querySelector("#txt3")
// let txt4 = document.querySelector("#txt4")
// txt1.addEventListener("blur", ()=>{
//     let a = txt1.value;
//     let ass = [];
//     ass.push(a);
//     ass = a.split(" ");
//     txt2.value = ass[0]
//     txt3.value = ass[1]
//     txt4.value = ass[2]
// })

//6 zad

// let txt1 = document.querySelector("#txt1")
// let txt2 = document.querySelector("#txt2")
// let txt3 = document.querySelector("#txt3")
// let txt4 = document.querySelector("#txt4")
// txt1.addEventListener("blur",func)
// function func(){
//     let a = txt1.value
//     let ass = []
//     ass.push(a)
//     ass = a.split(" ")
//    for(let i = 0; i<ass.length; i++){
//     ass[i] = ass[i].slice(0,1).toUpperCase() + ass[i].slice(1)
// }
//     txt1.value = ass.join(" ")
// }

//7 zad

// let txt1 = document.querySelector(`#txt1`)
// txt1.addEventListener(`blur`,()=>{

//    let a = 0
//    let b = txt1.value
//    let ass = []
//    ass.push(b)
//    ass = b.split(" ")
//    for(let i = 0; i<ass.length; i++){
//     a++
//    }
//    txt1.value = a

// })

//8 zad

// let txt1 = document.querySelector("#txt1")
// txt1.addEventListener("blur",()=>{
//    let a = txt1.value
//    let ass = []
//    ass.push(a)
//    ass = a.split(".")
//    txt1.value = ass.reverse().join("-") + "."

// })

//9 zad

// let txt1 = document.querySelector(`#txt1`)
// let but = document.querySelector(`#but`)
// but.addEventListener(`click`,()=>{
//    let b = txt1.value
//    let ass1 = []
//    ass1.push(b)
//    ass1 = b.split(``)
//    let ass2 = []
//    ass2.push(b)
//    ass2 = b.split(``)
//    ass2 = ass2.reverse()
//    if(ass1[0] == ass2[0]){
//       txt1.value = 'yes'
//    }
//    else{
//       txt1.value = 'no'
//    }
// console.log(ass1,ass2)
// })

//10 zad

// let txt1 = document.querySelector(`#txt1`)
// let but = document.querySelector(`#but`)
// but.addEventListener(`click`,()=>{
//    let b = txt1.value
//    let ass1 = []
//    ass1.push(b)
//    ass1 = b.split(``)
//    let ass2 = []
//    ass2.push(b)
//    ass2 = b.split(``)
//    ass2 = ass2.reverse()
//    if(ass1[0] == ass2[0]){
//       txt1.value = 'yes'
//    }
//    else{
//       txt1.value = 'no'
//    }
// })

//11 zad

// let p = document.querySelectorAll("p")
// let but = document.querySelector('#but')
// but.addEventListener("click", ()=>{ 
//     for(let i = 0; i<p.length;i++){
//     p[i].textContent= p[i].textContent + (i + 1)
// }
// })

//12 zad

// let a = document.querySelector("#a")
// let b = document.querySelector("#b")
// a.addEventListener("mouseover", ()=>{
//       a.textContent = a.textContent + "(a.href)"
//       b.textContent = b.textContent + "(b.href)"
// })

//13 zad

// let a = document.querySelectorAll("#a")
// a.addEventListener("mouseover", ()=>{
//       for (let i = 0; i < a.length; i++)
//       if(a[i].href.indexOf("http://") == 0){
//          a[i].textContent = a[i].textContent + '&rarr;' + a[i].href
//       }
//       else{
//          a[i].textContent = a[i].textContent + a[i].href
//       } 
// })

 //14 zad

// let a = document.querySelector('#a')
// let b = document.querySelector('#b')
// a.addEventListener('click',func1)
// b.addEventListener('click',func2)
// function func1(){
//     a.textContent = a.textContent ** 2;
  
// }
// function func2(){
//     b.textContent = b.textContent ** 2;
 
// }

//15 zad

// let txt1 = document.querySelector("#txt1")
// txt1.addEventListener("blur", ()=>{
//    let date = new Date(2016,12,31);
//    let day = date.getDay();
//    let days = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота']
//    txt1.value = (days[day])

// })

//16 zad

// let txt1 = document.querySelector("#txt1")
// let but1 = document.querySelector("#but1")
// let but2 = document.querySelector("#but2")
// but1.addEventListener("click", func1)
// but2.addEventListener("click", func2)
// function func1(){
//     txt1.value++
// }
// function func2(){
//    let a = txt1.value
//    if(a > 0){
//     txt1.value--
//    }
// }

//17 zad

// let txt1 = document.querySelector("#txt1")
// let a = document.querySelector("#a")
// let b = document.querySelector("#b")
// a.addEventListener("click", func1)
// b.addEventListener("click", func2)
// function func1(){
//    txt1.value = +txt1.value + 1
// }
// function func2(){
//     txt1.value = +txt1.value + 1
//  }

 //18 zad

//  let txt = document.querySelectorAll("#txt1")
//  let but = document.querySelector("#but")
//  but.addEventListener('click',()=>{
//     for(let i = 0; i < txt.length; i++){
//     txt[i].textContent = txt[i].textContent.slice(0,10) + "..."
//     }
//  })

//19 zad

// let txt = document.querySelector("input")
// txt.addEventListener("blur",()=>{

//   let a = +txt.value
//   if( a > 1  && a < 101){
//     txt.style.backgroundColor = 'green'
//   }
//   else{
//     txt.style.backgroundColor = 'red'
//   }
// })

//20 zad

// let txt = document.querySelector(`#zxc`); 
// let but = document.querySelector(`#but`); 
// but.addEventListener(`click`, func) 
// function func(){ 
// let a = ``; 
// let b = qwertyuiopasdfghjklzxcvbnm1234567890 
//     for(let i = 0; i<8; i++){ 
//         a += b.charAt(Math.floor(Math.random() * b.length)); 
//     } 
//     txt.value = a; 
// } 
 
//21 zad

// let txt = document.querySelector(`#zxc`); 
// let but = document.querySelector(`#but`); 
// but.addEventListener(`click`, func) 
// function func(){ 
// let a = ``; 
// let b =  txt.value 
//     for(let i = 0; i<b.length; i++){ 
//         a += b.charAt(Math.floor(Math.random() * b.length)); 
//     } 
//     txt.value = a; 
// } 
 
//22 zad

// let txt = document.querySelector(`#zxc`); 
// let but = document.querySelector(`#but`); 
// let p = document.querySelector(`#p`); 
 
// but.addEventListener(`click`, func) 
// function func(){ 
// p.textContent =  (txt.value - 32) * 5/9 
// } 
 
//23 zad
    
// let txt = document.querySelector(`#zxc`); 
// let but = document.querySelector(`#but`); 
// let p = document.querySelector(`#p`); 
 
// but.addEventListener(`click`, func) 
// function func(){ 
// let a = txt.value 
// for(let i = a - 1; i >= 1; i--){ 
//     a= a+1 
// } 
// p.textContent = a 
// } 
 
//24 zad

// let txt1 = document.querySelector(`#zxc1`); 
// let txt2 = document.querySelector(`#zxc2`); 
// let txt3 = document.querySelector(`#zxc3`); 
// let but = document.querySelector(`#but`); 
// let p = document.querySelector(`#p`); 
// but.addEventListener(`click`, func) 
// function func(){ 
// let a = Math.sqrt(txt1.value) 
// let b = Math.sqrt(txt2.value) 
// let c = Math.sqrt(txt3.value) 
//   return  p.textContent = String.a + String.b + String.c 
// }
