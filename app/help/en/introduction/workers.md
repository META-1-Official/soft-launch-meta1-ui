# Workers

Workers are work project proposals that expect to receive bounties from the blockchain by providing services. A proposal contains at least the following information:

* Start and end time
* Daily payment budget
* Max cap

It should also include a link to a web page or forum post detailing the work item content.

Voters can choose to support or oppose workers.

## Workers Payment Mechanism

The amount received by the worker every day comes from a daily liquidity pool with a fixed amount, which is allocated according to the number of votes, until the funds in the daily budget pool are exhausted. for instance:

* The total daily liquidity pool is 400K META1
* There are 5 workers that are eligible (support votes are more than negative votes), and they all require 100K META1 daily worker support.

Then the 4 projects with more votes will receive 100K META1 daily payment, but since the 4 projects are paid, there is no funds left in the daily liquidity pool, so the payment amount of the fifth project will be 0.
