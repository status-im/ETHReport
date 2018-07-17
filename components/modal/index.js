import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const Modal = props => (
  <div className={`modal ${props.isModalOpen ? 'modal-open' : ''} ${props.modalOnMobileOnly ? 'modal-on-mobile-only' : ''} `}>
    <div className="modal-inner container">
      { props.children }
      <div role="button" tabIndex="0" onClick={props.closeModal} className="modal-close">
        <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><title>close</title><g fill="none" fillRule="evenodd"><path fill="#0D1434" d="M-282-19H38v3197h-320z"/><path d="M19.632 3.368A11.425 11.425 0 0 0 11.5 0C8.428 0 5.54 1.196 3.368 3.368A11.425 11.425 0 0 0 0 11.5c0 3.072 1.196 5.96 3.368 8.132A11.425 11.425 0 0 0 11.5 23c3.072 0 5.96-1.196 8.132-3.368A11.425 11.425 0 0 0 23 11.5c0-3.072-1.196-5.96-3.368-8.132zm-5.57 8.343l2.866 2.866a.594.594 0 0 1 0 .839l-1.655 1.655a.589.589 0 0 1-.42.173.589.589 0 0 1-.419-.173l-2.866-2.866a.153.153 0 0 0-.21 0L8.492 17.07a.589.589 0 0 1-.42.173.59.59 0 0 1-.419-.173l-1.655-1.655a.589.589 0 0 1-.174-.42c0-.158.062-.307.174-.419l2.866-2.866a.15.15 0 0 0 0-.21L5.876 8.514a.589.589 0 0 1-.173-.42c0-.158.062-.307.173-.419L7.532 6.02a.589.589 0 0 1 .42-.174c.158 0 .307.062.418.174l2.988 2.987a.153.153 0 0 0 .21 0l2.987-2.987a.589.589 0 0 1 .42-.174c.158 0 .307.062.419.174l1.655 1.655c.112.112.173.26.173.42a.59.59 0 0 1-.173.419L14.062 11.5a.15.15 0 0 0 0 .21z" fill="#D53337" fillRule="nonzero"/></g></svg>
      </div> {/* eslint-disable-line */}
    </div>
  </div>
);

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  children: PropTypes.shape({}).isRequired,
  closeModal: PropTypes.func.isRequired,
  modalOnMobileOnly: PropTypes.bool,
};

Modal.defaultProps = {
  modalOnMobileOnly: false,
  isModalOpen: false,
};

export default Modal;
