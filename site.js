var agelist = [];

var namesToAges = {
    'Alyssa': 22,
    'Charley': 25,
    'Dan': 25,
    'Jeff': 20,
    'Kasey': 20,
    'Kim': 20,
    'Morgan': 25,
    'Ryan': 25,
    'Stef': 22
};

for (var key in namesToAges) {
    agelist.push(namesToAges[key]);
};

console.log(agelist);

var agesDict = {};
for (var i in agelist) {
    if (agelist[i] in agesDict) {
        agesDict[agelist[i]] = agesDict[agelist[i]] + 1;
    } else {
        agesDict[agelist[i]] = 1;
    };
};

console.log(agesDict);


var rarest = agelist[0];
for (var key in agesDict) {
    if (agesDict[key] < rarest) {
        rarest = agesDict[key];
    };
}; 

console.log(rarest);
