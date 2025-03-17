const form = document.getElementById('form-contato');
const contatos = [];
const telefones = [];


let linhas = '';
let linhaResultado = '';



form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const nomeContato = document.getElementById('nome-contato');
    const telefoneContato = document.getElementById('telefone-contato');
    
    if(contatos.includes(nomeContato.value)){
        alert('Atividade já inserida anteriormente');
        return;
    }else{
        contatos.push(nomeContato.value);
        telefones.push(telefoneContato.value);
        let linha = '';
        linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telefoneContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    nomeContato.value = '';
    telefoneContato.value = '';
    nomeContato.focus();
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    document.getElementById('contagem').innerText = contatos.length;
}