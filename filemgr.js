const {MongoClient} = require('mongodb');
const fs = MongoClient;

// const database = 'mongodb://localhost:27017'; // for localhost
const database = 'mongodb://places123:places123@ds121341.mlab.com:21341/placesapp97';//for cloud

const appname = 'placesapp97';
const collectionname = "placesappcollection";

const saveData = (newdata) => {
  return new Promise((resolve, reject) => {

    // connect to mango server
    MongoClient.connect(database, {useNewUrlParser: true}, (err, client) => {
      if (err) {
        reject('Unable connect to MongoDB');//reject promise (error)
      }

      console.log('Connected to MongoDB');
      //function to create database
      const db = client.db(appname);

      const length = newdata.length;
      for(var i=0; i<length; i++){
        // insert on function
          db.collection(collectionname).insertOne(newdata[i], (err, result) => {
            if (err){
              reject('Unable to insert');//reject promise (error)
            }
          });
      }
      resolve(1); //resolve promise

      client.close();
    });

  });
};

const  getAllData = () => {
  return new Promise ((resolve, reject) => {
    // connect to mango server
    MongoClient.connect(database, {useNewUrlParser: true}, (err, client) => {
      if (err) {
        reject('Unable connect to MongoDB');
      }

      console.log('Connected to MongoDB');
      //function to create database
      const db = client.db(appname);

      // insert on function

    db.collection(collectionname).find().toArray().then( (docs) => {
      resolve(docs);
    }, (err) => {
      reject ('Unable to fetch docs');
    });

      client.close();
    });
  });
};

const deleteAll = () => {
  return new Promise ((resolve, reject) => {
    // connect to mango server
    MongoClient.connect(database, {useNewUrlParser: true}, (err, client) => {
      if (err) {
        reject('Unable connect to MongoDB');
      }

      console.log('Connected to MongoDB');
      //function to create database
      const db = client.db(appname);

      // insert on function

    db.collection(collectionname).remove({}).then( (result) => {
      resolve(result);
    }, (err) => {
      reject ('Unable to delete');
    });

      client.close();
    });
  });
};

//export function
module.exports = {
  saveData,
  getAllData,
  deleteAll,
}
