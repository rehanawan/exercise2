(function() {
    var fs = require("fs");
    var faker = require("faker");
    var result = [];
    for (var i = 0; i < 30; i++) {
        result.push({
            id: i,
            name: faker.name.findName(),
            phoneNumber: faker.phone.phoneNumber(),
            city: faker.address.city(),
            address: faker.address.streetAddress(),
            avatar: faker.internet.avatar(),
            description: faker.lorem.sentence(),
        })
    }
    const contacts = {
        people: result
    }

    fs.writeFile(__dirname +'/db.json',  JSON.stringify(contacts), function() {
        console.log("-> data generated successfully!");
    });
})()
