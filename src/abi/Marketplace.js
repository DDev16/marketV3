const Marketplace = {
	abi: [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_tokenAddress",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				}
			],
			"name": "SaleCancelled",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "royalty",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				}
			],
			"name": "TokenBought",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				}
			],
			"name": "TokenListed",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				}
			],
			"name": "TokenSold",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "activeListings",
			"outputs": [
				{
					"internalType": "address",
					"name": "contractAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "contractAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "buyToken",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address[]",
					"name": "contractAddresses",
					"type": "address[]"
				},
				{
					"internalType": "uint256[]",
					"name": "tokenIds",
					"type": "uint256[]"
				}
			],
			"name": "buyTokens",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "contractAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "cancelListing",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address[]",
					"name": "contractAddresses",
					"type": "address[]"
				},
				{
					"internalType": "uint256[]",
					"name": "tokenIds",
					"type": "uint256[]"
				}
			],
			"name": "cancelListings",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAllTokensForSale",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "contractAddress",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "seller",
							"type": "address"
						}
					],
					"internalType": "struct NFTMarketplace.TokenDetails[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "contractAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				}
			],
			"name": "listToken",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address[]",
					"name": "contractAddresses",
					"type": "address[]"
				},
				{
					"internalType": "uint256[]",
					"name": "tokenIds",
					"type": "uint256[]"
				},
				{
					"internalType": "uint256[]",
					"name": "prices",
					"type": "uint256[]"
				}
			],
			"name": "listTokens",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "listingFee",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "listings",
			"outputs": [
				{
					"internalType": "address",
					"name": "contractAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "isActive",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "nftToken",
			"outputs": [
				{
					"internalType": "contract ERC721",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_listingFee",
					"type": "uint256"
				}
			],
			"name": "setListingFee",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "withdrawFees",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
};
  
export default Marketplace;