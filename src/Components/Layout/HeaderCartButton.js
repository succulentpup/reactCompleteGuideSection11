import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import styledClasses from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log({ cartCtx }, 'cartCtx');
  const numberOfItemsInTheOrder = cartCtx.items
    .reduce(((count, item) => count + item.quantity), 0);
  return (<button className={styledClasses.button} onClick={props.onCartClicked}>
    <span className={styledClasses.icon}><CartIcon/></span>
    <span>Cart</span>
    <span className={styledClasses.badge}>{numberOfItemsInTheOrder}</span>
  </button>);
};
export default HeaderCartButton;
