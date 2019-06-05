import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Status = ({ online }) => (
    <span className={classNames('status', { 'status--online': online })}>
        {online ? 'online' : 'offline'}
    </span>
);

Status.propTypes = {
    online: PropTypes.bool,
};

export default Status;
