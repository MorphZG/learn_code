const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

// configuration
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // serve static files from public dir

// ------------------------
// --- database configuration
// ------------------------
// localhost connection
mongoose.connect(`mongodb://127.0.0.1:27017/todolistDB`);

// document schema
const itemSchema = { name: String };
const listSchema = { name: String, items: [itemSchema] };
// create model from schema, model(singularDocumentName, schemaName)
const Item = mongoose.model("Item", itemSchema);
const List = mongoose.model("List", listSchema);

// create default documents using Item model
let item01 = new Item({
    name: "Welcome to your todolist!",
});
let item02 = new Item({
    name: "Hit the + button to add a new item",
});
let item03 = new Item({
    name: "<--- Hit this to delete an note",
});
const defaultItems = [item01, item02, item03];

// ------------------------
// --- request handlers ---
// ------------------------
app.get("/", async function (req, res) {
    // find all items in a collection and log them to console
    let foundItems = await Item.find({});
    // prevent multiple insertion of default items
    if (foundItems.length == 0) {
        // if there is no found items in a collection
        // insert default documents into a collection
        await Item.insertMany(defaultItems);
        // after inserting items, redirect back to "/"
        res.redirect("/");
    } else {
        // render list.ejs file from views directory and pass the values to required variables
        res.render("list", { listTitle: "Today", newListItem: foundItems });
    }
});

// create custom todo lists using route parameters
app.get("/lists/:customListName", async function (req, res) {
    const customListName = _.capitalize(req.params.customListName); // lodash.capitalize()
    // check if customListName is in the database
    // if it does, render found list
    let foundQuery = await List.findOne({ name: customListName });
    if (foundQuery) {
        console.log(`I have found ${customListName}`);
        res.render("list", {
            listTitle: customListName,
            newListItem: foundQuery.items,
        });
        // if not, save it to lists collection using List model
    } else {
        console.log(`Saving ${customListName} to "lists" collection...`);
        let newList = new List({
            name: customListName,
            items: defaultItems,
        });
        await newList.save();
        res.redirect(`/lists/${customListName}`);
        List.findOne({ name: customListName });
    }
});

// add new todo item to the database and redirect back to route route
app.post("/", async function (req, res) {
    const itemName = req.body.userInput; // <input name="userInput">
    const listName = req.body.list; // <input name="list">
    //  create new document using Item model
    let newItem = new Item({
        name: itemName,
    });
    // check if user is posting to default or custom list
    if (listName == "Today") {
        // save Item document (items collection)
        await newItem.save();
        res.redirect("/");
    } else {
        // find the custom list and access the property of items: array
        List.findOne({ name: listName }).then(function (foundList) {
            // push the newItem into items array and save
            foundList.items.push(newItem);
            foundList.save();
            res.redirect(`/lists/${listName}`);
        });
    }
});

app.post("/delete", async function (req, res) {
    let checkedItemId = req.body.checkbox;
    let listName = req.body.listName;

    if (listName == "Today") {
        await Item.findByIdAndDelete(checkedItemId).then(
            console.log("ID found and deleted!")
        );
        res.redirect("/");
    } else {
        await List.findOneAndUpdate(
            { name: listName },
            { $pull: { items: { _id: checkedItemId } } }
        ).then(res.redirect(`/lists/${listName}`));
    }
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
