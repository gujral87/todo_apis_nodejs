require('dotenv').config();
// Dependency
const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');


// Imports
import './common/dbState';
import {postState, getState, putState, deleteState} from './methods/state';

// Create app with Express
const app = express();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/**
 * POST method to ADD
 * @body      {object}  objectValue with following parameters // Check DB Schema
 * @return     {object}  Will return object value
 */
app.post('/todo/apis/v1/crud/post', postState);
/**
 * Get method to ADD
 * @body        {Object} objectValue with following parameters // Check DB Schema
 * @return     {object}  Will return object value
 */
app.get('/todo/apis/v1/crud/get', getState);
/**
 * Update Item method to ADD
 * @param      {String}  objectValue with following parameters // Check DB Schema
 * @body        {Object}
 * @return     {object}  Will return object value
 */
app.put('/todo/apis/v1/crud/put/:id', putState);
/**
 * Delete Item method to ADD
 * @param      {String}  objectValue with following parameters // Check DB Schema
 * @body        {Object}
 * @return     {object}  Will return object value
 */
app.delete('/todo/apis/v1/crud/delete/:id', deleteState);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));