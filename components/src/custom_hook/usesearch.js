import React  , {useEffect, useState}from "react"

const usesearch = () => {
const API = "http://hn.algolia.com/api/v1/search?query=html"

const fetchapidata = async (url) => {
    try  {
        const res = await fetch(url)
        const data = await res.json()
        console.log (data)
    } 

    catch (error){

        console.log(error)

    }
}

useEffect (()=>{
    fetchapidata(API)
},[])

}

// function usesearch (search) {
//     const [data , setdata] = useState ({})
//     useEffect (()=>{
//         fetch (`http://hn.algolia.com/api/v1/search?query=${search}`)
//         .then((res)=> res.json())
//         .then ((res)=> setdata (res.search))
//     }, [search])
//     console.log(data)
//     return data 
// }

export default usesearch 