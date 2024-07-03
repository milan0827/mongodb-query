// Create schema for products
const ProductSchema = db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price", "quantity", "description", "discount"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        price: {
          bsonType: "number",
          description: "must be a number and is required",
        },
        quantity: {
          bsonType: "number",
          description: "must be a number and is required",
        },
        description: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        discount: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
});

// Insert into products
db.products.insertOne({
  name: "Polo Shirt",
  price: 1234,
  quantity: 3,
  description: "A fine Polo Shirt",
  discount: "34",
});

// Updating the prodducts details
db.products.updateOne({ name: "Polo Shirt" }, { $set: { name: "polo shirt" } });

// Update the product schema
db.runCommand({
  collMod: "products",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "name",
        "price",
        "quantity",
        "description",
        "discount",
        "size",
        "studentId",
      ],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        price: {
          bsonType: "number",
          description: "must be a number and is required",
        },
        quantity: {
          bsonType: "number",
          description: "must be a number and is required",
        },
        description: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        discount: {
          bsonType: "number",
          description: "must be a string and is required",
        },
        size: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        studdentId: [{ type: mongoose }],
      },
    },
  },
});

//Printing the schema
function printSchema(obj, indent) {
  for (let key in obj) {
    print(indent, key, typeof obj[key]);
  }
}

// Example
let productsSchema = db.products.findOne();
printSchema(productsSchema, "");

// Creating embedded documents on one to one relationship
// let's say we have a customer and contact details
// Each contact has one to one relationship between customer and vice versa
db.createCollection("customer", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "from", "contact"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        age: {
          bsonType: "number",
          description: "must be a number and is required",
        },
        from: {
          bsonType: "array",
          minItems: 1, // There must be atleat on address
          items: {
            bsonType: "object",
            required: ["country", "city"],
            properties: {
              country: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              city: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              street: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              zip: {
                bsonType: "number",
                description: "must be a string and is required",
              },
            },
          },
        },
        contact: {
          bsonType: "object",
          required: ["email", "phoneNo"],
          properties: {
            email: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            phoneNo: {
              bsonType: "string",
              description: "must be a string and is required",
            },
          },
        },
      },
    },
  },
});

// Inserting to the customer
db.customer.insertOne({
  name: "Milan",
  age: 23,
  from: [{ country: "Nepal", city: "Saatdobato" }],
  contact: { email: "milanrokaya2014@gmail.com", phoneNo: "0987654321" },
});

// Finding all the Customer
db.customer.find();

// Finding one customer by _id
db.product.findOne({ _id: ObjectId("6684aca7d8d3dbbece597193") });

// FInd One customer by name
db.product.findOne({ name: "Watch" });
