const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look Mama I can code now! Is it not Cool??')
})

const users = [
    { id: 1, name: 'Rodela Begum', email: 'rodela@gmail.com', job: 'Gandugiri kora' },
    { id: 2, name: 'Sabana Begum', email: 'Sabana@gmail.com', job: 'Gandugiri2 kora' },
    { id: 3, name: 'Oindrila Begum', email: 'Oindrila@gmail.com', job: 'Gandugiri3 kora' },
    { id: 4, name: 'Nirvana Begum', email: 'Nirvana@gmail.com', job: 'Gandugiri4 kora' },
    { id: 5, name: 'Ribana Begum', email: 'Ribana@gmail.com', job: 'Gandugiri5 kora' },
    { id: 6, name: 'Uzma Begum', email: 'Uzma@gmail.com', job: 'Gandugiri6 kora' },
    { id: 7, name: 'Lamia Begum', email: 'Lamia@gmail.com', job: 'Gandugiri7 kora' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})