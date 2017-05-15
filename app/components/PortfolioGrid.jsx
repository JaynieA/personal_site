import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PortfolioGrid = (props) => (

    <ul className='portfolio-grid'>
      {props.projects.map(function(project, index) {
          return (
              <li
                  key={project.id}
                  className='portfolio-item'
                  >
                  <Link to={`/portfolio/${ project.local_url }`}>
                      <div className='portfolio-item-wrap'>
                        <img
                          className='img-responsive'
                          src={project.img_url}
                          alt={'Image for ' + project.project_name}
                        />
                    <p>{project.project_name}</p>
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
