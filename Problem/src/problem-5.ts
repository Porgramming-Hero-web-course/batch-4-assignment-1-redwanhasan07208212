{
  const getProperty = <T, B extends keyof T>(val: T, key: B): T[B] => {
    return val[key];
  };
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "age"));
}
