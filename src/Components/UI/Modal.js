import { Fragment } from 'react';
import ReactDom from 'react-dom';

import styledClasses from './Modal.module.css';

const Backdrop = (props) => (<div
  className={ styledClasses.backdrop }
  onClick={ props.closeCart }
/>);

const Overlays = (props) => <div className={ styledClasses.modal }>
  { props.children }
</div>

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (<Fragment>
    { ReactDom.createPortal(<Backdrop closeCart={props.closeCart}/>, portalElement) }
    { ReactDom.createPortal(
      <Overlays>{ props.children }</Overlays>, portalElement) };
  </Fragment>);
};

export default Modal;
