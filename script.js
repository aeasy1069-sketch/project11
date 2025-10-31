let mainn=document.getElementById('main')
let alltitle=document.getElementById('allTitle')
 let textTitle=document.getElementById('textTitle')
 let textTitle2=document.getElementById('textTitle2')
 let textTitle3=document.getElementById('textTitle3')
  let textTitle4=document.getElementById('textTitle4')
   let textTitle5=document.getElementById('textTitle5')
    let textTitle6=document.getElementById('textTitle6')
 let sbah=document.getElementById('sban')
 let masaa=document.getElementById('masaaa')
 let noom=document.getElementById('noom')
 let noomAfter=document.getElementById('noomAfter')
  let salah=document.getElementById('salah')
    let Athan=document.getElementById('Athan')
 let btn =document.getElementById('btn')
  let btn1 =document.getElementById('btn1')
  let btn2 =document.getElementById('btn2')
  let btn3 =document.getElementById('btn3')
 let btn4 =document.getElementById('btn4')
  let btn5 =document.getElementById('btn5')
    let btn6 =document.getElementById('btn6')
mainn.onclick=function(){
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
}
sbah.onclick=function(){
alltitle.classList.add('hide')
mainn.classList.add('hide')
textTitle.classList.remove('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')


}
masaa.onclick=function(){
alltitle.classList.add('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.remove('hide')
textTitle3.classList.add('hide')


}
noom.onclick=function(){
alltitle.classList.add('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.remove('hide')


}
noomAfter.onclick=function(){
alltitle.classList.add('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.remove('hide')
}
salah.onclick=function(){
alltitle.classList.add('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
textTitle5.classList.remove('hide')

}
Athan.onclick=function(){
alltitle.classList.add('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
textTitle5.classList.add('hide')
textTitle6.classList.remove('hide')
}
btn.onclick=function(){
    
alltitle.classList.add('hide')
mainn.classList.remove('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
}
btn1.onclick=function(){
    
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
}

btn2.onclick=function(){
    
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
}
btn3.onclick=function(){
    
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
}
btn4.onclick=function(){
    
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
}
btn5.onclick=function(){
    
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
textTitle5.classList.add('hide')
}
btn6.onclick=function(){
    
alltitle.classList.remove('hide')
mainn.classList.add('hide')
textTitle.classList.add('hide')
textTitle2.classList.add('hide')
textTitle3.classList.add('hide')
textTitle4.classList.add('hide')
textTitle5.classList.add('hide')
textTitle6.classList.add('hide')

}
const allcounter=document.querySelectorAll('#zr1')
allcounter.forEach(zr => {
zr.addEventListener('click',()=>{
    let curent =parseInt(zr.innerHTML    )
if (curent>0) {
  curent--;
  zr.innerHTML=curent;
  if (curent===0) {
    zr.classList.add('finish') 
  } }

  })
  })
const bttn=document.querySelectorAll('#bttn')
bttn.forEach(bt=>{
  addEventListener('scroll',()=>{
      if (scrollY>=100) {
   bt.style.display='block'
  }else{
    bt.style.display='none'
  }
  })
  bt.onclick=function () {
    scroll({
      left:0,
      top:0,
      behavior:'smooth'
    })
  }

})


if (localStorage.length>0){ 
document.body.innerHTML.classList=localStorage.getItem('color')
}
const togleButton=document.getElementById('togleButton')
let isNight=false;
togleButton.addEventListener('click',()=>{
  isNight=!isNight;
  document.body.classList.toggle('night',isNight)
  togleButton.textContent=isNight?'غامق ' :' فاتح';
localStorage.setItem('color',isNight)
})











const sentence=' ألا بذِكر الله تطمئنُ القلُوب ';

let index = 0;
        const outputElement = document.getElementById('titles');

        const intervalId = setInterval(() => {
            if (index < sentence.length) {
                outputElement.textContent += sentence[index];
                index++;
                
            } else {
                clearInterval(intervalId);}
        },150)