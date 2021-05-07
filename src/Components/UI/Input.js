import styledClasses from './Input.module.css';

const Input = (props) => {
  return (<div  className={styledClasses.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input className={styledClasses.input} {...props.input}/>
  </div>);
};

export default Input;
