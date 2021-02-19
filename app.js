// Import express using require
const express = require('express');
// The whole library comes in as a function
//  and we can store it in a variable
const app = express();
// what do i want to do with this server?
// 1. Serve webpages (html, css, js, etc)

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));