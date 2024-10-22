interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number
}
export const ObjectLiterals = () => {

  const person: Person = {
    age: 38,
    firstName: "Nestor",
    lastName: "Bardel",
    address: {
      country: "Canada",
      houseNo: 625
    }
  }

  return (
    <>
      <h3>Objetos literales</h3>
      {JSON.stringify(person, null, 2)}
    </>
  )
}
