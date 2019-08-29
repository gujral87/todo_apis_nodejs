const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// APIs
app.get("/", (req,res) => {
    res.send("Welcome to Todo APIs");
});

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
 *     "data": {} // recently added task
 * }
 */
app.post("/todo/apis/v1/post", (req,res) => {
    res.send("POST to Todo APIs");
});

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
app.get("/todo/apis/v1/get", (req,res) => {
    res.send("GET to Todo APIs");
});

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
app.put("/todo/apis/v1/put", (req,res) => {
    res.send("UPDATE to Todo APIs");
});


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
app.delete("/todo/apis/v1/delete", (req,res) => {
    res.send("DELETE to Todo APIs");
});




app.listen("3000");