const sliderElement = document.querySelector('.keen-slider')
let interval = 0
function autoplay(run) {
    clearInterval(interval)
    interval = setInterval(() => {
        if (run && slider) {
            slider.next()
        }
    }, 2000)
}

const slider = new KeenSlider(sliderElement, {
    slidesPerView: 1,
    spacing: 10,
    breakpoints: {
        '(min-width: 600px)': {
            slidesPerView: 4,
            spacing: 30,
            dragSpeed: 1,
        },
    },
    centered: true,
    mode: 'snap',
    loop: true,
    duration: 500,
    dragStart: () => {
        autoplay(false)
    },
    dragEnd: () => {
        autoplay(true)
    },
})

sliderElement.addEventListener('mouseover', () => {
    autoplay(false)
})
sliderElement.addEventListener('mouseout', () => {
    autoplay(true)
})
autoplay(false)
