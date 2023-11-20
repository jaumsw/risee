async function validarFormulario() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        Swal.fire({
            title: 'Erro!',
            text: 'Credenciais inválidas. Tente novamente.',
            icon: 'error',
            confirmButtonText: 'OK'
          })  
        return;
    }

    try {
        const response = await fetch('../../../../data.json');
        console.log(response)
        if (!response.ok) {
            throw new Error(`Erro ao carregar o JSON. Status: ${response.status}`);
        }

        const data = await response.json();

        const usuario = data.usuarios.find(u => u.email === username && u.senha === password);
        localStorage.setItem('id', usuario.id);
        if (usuario) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Usuário autenticado com sucesso!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = '../../../../pages/gastos/index.html';
                }
              });
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Credenciais inválidas. Tente novamente.',
                icon: 'error',
                confirmButtonText: 'OK'
              })        
            }
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}
