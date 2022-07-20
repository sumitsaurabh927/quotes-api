// requiring and using the variable 'name' to call it
const express = require('express');
const app = express();

// defining the PORT variable
const PORT = 8000;


let distDir = __dirname + "/API-PROJECT/";
 app.use(express.static(distDir));

// defining the quotes object
const quotes = {
        'inspirational': {
                'Sumit Saurabh': 'Eat,sleep,code,repeat!'
        },
        'funny': {
                'Saurabh Sumit': 'Repeat,code,sleep,eat!'
        },
        'unknown': {
                'unknown': 'unknown quote'
        }
}

app.get('/', (req, res) => {
        res.json(quotes);
})
app.get('/api', (req, res) => {
        res.json({ 'he': 'says wassup' })
})
app.get('/api/:urlGenre', (req, res) => {
        const urlData = req.params.urlGenre.toLowerCase();
        quotes[urlData] ? res.json(quotes[urlData]) : res.json(quotes[unknown]);

        // if(quotes[urlData]){
        //         res.json(quotes[urlData]);
        // }

})

// listening
app.listen(process.env.PORT || PORT, () => {
        console.log('the server is running, better catch it!!!');
})