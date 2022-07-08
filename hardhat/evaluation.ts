const removeParticipantMumbai10 = {
  removeParticipant: {
    time: {
      records: [
        10139, 10067, 10251, 10853, 9949, 10022, 10142, 10285, 10142, 10239,
      ],
      stats: { min: 9949, max: 10853, mean: 10208.9, median: 10142 },
    },
    gas: {
      records: [
        27593, 27593, 27593, 27584, 27593, 27593, 27593, 27593, 27593, 27593,
      ],
      stats: { min: 27584, max: 27593, mean: 27592.1, median: 27593 },
    },
  },
};
import { mean, median } from "mathjs";

const mumbai = {
  deployContract: {
    time: {
      records: [9957],
      stats: { min: 9957, max: 9957, mean: 9957, median: 9957 },
    },
    gas: {
      records: [1043236],
      stats: { min: 1043236, max: 1043236, mean: 1043236, median: 1043236 },
    },
  },
  addLot: {
    time: {
      records: [10485, 10173, 10047, 10190, 10084],
      stats: { min: 10047, max: 10485, mean: 10195.8, median: 10173 },
    },
    gas: {
      records: [76281, 59181, 59181, 59181, 59181],
      stats: { min: 59181, max: 76281, mean: 62601, median: 59181 },
    },
  },
  addStep: {
    time: {
      records: [10313, 10323, 6755, 6022, 334622],
      stats: { min: 6022, max: 334622, mean: 73607, median: 10313 },
    },
    gas: {
      records: [118546, 104246, 104246, 104246, 104246],
      stats: { min: 104246, max: 118546, mean: 107106, median: 104246 },
    },
  },
  addStep2: {
    time: {
      records: [9877, 7492, 10418, 10658, 10305],
      stats: { min: 7492, max: 10658, mean: 9750, median: 10305 },
    },
    gas: {
      records: [101446, 104246, 104246, 104246, 104246],
      stats: { min: 101446, max: 104246, mean: 103686, median: 104246 },
    },
  },
  addResultFalse: {
    time: {
      records: [10522, 9524, 10508, 10450, 7294],
      stats: { min: 7294, max: 10522, mean: 9659.6, median: 10450 },
    },
    gas: {
      records: [50228, 33128, 33128, 33128, 33128],
      stats: { min: 33128, max: 50228, mean: 36548, median: 33128 },
    },
  },
  addResultTrue: {
    time: {
      records: [6461, 9896, 10410, 9864, 10135],
      stats: { min: 6461, max: 10410, mean: 9353.2, median: 9896 },
    },
    gas: {
      records: [53040, 33140, 33140, 33140, 33140],
      stats: { min: 33140, max: 53040, mean: 37120, median: 33140 },
    },
  },
  addParticipant: {
    time: {
      records: [9771, 10003, 10641, 9921, 9728],
      stats: { min: 9728, max: 10641, mean: 10012.8, median: 9921 },
    },
    gas: {
      records: [73812, 73812, 73800, 73812, 73824],
      stats: { min: 73800, max: 73824, mean: 73812, median: 73812 },
    },
  },
  addViewParticipant: {
    time: {
      records: [10597, 8285, 10130, 6104, 10671],
      stats: { min: 6104, max: 10671, mean: 9157.4, median: 10130 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73824],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  addBasicParticipant: {
    time: {
      records: [8292, 10230, 10328, 10161, 10342],
      stats: { min: 8292, max: 10342, mean: 9870.6, median: 10230 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73812],
      stats: { min: 73812, max: 73824, mean: 73821.6, median: 73824 },
    },
  },
  addLabParticipant: {
    time: {
      records: [10238, 9798, 9865, 10442, 10256],
      stats: { min: 9798, max: 10442, mean: 10119.8, median: 10238 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73824],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  removeParticipant: {
    time: {
      records: [9866, 10755, 6404, 6654, 6221],
      stats: { min: 6221, max: 10755, mean: 7980, median: 6654 },
    },
    gas: {
      records: [27593, 27593, 27584, 27593, 27584],
      stats: { min: 27584, max: 27593, mean: 27589.4, median: 27593 },
    },
  },
  removeViewParticipant: {
    time: {
      records: [10214, 6016, 10562, 9594, 9801],
      stats: { min: 6016, max: 10562, mean: 9237.4, median: 9801 },
    },
    gas: {
      records: [27593, 27593, 27584, 27593, 27593],
      stats: { min: 27584, max: 27593, mean: 27591.2, median: 27593 },
    },
  },
  removeBasicParticipant: {
    time: {
      records: [10084, 9792, 10297, 9962, 11058],
      stats: { min: 9792, max: 11058, mean: 10238.6, median: 10084 },
    },
    gas: {
      records: [27593, 27593, 27593, 27593, 27593],
      stats: { min: 27593, max: 27593, mean: 27593, median: 27593 },
    },
  },
  removeLabParticipant: {
    time: {
      records: [335749, 10560, 10155, 10742],
      stats: { min: 10155, max: 335749, mean: 91801.5, median: 10651 },
    },
    gas: {
      records: [27593, 27593, 27593, 27593],
      stats: { min: 27593, max: 27593, mean: 27593, median: 27593 },
    },
  },
  changeRole: {
    time: {
      records: [10272, 10213, 10442],
      stats: { min: 10213, max: 10442, mean: 10309, median: 10272 },
    },
    gas: {
      records: [109573, 109573, 109585],
      stats: { min: 109573, max: 109585, mean: 109577, median: 109573 },
    },
  },
  changeFromBasicToLab: {
    time: {
      records: [9693, 9585],
      stats: { min: 9585, max: 9693, mean: 9639, median: 9639 },
    },
    gas: {
      records: [112385, 112385],
      stats: { min: 112385, max: 112385, mean: 112385, median: 112385 },
    },
  },
  changeFromLabToBasic: {
    time: {
      records: [10819, 10829, 10339],
      stats: {
        min: 10339,
        max: 10829,
        mean: 10662.333333333334,
        median: 10819,
      },
    },
    gas: {
      records: [112385, 112385, 112385],
      stats: { min: 112385, max: 112385, mean: 112385, median: 112385 },
    },
  },
  changeFromViewToBasic: {
    time: {
      records: [10131, 10138, 10752, 10135, 10292],
      stats: { min: 10131, max: 10752, mean: 10289.6, median: 10138 },
    },
    gas: {
      records: [112385, 109585, 112385, 112385, 109585],
      stats: { min: 109585, max: 112385, mean: 111265, median: 112385 },
    },
  },
  changeFromBasicToView: {
    time: {
      records: [9753, 10601, 10673, 6525],
      stats: { min: 6525, max: 10673, mean: 9388, median: 10177 },
    },
    gas: {
      records: [112373, 112385, 112373, 109585],
      stats: { min: 109585, max: 112385, mean: 111679, median: 112373 },
    },
  },
  changeFromViewToLab: {
    time: {
      records: [10387, 10137, 10443, 10447],
      stats: { min: 10137, max: 10447, mean: 10353.5, median: 10415 },
    },
    gas: {
      records: [112385, 112385, 109585, 112385],
      stats: { min: 109585, max: 112385, mean: 111685, median: 112385 },
    },
  },
  changeFromLabToView: {
    time: {
      records: [9953, 10502, 10264, 11057],
      stats: { min: 9953, max: 11057, mean: 10444, median: 10383 },
    },
    gas: {
      records: [112373, 109585, 112385, 112385],
      stats: { min: 109585, max: 112385, mean: 111682, median: 112379 },
    },
  },
};

let mumbaiTime: number[] = [];

const mumbaiKeys = Object.keys(mumbai);

mumbaiKeys.forEach((key, index) => {
  // @ts-ignore
  mumbaiTime.push(mumbai[key].time.records);
});

mumbaiTime = mumbaiTime.flat();

console.log("MUMBAI");
console.log("length: ", mumbaiTime.length);
console.log("mean: ", mean(mumbaiTime));
console.log("median: ", median(mumbaiTime));
console.log("min: ", Math.min(...mumbaiTime));
console.log("max: ", Math.max(...mumbaiTime));

const ropsten = {
  deployContract: {
    time: {
      records: [46992],
      stats: { min: 46992, max: 46992, mean: 46992, median: 46992 },
    },
    gas: {
      records: [1043236],
      stats: { min: 1043236, max: 1043236, mean: 1043236, median: 1043236 },
    },
  },
  addLot: {
    time: {
      records: [
        25987, 22520, 25986, 45931, 25752, 10169, 25796, 21966, 10945, 14049,
      ],
      stats: { min: 10169, max: 45931, mean: 22910.1, median: 24136 },
    },
    gas: {
      records: [
        76281, 59181, 59181, 59181, 59181, 59181, 59181, 59181, 59181, 59181,
      ],
      stats: { min: 59181, max: 76281, mean: 60891, median: 59181 },
    },
  },
  addStep: {
    time: {
      records: [
        10519, 14746, 21875, 25829, 22717, 10371, 14626, 21932, 38334, 10512,
      ],
      stats: { min: 10371, max: 38334, mean: 19146.1, median: 18310.5 },
    },
    gas: {
      records: [
        118546, 104246, 104246, 104246, 104246, 104246, 104246, 104246, 104246,
        104246,
      ],
      stats: { min: 104246, max: 118546, mean: 105676, median: 104246 },
    },
  },
  addResultTrue: {
    time: {
      records: [
        30412, 18095, 10142, 26563, 10018, 14431, 21767, 26089, 9588, 25625,
      ],
      stats: { min: 9588, max: 30412, mean: 19273, median: 19931 },
    },
    gas: {
      records: [
        70140, 33140, 33140, 33140, 33140, 33140, 33140, 33140, 33140, 33140,
      ],
      stats: { min: 33140, max: 70140, mean: 36840, median: 33140 },
    },
  },
  addResultFalse: {
    time: {
      records: [
        21569, 13855, 21891, 26419, 21807, 14266, 25671, 9572, 14209, 34076,
      ],
      stats: { min: 9572, max: 34076, mean: 20333.5, median: 21688 },
    },
    gas: {
      records: [
        31128, 33128, 33128, 33128, 33128, 33128, 33128, 33128, 33128, 33128,
      ],
      stats: { min: 31128, max: 33128, mean: 32928, median: 33128 },
    },
  },
  addParticipant: {
    time: {
      records: [
        10650, 14741, 22118, 10873, 25929, 22107, 13902, 10132, 14134, 9982,
      ],
      stats: { min: 9982, max: 25929, mean: 15456.8, median: 14018 },
    },
    gas: {
      records: [
        73812, 73812, 73812, 73812, 73824, 73812, 73824, 73812, 73800, 73824,
      ],
      stats: { min: 73800, max: 73824, mean: 73814.4, median: 73812 },
    },
  },
  addBasicParticipant: {
    time: {
      records: [
        26510, 10141, 37970, 9654, 26470, 22362, 25559, 34099, 49871, 22595,
      ],
      stats: { min: 9654, max: 49871, mean: 26523.1, median: 26014.5 },
    },
    gas: {
      records: [
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73812, 73824,
      ],
      stats: { min: 73812, max: 73824, mean: 73822.8, median: 73824 },
    },
  },
  addLabParticipant: {
    time: {
      records: [
        10670, 15171, 10444, 10516, 14369, 22021, 47405, 26553, 10310, 26234,
      ],
      stats: { min: 10310, max: 47405, mean: 19369.3, median: 14770 },
    },
    gas: {
      records: [
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
      ],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  removeParticipant: {
    time: {
      records: [
        22501, 10491, 34100, 22038, 14746, 22619, 46227, 22478, 13689, 10640,
      ],
      stats: { min: 10491, max: 46227, mean: 21952.9, median: 22258 },
    },
    gas: {
      records: [
        27593, 27593, 27593, 27593, 27593, 27593, 27584, 27593, 27584, 27593,
      ],
      stats: { min: 27584, max: 27593, mean: 27591.2, median: 27593 },
    },
  },
  removeViewParticipant: {
    time: {
      records: [
        22219, 13751, 13924, 15055, 21510, 38719, 10447, 10754, 11271, 10540,
      ],
      stats: { min: 10447, max: 38719, mean: 16819, median: 13837.5 },
    },
    gas: {
      records: [
        27593, 27593, 27593, 27593, 27593, 26891, 27593, 27593, 27593, 27593,
      ],
      stats: { min: 26891, max: 27593, mean: 27522.8, median: 27593 },
    },
  },
  removeBasicParticipant: {
    time: {
      records: [
        37786, 14122, 22378, 10924, 47344, 23686, 21818, 22572, 34434, 10010,
      ],
      stats: { min: 10010, max: 47344, mean: 24507.4, median: 22475 },
    },
    gas: {
      records: [
        27593, 27584, 27593, 27593, 27593, 27593, 27593, 27584, 26891, 27593,
      ],
      stats: { min: 26891, max: 27593, mean: 27521, median: 27593 },
    },
  },
  removeLabParticipant: {
    time: {
      records: [
        23123, 25999, 18125, 10474, 22609, 27372, 10446, 14133, 23291, 26112,
      ],
      stats: { min: 10446, max: 27372, mean: 20168.4, median: 22866 },
    },
    gas: {
      records: [
        27593, 27593, 26879, 27593, 27593, 27593, 27593, 27593, 27593, 27593,
      ],
      stats: { min: 26879, max: 27593, mean: 27521.6, median: 27593 },
    },
  },
  changeRole: {
    time: {
      records: [
        22732, 10309, 22427, 74718, 22326, 22427, 22852, 38284, 37969, 26534,
      ],
      stats: { min: 10309, max: 74718, mean: 30057.8, median: 22792 },
    },
    gas: {
      records: [
        31862, 34662, 34662, 34662, 34650, 34662, 34662, 34650, 31862, 31862,
      ],
      stats: { min: 31862, max: 34662, mean: 33819.6, median: 34656 },
    },
  },
  changeFromBasicToLab: {
    time: {
      records: [
        23102, 26674, 22138, 10337, 22733, 10138, 21841, 230378, 21847, 22430,
      ],
      stats: { min: 10138, max: 230378, mean: 41161.8, median: 22284 },
    },
    gas: {
      records: [
        34650, 34662, 34662, 34662, 34662, 34650, 34662, 34662, 34662, 34662,
      ],
      stats: { min: 34650, max: 34662, mean: 34659.6, median: 34662 },
    },
  },
  changeFromLabToBasic: {
    time: {
      records: [
        22020, 10215, 21927, 26218, 21568, 22042, 13778, 10136, 34073, 9511,
      ],
      stats: { min: 9511, max: 34073, mean: 19148.8, median: 21747.5 },
    },
    gas: {
      records: [
        34650, 34662, 34662, 34662, 34662, 34662, 34662, 34662, 34662, 34662,
      ],
      stats: { min: 34650, max: 34662, mean: 34660.8, median: 34662 },
    },
  },
  changeFromViewToBasic: {
    time: {
      records: [
        22019, 22170, 25645, 22425, 26111, 13987, 36273, 10139, 21931, 22149,
      ],
      stats: { min: 10139, max: 36273, mean: 22284.9, median: 22159.5 },
    },
    gas: {
      records: [
        34650, 34662, 34662, 34662, 34662, 31862, 31862, 31862, 34662, 34662,
      ],
      stats: { min: 31862, max: 34662, mean: 33820.8, median: 34662 },
    },
  },
  changeFromBasicToView: {
    time: {
      records: [
        21822, 11673, 50043, 9811, 14345, 22420, 21881, 22410, 9733, 21755,
      ],
      stats: { min: 9733, max: 50043, mean: 20589.3, median: 21788.5 },
    },
    gas: {
      records: [
        34662, 34662, 31862, 31862, 34662, 34662, 31862, 31862, 34662, 34662,
      ],
      stats: { min: 31862, max: 34662, mean: 33542, median: 34662 },
    },
  },
  changeFromViewToLab: {
    time: {
      records: [
        14035, 10079, 9839, 37831, 50563, 26542, 25967, 14441, 26318, 22307,
      ],
      stats: { min: 9839, max: 50563, mean: 23792.2, median: 24137 },
    },
    gas: {
      records: [
        31862, 34662, 34662, 34662, 34662, 31862, 31862, 34662, 34662, 34662,
      ],
      stats: { min: 31862, max: 34662, mean: 33822, median: 34662 },
    },
  },
  changeFromLabToView: {
    time: {
      records: [
        34713, 22308, 10409, 25576, 49764, 13959, 26725, 25799, 26646, 14480,
      ],
      stats: { min: 10409, max: 49764, mean: 25037.9, median: 25687.5 },
    },
    gas: {
      records: [
        31862, 34662, 31862, 34650, 31862, 34650, 31862, 34662, 34650, 34650,
      ],
      stats: { min: 31862, max: 34662, mean: 33537.2, median: 34650 },
    },
  },
};

let ropstenTime: number[] = [];

const ropstenKeys = Object.keys(ropsten);

ropstenKeys.forEach((key, index) => {
  // @ts-ignore
  ropstenTime.push(ropsten[key].time.records);
});

ropstenTime = ropstenTime.flat();

console.log("ROPSTEN");
console.log("length: ", ropstenTime.length);
console.log("mean: ", mean(ropstenTime));
console.log("median: ", median(ropstenTime));
console.log("min: ", Math.min(...ropstenTime));
console.log("max: ", Math.max(...ropstenTime));

const addParticipantHardhat10_1000charName = {
  addParticipant: {
    time: {
      records: [47, 45, 43, 46, 26, 35, 24, 33, 43, 34],
      stats: { min: 24, max: 47, mean: 37.6, median: 39 },
    },
    gas: {
      records: [
        73824, 73824, 73812, 73812, 73812, 73824, 73824, 73824, 73812, 73824,
      ],
      stats: { min: 73812, max: 73824, mean: 73819.2, median: 73824 },
    },
  },
};

// add Participant - Hardhat - 100iter
// 73824 median --> mysteriously sometimes 73812

const addParticipant = {
  addViewParticipant: {
    time: {
      records: [
        71, 65, 61, 50, 46, 41, 33, 33, 60, 49, 50, 43, 31, 30, 30, 27, 29, 36,
        30, 34, 40, 29, 37, 38, 25, 25, 38, 25, 28, 49, 39, 23, 37, 34, 23, 33,
        42, 30, 29, 39, 32, 67, 33, 22, 37, 27, 25, 26, 33, 20, 25, 26, 25, 33,
        30, 50, 26, 19, 25, 18, 26, 19, 30, 23, 22, 24, 22, 23, 22, 24, 48, 26,
        30, 24, 18, 21, 19, 34, 32, 26, 27, 31, 23, 20, 19, 19, 26, 18, 19, 51,
        42, 44, 45, 62, 37, 15, 26, 21, 62, 175,
      ],
      stats: { min: 15, max: 175, mean: 34.06, median: 30 },
    },
    gas: {
      records: [
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73812, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73800, 73824, 73824, 73824, 73824, 73824, 73824,
        73812, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73812, 73812, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
      ],
      stats: { min: 73800, max: 73824, mean: 73823.04, median: 73824 },
    },
  },
  addBasicParticipant: {
    time: {
      records: [
        42, 128, 63, 18, 25, 22, 23, 40, 21, 37, 29, 17, 26, 21, 19, 19, 52,
        102, 145, 35, 70, 44, 33, 38, 53, 16, 22, 36, 39, 24, 18, 34, 18, 36,
        34, 133, 98, 23, 25, 29, 20, 26, 32, 23, 16, 20, 22, 22, 20, 19, 23, 33,
        16, 21, 27, 22, 21, 21, 26, 19, 20, 22, 19, 23, 23, 25, 16, 27, 29, 21,
        19, 19, 18, 24, 19, 33, 18, 31, 51, 110, 40, 21, 20, 20, 22, 21, 20, 24,
        22, 30, 22, 16, 23, 19, 28, 28, 16, 20, 18, 19,
      ],
      stats: { min: 16, max: 145, mean: 31.72, median: 23 },
    },
    gas: {
      records: [
        73824, 73824, 73824, 73824, 73824, 73824, 73812, 73824, 73824, 73824,
        73824, 73824, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73812, 73824, 73824, 73824, 73824, 73824, 73812, 73824, 73824, 73824,
        73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
      ],
      stats: { min: 73812, max: 73824, mean: 73823.16, median: 73824 },
    },
  },
  addLabParticipant: {
    time: {
      records: [
        23, 18, 20, 22, 32, 22, 20, 19, 21, 19, 21, 18, 28, 21, 20, 22, 30, 31,
        30, 39, 16, 33, 31, 21, 21, 33, 16, 21, 23, 21, 20, 22, 36, 37, 21, 45,
        121, 59, 16, 18, 21, 22, 21, 39, 17, 24, 20, 18, 32, 22, 20, 21, 23, 20,
        20, 20, 23, 19, 21, 20, 43, 47, 39, 16, 47, 89, 14, 40, 53, 35, 32, 16,
        27, 30, 36, 17, 48, 55, 33, 25, 48, 30, 17, 18, 19, 19, 34, 22, 20, 27,
        21, 25, 20, 20, 18, 21, 18, 22, 21, 19,
      ],
      stats: { min: 14, max: 121, mean: 27.51, median: 21.5 },
    },
    gas: {
      records: [
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73812, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73812, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73812, 73812, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824,
        73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73824, 73812,
      ],
      stats: { min: 73812, max: 73824, mean: 73823.28, median: 73824 },
    },
  },
};

const hardhat = {
  deployContract: {
    time: {
      records: [139],
      stats: { min: 139, max: 139, mean: 139, median: 139 },
    },
    gas: {
      records: [1043236],
      stats: { min: 1043236, max: 1043236, mean: 1043236, median: 1043236 },
    },
  },
  addLot: {
    time: {
      records: [103, 37, 41, 42, 46],
      stats: { min: 37, max: 103, mean: 53.8, median: 42 },
    },
    gas: {
      records: [76281, 59181, 59181, 59181, 59181],
      stats: { min: 59181, max: 76281, mean: 62601, median: 59181 },
    },
  },
  addStep: {
    time: {
      records: [38, 46, 32, 35, 48],
      stats: { min: 32, max: 48, mean: 39.8, median: 38 },
    },
    gas: {
      records: [118546, 104246, 104246, 104246, 104246],
      stats: { min: 104246, max: 118546, mean: 107106, median: 104246 },
    },
  },
  addStep2: {
    time: {
      records: [40, 37, 39, 34, 42],
      stats: { min: 34, max: 42, mean: 38.4, median: 39 },
    },
    gas: {
      records: [101446, 104246, 104246, 104246, 104246],
      stats: { min: 101446, max: 104246, mean: 103686, median: 104246 },
    },
  },
  addResultFalse: {
    time: {
      records: [27, 21, 30, 27, 38],
      stats: { min: 21, max: 38, mean: 28.6, median: 27 },
    },
    gas: {
      records: [50228, 33128, 33128, 33128, 33128],
      stats: { min: 33128, max: 50228, mean: 36548, median: 33128 },
    },
  },
  addResultTrue: {
    time: {
      records: [20, 29, 27, 24, 26],
      stats: { min: 20, max: 29, mean: 25.2, median: 26 },
    },
    gas: {
      records: [53040, 33140, 33140, 33140, 33140],
      stats: { min: 33140, max: 53040, mean: 37120, median: 33140 },
    },
  },
  addParticipant: {
    time: {
      records: [57, 40, 48, 31, 48],
      stats: { min: 31, max: 57, mean: 44.8, median: 48 },
    },
    gas: {
      records: [73824, 73812, 73824, 73812, 73824],
      stats: { min: 73812, max: 73824, mean: 73819.2, median: 73824 },
    },
  },
  addViewParticipant: {
    time: {
      records: [40, 29, 32, 52, 55],
      stats: { min: 29, max: 55, mean: 41.6, median: 40 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73824],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  addBasicParticipant: {
    time: {
      records: [27, 46, 34, 35, 39],
      stats: { min: 27, max: 46, mean: 36.2, median: 35 },
    },
    gas: {
      records: [73824, 73812, 73824, 73824, 73824],
      stats: { min: 73812, max: 73824, mean: 73821.6, median: 73824 },
    },
  },
  addLabParticipant: {
    time: {
      records: [45, 40, 41, 37, 32],
      stats: { min: 32, max: 45, mean: 39, median: 40 },
    },
    gas: {
      records: [73824, 73824, 73824, 73824, 73824],
      stats: { min: 73824, max: 73824, mean: 73824, median: 73824 },
    },
  },
  removeParticipant: {
    time: {
      records: [28, 15, 21, 25, 14],
      stats: { min: 14, max: 28, mean: 20.6, median: 21 },
    },
    gas: {
      records: [27593, 27593, 27593, 27593, 27593],
      stats: { min: 27593, max: 27593, mean: 27593, median: 27593 },
    },
  },
  removeViewParticipant: {
    time: {
      records: [23, 17, 18, 23, 24],
      stats: { min: 17, max: 24, mean: 21, median: 23 },
    },
    gas: {
      records: [27593, 27593, 27593, 27593, 27593],
      stats: { min: 27593, max: 27593, mean: 27593, median: 27593 },
    },
  },
  removeBasicParticipant: {
    time: {
      records: [14, 15, 60, 35, 31],
      stats: { min: 14, max: 60, mean: 31, median: 31 },
    },
    gas: {
      records: [27593, 26891, 27593, 27584, 27593],
      stats: { min: 26891, max: 27593, mean: 27450.8, median: 27593 },
    },
  },
  removeLabParticipant: {
    time: {
      records: [24, 28, 34, 41, 24],
      stats: { min: 24, max: 41, mean: 30.2, median: 28 },
    },
    gas: {
      records: [27593, 27593, 27593, 27593, 27593],
      stats: { min: 27593, max: 27593, mean: 27593, median: 27593 },
    },
  },
  changeRole: {
    time: {
      records: [53, 51, 39, 41, 24],
      stats: { min: 24, max: 53, mean: 41.6, median: 41 },
    },
    gas: {
      records: [112373, 112385, 109585, 112361, 112385],
      stats: { min: 109585, max: 112385, mean: 111817.8, median: 112373 },
    },
  },
  changeFromBasicToLab: {
    time: {
      records: [23, 29, 26, 61, 38],
      stats: { min: 23, max: 61, mean: 35.4, median: 29 },
    },
    gas: {
      records: [112385, 112385, 112385, 112385, 112373],
      stats: { min: 112373, max: 112385, mean: 112382.6, median: 112385 },
    },
  },
  changeFromLabToBasic: {
    time: {
      records: [27, 35, 30, 22, 106],
      stats: { min: 22, max: 106, mean: 44, median: 30 },
    },
    gas: {
      records: [112385, 112385, 112385, 112385, 112385],
      stats: { min: 112385, max: 112385, mean: 112385, median: 112385 },
    },
  },
  changeFromViewToBasic: {
    time: {
      records: [27, 24, 32, 21, 29],
      stats: { min: 21, max: 32, mean: 26.6, median: 27 },
    },
    gas: {
      records: [112385, 112385, 112385, 109585, 112385],
      stats: { min: 109585, max: 112385, mean: 111825, median: 112385 },
    },
  },
  changeFromBasicToView: {
    time: {
      records: [32, 114, 24, 27, 30],
      stats: { min: 24, max: 114, mean: 45.4, median: 30 },
    },
    gas: {
      records: [112373, 112385, 112385, 112373, 109585],
      stats: { min: 109585, max: 112385, mean: 111820.2, median: 112373 },
    },
  },
  changeFromViewToLab: {
    time: {
      records: [25, 105, 37, 34, 41],
      stats: { min: 25, max: 105, mean: 48.4, median: 37 },
    },
    gas: {
      records: [112385, 112385, 112385, 112385, 112385],
      stats: { min: 112385, max: 112385, mean: 112385, median: 112385 },
    },
  },
  changeFromLabToView: {
    time: {
      records: [186, 29, 23, 28, 28],
      stats: { min: 23, max: 186, mean: 58.8, median: 28 },
    },
    gas: {
      records: [112385, 112373, 112385, 112373, 109585],
      stats: { min: 109585, max: 112385, mean: 111820.2, median: 112373 },
    },
  },
};

let hhTime: number[] = [];

const hhKeys = Object.keys(mumbai);

hhKeys.forEach((key, index) => {
  // @ts-ignore
  hhTime.push(hardhat[key].time.records);
});

hhTime = hhTime.flat();

console.log("<hardhat>");
console.log("length: ", hhTime.length);
console.log("mean: ", mean(hhTime));
console.log("median: ", median(hhTime));
console.log("min: ", Math.min(...hhTime));
console.log("max: ", Math.max(...hhTime));
