import React from 'react'

const ItemCategory = (props) => {
    const {category}=props
    const info=props.category.card.card.itemCards;
  return (
    <div>
        <div className='itemCategoryCard'>
        <div>{category.card.card.title
        }</div>
        <div>
            {
                info.map((res)=>{
                    return res.card.info.name
                })
            }
        </div><br/>
        </div>
    </div>
    // <div className='item-container'>
    //     <div>
    //       {item.card.info.name}-{item.card.info.price}
    //     </div>
    // </div>
  )
}

export default ItemCategory