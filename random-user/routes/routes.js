var myNames = require('../names.json');

var MAX_RESULTS = 5000;

exports.index = function (req, res) {
    res.send('Random User API');
},
    exports.api = function (req, res) {
        this.results = req.query.results;
        this.seed = req.query.seed;
        res.send(generateNames(this.results, this.seed));
    }

function generateNames(results, seed) {
    this.results = results;

    if (this.results > MAX_RESULTS) {
        this.results = MAX_RESULTS;
    }
    this.seed = seed;

    var rand = require('random-seed').create(this.seed);

    var gender;
    var picRand;
    var picNum;
    var genRand;
    var firstname, lastname, address, city, state, zip;
    var age;
    var email;
    var username;
    var picLarge;
    var picMedium;
    var phone;


    var names = {
        "results": []
    }

    for (var i = 0; i < this.results; i++) {
        genRand = rand(2);
        picRand = rand(150) + 1;

        if (picRand < 10) {
            picNum = "00" + picRand;
        } else if (picRand < 100) {
            picNum = "0" + picRand;
        } else {
            picNum = "" + picRand;
        }
        if (genRand == 1) {
            gender = 'male'
            picLarge = "http://localhost:3000/images/m" + picNum + ".jpg";
            picMedium = "http://localhost:3000/images/medium/m" + picNum + ".jpg";
            firstname = myNames.male_names[rand(myNames.male_names.length)]
        }
        else {
            gender = 'female'
            picLarge = "http://localhost:3000/images/f" + picNum + ".jpg";
            picMedium = "http://localhost:3000/images/medium/f" + picNum + ".jpg";
            firstname = myNames.female_names[rand(myNames.female_names.length)]
        }

        lastname = myNames.last_names[rand(myNames.last_names.length)];
        address = myNames.last_names[rand(myNames.last_names.length)] + "" + myNames.street_types[rand(myNames.street_types.length)];
        city = myNames.city_endings[rand(myNames.city_endings.length)];
        state = myNames.states[rand(myNames.states.length)];
        zip = Math.floor(10000 + Math.random() * 900000);
        age = Math.floor(Math.random() * 100);
        email = firstname + "." + lastname + "@yahoo.com";
        username = myNames.username_a[rand(myNames.username_a.length)] + "." + firstname.toLowerCase();
        phone = Math.floor(1000000000 + Math.random() * 900000000);

        var person = {
            "gender": gender,
            "name": {
                "first": firstname,
                "last": lastname,
            },
            location: {
                "street": address,
                "city": city,
                "state": state,
                "postcode": zip
            },
            email: email,
            "login": {
                "username": username
            },
            "dob": {
                "age": age,
            },
            "phone": phone,
            "picture": {
                "large": picLarge,
                "medium": picMedium
            },
        };
        names.results.push(person);
    }
    return names;
};

