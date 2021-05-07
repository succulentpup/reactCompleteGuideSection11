import { Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';

import styledClasses from './Header.module.css';

import hotel from '../../assets/hotel.jpg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={styledClasses.header}>
        <h1>React Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={styledClasses['main-image']}>
        <img src={hotel} alt="Address of delicious meals"/>
      </div>
    </Fragment>
  );
};

export default Header;
