module.exports = (app) => {

    app.get("/", app.api.welcome.get)

    app.route("/users")
        .get(app.api.users.get)
        .post(app.api.users.post)

    app.route("/users/:id")
        .get(app.api.users.getById)
        .put(app.api.users.put)
        .delete(app.api.users.remove)

}