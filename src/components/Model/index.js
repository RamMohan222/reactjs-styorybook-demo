
import React from 'react';
import PropTypes from 'prop-types';

export const Model = ({ children, type }) => {
    let color;
    if (type === 'success') color = 'green';
    if (type === 'danger') color = 'red';
    if (type === 'warning') color = 'orange';
    return <h3 style={{ color }}>{children}</h3>
}
export default Model;

Model.propTypes = {
    type: PropTypes.oneOf(['warning', 'danger', 'success']),
    children: PropTypes.element
}

Model.defaultProps = {
    type: undefined,
    children: undefined
}