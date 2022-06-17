import { rest } from 'msw'

import { COIN_API_URL } from 'lib/constants'

export const handlers = [
  rest.get(`${COIN_API_URL}/search`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        coins: [
          {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
          },
          {
            id: 'wrapped-bitcoin',
            name: 'Wrapped Bitcoin',
            symbol: 'WBTC',
          },
          {
            id: 'bitcoin-cash',
            name: 'Bitcoin Cash',
            symbol: 'BCH',
          },
          {
            id: 'bitcoin-cash-sv',
            name: 'Bitcoin SV',
            symbol: 'BSV',
          },
          {
            id: 'bitcoin-gold',
            name: 'Bitcoin Gold',
            symbol: 'BTG',
          },
        ],
      })
    )
  }),
]
