const getError = (err) =>
    err.response && err.response.data && err.response.data.message
        ? err.response.message.data
        : err.message;

export{ getError };
