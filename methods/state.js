import {errorState, succesState} from "../common/state";

export const postState = (req, res) => {
    if (req.body && req.body.constructor === Object) {
        if (req.body.task && req.body.category && req.body.category.constructor === Array) {
            let todoItem = {id: uuidv4(), ...req.body, timeCreated: new Date()};
            res.send(todoItem);
        } else {
            errorState({res,
                "error": "Format is not correct."
            });
        }
    } else {
        errorState({
            res,
            "error": "Object is either empty OR not an object. Make sure task key is presented."
        });
    }
};

export const getState = (req, res) => {
    console.log(req.body);
    res.send("GET to Todo APIs");
};

export const putState = (req, res) => {
    console.log(req.body);
    res.send("UPDATE to Todo APIs");
};

export const deleteState = (req, res) => {
    if(req.body.id) {
        res.send("DELETE to Todo APIs");
    } else {
        errorState({res, "error": "ID missing."});
    }
};