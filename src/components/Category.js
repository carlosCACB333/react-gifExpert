import React  from 'react'
import Card from './Card';
import { useFechGifs } from '../hooks/useFechGifs';

const Category = (props) => {
   
    const {data,loading } = useFechGifs(props.kward);
   
    return (
        <div>
            <h1 className='text-center text-primary'>{loading?'cargando...':props.kward }</h1>
            <div className='row border border-primary p-4'>
                    {
                        data.map(im => <Card key={im.id} dato={im} />)
                    }
                
            </div>
            
        </div>
    )
}

export default Category
