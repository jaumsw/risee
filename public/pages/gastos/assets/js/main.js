fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
        let tabelaDadosUsuario = document.getElementById('tabela-dados-usuario');
        let idDoUsuario = localStorage.getItem('id');
        let usuario = data.usuarios.find(usuario => usuario.id == idDoUsuario);
        let totalGastos = 0;
        let gastosPorCategoria = {};

        if (usuario) {
            usuario.gastos.forEach(gasto => {
                let row = document.createElement('tr');

                let descricao = document.createElement('td');
                descricao.textContent = gasto.descricao;
                row.appendChild(descricao);

                let valor = document.createElement('td');
                let valorFormatado = gasto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                valor.textContent = valorFormatado;
                row.appendChild(valor);

                let data = document.createElement('td');
                data.textContent = gasto.data;
                row.appendChild(data);

                let categoria = document.createElement('td');
                categoria.textContent = gasto.categoria;
                row.appendChild(categoria);

                tabelaDadosUsuario.appendChild(row);

                totalGastos += gasto.valor;

                if (gastosPorCategoria[gasto.categoria]) {
                    gastosPorCategoria[gasto.categoria] += gasto.valor;
                } else {
                    gastosPorCategoria[gasto.categoria] = gasto.valor;
                }
            });

            let gastoTxt = document.getElementById('gastoTxt');
            gastoTxt.textContent = totalGastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            for (let categoria in gastosPorCategoria) {
                let spanId = categoria;
                console.log(spanId);
                let spanElement = document.getElementById(spanId);
                if (spanElement) {
                    spanElement.textContent = gastosPorCategoria[categoria].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                }
            }
        } else {
            console.error('No user found with id:', idDoUsuario);
        }
    })
    .catch(error => console.error('Erro:', error));