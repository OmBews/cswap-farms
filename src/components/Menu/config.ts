import { MenuEntry } from '@lukkasromero/cswap-uikit'

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
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x49Ac2737A92c580eD253A067E1dcbDd82bDe7682',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x49Ac2737A92c580eD253A067E1dcbDd82bDe7682',
      },
    ],
  },
  // {
  //    label: 'Presale',
  //    icon: 'NftIcon',
  //    href: '/presale',
  // },


  // {
  //   label: 'Farms (Coming Soon)',
  //   icon: 'FarmIcon',
  //   href: '/',
  // },
  // {
  //   label: 'Pools (Coming Soon)',
  //   icon: 'PoolIcon',
  //   href: '/',
  // },




  {
    label: 'Farms (OLD)',
    icon: 'FarmIcon',
    href: 'https://old.cswap.app/farms',
  },
  {
    label: 'Pools (OLD)',
    icon: 'PoolIcon',
    href: 'https://old.cswap.app/nests',
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
   {
     label: 'Audits',
     icon: 'AuditIcon',
     items: [
      {
        label: 'RugDoc',
        href: 'https://rugdoc.io/project/cryptoswap/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/cswap',
      },
      {
        label: 'Audit Book' ,
        href: 'https://cryptoswap.gitbook.io/cryptoswap/security/untitled'
      }
     ]
   },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
       {
         label: 'Github',
         href: 'https://github.com/lukkasromero',
       },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@cryptoswap/s/cryptoswap/',
      },
       {
         label: 'Chart',
         href: 'https://dex.guru/token/0x49ac2737a92c580ed253a067e1dcbdd82bde7682-polygon',
       }
    ],
  },
]

export default config
