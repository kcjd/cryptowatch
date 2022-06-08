import Image from 'next/image'

import dayjs from 'dayjs'
import styled from 'styled-components'

import Card from 'components/Card'
import SectionTitle from 'components/SectionTitle'

import { screens } from 'lib/mixins'
import { TweetWithUser } from 'lib/types'

type Props = {
  tweets: TweetWithUser[]
}

const Tweets = ({ tweets }: Props) => {
  if (tweets.length < 1) {
    return null
  }

  return (
    <section>
      <SectionTitle>Tweets récents</SectionTitle>
      <Wrapper>
        {tweets.map(({ tweet, author }) => (
          <Card
            key={tweet.id}
            as="a"
            href={`https://twitter.com/${author?.username}/status/${tweet.id}`}
            target="_blank"
            rel="noreferrer"
            outlined
          >
            {author && (
              <TweetAuthor>
                <div>
                  <Image src={author.profile_image_url} alt="" layout="fill" />
                </div>
                <div>
                  <AuthorName>
                    {author.name}
                    {author.verified && (
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        aria-label="Compte vérifié"
                      >
                        <g fill="currentColor">
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </g>
                      </svg>
                    )}
                  </AuthorName>
                  <AuthorUsername>@{author?.username}</AuthorUsername>
                </div>
              </TweetAuthor>
            )}
            <TweetBody>{tweet.text}</TweetBody>
            <TweetFooter>
              <TweetMetrics>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    aria-label="Réponses"
                  >
                    <path
                      fill="currentColor"
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                    />
                  </svg>
                  {tweet.public_metrics.reply_count}
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    aria-label="Retweets"
                  >
                    <path
                      fill="currentColor"
                      d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                    />
                  </svg>
                  {tweet.public_metrics.retweet_count}
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    aria-label="J'aime"
                  >
                    <path
                      fill="currentColor"
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                    />
                  </svg>
                  {tweet.public_metrics.like_count}
                </div>
              </TweetMetrics>
              <div>{dayjs(tweet.created_at).format('HH:mm · D MMMM YYYY')}</div>
            </TweetFooter>
          </Card>
        ))}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[400]};
  font-size: ${({ theme }) => theme.fontSizes[300]};

  ${screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TweetAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[350]};
  margin-bottom: ${({ theme }) => theme.sizes[500]};

  & > *:first-child {
    position: relative;
    width: ${({ theme }) => theme.sizes[650]};
    height: ${({ theme }) => theme.sizes[650]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    overflow: hidden;
  }
`

const AuthorName = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[100]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`

const AuthorUsername = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
`

const TweetBody = styled.p`
  height: calc(5 * 1.5em);
  line-height: 1.5em;
  white-space: pre-wrap;
  overflow: hidden;
`

const TweetFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes[450]};
  color: ${({ theme }) => theme.colors.textLight};
`

const TweetMetrics = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes[350]};

  & > * {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizes[150]};
  }
`

export default Tweets
