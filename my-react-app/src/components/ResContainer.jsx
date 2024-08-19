import { useEffect } from "react"
import ResCard from "./ResCard"
import { useState } from "react"
const ResContainer = () => {
    var [restaurants,setRestaurants]=useState([]);
    const [List,setList]=useState([])
    const [searchText,setSearchText]=useState('')
    // var d=[]
    useEffect(()=>{
         fetchData()
    },[])
    const fetchData=async()=>{
          const result=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')    
          const json=await result.json();
          const dataa= json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          console.log(json)
          setList(dataa);
          setRestaurants(dataa)
        //   console.log(dataa)
        //   console.log(d);
        // dataa.map((r)=>{
        //     d={r}
        // })
    }
    const filterData=()=>{      
        const arrData=restaurants.map((r)=>{
             if(r.info.avgRating>4.5)return r     
             return null 
         })
        const ArrData=arrData.filter((r)=>{ 
            return r!=null      
        })
         setList(ArrData)
     }
    const updateSearchText=(e)=>
     {
         setSearchText(e.target.value);
         filterBySearchRestaurant(e.target.value);
     }
     const filterBySearchRestaurant=(val)=>{
          const filteredData=restaurants.filter((r)=>{
             return(r.info.name.toLowerCase().includes(val.toLowerCase()))
          })
          setList(filteredData)
     }
     if(restaurants.length===0)
     {
       return(
        <div>
            Loading....
        </div>)
     }
    return(
        <>
        <div>
            <input value={searchText} onChange={updateSearchText}/>
            {/* <button onClick={filterBySearchRestaurant}>Search</button> */}
            <button onClick={filterData}>Top restaurants</button>
        </div>
    <div className='restaurant-container'>
        {
            List.map((res) => {
                return <ResCard key={res.info.id} restaurant={res.info} />
            })
        }
    </div>
    </>)
}
export default ResContainer