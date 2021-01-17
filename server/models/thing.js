const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const thingSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

});

thingSchema.methods.sayHi = () => {
  let greeting = this.title
    ? 'Hi my name is ' + this.title
    : 'I aint got no name';
  console.log('Hi' + greeting);
};

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing;
