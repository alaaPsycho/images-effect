let container = document.querySelector('.container')
let img = document.querySelectorAll('.container img');
let overlay = document.querySelector('.overlay');
let closeImg = document.querySelector('.overlay span')

console.log(overlay)
img.forEach((im)=>{
    console.log(im)
console.log(overlay.value)

    im.addEventListener('click',showOverlay)
    
})
//show overlay
function showOverlay(){
    overlay.style.display ='block';
    overlay.children[0].src = this.src
}

//close overlay
closeImg.addEventListener('click',closeOverlay)

function closeOverlay() {
    overlay.style.display ='none';
}

