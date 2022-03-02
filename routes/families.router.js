//CRUD Op APIs
const express = require('express');
const familiesRouter = express.Router();
const familiesModel = require('../models/families.model.js');

//DONE
// GET families
familiesRouter.get('/', (req, res, next) => {
  //retrieve data from the collection using mongoose schema
  familiesModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      
      res.json(data);
      // return_families = res.json(data);
      // console.log(return_families); // console log error message
    }
  });
});

//DONE
// ADD families records
familiesRouter.post('/', (req, res, next) => {
  familiesModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('new families record added to the database via POST.');
    }
  });
});

// //put v2
// familiesRouter.put('/:clientID', function (req, res) {
//   var clientID = req.clientID;

//   clientID = _.extend(clientID, req.body);

//   clientID.save(function(err) {
//   if (err) {
//       return res.send('/families', {
//           errors: err.errors,
//           clientID: clientID
//       });
//   } else {
//       res.jsonp(clientID);
//   }
// });

// Update families records given id
familiesRouter.put('/{clientID}', (req, res, next) => {
  familiesModel.findOneAndUpdate(
 // { familiesId: req.params.id },
    { clientID: req.body.clientID },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('families record edited via PUT');
        console.log('families record successfully updated via PUT', data);
      }
    }
  );
});

// DELETE v1

familiesRouter.delete('/:clientID', (req, res, next) => {
  //mongoose deletes record based off of document id
  familiesModel.findOneAndRemove(
    { familiesId: req.body.id }, //change others
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
        res.send('families record deleted via DELETE');
      }
    }
  );
});


// // DELETE families records given id v2
// familiesRouter.delete('/', (req, res, next) => {
//   //mongoose deletes record based off of document id
//   familiesModel.findOneAndRemove(
//     { familiesId: req.body.id }, //change others
//     (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.status(200).json({
//           msg: data,
//         });
//         res.send('families record deleted via DELETE');
//       }
//     }
//   );
// });

module.exports = familiesRouter;
