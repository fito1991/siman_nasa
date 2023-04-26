require('dotenv').config();
const express = require('express')
const axios = require('axios')
const app = express()

const apiKeyNasa = process.env.EXPRESS_API_KEY_NASA

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/image', async (req, res) => {
    const { latlon } = req.query
    // Se separa las coordenadas para almancenaras en variables por separado
    const coords = latlon.split(",")
    let lon = ''
    let lat = ''
    coords.map( coord => {
      if (coord.includes("-")) {
        lon = coord
      }else{
        lat = coord
      }
    })

    // Se apunta el EP de la api de la NASA
    try {
        // API NASA REQUEST
        const response = await axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2022-01-01&dim=0.25&api_key=${apiKeyNasa}`)
        // console.log(response.config.url)
        const data = response.config.url

        // IMAGE URL
        res.send(data)

    } catch (error) {
        console.error(error)
        res.status(500).send({error: 'Error al obtener imagen satelital'})
    }
})

const port = 5000
app.listen(port, () => {console.log(`Server started on port ${port}`)})