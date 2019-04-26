const SECONDS_PER_YEAR = 60 * 60 * 24 * 365;
const SECONDS_PER_SLOT = 6;
const SLOTS_PER_EPOCH = 64;
const SECONDS_PER_EPOCH = SECONDS_PER_SLOT * SLOTS_PER_EPOCH;
const EPOCHS_PER_YEAR = SECONDS_PER_YEAR / SECONDS_PER_EPOCH;

function toGwei(eth) {
  return eth * Math.pow(10, 9);
}

function numberOfValidators(numberOfShards, validatorsPerShard) {
  return numberOfShards * validatorsPerShard;
}

function numberOfValidatorsByStake(networkStake, deposit) {
  return Math.floor(networkStake / deposit);
}

function baseReward(deposit, baseRewardQuotient, networkStake, p) {
  const adjustedQuotient = Math.floor(Math.pow(networkStake, p)) / baseRewardQuotient;
  return deposit / adjustedQuotient / 5;
}

function issuancePerEpoch(numberOfValidators, baseReward) {
  return numberOfValidators * baseReward;
}

function issuancePerYear(issuancePerEpoch) {
  return EPOCHS_PER_YEAR * issuancePerEpoch;
}

function issuanceRate(issuancePerYear, ethInCirculation) {
  return issuancePerYear / ethInCirculation * 100;
}

function validatorInterest(baseReward, deposit) {
  return EPOCHS_PER_YEAR * baseReward / deposit * 100;
}

const eth2 = {
  SECONDS_PER_YEAR: SECONDS_PER_YEAR,

  toGwei: toGwei,

  economics: {
    numberOfValidators, numberOfValidatorsByStake, baseReward,
    issuancePerEpoch, issuancePerYear,
    issuanceRate, validatorInterest
  }
};

module.exports = eth2;
