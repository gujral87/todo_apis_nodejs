// Error function

export const errorState = (state) => {
    state.res.send({
        "status": false,
        "error": state.error
    });
};

export const succesState = (state) => {
    state.res.send({
        "status": true,
        "data": state.data
    });
};