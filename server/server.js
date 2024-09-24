const app = require("./app")
require('dotenv').config()

const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
  console.log('SERVER STARTED ON PORT', PORT);
});