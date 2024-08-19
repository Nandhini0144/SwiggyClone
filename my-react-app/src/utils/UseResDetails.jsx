import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
// import ResDetailsCard from '././ResDetailsCard'
// import ItemCategory from './ItemCategory'
const UseResDetails = (params) => {
  const [categories,setCategories]=useState([])
  const [details,setDetails]=useState({})
  console.log(params.id);
  useEffect(()=>{
    fetchData();  
  },[params.id])
  const fetchData=async()=>{
     const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${params.id}`)
     const json=await data.json()
     console.log(json)
     const detail=json.data.cards[0].card.card.info
     const  categories=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    //  const dataa=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
     setDetails(detail);
     const filteredCategories=categories.filter((item)=>{
          return item.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
     })
     setCategories(filteredCategories)
     console.log(categories)
  }
  if(Object.keys(details).length===0)
  {
    return(
      <div>
        Loading...
      </div>
    )
  }
  return(categories)
}

export default UseResDetails