import {React, useState} from 'react'
import { AppBar, NavBar, Typography, Menu, MenuItem, Toolbar, IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assert/commerce.png'
import useStyles from './Styles'

const Navbar = ({ totalItems }) => {
  // const [count, setCount] = useState(totalItems)
  const classes = useStyles();
  console.log(totalItems,'total');
  // console.log(count,'count')
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit' >
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.title}>
            <img src={logo} alt='commerce.js' height='25px' className={classes.img} />
              &nbsp;Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={ totalItems } color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
