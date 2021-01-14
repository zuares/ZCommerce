
function validate({ name, email, password, password2 }) {
    if (!name || !email || !password)
        return 'Please add all field'
    if (!validateEmail(email))
        return 'Email not valid'
    if (password !== password2)
        return 'Password not match'
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

export default validate;