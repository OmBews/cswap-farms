import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xeC5AE5A69045eCf74c5C864d2876826BE38e7846',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xeC5AE5A69045eCf74c5C864d2876826BE38e7846',
      },
    ],
  },
  {
    label: 'Presale',
    icon: 'NftIcon',
    href: '/presale',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Dividends',
  //   icon: 'TicketIcon',
  //   href: '/profit',
  // },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/cswapdevteam/cryptoswap',
      // },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@cryptoswap/s/cryptoswap/',
      },
      // {
      //   label: 'Medium',
      //   href: 'https://medium.com/@cswapfinance',
      // }
    ],
  },
]

export default config
