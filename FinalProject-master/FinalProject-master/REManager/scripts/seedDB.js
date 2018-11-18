const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/REManager"
);

const propertySeed = [
  {
    country: "USA",
    address: "123, Maple Street",
    city: "Barcelona",
    zipcode: "12345",
    state: "Texas",
    baths: "2",
    beds: "3",
    sqft: "1800",
    date: new Date(Date.now())
  },
  {
    country: "USA",
    address: "443, Marigold Street",
    city: "Madrid",
    zipcode: "13345",
    state: "Texas",
    baths: "2",
    beds: "3",
    sqft: "1800",
    date: new Date(Date.now())
  },
  {
    country: "USA",
    address: "123 Happy Street",
    city: "Dallas",
    zipcode: "12345",
    state: "Texas",
    baths: "2",
    beds: "3",
    sqft: "1800",
    date: new Date(Date.now())
  },
  {
    country: "USA",
    address: "456 Balloon Street",
    city: "Dallas",
    zipcode: "11345",
    state: "Texas",
    baths: "3",
    beds: "5",
    sqft: "3500",
    date: new Date(Date.now())
  },
  {
    country: "USA",
    address: "1289 Straus Street",
    city: "Paris",
    zipcode: "11345",
    state: "Texas",
    baths: "3",
    beds: "5",
    sqft: "3500",
    date: new Date(Date.now())
  },
  {
    country: "USA",
    address: "456 Balloon Street",
    city: "Dallas",
    zipcode: "11345",
    state: "Texas",
    baths: "3",
    beds: "5",
    sqft: "3500",
    date: new Date(Date.now())
  }
];
const OwnerSeed = [
  {
    firstname: "John",
    lastname: "Doe",
    emailid: "test1_2@gmail.com",
    phonenumber: "12345",
    mobilenumber: "987654321",
    date: new Date(Date.now())
  },
];

db.Property
  .remove({})
  .then(() => db.Property.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Owner
.remove({})
  .then(() => db.Owner.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });