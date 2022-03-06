const leftBtn = document.getElementById('left-btn')
const rigthBtn = document.getElementById('right-btn')
const slider = document.querySelector('.main')

let interval = setInterval(run, 3000)

let idx = 1

function run(){
    idx++
    changeBlock()
}

function changeBlock(){
    if (idx > 3){
        idx = 1
    } else if(idx <1){
        idx = 3
    }

    slider.style.backgroundImage = `url('assets/img/main${idx}.png')`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

rigthBtn.addEventListener('click', () => {
    idx++
    changeBlock()
    resetInterval()
})
leftBtn.addEventListener('click', () => {
    idx--
    changeBlock()
    resetInterval()
})