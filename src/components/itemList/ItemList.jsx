// import React from 'react';
import React, { useEffect } from 'react';
import '../../Styles/css/content/content.min.css'



function ItemList({ items = [] }) {

    useEffect(() => { 
        console.log(items);
    }, []);
        

  return (
    <>
    <div className='content-main-container'>
        <div className='cardsContent'>
            {items.map(item => (
                <div id={item.id_i} className='cardItem'>
                    <h2>{item.name_nv}</h2>
                    <p>{item.description_nv}</p>
                    <img src={`${item.image_nv}`} alt={item.nombre_nv} /> {/* data:image/jpeg;base64, */}
                </div>
            ))}
        </div>
    </div>
    </>
  );
}

export default ItemList;