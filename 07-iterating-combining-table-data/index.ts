import { Contract, Table, TableEntries } from "@wharfkit/contract";

const contract = new Contract({
  account: "eosio.forums",
});

// Get first 100 entries:
const tableRows: TableEntries = await contract.getTableEntries("proposal", {
  limit: 100,
});

for (const row of tableRows) {
  console.log(row);
  // { id: 1, title: 'Proposal 1', content: 'Proposal 1 content', ... }
}

// Use iterator object to get next rows:
const moreRows: TableEntries = await contract.getTableEntries("proposal", {
  from: tableRows.next_row,
  limit: 100,
});
