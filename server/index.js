const express = require('express');
const path = require('path'); 
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/addUser', (req, res) => {
    const user = req.body;  
    console.log(user);
    fs.readFile('../public/data.json', (err, data) => {
      if (err) throw err;
  
      let users = JSON.parse(data);
  
      users.push(user);
  
      fs.writeFile('../public/data.json', JSON.stringify(users), (err) => {
        if (err) throw err;
        console.log('Usuário adicionado!');
        res.status(200).send('Usuário adicionado!');
      });
    });
  });

app.listen(port, () => {
  console.log(`O aplicativo está rodando na porta ${port}`);
});
