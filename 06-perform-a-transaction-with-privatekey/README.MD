# 06 - Performing a transaction using a private key

Illustrate, using all available SDKs, the optimal process to create a transaction, sign it with a private key, and broadcast it to the network. The purpose of this is to show approaches for each solution and ensure the new method via the Session Kit resolves these issues.

The developer will need to:

-   Setup some form of connection to an Antelope API server.
-   Create an `eosio:refund` transaction and set its data (action selected due to data simplicity).
-   Create a signature for the transaction.
-   Broadcast the signed transaction to the Antelope API server.

Each SDK this is implemented for will be an individual JS file that should be able to be executed standalone.

The implementation examples that exist within this round are:

-   eosio-core-untyped.js - Uses `@greymass/eosio` without ABI types
    -   API Requests: 3 (get_info, get_abi, push_transaction)
-   eosio-core-typed.js - Uses `@greymass/eosio` with defined ABI types
    -   API Requests: 2 (get_info, push_transaction)
-   eosjs.js - Uses `eosjs`
    -   API Requests: 5 (get_info, get_abi, get_block/get_block_header_state, get_required_keys, push_transaction)
-   session-kit.js - Potential use of the Session Kit from the new SDKs
    -   API Requests: ??
