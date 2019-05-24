/* eslint-disable */
import React from "react";
import classNames from "classnames";
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import { IconReaded } from '../';
import './styles.scss';


const getMessageTime = created_at => {
    if (isToday(created_at)) {
      return format(created_at, 'HH:mm')
    } else {
      return format(created_at, 'DD.MM.YYYY')
    }
}

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        alt=""
      />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, unreaded, isMe, created_at, text }) => (
  <div
    className={classNames("dialogs__item", {
      ["dialogs__item--online"]: user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
      {getAvatar(user.avatar)}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {getMessageTime(created_at)}
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        { isMe && <IconReaded isMe isReaded={false} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 9 ? "+9" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;