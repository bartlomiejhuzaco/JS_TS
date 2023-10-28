function usersAuth(request, response, next) {
    console.log("IT's MIDDLEWARE");


    next();
}

module.exports = {
    usersAuth
}