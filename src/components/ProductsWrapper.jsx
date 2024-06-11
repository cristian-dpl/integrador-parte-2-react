import { useEffect, useState } from "react"
import {Card} from "./Card"

import { getProducts } from "../util/api"



export const ProductsWrapper = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
        .then(
          data => setProducts(data.products)
        )
        .catch(err => console.error(err))
  }, [])
  
  return (
    <>
    <h1 className="title__play">Juguetes</h1>
    <div className="card__wrapper">
        {products.map(
            product =>
                <Card
                    key={product.id}
                    {...product}
                />
        )}
    </div>
    </>
  )
}

