import React from 'react'
import { Card,CardMedia,CardContent, CardActions, Typography} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import useStyles from './Styles'

export const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price}
          </Typography>
        </div>
        <Typography variant='h2' color='textSecondary'>
          {product.discription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions} >
        <IconButton arial-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}


