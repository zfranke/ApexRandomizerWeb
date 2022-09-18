/** 
 * Project: Apex Web Randomizer
 * Author: Zach Franke
 * Date: 2022-07-06
 * 
 * Description: Apex Legends Web Randomizer
 */
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3030;

//Set the public directory
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

//Set the view engine to ejs
app.set('view engine', 'ejs');

//Send the index page
app.get('', (req, res) => {
    res.render('index.html');
});


//Starts the server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});



