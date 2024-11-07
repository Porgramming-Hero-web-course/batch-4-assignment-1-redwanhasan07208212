### **1.10 -Union and Intersection :**

Union and Intersection types in TypeScript allow for more flexible and precise type definitions:

### Union Types

Union types says a value can be one of many types. Well, they're defined using the | operator. You can imagine union types as an OR operator, which permits us to select one option from a list of types. We went with union types for values that could be one of many things, but still needs to place some boundary. Type narrowing also applies to unions, so it could assist in narrowing a type more specifically when necessary.

```tsx
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // Also valid
```

### Intersection Types

One of the features of TypeScript are intersection types, which allow a value to be the combination of multiple types. Defined using the & operator Intersection types are like an AND operator, meaning the value must fulfill all the specific types at once. Conclusion Intersection types are used for when we need an object to have some properties of more than one type making sure that a value has all the required combined properties.

```tsx
type Person = { name: string };
type Employee = { id: number };
type EmployeePerson = Person & Employee;

let worker: EmployeePerson = {
  name: "John",
  id: 123,
};
```

These types provide powerful tools for creating flexible and reusable type definitions in TypeScript.

### Intersection Types & Union Types

```tsx
{
  // union types
  type FrontEndDeveloper = "FakibajDeveloper" | "JuniorDeveloper"; // this is called string literal types
  type BackEndDeveloper = "FrontEndDeveloper" | "ExpertDeveloper"; // this is called string literal types

  const frontEndDeveloper: FrontEndDeveloper = "JuniorDeveloper";
  console.log(frontEndDeveloper);

  type NewDeveloper = FrontEndDeveloper | BackEndDeveloper;
  const newDeveloper: NewDeveloper = "FakibajDeveloper";

  type User = {
    name: string;
    age: number;
    role: newDeveloper;
    skills: string[];
    gender: "male" | "female";
  };
  const user: User = {
    name: "John Doe",
    age: 30,
    role: "ExpertDeveloper",
    skills: ["JavaScript", "TypeScript", "React"],
    gender: "male",
  };

  // Intersection types
  type FrontEnd = {
    skills: string[];
    designation1: "FrontEndDeveloper";
  };
  type BackEnd = {
    skills: string[];
    designation2: "BackEndDeveloper";
  };

  type FullStackDeveloper = FrontEnd & BackEnd;

  const developer: FullStackDeveloper = {
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"],
    designation1: "FrontEndDeveloper",
    designation2: "BackEndDeveloper",
  };
  console.log(developer);
}
```
