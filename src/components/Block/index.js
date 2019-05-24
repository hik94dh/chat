import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';


const Block = ({ children, className }) => (
    <div className={classNames('block', className)}>{children}</div>
);

Block.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Block;
