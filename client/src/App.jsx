import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import axios from 'axios'

function App() {

  const [ imageURL, setImageURL ] = useState()
  const [ latlonTerm, setLatLonTerm ] = useState('')


  const handleChange = (e) => {
    setLatLonTerm(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Realizar la petición a Express.js con el valor de latlonTerm
      const response = await axios.get(`http://localhost:5000/image?latlon=${latlonTerm}`);
      // Manejar la respuesta de Express.js
      setImageURL(response.data)
    } catch (error) {
      // Manejar errores
      console.error(error);
    }
  }

  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>          
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="myInput">
                <Form.Label>Ingrese la latitud y longitud</Form.Label>
                <Form.Control
                  type="text"
                  value={latlonTerm}
                  onChange={handleChange}
                />
              </Form.Group>
              <br/>
              <Button type="submit">Enviar</Button>
            </Form>
            <br/>
            <Image 
              src={imageURL}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
