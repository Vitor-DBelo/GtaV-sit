const btnPlataforma = document.querySelector('.btn-plataforma');
const listaPlataformas = btnPlataforma.querySelector('.plataformas');

btnPlataforma.addEventListener('click', function() {
    listaPlataformas.classList.toggle('ativo');
});