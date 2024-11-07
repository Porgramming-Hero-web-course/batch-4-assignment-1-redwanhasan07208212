"use strict";
{
    const getProperty = (val, key) => {
        return val[key];
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));
}
