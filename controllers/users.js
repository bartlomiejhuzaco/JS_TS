function usersGetAll(request, response) {

    response.send("GETTING ALL USERS!");
}

function usersGetOne(request, response) {
    const params = request.params;

    console.log(params);

    response.send("GETTING ALL ONE USER!");
}

module.exports = {
    usersGetAll,
    usersGetOne
}