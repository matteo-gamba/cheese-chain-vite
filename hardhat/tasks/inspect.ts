const inspect = {
  deployContract: {
    time: {
      records: [70],
      stats: { min: 70, max: 70, mean: 70, median: 70 },
    },
    gas: {
      records: [1043236],
      stats: { min: 1043236, max: 1043236, mean: 1043236, median: 1043236 },
    },
  },
  addLot: {
    time: {
      records: [37, 33, 29, 28, 40],
      stats: { min: 28, max: 40, mean: 33.4, median: 33 },
    },
    gas: {
      records: [76281, 59181, 59181, 59181, 59181],
      stats: { min: 59181, max: 76281, mean: 62601, median: 59181 },
    },
  },
  addStep: {
    time: {
      records: [39, 33, 31, 25, 29],
      stats: { min: 25, max: 39, mean: 31.4, median: 31 },
    },
    gas: {
      records: [118546, 104246, 104246, 104246, 104246],
      stats: { min: 104246, max: 118546, mean: 107106, median: 104246 },
    },
  },
  addResultTrue: {
    time: {
      records: [24, 19, 17, 22, 23],
      stats: { min: 17, max: 24, mean: 21, median: 22 },
    },
    gas: {
      records: [70140, 33140, 33140, 33140, 33140],
      stats: { min: 33140, max: 70140, mean: 40540, median: 33140 },
    },
  },
  addResultFalse: {
    time: {
      records: [27, 22, 24, 19, 17],
      stats: { min: 17, max: 27, mean: 21.8, median: 22 },
    },
    gas: {
      records: [31128, 33128, 33128, 33128, 33128],
      stats: { min: 31128, max: 33128, mean: 32728, median: 33128 },
    },
  },
  addParticipant: {
    time: {
      records: [39, 34, 49, 33, 39],
      stats: { min: 33, max: 49, mean: 38.8, median: 39 },
    },
    gas: {
      records: [73812, 73824, 73824, 73824, 73812],
      stats: { min: 73812, max: 73824, mean: 73819.2, median: 73824 },
    },
  },
  addBasicParticipant: {
    time: {
      records: [51, 44, 35, 24, 33],
      stats: { min: 24, max: 51, mean: 37.4, median: 35 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73824],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  addLabParticipant: {
    time: {
      records: [36, 29, 28, 21, 43],
      stats: { min: 21, max: 43, mean: 31.4, median: 29 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73824],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  removeParticipant: {
    time: {
      records: [15, 23, 23, 18, 23],
      stats: { min: 15, max: 23, mean: 20.4, median: 23 },
    },
    gas: {
      records: [27593, 27593, 27593, 27584, 27593],
      stats: { min: 27584, max: 27593, mean: 27591.2, median: 27593 },
    },
  },
  removeViewParticipant: {
    time: {
      records: [14, 15, 15, 21, 16],
      stats: { min: 14, max: 21, mean: 16.2, median: 15 },
    },
    gas: {
      records: [27593, 27593, 27593, 27593, 27593],
      stats: { min: 27593, max: 27593, mean: 27593, median: 27593 },
    },
  },
  removeBasicParticipant: {
    time: {
      records: [15, 14, 29, 15, 18],
      stats: { min: 14, max: 29, mean: 18.2, median: 15 },
    },
    gas: {
      records: [27593, 27584, 27593, 27584, 27593],
      stats: { min: 27584, max: 27593, mean: 27589.4, median: 27593 },
    },
  },
  removeLabParticipant: {
    time: {
      records: [20, 19, 15, 21, 23],
      stats: { min: 15, max: 23, mean: 19.6, median: 20 },
    },
    gas: {
      records: [27584, 27593, 27593, 27584, 27593],
      stats: { min: 27584, max: 27593, mean: 27589.4, median: 27593 },
    },
  },
  changeRole: {
    time: {
      records: [24, 18, 22, 33, 19],
      stats: { min: 18, max: 33, mean: 23.2, median: 22 },
    },
    gas: {
      records: [34650, 31862, 31862, 31850, 34650],
      stats: { min: 31850, max: 34650, mean: 32974.8, median: 31862 },
    },
  },
  changeFromBasicToLab: {
    time: {
      records: [16, 15, 16, 15, 14],
      stats: { min: 14, max: 16, mean: 15.2, median: 15 },
    },
    gas: {
      records: [34662, 34662, 34662, 34650, 34662],
      stats: { min: 34650, max: 34662, mean: 34659.6, median: 34662 },
    },
  },
  changeFromLabToBasic: {
    time: {
      records: [21, 18, 17, 21, 17],
      stats: { min: 17, max: 21, mean: 18.8, median: 18 },
    },
    gas: {
      records: [34662, 34662, 34662, 34662, 34662],
      stats: { min: 34662, max: 34662, mean: 34662, median: 34662 },
    },
  },
  changeFromViewToBasic: {
    time: {
      records: [44, 22, 41, 25, 20],
      stats: { min: 20, max: 44, mean: 30.4, median: 25 },
    },
    gas: {
      records: [31862, 31862, 34662, 34662, 31862],
      stats: { min: 31862, max: 34662, mean: 32982, median: 31862 },
    },
  },
  changeFromBasicToView: {
    time: {
      records: [19, 34, 14, 19, 15],
      stats: { min: 14, max: 34, mean: 20.2, median: 19 },
    },
    gas: {
      records: [31850, 34662, 31862, 34650, 34650],
      stats: { min: 31850, max: 34662, mean: 33534.8, median: 34650 },
    },
  },
  changeFromViewToLab: {
    time: {
      records: [16, 19, 14, 15, 14],
      stats: { min: 14, max: 19, mean: 15.6, median: 15 },
    },
    gas: {
      records: [31862, 31862, 34662, 31862, 31862],
      stats: { min: 31862, max: 34662, mean: 32422, median: 31862 },
    },
  },
  changeFromLabToView: {
    time: {
      records: [14, 19, 16, 17, 18],
      stats: { min: 14, max: 19, mean: 16.8, median: 17 },
    },
    gas: {
      records: [34662, 34650, 34626, 31862, 34650],
      stats: { min: 31862, max: 34662, mean: 34090, median: 34650 },
    },
  },
};
