import axios from 'axios'

import { TweetsResponse } from './types'

const API_KEY = process.env.TWITTER_API_KEY

const instance = axios.create({
  baseURL: 'https://api.twitter.com/2',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})

export const getTweets = async (query: string) => {
  const { data: tweets } = await instance.get<TweetsResponse>(
    '/tweets/search/recent',
    {
      params: {
        query: `${query} (from:CryptoMatrix2 OR from:LeJournalDuCoin OR from:cryptoastblog OR from:cryptocom OR from:crypto)`,
        expansions: 'author_id',
        'tweet.fields': 'id,text,created_at,author_id,public_metrics',
        'user.fields': 'id,username,name,profile_image_url,verified',
      },
    }
  )

  const getAuthorInfo = (authorId: string) => {
    return tweets.includes?.users.find((user) => user.id === authorId)
  }

  return (
    tweets.data?.slice(0, 6).map((tweet) => ({
      tweet,
      author: getAuthorInfo(tweet.author_id),
    })) || []
  )
}
