import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setcategories] = useState(['One Punch'])

    // const handleAdd = ()=> {
    //     setcategories([...categories, 'Hunterxhuner'])
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />


            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp