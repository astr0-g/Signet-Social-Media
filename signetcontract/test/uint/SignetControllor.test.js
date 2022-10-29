const { assert, expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");
const { network, deployments, ethers, getNamedAccounts } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("SignetControllor test", function () {
      let nftmarketplace,
        deployer,
        player1,
        player2,
        player3,
        player4,
        player5,
        player6,
        player7,
        player8,
        player9;
      const PRICE = ethers.utils.parseEther("0.1");
      const Token_ID = 0;
      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer;
        accounts = await ethers.getSigners();
        player1 = accounts[1];
        player2 = accounts[2];
        player3 = accounts[3];
        player4 = accounts[4];
        player5 = accounts[5];
        player6 = accounts[6];
        player7 = accounts[7];
        player8 = accounts[8];
        player9 = accounts[9];
        await deployments.fixture(["all"]);
        Signet = await ethers.getContract("SignetControllor");
        SignetFollowSystem = await ethers.getContract("SignetFollowSystem");
        SignetName = await ethers.getContract("SignetName");
        // nftmarketplace = await nftmarketplace.connet(player)\
        await SignetFollowSystem.setSignetControllor(Signet.address);
        await SignetName.setSignetControllor(Signet.address);
      });

      describe("Construtor", () => {
        it("follow 2 address and read following number equal to 2.", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.follow(player1.address);
          await Signet.follow(player2.address);
          const flowingnumber = await Signet.getFollowingsNum(deployer)
            .FollowingNum;
          expect(flowingnumber, "2");
        });
        it("follow 2 address and read following number equal to 2.", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.follow(player1.address);
          await Signet.connect(player1).follow(deployer);
          await Signet.follow(player2.address);
          await Signet.connect(player2).follow(deployer);
          //   await Signet.connect(player2).follow(deployer)
          //   await Signet.connect(player2).follow(deployer)
          await expect(Signet.connect(player2).follow(deployer)).to.be.reverted;
          const flowernumber1 = await Signet.getFollowersNum(deployer);
          assert.equal(flowernumber1.toString(), "2");
          await Signet.unfollow(player2.address);
          const flowingnumber = await Signet.getFollowingsNum(deployer);
          assert.equal(flowingnumber.toString(), "1");
          const flowernumber = await Signet.getFollowersNum(
            player2.address
          );
          assert.equal(flowernumber.toString(), "0");
          //   await expect(Signet.unfollow(player2.address)).to.be.reverted
        });
        it("checker check", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.follow(player1.address);
          await Signet.connect(player1).follow(deployer);
          const result = await Signet.checkfollowed(player1.address, deployer);
          console.log(result);
          assert.equal(result, true);
          //   await Signet.connect(player2).follow(deployer)
          //   await Signet.connect(player2).follow(deployer)
          //   await Signet.connect(player2).follow(deployer)
          //   await Signet.connect(player2).follow(deployer)
          const result1 = await Signet.checkfollowed(deployer, player2.address);
          console.log(result1);
          assert.equal(result1, false);
          //   await expect(Signet.connect(player2).follow(deployer)).to.be.reverted
          //   const flowernumber1 = await Signet.follower(player2.address).followerNum
          //   expect(flowernumber1, "1")
          //   await Signet.unfollow(player2.address)
          //   const flowingnumber = await Signet.following(deployer).FollowingNum
          //   expect(flowingnumber, "1")
          //   const flowernumber = await Signet.follower(player2.address).followerNum
          //   expect(flowernumber, "0")
        });
        it("check findfollowerId and findFollwingId function", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player3).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player4).controllorCreateSignetor(
            "name",
            "name"
          );

          await Signet.connect(player2).follow(player1.address);
          await Signet.connect(player3).follow(player1.address);
          await Signet.connect(player3).follow(player2.address);
          await Signet.connect(player4).follow(player1.address);
          const rueslt1 = await SignetFollowSystem.findfollowerId(
            player1.address,
            player2.address
          );
          assert.equal(rueslt1, "1");
          const rueslt2 = await SignetFollowSystem.findFollwingId(
            player2.address,
            player1.address
          );
          assert.equal(rueslt2, "1");
          const rueslt3 = await SignetFollowSystem.findfollowerId(
            player1.address,
            player3.address
          );
          assert.equal(rueslt3, "2");
          const rueslt4 = await SignetFollowSystem.findFollwingId(
            player3.address,
            player1.address
          );
          assert.equal(rueslt4, "1");
          const rueslt5 = await SignetFollowSystem.findfollowerId(
            player2.address,
            player3.address
          );
          assert.equal(rueslt5, "1");
          const rueslt6 = await SignetFollowSystem.findFollwingId(
            player3.address,
            player2.address
          );
          assert.equal(rueslt6, "2");
          const rueslt7 = await SignetFollowSystem.findfollowerId(
            player1.address,
            player4.address
          );
          assert.equal(rueslt7, "3");
          const rueslt8 = await SignetFollowSystem.findFollwingId(
            player4.address,
            player1.address
          );
          assert.equal(rueslt8, "1");
          //   console.log(
          //       "rueslt1: " + rueslt1.toString(),
          //       "rueslt2: " + rueslt2.toString(),
          //       "rueslt3: " + rueslt3.toString(),
          //       "rueslt4: " + rueslt4.toString(),
          //       "rueslt5: " + rueslt5.toString(),
          //       "rueslt6: " + rueslt6.toString(),
          //       "rueslt7: " + rueslt7.toString(),
          //       "rueslt8: " + rueslt8.toString()
          //   )
        });
        it("checking unfollow function deleting array in struct correctly", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player3).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player4).controllorCreateSignetor(
            "name",
            "name"
          );

          await Signet.connect(player2).follow(player1.address);
          await Signet.connect(player3).follow(player1.address);
          await Signet.connect(player3).follow(player2.address);
          await Signet.connect(player4).follow(player1.address);
          await Signet.connect(player2).unfollow(player1.address);

          const rueslt1 = await SignetFollowSystem.findfollowerId(
            player1.address,
            player2.address
          );
          assert.equal(rueslt1.toString(), "0");
          const rueslt2 = await SignetFollowSystem.findFollwingId(
            player2.address,
            player1.address
          );
          assert.equal(rueslt2.toString(), "0");
          const rueslt3 = await SignetFollowSystem.findfollowerId(
            player1.address,
            player3.address
          );
          assert.equal(rueslt3.toString(), "2");
          const rueslt4 = await SignetFollowSystem.findFollwingId(
            player3.address,
            player1.address
          );
          assert.equal(rueslt4.toString(), "1");
          const rueslt5 = await SignetFollowSystem.findfollowerId(
            player2.address,
            player3.address
          );
          assert.equal(rueslt5.toString(), "1");
          const rueslt6 = await SignetFollowSystem.findFollwingId(
            player3.address,
            player2.address
          );
          assert.equal(rueslt6.toString(), "2");
          const rueslt7 = await SignetFollowSystem.findfollowerId(
            player1.address,
            player4.address
          );
          assert.equal(rueslt7.toString(), "1");
          const rueslt8 = await SignetFollowSystem.findFollwingId(
            player4.address,
            player1.address
          );
          assert.equal(rueslt8.toString(), "1");
          //   console.log(
          //       "rueslt1: " + rueslt1.toString(),
          //       "rueslt2: " + rueslt2.toString(),
          //       "rueslt3: " + rueslt3.toString(),
          //       "rueslt4: " + rueslt4.toString(),
          //       "rueslt5: " + rueslt5.toString(),
          //       "rueslt6: " + rueslt6.toString(),
          //       "rueslt7: " + rueslt7.toString(),
          //       "rueslt8: " + rueslt8.toString()
          //   )
        });
        it("mass following and unfollowing test", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player3).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player4).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player5).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player6).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player7).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player8).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player9).controllorCreateSignetor(
            "name",
            "name"
          );

          await Signet.connect(player2).follow(player1.address);
          await Signet.connect(player3).follow(player1.address);
          await Signet.connect(player3).follow(player2.address);
          await Signet.connect(player4).follow(player1.address);
          await Signet.connect(player2).unfollow(player1.address);

          await Signet.connect(player3).follow(player9.address);
          await Signet.connect(player4).follow(player2.address);
          await Signet.connect(player4).follow(player7.address);
          await Signet.connect(player5).follow(player3.address);
          await Signet.connect(player6).follow(player2.address);
          await Signet.connect(player3).unfollow(player2.address);
          await Signet.connect(player6).unfollow(player2.address);

          await Signet.connect(player7).follow(player2.address);
          await Signet.connect(player8).follow(player2.address);
          await Signet.connect(player9).follow(player2.address);

          await Signet.connect(player2).follow(player9.address);
          await Signet.connect(player3).follow(player8.address);
          await Signet.connect(player4).follow(player9.address);

          await Signet.connect(player6).follow(player5.address);
          await Signet.connect(player6).follow(player9.address);
          await Signet.connect(player6).follow(player4.address);

          await Signet.connect(player7).follow(player5.address);
          await Signet.connect(player8).follow(player6.address);
          await Signet.connect(player9).follow(player3.address);
          await Signet.connect(player2).follow(player1.address);

          await Signet.connect(player7).unfollow(player2.address);
          await Signet.connect(player8).unfollow(player2.address);
          await Signet.connect(player9).unfollow(player2.address);
          await Signet.connect(player2).unfollow(player9.address);
          await Signet.connect(player3).unfollow(player8.address);
          await Signet.connect(player4).unfollow(player9.address);

          await Signet.connect(player6).unfollow(player5.address);
          await Signet.connect(player6).unfollow(player9.address);
          await Signet.connect(player6).unfollow(player4.address);
          const flowingnumber1 = await Signet.getFollowersNum(
            player1.address
          );
          assert.equal(flowingnumber1.toString(), "3");
          const flowingnumber2 = await Signet.getFollowersNum(
            player2.address
          );
          assert.equal(flowingnumber2.toString(), "1");
          const flowingnumber3 = await Signet.getFollowersNum(
            player3.address
          );
          assert.equal(flowingnumber3.toString(), "2");
          const flowingnumber4 = await Signet.getFollowersNum(
            player4.address
          );
          assert.equal(flowingnumber4.toString(), "0");
          const flowingnumber5 = await Signet.getFollowersNum(
            player5.address
          );
          assert.equal(flowingnumber5.toString(), "1");
          const flowingnumber6 = await Signet.getFollowersNum(
            player6.address
          );
          assert.equal(flowingnumber6.toString(), "1");
          const flowingnumber7 = await Signet.getFollowersNum(
            player7.address
          );
          assert.equal(flowingnumber7.toString(), "1");
          const flowingnumber8 = await Signet.getFollowersNum(
            player8.address
          );
          assert.equal(flowingnumber8.toString(), "0");
          const flowingnumber9 = await Signet.getFollowersNum(
            player9.address
          );
          assert.equal(flowingnumber9.toString(), "1");
          await Signet.connect(player1).follow(player2.address);
          await Signet.connect(player1).follow(player3.address);
          await Signet.connect(player1).follow(player4.address);
          await Signet.connect(player1).follow(player5.address);
          const a = await Signet.getFollowings(player1.address);
          console.log(a);
          const b = await Signet.getFollowers(player1.address);
          console.log(b);
        });
        it("like and check like num and like contributor", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player3).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player4).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player5).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player6).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player7).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player8).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player9).controllorCreateSignetor(
            "name",
            "name"
          );
          const addresscontract = await Signet.getOwnerContractForSignetor(
            player1.address
          );
          console.log(addresscontract);
          await Signet.connect(player1).sendmessage(addresscontract, "name");

          await Signet.connect(player2).like(player1.address, 1);
          await Signet.connect(player3).like(player1.address, 1);
          await expect(Signet.connect(player1).like(player1.address, 1)).to.be
            .reverted;
          await expect(Signet.connect(player2).like(player1.address, 1)).to.be
            .reverted;
          const likednum = await Signet.getLikedNum(1);
          assert.equal(likednum.toString(), "2");
        });
        it("star and check contributor", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.connect(player1).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player2).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player3).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player4).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player5).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player6).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player7).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player8).controllorCreateSignetor(
            "name",
            "name"
          );
          await Signet.connect(player9).controllorCreateSignetor(
            "name",
            "name"
          );
          const addresscontract = await Signet.getOwnerContractForSignetor(
            player9.address
          );
          console.log(addresscontract);
          await Signet.connect(player9).sendmessage(addresscontract, "name");
          const Amount = ethers.utils.parseEther("10");
          await Signet.star(player9.address, 1, { value: Amount });
          const con = await Signet.getStarContributor(1);
          assert.equal(con[0], deployer);
          const Balance = await Signet.provider.getBalance(deployer);
          console.log(Balance.toString() / 10 ** 18);
          const Balance1 = await Signet.provider.getBalance(player9.address);
          console.log(Balance1.toString() / 10 ** 18);
          const Balance2 = await Signet.provider.getBalance(
            SignetFollowSystem.address
          );
          console.log(Balance2.toString() / 10 ** 18);
        });
        it("create name and test name and check name and check again", async () => {
          await Signet.controllorCreateSignetor("name", "name");
          await Signet.createNameForNewUser("A$TRO");
          const name = await Signet.checkName(deployer);
          assert.equal(name, "A$TRO");
          await expect(Signet.createNameForNewUser("A$TROa")).to.be.reverted;
          await expect(Signet.changeNameForUser("A$TRObulowidasdfrtegrewecsdc"))
            .to.be.reverted;
          await Signet.changeNameForUser("A$TRO1");
          const name1 = await Signet.checkName(deployer);
          assert.equal(name1, "A$TRO1");
        });
      });
    });
