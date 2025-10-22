let Users= [];

function User(first, last, age, email) {
    this.firstName= first,
    this.lastName= last,
    this.age= age,
    this.email= email
};

console.log(Users.forEach(User => console.log(User)));
