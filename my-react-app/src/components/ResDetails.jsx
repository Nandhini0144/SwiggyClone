import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import ResDetailsCard from './ResDetailsCard'
import ItemCategory from './ItemCategory'
import UseResDetails from '../utils/useResDetails'
const ResDetails = () => {
  const {id}=useParams();
  const [categories,setCategories]=useState([])
  const [details,setDetails]=useState({})
  console.log(id);
  useEffect(()=>{
  fetchData();  
  },[])
  const fetchData=async()=>{
     const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${id}`)
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
  return (
    <div>
       {/* <h2>{details.name}</h2>
       <div>{details.cuisines.join(',')}</div> 
       <div>{details.areaName}</div> */}
       <div  className='itemCategory-container'>
      {categories.map((res)=>{
             return <ItemCategory key={res.card.card.title} category={res}/>
       })
      }
      </div>
    </div>
  )
}

export default ResDetails