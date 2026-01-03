const express = require('express')
const path = require('path')

const app = express();
const port = 3256;
app.use('/request-type', (req, res, next) => {
    next();
})
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, () => {
    console.log(`Food app is listening on port ${port}`)
})