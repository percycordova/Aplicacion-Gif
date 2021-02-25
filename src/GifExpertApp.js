import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon ball','Naruto']);

    return (
        <>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    //categories.map(category => <li key={category}>{category} </li>) //Cunado retorno solo una linea no es necesario el return ni las llaves
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}
