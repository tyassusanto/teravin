const response = (res, result, status, message, pagination) => {
    res.json({
        status : 'Success',
        code : status || 200,
        data : result,
        message : message || null,
        pagination
    })
}

module.exports = {
    response
}