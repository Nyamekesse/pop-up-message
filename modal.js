const btn = document.querySelector('a');
const modal_back = document.querySelector('.modal-overlay');


btn.addEventListener('click', ()=>{
    modal_back.classList.add('active');
})
modal_back.addEventListener('click', (e)=>{
    if (e.target.classList.contains('modal-overlay')) {
        modal_back.classList.remove('active');
    }
})