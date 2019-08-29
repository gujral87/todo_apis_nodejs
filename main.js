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
app.route("/todo/apis/v1/crud")
    /**
 * POST method to ADD
 *
 * @param      {object}  objectValue with following parameters
 * {
 *      "task": "STRING",
 *      "category": ["STRING"], // String Array, Optional
 * }
 *
 * Will add UUID & TimeStamp myself
 *
 * @return     {object}  Will return object value
 * {
 *     "status": BOOLEAN,
 *     "data": {} // recently added task, only in-case of status true
 *     "error" :  "STRING" // in-case status is false
 * }
 */
    .post(postState)
    /**
     * Get method to ADD
     *
     * @param      {object}  objectValue with following parameters,
     *  Params are Optional for specific GET request, if no param found it will return all data
     * {
     *      "query: "STRING", // , no. of limit item required.
     *      "category": "STRING", // String Array, Optional
     *      "limit": NUMBER
     * }
     * @return     {object}  Will return object value
     * {
     *     "status": BOOLEAN,
     *     "data": [{
     *         "id" : UUID
     *         "task": "STRING",
     *         "category": ["STRING"],
     *         "timeCreated" :  NUMBER
     *     }] // Result in Array of Objects
     * }
     */
    .get(getState)
    /**
     * Update method to ADD
     *
     * @param      {object}  objectValue with following parameters,
     *  Params are Optional for specific GET request, if no param found it will return all data
     * {
     *      "id": UUID,
     *      "query: "STRING", // , no. of limit item required.
     *      "category": "STRING", // String Array, Optional
     *      "limit": NUMBER
     * }
     * @return     {object}  Will return object value
     * {
     *     "status": BOOLEAN,
     *     "data": [OBJECT] // Result in Array of Objects
     * }
     */
    .put(putState)
    /**
     * Update method to ADD
     *
     * @param      {object}  objectValue with following parameters,
     *  Params are Optional for specific GET request, if no param found it will return all data
     * {
     *      "id": UUID
     * }
     * @return     {object}  Will return object value
     * {
     *     "status": BOOLEAN
     * }
     */
    .delete(deleteState);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));