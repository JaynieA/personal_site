import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PortfolioGrid = (props) => (

    <ul className='portfolio-grid'>
      {props.projects.map(function(project, index) {
          return (
              <li
                  key={project.key}
                  className='portfolio-item'
                  >
                  <Link to={`/portfolio/${ project.url }`}>
                      <div className='portfolio-item-wrap'>
                        <img
                          className='img-responsive'
                          src={project.src}
                          alt={'Image for ' + project.name}
                        />
                        <p>{project.name}</p>
                      </div>
                  </Link>
              </li>
          )
      })}
    </ul>
)

PortfolioGrid.propTypes = {
    projects: PropTypes.array.isRequired
};

export default PortfolioGrid;
