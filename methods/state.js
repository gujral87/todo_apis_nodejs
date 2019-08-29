import {todo_model} from '../common/dbState';
import {errorState, succesState} from "../common/state";

export const postState = (req, res) => {
    todo_model.create(req.body)
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

export const getState = (req, res) => {
    todo_model.find(req.body)
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

export const putState = (req, res) => {
    todo_model.updateOne({_id: req.body.id}, req.body)
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
    todo_model.deleteOne({_id: req.body.id})
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