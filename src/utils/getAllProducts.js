import { useState } from "react";

export function getAllProducts(){
    const [product,setProduct] = useState("")
    async function allProducts(){
        const products=await fetch('https://graphql.datocms.com/', {
             method: 'POST',
             headers: {
                 'Authorization': 'bc8cfcbf61595dac891e0678afe05f',
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             },
             body:JSON.stringify({"query":`query{
                 allProducts {
                     id
                     productname
                     productimage1{
                         width
                         height
                           url
                 }
                     _status
                     _publishedAt
                   }
             }`})
         }).then((response) => response.json()).then((resposta)=>{setProduct(resposta.data.allProducts)})
     
     }
     allProducts()
     return product
}