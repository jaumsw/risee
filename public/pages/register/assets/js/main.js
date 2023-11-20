document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('su-nome').value;
    const email = document.getElementById('su-email').value;
    const senha = document.getElementById('su-senha').value;
  
    const user = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    fetch('/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sucesso:', data);
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
  });