// This file contains the weighted network of coappearances of characters in 
// Victor Hugo's novel "Les Miserables". Nodes represent characters as indicated 
// by the labels, and edges connect any pair of characters that appear in the 
// same chapter of the book. The values on the edges are the number of such 
// coappearances. The data on coappearances were taken from D. E. Knuth, The 
// Stanford GraphBase: A Platform for Combinatorial Computing, Addison- Wesley, 
// Reading, MA (1993). 
// 
// The group labels were transcribed from "Finding and evaluating community 
// structure in networks" by M. E. J. Newman and M. Girvan. 
var miserables = { 
  nodes:[ 
    {nodeName:"Myriel", group:1}, 
    {nodeName:"Napoleon", group:1}, 
    {nodeName:"Mlle. Baptistine", group:1}, 
    {nodeName:"Mme. Magloire", group:1}, 
    {nodeName:"Countess de Lo", group:1}, 
    {nodeName:"Geborand", group:1}, 
    {nodeName:"Champtercier", group:1}, 
    {nodeName:"Cravatte", group:1}, 
    {nodeName:"Count", group:1}, 
    {nodeName:"Old Man", group:1}, 
  ], 
  links:[ 
    {source:1, target:0, value:2}, 
    {source:2, target:0, value:2}, 
    {source:3, target:0, value:2}, 
    {source:4, target:0, value:2}, 
    {source:5, target:0, value:2}, 
    {source:6, target:0, value:2}, 
    {source:7, target:0, value:2}, 
    {source:8, target:0, value:2}, 
    {source:9, target:0, value:2}, 
  ]
}; 