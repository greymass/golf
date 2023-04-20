import { APIClient } from "@greymass/eosio";
import { Contract, Table, TableCursor, TableEntries } from "@wharfkit/contract";

const contract = new Contract({
  account: "eosio.forums",
  client: new APIClient({url: "https://eos.greymass.com"}),
});

/**

interface GetTableCursorOptions {
    // Query
    scope?: string; // default: matches contract account name
    // Response
    json?: boolean; // default: true
    // Pagination
    start?: string; // default: null, used for lower_bound
    end?: string; // default: null, used for upper_bound
    limit?: number; // default: 100, used for limit
    // Indices
    index?: number; // default: 1, used for index_position
    indexType? : string; // default: "", used for key_type
}
  
function getTableRows(table: NameType, options?: GetTableCursorOptions) {}

*/

// Get first 100 entries:
const cursor: TableCursor = await contract.getTableRows("proposal");

// Translates into get_table_rows using with data...
// {
//     "code": "eosio.forum",
//     "scope": "eosio.forum",
//     "table": "proposal",
//     "lower_bound": null,
//     "upper_bound": null,
//     "index_position": 1,
//     "key_type": "",
//     "limit": "100",
//     "reverse": false,
//     "show_payer": true
// }


for (const row of cursor) {
  console.log(row);
  // { id: 1, title: 'Proposal 1', content: 'Proposal 1 content', ... }
}

// Use iterator object to get next rows:
const moreRows: TableCursor = await cursor.more()

for (const row of cursor) {
  console.log(row);
  // { id: 101, title: 'Proposal 101', content: 'Proposal 101 content', ... }
}
  
