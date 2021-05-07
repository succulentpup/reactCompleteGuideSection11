import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
};

export default App;
