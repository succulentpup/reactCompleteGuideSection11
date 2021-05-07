import styledClasses from './MealsSummary.module.css';

const MealsSummary = (props) => {
  return (<section className={styledClasses.summary}>
    <h2>Delicious Food, Delivered To You</h2>
    <p>
      Choose your favourite meal from our broad selection of available meals
      and enjoy a delicious lunch or dinner with your friends and family.
    </p>
    <p>
      All our meals are cooked with high quality ingredients, just-in-time and
      of course by experienced chefs!
    </p>
  </section>);
};

export default MealsSummary;
