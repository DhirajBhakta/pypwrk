# Pypwrk
An attempt at the pipedream of Paul Morrison's [Flow Based Programming](https://jpaulm.github.io/fbp/) to make way for Rapid Prototyping for non technical folks, with most of the concrete solutions stolen from his [reference implementation](https://github.com/jpaulm/drawfbp)
![](https://jpaulm.github.io/fbp/fbp_anims.gif)

 FBP defines applications as networks of "black box" processes, which communicate via data chunks (called Information Packets) travelling across predefined connections (think "conveyor belts"), where the connections are specified externally to the processes

## [Flow Based Programming](https://en.wikipedia.org/wiki/Flow-based_programming)


## Design by Contract
https://en.wikipedia.org/wiki/Design_by_contract

In FBP, part of the specification of a component is the data formats and stream structures that it can accept, and those it will generate. This constitutes a form of design by contract

- consider Linda's approach of forcing all input and output to be tuples

## Design decisions
1. Should it be preemptive? non premptive? I really dont know at this point
2. Should a function need multiple outputs?
    - consider Linda's approach of forcing all input and output to be tuples
3. Theory says all processes (black boxes) should be async. But Moria implementation was strictly synchronous. Am i dead ?

- The list of connections is interpreted by a "scheduler"
- IPs are allocated in an IP space 
- **side effects are not tolerated**
- backpressure