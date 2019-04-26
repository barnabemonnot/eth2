const eth2 = require("./eth2");

// Issuance rate as a function of the total staked
const getIssuanceRate = function(data) {
  const networkStake = eth2.toGwei(data.networkStake);
  const p = data.p;
  const deposit = eth2.toGwei(data.deposit);
  const baseRewardQuotient = data.baseRewardQuotient;
  const numberOfShards = data.numberOfShards;
  const ethInCirculation = eth2.toGwei(data.ethInCirculation);

  const baseReward = eth2.economics.baseReward(deposit, baseRewardQuotient, networkStake, p);

  const numberOfValidators = eth2.economics.numberOfValidatorsByStake(networkStake, deposit);
  const issuancePerEpoch = eth2.economics.issuancePerEpoch(numberOfValidators, baseReward);
  const issuancePerYear = eth2.economics.issuancePerYear(issuancePerEpoch);

  const issuanceRate = eth2.economics.issuanceRate(issuancePerYear, ethInCirculation);

  return issuanceRate;
}

// Validator interest as a function of the total staked
const getValidatorInterest = function(data) {
  const networkStake = eth2.toGwei(data.networkStake);
  const p = data.p;
  const deposit = eth2.toGwei(data.deposit);
  const baseRewardQuotient = data.baseRewardQuotient;

  const baseReward = eth2.economics.baseReward(deposit, baseRewardQuotient, networkStake, p);

  const validatorInterest = eth2.economics.validatorInterest(baseReward, deposit);

  return validatorInterest;
}

console.log("issuance rate", getIssuanceRate({
  networkStake: 10000000,
  p: 0.5,
  deposit: 32,
  baseRewardQuotient: 32,
  numberOfShards: 1024,
  ethInCirculation: 110000000
}));

console.log("validator interest", getValidatorInterest({
  networkStake: 10000000,
  p: 0.5,
  deposit: 32,
  baseRewardQuotient: 32
}));
