const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const Alch_key = process.env.NEXT_PUBLIC_ALCH_KEY

const config = {
  title: 'TRT DAPP',
  description: 'TRT Dapp',
  contractAddress: '0x5e200f5dda9318F3d3eFbFA36260daDb53F98668',
  maxMintAmount: 5,
  WlMaxMintAmount: 5,
  firstCost :0 ,
  wlcost: 0.001,
  publicSalePrice:0.001,
  maxPerTxWL : 5
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 5, // Goerli
  darkMode: true,
  walletSelect: {
    description:'Please select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      {
    walletName: "walletConnect",
    infuraKey: Alch_key
  }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }