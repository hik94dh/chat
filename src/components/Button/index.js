import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button as BaseButton } from 'antd';

import './styles.scss';


const Button = ({ className, size, ...props }) => (
    <BaseButton
        {...props}
        className={classNames('button', className, {
            'button--large': size === 'large',
        })}
    />
);

Button.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    props: PropTypes.shape({}),
};

export default Button;
