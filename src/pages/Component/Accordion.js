
import React from 'react';
import Faq from './Faq';
const Accordion = ({stories}) => {
  return (
    <div className="wrapper">
      <ul className="accordion-list">
        {stories.map((story, index) => {
          return (
            <li className="accordion-list__item" key ={index}>
              <Faq {...story} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Accordion;
