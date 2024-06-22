## Introduction

Mongodb schema creation and executing query

## Installation

To run the following query download mongodb and mongo shell
Url for mongodb: https://www.mongodb.com/try/download/community </br>
Url for mongodb shell: https://www.mongodb.com/try/download/shell

## How to Run

<u>Open the terminal to run the mongodb server and type</u>: <b style="color: blue">mongod</b> (which open up the local server running on port no. 27017)

<u>To use the mongoshell open the terminal and type</u>: <b style="color: blue">mongosh</b> (You can write query and execute using terminal)

## Usage

Creating product schema.
I have created the product schema and validating the required field

```javascript
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
```
