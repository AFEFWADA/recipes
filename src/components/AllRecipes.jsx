import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


    function AllRecipes({ recipes, search }) {
      return (
        <div className='d-flex gap-3 justify-content-center p-3 flex-wrap'>
          {recipes.filter((e, i) => e.name.toLowerCase().includes(search.toLowerCase())).map((e, i) => (
              <div className='card shadow p-3' style={{ width: "18rem" }} key={i}>
                <img src={e.image} alt={e.name} loading="lazy" height={100} />
                <h5 className='card-text'>{e.name}</h5>
              </div>
            ))}
        </div>
      )
    }
    


 


export default AllRecipes