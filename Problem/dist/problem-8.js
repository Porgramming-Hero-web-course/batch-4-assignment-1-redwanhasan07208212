"use strict";
{
    function validateKeys(val, keys) {
        return keys.every((key) => key in val);
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age", "email"]));
    console.log(validateKeys(person, ["name", "age"]));
}
