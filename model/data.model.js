const mongoose = require('mongoose');
// - Name
// - Email Address
// - Destination
//     - This is a dropdown with the following values: India, Africa, Europe, America as options
// - No. of travellers
// - Budget Per Person
let dataschema = mongoose.Schema({
    name : {type : String , required:true},
    email : {type : String , required:true},
    destination : {type : String , required:true , enum: [ "India", "Africa", "Europe", "America"]},
    no_of_travellers : {type : Number , required:true},
    budget_per_person : {type : Number , required:true}
})

let DataModel = mongoose.model('data',dataschema);

module.exports = {DataModel}
