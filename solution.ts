const formatValue = (
  input: number | boolean | string
): number | boolean | string => {
  if (typeof input === "number") {
    return input * 10;
  }

  if (typeof input === "string") {
    return input.toUpperCase();
  }

  return !input;
};




const getLength = (input: string | any[]): number => {
  return input.length;
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



type BooksType = {
  title: string;
  rating: number;
}[];

const filterByRating = (input: BooksType): BooksType => {
  const newArray = input.filter((book) => {
    return book.rating >= 4;
  });

  return newArray;
};



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];

const filterActiveUsers = (input: User): User => {
  return input.filter((person) => person.isActive === true);
};



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (input: Book) => {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
};



const getUniqueValues = (
  input1: string[] | number[],
  input2: string[] | number[]
) => {
  const totalItem = [...input1, ...input2];
  const newArray: (string | number)[] = [];

  totalItem.forEach((item) => {
    let duplicateValue = false;
    for (let i = 0; i < newArray.length; i++) {
      if (item === newArray[i]) {
        duplicateValue = true;
        break;
      }
    }

    if (!duplicateValue) {
      newArray.push(item);
    }
  });

  return newArray;
};



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (input: Product[]): number => {
  let totalPrice = 0;
  const calculatePrice = input.map((product) => {
    const price = product.price * product.quantity;
    const discount = product.discount ?? 0;
    const discountedAmount = (price * discount) / 100;
    const finalPrice = price - discountedAmount;
    totalPrice = totalPrice + finalPrice;
  });
  return totalPrice;
};







