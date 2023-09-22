// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the new comments page
// 5. Create a route for the form submission
// 6. Create a route for the static files
// 7. Start the server
// 8. Create a listener for the port

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for the home page
app.get('/', (req, res) => {
    // 3. Create a route for the comments page
    res.send(`
    <form action="/comments" method="POST">
        <input type="text" placeholder="comment" name="comment" />
        <input type="submit" value="Submit" />
    </form>
    `);
});

// 5. Create a route for the form submission
app.post('/comments', (req, res) => {
    // 6. Create a route for the static files
    res.send('Thanks for your comment!');
});

// 7. Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// 8. Create a listener for the port