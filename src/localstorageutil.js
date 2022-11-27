// localstorageutil.js

const read = function() {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users === null) {
        return [];
    }
    return users;
}

const write = function(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

const add = function(user) {
    const users = read();
    users.push(user);
    write(users);
}

const remove = function(index) {
    const users = read();
    users.splice(index, 1);
    write(users);
}

export { read, write, add, remove };