import React from 'react'
import {Grid} from '@material-ui/core';
import { Product } from './Product/Product';
const products = [
  {id:1, name:'shpoes', discription:'Running shoes.',price:'5$'},
  {id:2, name:'MacBook', discription:'Apple macbook.',price:'10$'},
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

