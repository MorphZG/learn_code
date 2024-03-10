const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

// configuration
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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
    let foundItems = await Item.find({});
    // prevent multiple insertion of default items
    if (foundItems.length == 0) {
        await Item.insertMany(defaultItems);
        res.redirect("/");
    } else {
        res.render("list", { listTitle: "Today", newListItem: foundItems });
    }
});

// create custom todo lists using route parameters
app.get("/lists/:customListName", async function (req, res) {
    const customListName = _.capitalize(req.params.customListName); // lodash.capitalize()
    // check if customListName is in the database
    let foundQuery = await List.findOne({ name: customListName });
    if (foundQuery) {
        console.log(`I have found ${customListName}`);
        res.render("list", {
            listTitle: customListName,
            newListItem: foundQuery.items,
        });
    } else {
        console.log(`Saving ${customListName} to "lists" collection...`);
        let newList = new List({
            name: customListName,
            items: defaultItems,
        });
        await newList.save();
        res.redirect(`/lists/${customListName}`);
    }
});

// add new todo item to the database
app.post("/", async function (req, res) {
    const itemName = req.body.userInput; // <input name="userInput">
    const listName = req.body.list; // <input name="list">
    //  create new document using Item model
    let newItem = new Item({
        name: itemName,
    });
    if (listName == "Today") {
        await newItem.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName }).then(function (foundList) {
            foundList.items.push(newItem);
            foundList.save();
            res.redirect(`/lists/${listName}`);
        });
    }
});

// remove items from the list
app.post("/delete", async function (req, res) {
    let checkedItemId = req.body.checkbox;
    let listName = req.body.listName;

    if (listName == "Today") {
        try {
            await Item.findByIdAndDelete(checkedItemId);
            console.log("Item found and deleted");
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            await List.findOneAndUpdate(
                { name: listName },
                { $pull: { items: { _id: checkedItemId } } }
            );
            res.redirect(`/lists/${listName}`);
        } catch (error) {
            console.log(error);
        }
    }
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
