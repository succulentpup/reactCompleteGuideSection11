import MealItemForm from './MealItemForm';

import styledClasses from './MealItem.module.css'

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (<li className={styledClasses.meal}>
    <div>
      <h3>{props.meal.name}</h3>
      <div className={styledClasses.description}>{props.meal.description}</div>
      <div className={styledClasses.price}>{price}</div>
    </div>
    <div><MealItemForm id={props.meal.id}/></div>
  </li>);
};

export default MealItem;
