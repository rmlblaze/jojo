const hre = require('hardhat')

const _initBaseURI='ipfs://QmYFKKHBvfTWSu5ydZqf3h7PHQZLCv6fpCoNWMigxw8UvY/'

async function main() {

  // Deploy the contract
  const theRainbowTribeX = await hre.ethers.getContractFactory('TheRainbowTribeX')
  const TheRainbowTribeX = await theRainbowTribeX.deploy(
    _initBaseURI)
  await TheRainbowTribeX.deployed()

  console.log('TheRainbowTribeX deployed to:', TheRainbowTribeX.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
