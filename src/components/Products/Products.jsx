import React from 'react'
import {Grid} from '@material-ui/core';
import { Product } from './Product/Product';
const products = [
  {id:1, name:'shpoes', discription:'Running shoes.'},
  {id:2, name:'MacBook', discription:'Apple macbook.'},
]

export const Products = () => {
  return (
    <main>
      <Grid containet justify='center' spacing={4}>
        {products.map((product)=>{
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product />
          </Grid>
        })

        }
      </Grid>
    </main>
  )
}

