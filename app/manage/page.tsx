'use client';
import { InstagramLogin } from '@amraneze/react-instagram-login';
import axios from 'axios';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import React, { useState, ChangeEvent } from 'react';

const TwitterPost = () => {
  const [tweetText, setTweetText] = useState<string>(''); // Adicionei o tipo string aqui

  const handleTweetChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(e.target.value);
  };

  const postTweet = async () => {
    const tweetEndpoint = 'https://api.twitter.com/2/tweets';
    const bearerToken = '1724274340009566208-lamRqcWzM2BFGT2FHrB47cNCD6pYBm';

    try {
      const response = await fetch(tweetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`,
        },
        body: JSON.stringify({
          status: tweetText,
        }),
      });

      if (response.ok) {
        console.log('Tweet postado com sucesso!');
      } else {
        console.error('Erro ao postar o tweet:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Digite seu tweet..."
        value={tweetText}
        onChange={handleTweetChange}
      />
      <button onClick={postTweet}>Postar Tweet</button>
    </div>
  );
};

export default TwitterPost;



