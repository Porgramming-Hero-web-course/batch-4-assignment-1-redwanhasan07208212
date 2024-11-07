{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial<T> = {
    [K in keyof T]?: T[K];
  };

  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
