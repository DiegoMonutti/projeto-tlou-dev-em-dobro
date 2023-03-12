const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        selecionarBotao(botao);
        trocarImagemFundo(indice);
    })
})

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function trocarImagemFundo(indice) {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
    imagens[indice].classList.add('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
