import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../Utilities/BaseUrl'
import Product from "../Product/Product";
import Loading from '../Loading/Loading';

export default function Products() {


  const [products, setProducts] = useState([])

  let getAllProducts = async () => {
    let { data } = await axios.get(`${baseUrl}/products`)
    // console.log(data.data);
    setProducts(data.data)
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <>
      <div className="container">
        {products.length != 0
          ? 
          <div className="row">
            <Product products={products} />
          </div> 
          :
          <Loading />
        }
      </div>
    </>
  )
}
