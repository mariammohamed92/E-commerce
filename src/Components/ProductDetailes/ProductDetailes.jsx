import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../Utilities/BaseUrl'
import { useParams } from 'react-router-dom'

export default function ProductDetailes() {

    let { id } = useParams()

    const [product, setProduct] = useState([])

    let getAllProduct = async () => {
        let { data } = await axios.get(`${baseUrl}/products/${id}`)
        // console.log(data.data);
        setProduct(data.data)
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={product.imageCover} className='w-100' alt="" />
                    </div>
                    <div className="col-md-9">
                        <h6>{product.title}</h6>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
