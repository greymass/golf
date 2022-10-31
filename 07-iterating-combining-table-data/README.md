# 07 - Retrieving, iterating, and combining table data

Retrieve and build a dataset based on a contracts data table.

Shown below is boilerplate code that most application developers have to write in order to retrieve data and combine results. The new SDKs should ease this and be able to reduce the need to write this sort of code.

https://github.com/telosnetwork/obe-indexer/blob/062a4b3e69a9a0ab51b21dcedf8013fdcc41b326/src/indexer/jobs/TokenPoller.ts#L76-L99

The developer will should be able to:

-   Setup an `APIClient` to access the blockchain.
-   Know the contract, table, scope they want to interact with.
-   Retrieve results from a contract table.
-   Easily be able to iterate based on the value of `more`.
