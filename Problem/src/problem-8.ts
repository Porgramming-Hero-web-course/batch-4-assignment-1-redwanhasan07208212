{
  function validateKeys<T>(val: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in (val as object));
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age", "email"]));
  console.log(validateKeys(person, ["name", "age"]));
}
