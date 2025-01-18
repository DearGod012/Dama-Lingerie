// Exemplo de funcionalidade simples: Mensagem no console quando um produto é clicado
document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', () => {
        console.log('Produto selecionado!');
    });
});
