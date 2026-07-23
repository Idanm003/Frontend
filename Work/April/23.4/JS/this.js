$(document).ready(function () {
    console.log(this);

    const student = {
        name: "John Doe",
        age: 20,
        printDetails: function () {
            console.log(this);
            console.log(this.name);
            console.log(this.age);
        }
    };
    student.printDetails();
});