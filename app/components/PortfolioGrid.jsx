import React from 'react';
import PropTypes from 'prop-types';

const PortfolioGrid = (props) => (

    <ul className='portfolio-grid'>
      {props.projects.map(function(project, index) {
          return (
              <li
                  key={project.name}
                  className='portfolio-item'
                  >
                  <div className='portfolio-item-wrap'>
                    <img
                      className='img-responsive'
                      src={project.src}
                      alt={'Image for ' + project.name}
                    />
                    <p>{project.name}</p>
                  </div>

              </li>
          )
      })}
    </ul>
)

PortfolioGrid.propTypes = {
    projects: PropTypes.array.isRequired
};

export default PortfolioGrid;
