const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("SignetControllor test", function () {
          let nftmarketplace, deployer, player1, player2
          const PRICE = ethers.utils.parseEther("0.1")
          const Token_ID = 0
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              accounts = await ethers.getSigners()
              player1 = accounts[1]
              player2 = accounts[2]
              await deployments.fixture(["all"])
              Signet = await ethers.getContract("SignetControllor")
              // nftmarketplace = await nftmarketplace.connet(player)
          })

          //   it("Initilizes the NFT Correctly.", async function () {
          //     const name = await basicNft.name()
          //     const symbol = await basicNft.symbol()
          //     const tokenCounter = await basicNft.getTokenCOunter()
          //     assert.equal(name, "dogie")
          //     assert.equal(symbol, "DOG")
          //     console.log(tokenCounter.toString())
          //     assert.equal(tokenCounter.toString(), "1")
          //   })

          describe("Construtor", () => {
              it("follow 2 address and read following number equal to 2.", async () => {
                  await Signet.follow(player1.address)
                  await Signet.follow(player2.address)
                  const flowingnumber = await Signet.following(deployer).FollowingNum
                  expect(flowingnumber, "2")
              })
              it("follow 2 address and read following number equal to 2.", async () => {
                  await Signet.follow(player1.address)
                  await Signet.follow(player2.address)
                  const flowernumber1 = await Signet.follower(player2.address).followerNum
                  expect(flowernumber1, "1")
                  await Signet.unfollow(player2.address)
                  const flowingnumber = await Signet.following(deployer).FollowingNum
                  expect(flowingnumber, "1")
                  const flowernumber = await Signet.follower(player2.address).followerNum
                  expect(flowernumber, "0")
              })
          })
      })
