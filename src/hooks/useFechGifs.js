
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif'

export const useFechGifs = (kward) => {
    const [state, setState] = useState({ data: [], loading: true });
    useEffect(() => {
        getGifs(kward).then(img  => {
            setState({data:img,loading:false})
        })
    },[kward])   //si cambia el wkar debe volver a ejecutar

    return state;
}