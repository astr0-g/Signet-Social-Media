const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("SignetControllor test", function () {
          let nftmarketplace, deployer, player1, player2, player3, player4
          const PRICE = ethers.utils.parseEther("0.1")
          const Token_ID = 0
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              accounts = await ethers.getSigners()
              player1 = accounts[1]
              player2 = accounts[2]
              player3 = accounts[3]
              player4 = accounts[4]
              await deployments.fixture(["all"])
              Signet = await ethers.getContract("SignetControllor")
              // nftmarketplace = await nftmarketplace.connet(player)
          })

          describe("Construtor", () => {
              it("follow 2 address and read following number equal to 2.", async () => {
                  await Signet.controllorCreateSignetor("name", "name")
                  await Signet.connect(player1).controllorCreateSignetor("name", "name")
                  await Signet.connect(player2).controllorCreateSignetor("name", "name")
                  await Signet.follow(player1.address)
                  await Signet.follow(player2.address)
                  const flowingnumber = await Signet.following(deployer).FollowingNum
                  expect(flowingnumber, "2")
              })
              it("follow 2 address and read following number equal to 2.", async () => {
                  await Signet.controllorCreateSignetor("name", "name")
                  await Signet.connect(player1).controllorCreateSignetor("name", "name")
                  await Signet.connect(player2).controllorCreateSignetor("name", "name")
                  await Signet.follow(player1.address)
                  await Signet.connect(player1).follow(deployer)
                  await Signet.follow(player2.address)
                  await Signet.connect(player2).follow(deployer)
                  //   await Signet.connect(player2).follow(deployer)
                  //   await Signet.connect(player2).follow(deployer)
                  await expect(Signet.connect(player2).follow(deployer)).to.be.reverted
                  const flowernumber1 = await Signet.follower(deployer)
                  assert.equal(flowernumber1.toString(), "2")
                  await Signet.unfollow(player2.address)
                  const flowingnumber = await Signet.following(deployer)
                  assert.equal(flowingnumber.toString(), "1")
                  const flowernumber = await Signet.follower(player2.address)
                  assert.equal(flowernumber.toString(), "0")
                  await expect(Signet.unfollow(player2.address)).to.be.reverted
              })
              it("checker check", async () => {
                  await Signet.controllorCreateSignetor("name", "name")
                  await Signet.connect(player1).controllorCreateSignetor("name", "name")
                  await Signet.connect(player2).controllorCreateSignetor("name", "name")
                  await Signet.follow(player1.address)
                  await Signet.connect(player1).follow(deployer)
                  const result = await Signet.checkfollowed(player1.address, deployer)
                  console.log(result)
                  assert.equal(result, true)
                  //   await Signet.connect(player2).follow(deployer)
                  //   await Signet.connect(player2).follow(deployer)
                  //   await Signet.connect(player2).follow(deployer)
                  //   await Signet.connect(player2).follow(deployer)
                  const result1 = await Signet.checkfollowed(deployer, player2.address)
                  console.log(result1)
                  assert.equal(result1, false)
                  //   await expect(Signet.connect(player2).follow(deployer)).to.be.reverted
                  //   const flowernumber1 = await Signet.follower(player2.address).followerNum
                  //   expect(flowernumber1, "1")
                  //   await Signet.unfollow(player2.address)
                  //   const flowingnumber = await Signet.following(deployer).FollowingNum
                  //   expect(flowingnumber, "1")
                  //   const flowernumber = await Signet.follower(player2.address).followerNum
                  //   expect(flowernumber, "0")
              })
              it("a follow b, a follow c, a unfollw c, a unfollw b, check a whether follow b or not", async () => {
                  await Signet.controllorCreateSignetor("name", "name")
                  await Signet.connect(player1).controllorCreateSignetor("name", "name")
                  await Signet.connect(player2).controllorCreateSignetor("name", "name")
                  await Signet.connect(player3).controllorCreateSignetor("name", "name")
                  await Signet.connect(player4).controllorCreateSignetor("name", "name")
                  await Signet.follow(player1.address)
                  await Signet.connect(player2).follow(player1.address)
                  await Signet.connect(player3).follow(player1.address)
                  await Signet.connect(player4).follow(player1.address)
                  await Signet.connect(player2).unfollow(player1.address)
                  await Signet.connect(player3).unfollow(player1.address)
                  await Signet.connect(player2).follow(player1.address)
                  await Signet.connect(player3).follow(player1.address)
                  await Signet.unfollow(player1.address)
                  await Signet.follow(player1.address)
                  await Signet.unfollow(player1.address)
                  //   0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
                  //   0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
                  //   0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
                  //   assert.equal(result, true)
                  //   //   await Signet.connect(player2).follow(deployer)
                  //   //   await Signet.connect(player2).follow(deployer)
                  //   //   await Signet.connect(player2).follow(deployer)
                  //   //   await Signet.connect(player2).follow(deployer)
                  //   const result1 = await Signet.checkfollowed(deployer, player2.address)
                  //   console.log(result1)
                  //   assert.equal(result1, false)
                  //   //   await expect(Signet.connect(player2).follow(deployer)).to.be.reverted
                  //   //   const flowernumber1 = await Signet.follower(player2.address).followerNum
                  //   //   expect(flowernumber1, "1")
                  //   //   await Signet.unfollow(player2.address)
                  //   //   const flowingnumber = await Signet.following(deployer).FollowingNum
                  //   //   expect(flowingnumber, "1")
                  //   //   const flowernumber = await Signet.follower(player2.address).followerNum
                  //   //   expect(flowernumber, "0")
              })
          })
      })
