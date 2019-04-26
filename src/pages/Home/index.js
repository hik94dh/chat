import React from 'react';
import './styles.scss';
import { Message } from 'components';
/* eslint-disable */
const Home = () => (
    <section className="home">
        <Message
        	avatar="https://ru-static.z-dn.net/files/db4/a0fb73ab1fb97457a4511785fe235835.jpg"
        	text="Привет! Как дела?"
        	date="Thu Apr 25 2019 14:08:58 GMT+0300"
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
        	avatar="https://feedback.fl.ru/s/cache/1c/d5/1cd576de28175f80b710814368a9f1a2.png"
        	text="Привет! Отлично!"
        	date="Thu Apr 25 2019 14:10:58 GMT+0300"
        	isMe
        	isReaded
        />
    </section>
);

export default Home;
