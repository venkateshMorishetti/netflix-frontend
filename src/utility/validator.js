

export const validateEmailAndPassword = (email, password) => {
    const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isValidPassword = /((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)/.test(password);
    if (!isValidEmail) {
        return "Email is not valid"
    }
    else if (!isValidPassword) {
        return "Password is not valid"
    }
    return null;
}