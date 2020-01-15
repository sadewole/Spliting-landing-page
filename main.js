const container = document.querySelector('.container')
const containerLeft = container.querySelector('.left')
const containerRight = container.querySelector('.right')


containerLeft.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
})

containerLeft.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})

containerRight.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
})

containerRight.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})