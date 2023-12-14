const modal = document.querySelector('.modal-description');
const cross = document.querySelector('.escape');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.item');
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i=0; i<showModal.length; i++){
    console.log(showModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }))
}

cross.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})