
const acordeonTitulo = document.querySelectorAll('.acordeon .titulo')

acordeonTitulo.forEach((titulo) => {
    titulo.addEventListener('click', (e) => {
        const acordeon = titulo.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})