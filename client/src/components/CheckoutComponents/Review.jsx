import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

const Review = ({ checkoutToken }) => {
  const classes = useStyles();
  const text = {
    color: "black"
};


  return(
    <React.Fragment>
      <Typography className={classes.headerText} variant="h6" gutterBottom>Detalles del pedido</Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primaryTypographyProps={{ style: text }} primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <Typography className={classes.headerText} variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: '10px 0', fontFamily: 'var(--font-header)'}} >
          <ListItemText primaryTypographyProps={{ style: text }} className={classes.listItem} primary="Importe Total" />
          <Typography className={classes.headerText} variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
};



export default Review;