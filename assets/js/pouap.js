const onPouap = document.getElementById('pouap-on')
const submit = document.getElementById('btn2')
const pouap =document.querySelector('.pouap')

onPouap.addEventListener ('click', () =>{
    pouap.classList.toggle('active')   
})

submit.addEventListener ('click', (event) =>{
    event.preventDefault()
    pouap.classList.remove('active') 
})