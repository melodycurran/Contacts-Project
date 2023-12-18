const {check, validationResult} = require('express-validator');



const contactValidation = () => {
    return [
    check('fullName', 'Name is required').not().isEmpty().isString(),
    check('phone', 'Please include a valid number').isNumeric(),
    check('relationship', 'Please enter a valid relationship').isString()
]}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

}

module.exports = {
    contactValidation,
    validate
}