// Only executed on the server
//import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // Check if data exists in the collection
  const numberRecords = Employees.find({}).count();
  console.log('Number of records', numberRecords);
  if (!numberRecords) {
    // Generate some data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }
});
