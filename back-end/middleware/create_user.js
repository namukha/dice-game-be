const { body, validationResult } = require('express-validator');

const adduser = () => {
    return [
        body("name")
            .not().isEmpty()
            .isString(),
        body("age")
            .not().isEmpty()
            .isNumeric()
    ]
}

exports.adduser = adduser;