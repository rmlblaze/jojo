require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')


const _initBaseURI='ipfs://QmYFKKHBvfTWSu5ydZqf3h7PHQZLCv6fpCoNWMigxw8UvY/'

async function main() {

  await hre.run('verify:verify', {
    address: '0x5e200f5dda9318F3d3eFbFA36260daDb53F98668',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })