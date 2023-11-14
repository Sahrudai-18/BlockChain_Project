document.addEventListener("DOMContentLoaded", function () {
    // Check if Metamask is installed
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("Metamask is installed.");
    } else {
        console.log("Metamask is not installed.");
    }

    // Connect to Metamask when the button is clicked
    
        web3.eth.requestAccounts()
            .then(function (accounts) {
                console.log("Connected to Metamask with address: " + accounts[0]);
            })
            .catch(function (error) {
                console.error("Failed to connect to Metamask:", error);
            });


		


});

const getbutton = document.getElementById('verify');

				// Add a click event listener to the button
				getbutton.addEventListener('click', function() {
					event.preventDefault();
					// Your code to be executed when the button is clicked
					console.log('Button was clicked!');
				async function interactwithsmartcontract2(){
				const contractABI=  [
                    {
                      "constant": true,
                      "inputs": [
                        {
                          "name": "",
                          "type": "uint256"
                        }
                      ],
                      "name": "certificates",
                      "outputs": [
                        {
                          "name": "certificateID",
                          "type": "uint256"
                        },
                        {
                          "name": "studentID",
                          "type": "uint256"
                        },
                        {
                          "name": "studentName",
                          "type": "string"
                        },
                        {
                          "name": "dateOfBirth",
                          "type": "uint256"
                        },
                        {
                          "name": "institutionName",
                          "type": "string"
                        },
                        {
                          "name": "dateOfIssuance",
                          "type": "uint256"
                        },
                        {
                          "name": "certificateName",
                          "type": "string"
                        }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function",
                      "signature": "0x663b3e22"
                    },
                    {
                      "constant": true,
                      "inputs": [],
                      "name": "certificateCounter",
                      "outputs": [
                        {
                          "name": "",
                          "type": "uint256"
                        }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function",
                      "signature": "0x67764b26"
                    },
                    {
                      "constant": false,
                      "inputs": [
                        {
                          "name": "_studentID",
                          "type": "uint256"
                        },
                        {
                          "name": "_studentName",
                          "type": "string"
                        },
                        {
                          "name": "_dateOfBirth",
                          "type": "uint256"
                        },
                        {
                          "name": "_institutionName",
                          "type": "string"
                        },
                        {
                          "name": "_dateOfIssuance",
                          "type": "uint256"
                        },
                        {
                          "name": "_certificateName",
                          "type": "string"
                        }
                      ],
                      "name": "addCertificate",
                      "outputs": [
                        {
                          "name": "",
                          "type": "uint256"
                        }
                      ],
                      "payable": false,
                      "stateMutability": "nonpayable",
                      "type": "function",
                      "signature": "0x4331436b"
                    },
                    {
                      "constant": true,
                      "inputs": [
                        {
                          "name": "_studentID",
                          "type": "uint256"
                        },
                        {
                          "name": "_certificateID",
                          "type": "uint256"
                        }
                      ],
                      "name": "getCertificate",
                      "outputs": [
                        {
                          "name": "certificateID",
                          "type": "uint256"
                        },
                        {
                          "name": "studentID",
                          "type": "uint256"
                        },
                        {
                          "name": "studentName",
                          "type": "string"
                        },
                        {
                          "name": "dateOfBirth",
                          "type": "uint256"
                        },
                        {
                          "name": "institutionName",
                          "type": "string"
                        },
                        {
                          "name": "dateOfIssuance",
                          "type": "uint256"
                        },
                        {
                          "name": "certificateName",
                          "type": "string"
                        }
                      ],
                      "payable": false,
                      "stateMutability": "view",
                      "type": "function",
                      "signature": "0xad9df70d"
                    }
                  ];
				
					const contractAddress= '0xcc387d6e39C70674c2b7cE4EC61e1C1e64Cf6ebc';
					
						console.log('Interacting with SmartContract2');
						const input1= document.getElementById('studentid').value;
						console.log(input1);
						const input2= document.getElementById('certificateid').value;
						console.log(input2);
						
				
						const contract = new web3.eth.Contract(contractABI, contractAddress);
						 
						try {
							// Example: Send a transaction to a state-changing function with the form data
							const accounts =  await web3.eth.getAccounts();
				console.log(accounts[0]);
							
							const transaction = await  contract.methods.getCertificate(input1, input2).call({ from: accounts[0], gas: 200000 });
							console.log('Transaction successful:', transaction);
						  } catch (error) {
							console.error('Error interacting with smart contract:', error);
						  }
						}
					interactwithsmartcontract2();	
					});
	
