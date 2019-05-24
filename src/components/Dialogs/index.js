/* eslint-disable */
import React from 'react';
import orderBy from 'lodash/orderBy';
import isToday from 'date-fns/is_today'

import { DialogItem } from '../';
import './styles.scss';


const Dialogs = ({ items, userId }) => (
	<div className="dialogs">
		{orderBy(items, ['created_at'], ['desc']).map(item => (
				<DialogItem
					key={item._id}
					// user={item.user}
					// message={item}
					// unreaded={0}
					isMe={item.user._id === userId}
					{...item}
				/>
			))
		}
	</div>
)

export default Dialogs;