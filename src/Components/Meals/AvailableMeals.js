import styledClasses from './AvailableMeals.module.css';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)
  return (
    <Card>
      <section className={ styledClasses.meals }>
        <ul>{ meals }</ul>
      </section>
    </Card>);
};

export default AvailableMeals;
