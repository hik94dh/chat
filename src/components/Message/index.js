/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import ruLocale from "date-fns/locale/ru";

import './styles.scss';

const Message = ({ avatar, text, date, user, isMe, isReaded, attachments }) => (
    <div className={classNames('message', {'message--isme': isMe})}>
    	<div className="message__content">

    		{isMe && isReaded ? (
	    		<svg className="message__icon-readed" width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M3.66648 6.87477L10.2103 0.139168C10.3908 -0.0463894 10.6839 -0.0463894 10.8643 0.139168C11.0452 0.324251 11.0452 0.62513 10.8643 0.810213L3.99532 7.88086C3.8167 8.06405 3.51946 8.06405 3.34084 7.88086L0.135337 4.60679C-0.0451125 4.42171 -0.0451125 4.1213 0.135337 3.93575C0.315787 3.75019 0.608904 3.75019 0.789354 3.93575L3.66648 6.87477ZM7.14111 7.06654L14.1548 0.139864C14.3479 -0.0466214 14.6616 -0.0466214 14.8548 0.139864C15.0484 0.325873 15.0484 0.628256 14.8548 0.814264L7.55877 8.13855C7.3676 8.32265 5.87166 7.56707 5.75484 7.46285C5.64238 7.36252 6.30121 6.77489 6.30121 6.77489C6.50611 6.87518 7.08691 7.12008 7.14111 7.06654Z" fill="#0C8FE4"/>
				</svg>
    		) : (
				<svg className="message__icon-readed message__icon-readed--no" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2103 0.139168L3.66648 6.87477L0.789354 3.93575C0.608904 3.75019 0.315787 3.75019 0.135337 3.93575C-0.0451125 4.1213 -0.0451125 4.42171 0.135337 4.60679L3.34084 7.88086C3.51946 8.06405 3.8167 8.06405 3.99532 7.88086L10.8643 0.810213C11.0452 0.62513 11.0452 0.324251 10.8643 0.139168C10.6839 -0.0463894 10.3908 -0.0463894 10.2103 0.139168Z" fill="#0C8FE4"/>
				</svg>
    		)}
	    
		    	<div className="message__avatar">
		    		<img src={avatar} alt={`User ${user.fullname}`} />
		    	</div>
		    	<div className="info">
		    		<div className="message__bubble"> 
			    		<div className="message__text">
			    			{text}
			    		</div>
		    		</div>
		    		<div className="message__attachments">
			          {attachments &&
			            attachments.map(item => (
			              <div className="message__attachments-item">
			                <img src={item.url} alt={item.filename} />
			              </div>
			            ))}
			        </div>
		    		<span className="message__date">
		          		{distanceInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
		    		</span>
	    		</div>
	   
    	</div>
    </div>
);

Message.defaultProps = {
	user: {}
}

Message.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array
};

export default Message;
