/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import pause from 'assets/img/pause.svg';
import play from 'assets/img/play.svg';

import { IconReaded, Time } from '../';
import './styles.scss';


const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
  audio
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--is-audio": audio,
        "message--image": attachments && attachments.length === 1
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {
                audio && <div className="message__audio">
                  <div className="message__audio--progress" style={{ width: '40%'}}>1</div>
                  <div className="message__audio--info">
                    <div className="message__audio--btn">
                      <button>
                      {isPlaying ? <img src={pause} alt="pause" width="15" height="15" /> : <img src={play} alt="play" width="15" height="15" />}
                      </button>
                    </div>
                    <div className="message__audio--wave"> img </div>
                    <span className="message__audio--duration">00:19 </span>
                  </div>
                </div>
              }
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              attachments.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))
            </div>
           )}

          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
)};

// const Message = ({
//   avatar,
//   user,
//   text,
//   date,
//   isMe,
//   isReaded,
//   attachments,
//   isTyping
// }) => (
//   <div
//     className={classNames("message", {
//       "message--isme": isMe,
//       "message--is-typing": isTyping,
//       "message--image": attachments && attachments.length === 1
//     })}
//   >
//     <div className="message__content">
//       <IconReaded isMe={isMe} isReaded={isReaded} />
//       <div className="message__avatar">
//         <img src={avatar} alt={`Avatar ${user.fullname}`} />
//       </div>
//       <div className="message__info">
//         {(text || isTyping) && (
//           <div className="message__bubble">
//             {text && <p className="message__text">{text}</p>}
//             {isTyping && (
//               <div className="message__typing">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//             )}
//           </div>
//         )}
//         <div className="message__attachments">
//           {attachments &&
//             attachments.map(item => (
//               <div className="message__attachments-item">
//                 <img src={item.url} alt={item.filename} />
//               </div>
//             ))}
//         </div>
//         {date && (
//           <span className="message__date">
//             <Time date={date} />
//           </span>
//         )}
//       </div>
//     </div>
//   </div>
// );

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool
};

export default Message;
