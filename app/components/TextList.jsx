import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyleType: 'circle',
    width: '50%',
    margin: '0 auto'
  }
}

const TextList = (props) => (
  <ul style={styles.ul}>
    {props.items.map((item, index) => {
      return (
        <li key={item}>
          &bull; {item}
        </li>
      )
    })}
  </ul>
)

TextList.propTypes = {
  items: PropTypes.array.isRequired
}

export default TextList;
