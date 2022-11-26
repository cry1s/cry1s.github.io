// localstorageutil.js

const read = function() {
    return JSON.parse(localStorage.getItem("users"));
}

const write = function(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

const add = function(user) {
    const users = read();
    users.push(user);
    write(users);
}

export { read, write, add };