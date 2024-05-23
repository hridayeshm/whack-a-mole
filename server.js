const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//as we learned , functions declared in classes like this, ie , not as fields or properties, gets appended as a method not in the object itself but its prototype