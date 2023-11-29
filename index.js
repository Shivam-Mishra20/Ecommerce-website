let menuicon = document.getElementById('menuicon')
let  navbars =  document.getElementById('nav')
let  close =  document.getElementById('close')


if(menuicon){
    menuicon.addEventListener('click',()=>{
    navbars.classList.toggle('open')
    })
}
if(close){
    close.addEventListener('click',()=>{
        navbars.classList.remove('open')
    })
}


//  for dark mode 
let body =document.body
let icon =  document.getElementById('compass')
icon.addEventListener('click',()=>{
    body.classList.toggle('dark')
   
})