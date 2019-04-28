## Eth 2.0

As part of [hackingresear.ch's](http://hackingresear.ch/economic-incentives/) attempts to model beacon chain economics, we provide helper functions to compute metrics of interest such as issuance rates or validator interests from staking.

Although we strive for maximum correctness, we first provide simplified models to isolate significant mechanisms driving the rates. We will closely follow developments relative to the [current specs](https://github.com/ethereum/eth2.0-specs/blob/master/specs/core/0_beacon-chain.md) as well as develop more sophisticated models of validator behavior (e.g., committing a slashable vote or incurring penalties for staying offline).
