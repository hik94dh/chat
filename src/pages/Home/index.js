/* eslint-disable */
import React from 'react';

import { Message, Dialogs } from "components";

import './styles.scss';


const Home = () => (
    <section className="home">
       <Dialogs
          userId={0}
          items={[
            {
              _id: 1,
              text:
                "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
              created_at: 'Sun May 28 2019 16:55:40',
              user: {
                _id: 'd95b2b8d46ebc',
                fullname: "Фёдор Достоевский",
                avatar: null,
                // isOnline: true
              },
            },
            {
              _id: 2,
              text:
                "Привет!",
              created_at: 'Sun May 24 2019 16:55:40',
              user: {
                _id: 2,
                fullname: "Лев Толстой",
                avatar: 'https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1'
              },
            }
          ]}
        />
        <Message
          avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
          date="Sun Apr 21 2019 21:59:29"
          audio="https://d1490khl9dq1ow.cloudfront.net/music/mp3preview/bbc-051117-Epic-Movie-Trailer-Music-Theme-15-Sec.mp3"
        />











    {/* <Message
      avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
      text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
      date="Sun Apr 21 2019 21:55:29"
      attachments={[
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water"
        },
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=2&nature,water"
        },
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=3&nature,water"
        }
      ]}
    />
    <Message
      avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
      text="Hello, World!"
      date="Sun Apr 21 2019 21:59:29"
      isMe={true}
      isReaded={false}
    />
    <Message
      avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
      attachments={[
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water"
        }
      ]}
    />
    <Message
      avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
      isTyping
    /> */}
  </section>
);

export default Home;
