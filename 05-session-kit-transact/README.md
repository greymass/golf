# 05 - The Session Kit - Basic Transaction

Manually configure a Session object and perform a transaction.

The developer will need to:

-   Setup an `Session` class to represent the active session.
-   Pass a WalletPlugin that's capable of signing with a private key.
-   Perform a `.transact` call on the session to perform a transaction.
-   Receive a response that indicates the status of a transaction.
