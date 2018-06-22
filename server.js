const Datastore = require('@google-cloud/datastore');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const PROJECT_ID = 'erikson-test-nodejs';
const KIND = 'User';

const datastore = new Datastore({
  projectId: PROJECT_ID
});

const fromDatastore = obj => {
  obj.id = obj[Datastore.KEY].id;
  return obj;
}

const listUsers = async (req, res, next) => {
  const q = datastore.createQuery([KIND]);

  const result = await datastore.runQuery(q);
  const entities = result[0];
  const users = entities.map(fromDatastore);
  
  return res.json(users);
}

app.get('/', listUsers);

app.listen(PORT, () => console.log(`Service is running at port ${PORT}`));