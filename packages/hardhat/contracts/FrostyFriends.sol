//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./CrystalPoint.sol";
import "./FrostyNFT.sol";

contract FrostyFriends {
  CrystalPoint crystalPoint;
  FrostyNFT frostyNFT;

  address public immutable owner;
  uint256 public constant tokensPerEth = 1000000000;

  uint256 public totalFrostyFriends = 0;
  mapping(address => Friend) public contractaddressToFriend;

  struct Friend {
    uint256 id;
    address owner;
    uint256 time;
  }

  event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

  constructor(address _owner, address _tokenAddress, address _nftAddress) {
    owner = _owner;
    crystalPoint = CrystalPoint(_tokenAddress);
    frostyNFT = FrostyNFT(_nftAddress);
  }

  modifier isOwner() {
    require(msg.sender == owner, "Not the Owner");
    _;
  }

  function getFriend(address player) public view returns (Friend memory){
    return contractaddressToFriend[player];
  }

  function buyFrostyFriend(string memory _tokenURI) public {
    contractaddressToFriend[msg.sender] = Friend(totalFrostyFriends, msg.sender, block.timestamp);
    totalFrostyFriends++;
    frostyNFT.mintFrosty(msg.sender, _tokenURI);
  }

  function buyCrystalPoint() public payable {
    uint256 tokens = tokensPerEth * msg.value;
    crystalPoint.mint(msg.sender, tokens);
    emit BuyTokens(msg.sender, msg.value, tokens);
  }

  function withdraw() isOwner public {
    (bool success,) = owner.call{value: address(this).balance}("");
    require(success, "Failed to send Ether");
  }
}