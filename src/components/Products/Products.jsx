import React from 'react'
import {Grid} from '@material-ui/core';
import { Product } from './Product/Product';
import mac from '../../pictures/product/macbook.jpg'
import shoe from '../../pictures/product/shoe.jpg'

const products = [
  {id:1, name:'shpoes', discription:'Running shoes.',price:'5$',image:{mac}},
  {id:2, name:'MacBook', discription:'Apple macbook.',price:'10$',image:{shoe}},
]

export const Products = () => {
  return (
    <main>
      <Grid container justifyContent='center' spacing={2}>
        {products.map((product)=>(
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}


export default Products;