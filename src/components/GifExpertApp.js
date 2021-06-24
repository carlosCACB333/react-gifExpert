
import React, { useState } from 'react'
import AddCategory from './AddCategory'
import Category from './Category'
const GifExpertApp = () => {
    const [category, setCategory] = useState(['Bad bunny'])
   
    

    return (
        <>
            <h2 className='m-3'>GifExpertApp</h2>
            <hr className='bg-white'/>
            <div className='container'>
                <AddCategory setCategory={setCategory}  />
                {
                    category.map((categoria => {
                        return (
                            <Category kward={categoria} key={categoria}/>
                        )
                    }))
                }
                
                
          </div>
        </>
    )
}

export default GifExpertApp
