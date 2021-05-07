import Modal from '../UI/Modal';

import styledComponents from './Cart.module.css';

const Cart = (props) => {
  const cartItems = <ul className={ styledComponents['cart-items'] }>{ [{
    id: 'c1',
    name: 'sushi',
    amount: 2,
    price: 12.99,
  }].map((item) => <li>{ item.name }</li>) }</ul>
  return (<Modal>
    { cartItems }
    <div className={ styledComponents.total }>
      <span>Total Amount</span>
      <span>35.55</span>
    </div>
    <div className={ styledComponents.actions }>
      <button className={ styledComponents['button--alt'] }>Close</button>
      <button className={ styledComponents.button }>Order</button>
    </div>
  </Modal>);
};

export default Cart;
