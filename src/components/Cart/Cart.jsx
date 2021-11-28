import React from 'react'
import useStyles from './Styles'
import { Container, Typogrphy, Button, Grid, Typography } from '@material-ui/core'
const Cart = ({ cart }) => {
  const classes = useStyles();
  const isEmpty = !cart.line_items.length;

  const EmptyCart = () =>(
    <Typography variant='subtitle1'> You have no items in your shopping cart, Start adding something! </Typography>
  )

  const FilledCart = () =>(
    <>
      <Grid container spacing={3}>
          {cart.line_items.map((item)=> (
            <Grid item key={item.id} xs={12} sm={4}>
              <div>{item.name}</div>
            </Grid>
          ))}
          <div className={classes.cartDetails}>
            <Typography variant='h4'>
              Subtotal : {cart.subtotal.formatted_with_symbol}
            </Typography>
          </div>
      </Grid>
    </>
  )
  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart />: <FilledCart /> }
    </Container>
  )
}

export default Cart
