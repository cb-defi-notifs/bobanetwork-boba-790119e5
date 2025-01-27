import { IBridges } from './types'

export const bobaBridges: IBridges[] = [
  {
    name: 'Synapse',
    type: 'SYNAPSE',
    link: 'https://synapseprotocol.com/',
    tokens: ['ETH', 'nETH', 'gOHM', 'DAI', 'USDC', 'USDT', 'SYN', 'nUSD'],
  },
  {
    name: 'Anyswap',
    type: 'ANYSWAP',
    link: 'https://anyswap.exchange/#/router',
    tokens: ['MIM', 'AVAX', 'FRAX', 'FTM', 'FXS', 'MATIC'],
  },
  {
    name: 'Celer',
    type: 'CELER',
    link: 'https://cbridge.celer.network/#/transfer',
    tokens: ['ETH', 'BOBA', 'FRAX', 'OLO'],
  },
  {
    name: 'BoringDAO',
    type: 'BORINGDAO',
    link: 'https://oportal.boringdao.com/twoway',
    tokens: ['USDT'],
  },
  {
    name: 'PolyBridge',
    type: 'POLYBRIDGE',
    link: 'https://bridge.poly.network/',
    tokens: ['BOBA'],
  },
  {
    name: 'Symbiosis',
    type: 'SYMBIOSIS',
    link: 'https://app.symbiosis.finance/swap',
    tokens: ['USDC'],
  },
]

export const bridgeByToken = (symbol: string) => {
  return bobaBridges.filter((bridge) => bridge.tokens.includes(symbol))
}
