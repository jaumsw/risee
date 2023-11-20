document.addEventListener('DOMContentLoaded', function () {
    function salvarGasto() {
        var nome = document.getElementById('gastoNome').value;
        var valor = parseFloat(document.getElementById('gastoValor').value) || 0; 
        var data = document.getElementById('gastoData').value;
        var categoriaSelecionada = document.getElementById('selCategoria');
        var categoria = categoriaSelecionada.options[categoriaSelecionada.selectedIndex].text;
        // Atualizar o valor na tabela
        var tabelaDadosUsuario = document.getElementById('tabela-dados-usuario');
        var newRow = tabelaDadosUsuario.insertRow();
        var cellNome = newRow.insertCell(0);
        var cellValor = newRow.insertCell(1);
        var cellData = newRow.insertCell(2);
        var cellCategoria = newRow.insertCell(3);

        cellNome.innerHTML = nome;
        cellValor.innerHTML = 'R$ ' + valor.toFixed(2);
        cellData.innerHTML = data;
        cellCategoria.innerHTML = categoria;

        var categoriaSpan = document.getElementById(categoria.toLowerCase() + '-span');
        var categoriaValor = parseFloat(categoriaSpan.innerText.replace('R$ ', '').replace(',', '.')) || 0;
        categoriaValor += valor;
        categoriaSpan.innerText = 'R$ ' + categoriaValor.toFixed(2);

        var despesaDiv = document.getElementById('gastoTxt');
        var despesaValor = parseFloat(despesaDiv.innerText.replace('R$ ', '').replace(',', '.')) || 0;
        despesaValor += valor;
        despesaDiv.innerText = 'R$ ' + despesaValor.toFixed(2);

        var saldoDiv = document.getElementById('saldo'); 
        var saldoAtual = parseFloat(saldoDiv.innerText.replace('R$ ', '').replace(',', '.')) || 0;
        saldoAtual -= valor;
        saldoDiv.innerText = 'R$ ' + saldoAtual.toFixed(2);
    }

    document.getElementById('salvarGasto').addEventListener('click', salvarGasto);
});
