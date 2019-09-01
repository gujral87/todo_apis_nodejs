import {todo_model} from '../common/dbState';
import {errorState, succesState} from "../common/state";

export const postState = (req, res) => {
    if (req.body) {
        todo_model.create(req.body)
            .then(data => {
                succesState({res, data});
            })
            .catch(err => {
                // console.log(err);
                errorState({
                    res,
                    "error": err.message
                });
            });
        return;
    }
    errorState({
        res,
        "error": "Data is not in correct format!. Please refer to API documentation"
    });
};

export const getState = (req, res) => {
    todo_model.find()
        .then(data => {
            succesState({res, data});
        })
        .catch(err => {
            errorState({
                res,
                "error": err.message
            });
        });
};

export const searchState = (req,res) => {
    console.log(req.body.query);
    todo_model.find({
        "task":req.body.query
    })
        .then(data => {
            console.log(data);
            succesState({res, data});
        })
        .catch(err => {
            errorState({
                res,
                "error": err.message
            });
        });
};

export const putState = (req, res) => {
    todo_model.updateOne({_id: req.params.id}, req.body)
        .then(data => {
            succesState({res, data});
        })
        .catch(err => {
            errorState({
                res,
                "error": err.message
            });
        });
};

export const deleteState = (req, res) => {
    console.log(req.params);
    todo_model.deleteOne({_id: req.params.id})
        .then(data => {
            succesState({res, data});
        })
        .catch(err => {
            errorState({
                res,
                "error": err.message
            });
        });
};