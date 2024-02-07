# Mongoose

## notes

- Mongoose documentation: [mongoosejs.com](https://mongoosejs.com/)
- MongoDB documentation: [mongodb.com](https://www.mongodb.com/docs/)
- excellent learning materials, MongoDB: [learn.mongodb.com](https://learn.mongodb.com/)

## summary

Mongoose is Object-Document Mapping library designed for MongoDB and Node.js. The purpose is to provide higher-level abstraction and a more convinitent way to interact with MongoDB from Node.js. Mongoose allows to define models, which are javascript representation of mongodb documents. Each model corresponds to a mongodb collection of documents. Models provide a schema that can enforce data validation, making it easier to ensure that data adheres to a specific structure. Mongoose also provides middleware, which are functions that run at various points in the lifecycle of a model (e.g. before saving a document, after querying...)

In last module i was learning the basics of MongoDB through the `mongosh` shell client, and the `mongodb` native driver for Node.js. While native driver for Node.js is versatile, fast, customizable... it needs a lot of boilerplate code just to connect the database and validate the connection. Many developers use library called `Mongoose`, ODM or **Object Document Mapper**. It simplifies interaction with the MongoDB database by mapping the javascript objects to the database documents.

Instructor starts the new project `FruitsProject`. Just by it's name you can already guess it's complexity. It's a simple project showing the basics of Mongoose. I will skip the project but will follow along. If i ever need help in future there is a documentation available. You can find more info online: 

- Application interact with MongoDB through Mongoose models.
- Models are created using schemas, defining the structure of the documents.
- Once a model is defined, you can perform CRUD operations (Create, Read, Update, Delete) on the associated MongoDB collection.
- Mongoose provides a powerful query API that simplifies interacting with MongoDB, allowing you to use JavaScript objects and methods rather than raw MongoDB queries.

## key concepts

- Schemas: Mongoose schemas define the data structure and types for each field in a document. Schemas are used to enforce data validation.
- Models: Mongoose models define the structure of documents in a collection and provide an interface to interact with the database.
- Middleware: Middleware functions in Mongoose allow you to execute code at specific points in the model's lifecycle. Common use cases include data validation, encryption, and pre/post-processing.
- Connection: Mongoose manages a connection pool to the MongoDB database. You can establish a connection using `mongoose.connect()`

## read more

- [mongoose quick start](https://mongoosejs.com/docs/index.html)
- official guides: [link](https://mongoosejs.com/docs/guides.html)
- mongoose schemas: [link](https://mongoosejs.com/docs/guide.html)
- mongoose models: [link](https://mongoosejs.com/docs/models.html)
- data validation: [link](https://mongoosejs.com/docs/validation.html)
- API reference: [link](https://mongoosejs.com/docs/api/mongoose.html)
