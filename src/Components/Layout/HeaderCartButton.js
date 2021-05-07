import CartIcon from '../Cart/CartIcon';

import styledClasses from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (<button className={styledClasses.button}>
    <span className={styledClasses.icon}><CartIcon/></span>
    <span>Cart</span>
    <span className={styledClasses.badge}>3</span>
  </button>);
};
export default HeaderCartButton;
