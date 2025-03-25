let imgSlider = document.querySelectorAll('.slider-container .slider-box')
let btnNext = document.querySelector('#proxima')
let btnBack = document.querySelector('#anterior')
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav')

let contatorImg = imgSlider.length
let imgAtiva = 0

btnNext.addEventListener('click', () =>{
    imgAtiva++

    if(imgAtiva >= contatorImg){
        imgAtiva = 0
    }

    mostrarSlider()
})

btnBack.addEventListener('click', () =>{
    imgAtiva--

    if(imgAtiva < 0){
        imgAtiva = contatorImg -1
    }

    mostrarSlider()

})

function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo')
    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo')

    antigaImg.classList.remove('ativo')
    antigoBtnNav.classList.remove('ativo')

    imgSlider[imgAtiva].classList.add('ativo')
    btnNav[imgAtiva].classList.add('ativo')
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener('click', ()=>{
        imgAtiva = indice
        mostrarSlider()
    })
})