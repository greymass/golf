# 07 - Retrieving, iterating, and combining table data

Retrieve and build a dataset based on a contract table.

Shown below an example of boilerplate code that most application developers have to write in order to retrieve data and combine results. The new SDKs should ease this and be able to reduce the need to write this sort of code.

```js
let more = true
let nextKey = ''
let count = 0
let holders: Name[] = []
while (more) {
    const response = await this.chainApi.get_table_by_scope({
        code: token.account,
        table: 'accounts',
        lower_bound: nextKey,
        limit: 500,
    })

    if (response.more && response.more !== '') {
        more = true
        nextKey = response.more
    } else {
        more = false
    }
    count += response.rows.length
    holders = holders.concat(response.rows.map((r) => Name.from(r.scope)))
}
```

Source: [obe-indexer](https://github.com/telosnetwork/obe-indexer/blob/062a4b3e69a9a0ab51b21dcedf8013fdcc41b326/src/indexer/jobs/TokenPoller.ts#L76-L97)

The developer will should be able to:

-   Setup an `APIClient` to access the blockchain.
-   Know the contract, table, scope they want to interact with.
-   Retrieve results from a contract table.
-   Easily be able to iterate based on the value of `more`.
