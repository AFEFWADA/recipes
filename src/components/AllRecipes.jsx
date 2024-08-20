import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../data.json"


    function AllRecipes() {
      const [recipes,setRecipes] = useState(data)

      return (
        <div className='d-flex gap-5 justify-content-center p-3 flex-wrap'>
         {recipes.map((element,index)=> {
          return(
          <Card style={{ width: '18rem' }} key={element.id}>
            <Card.Img variant="top" src={element.image} height="200px" />
            <Card.Body>
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>
                {element.ingredients}
              </Card.Text>
              <Button variant="secondary">Details</Button>
            </Card.Body>
          </Card>
          )
         }

         )

         }
        </div>
      )
    }
    


 


export default AllRecipes