const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "great_bay_db"
});

function start(){
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "What is your choice?",
        choices: ["Bid on item", "Post an item", "Manage Posts"]
    })
}

function bidProduct(){

}

function postProduct(){
    connection.connect(function(err){
        if(err) throw err;
        console.log("Connected as id " + connection.threadId + "\n");
    });
    console.log("Inserting a new product...\n");
    inquirer.prompt({
        name: "input",
        type: "",
        message: "Insert new product information in next prompts."
    },
    {
        name: "title",
        type: "input",
        message: "Product Title"
    },
    {
        name: "price",
        type: "input",
        message: "Product Price"
    },
    {
        name: "quantity",
        type: "input",
        message: "Product Quantity"
    }
    )
    .then((data) => {
        let query = connection.query(
            "INSERT INTO products SET ?",
            {
                title: data.title,
                price: data.price,
                description: data.description
            },
            function(err, res){
                console.log(res.affectedRows + " product inserted!\n");
            }
        );
        start();
    })
}

function createProduct(){
    
}

function readProduct(){

}

function updateProduct(){

}

function deleteProduct(){

}


start();