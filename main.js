let slider = document.querySelector('.slider-contenedor');

let sliderInd = document.querySelectorAll('.slider_test');
let contador =1;
let tamanoWidth = sliderInd[0].clientWidth;
let intevarlo = 3000;



setInterval(()=>{
    slide()
},intevarlo)

function slide(){
    slider.style.transform = `translate(${-tamanoWidth * contador}px)`;
    slider.style.transition = 'transform 2s';
    contador++;

    if (contador === sliderInd.length+1) {
        contador=0
        slider.style.transform = `translate(0px)`
        slider.style.transition = 'transform 0s';            
    }
}

