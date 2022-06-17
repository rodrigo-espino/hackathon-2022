// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract vContract{
uint votes;

struct Vote{
string fDirection;
string tDirection;
uint vote;
}
Vote[] Votes;

struct Candidate{
    string name;
    string partido;
    string cartera;
    uint votes;
    string category;
}
Candidate[] Candidates;

function setVotes(uint _v) public{
 votes = _v;
}

function voting(string memory _fDirection, string memory _tDirection) public {
if (votes == 0){
    revert("Not found votes");
}
Votes.push(Vote(_fDirection, _tDirection, 1));
votes -=1;
}





}