// Javascript Object Notation
// JSON
const user = { id: 11, name: "gorib amir", job: "actor", };
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

const shop = {
    name: "Alia store",
    address: "Ranbir road",
    profit: 15000,
    products: ["laptop", "monile", "pepse"],
    owner: {
        name: "Alia bhatt",
        profession: "actor",
    },
    isExpensive: false,
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified.owner);

const converted = JSON.parse(shopStringified);
console.log(converted.owner);