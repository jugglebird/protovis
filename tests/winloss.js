
/*
 * Win/Loss data for email providers. The count is the number of companies that
 * use that email provider. The groups are:
 *   - 0: The focus company
 *   - 1: Companies that had a net loss of subscriber companies to the focus company
 *   - 2: Companies that had a net gain of subscriber companies to the focus company
 */

var winloss = {
  nodes: [
    {name: "Google", group: 1, outcome: "Winner"},
    {name: "AppRiver", group: 0, outcome: "Winner"},
    {name: "Rackspace", group: 0, outcome: "Control"},
    {name: "Other", group: 1, outcome: "Loser"},
    {name: "On Site", group: 0, outcome: "Loser"}
  ],
  links: [
    {source:2, target:1, status:"win", count: 15},
    {source:2, target:3, status:"win", count: 25},
    {source:2, target:0, status:"win", count: 35},
    {source:2, target:4, status:"win", count: 45},
    {source:1, target:2, status:"loss", count: 1},
    {source:3, target:2, status:"loss", count: 2},
    {source:0, target:2, status:"loss", count: 3},
    {source:4, target:2, status:"loss", count: 4}
  ]
};
