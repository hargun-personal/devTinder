const adminAuth = (req, res, next) => {
    const token = 'abc';
    const isAdminAuthorised = token === 'abc';
    if(!isAdminAuthorised) {
        res.status(401).send("Unauthorised Request")
    } else {
        next();
    } 
}

const userAuth = (req, res, next) => {
    const token = 'abc1';
    const isAdminAuthorised = token === 'abc';
    if(!isAdminAuthorised) {
        res.status(401).send("Unauthorised Request")
    } else {
        next();
    } 
}

module.exports = {
    adminAuth,
    userAuth
}