# 01 - Creating a Transaction

The goal of this first round is to try and create a code sample that illustrates a developer should assemble a transaction in their application with the new Web Client SDKs. 

The developer will need to:

- Setup an `APIClient` to access the blockchain.
- Know the contract they want to interact with.
- Know the action they want to call on the contract.
- Know the action data they want to pass into the call.
- Be able to easily create that transaction, resulting in a `Transaction` object.

Utilizing `@greymass/eosio` alone, this requires calling `get_abi` or embedding a `Struct` that defines the ABI.