function SalvarRenda() {
    var nomeRenda = document.getElementById("rendaNome").value;
    var valorRenda = document.getElementById("rendaValor").value;

    if (isNaN(parseFloat(valorRenda))) {
        alert("Por favor, insira um valor válido para a renda.");
        return;
    }

    fetch('../../../../data.json')
    .then(response => response.json())
    .then(data => {
        var rendaAtual = parseFloat(data.rendaAtual.replace("R$ ", "").replace(",", "."));
        var novaRenda = rendaAtual + parseFloat(valorRenda);

        data.rendaAtual = "R$ " + novaRenda.toFixed(2);

        fetch('seu_arquivo.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });

        FecharJanelaRenda();
    });
}

function FecharJanelaRenda() {
    var dialog = document.querySelector(".add-renda-dialog");
    dialog.close();
}