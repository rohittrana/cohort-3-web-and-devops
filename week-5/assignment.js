const express = require('express');
const app = express();

async function getUsers(req, res) {
    try {
        const fetch = (await import('node-fetch')).default; // Dynamic import
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

app.get('/users', getUsers);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
