const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "great_bay_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    createProduct();
});

function createProduct(){
    console.log("Inserting a new product...\n");
    inquirer.prompt({
        name: "input",
        type: "",
        message: "Insert new product information in next prompts."
    },
    {
        name: "title",
        type: "",
        message: "Product Title"
    })
    .then((data) => {
        let query = connection.query(
            "INSERT INTO products SET ?",
            {
                title: data.title,
                price: data.price,
                description: data.description
            }
        )
    })
    
        
    )
}