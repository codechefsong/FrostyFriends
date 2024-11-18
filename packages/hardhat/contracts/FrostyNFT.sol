// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FrostyNFT is ERC721URIStorage {
  uint256 public numberOfNFT = 0;

  constructor() ERC721("Frosty NFT", "FNFT") {}

  function mintFrosty(address _to, string memory _tokenURI) public {
    _mint(_to, numberOfNFT);
    _setTokenURI(numberOfNFT, _tokenURI);
    numberOfNFT++;
  }
}
