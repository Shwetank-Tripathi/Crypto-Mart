// Import DataTypes from Sequelize for defining column types
import { DataTypes } from "sequelize";
// Import the database connection instance
import { db } from "../db.js";

// Define and export the Product model using Sequelize
export const Product = db.define('Product', {
    // Primary key field for the product
    id: {
        // Set the data type as INTEGER
        type: DataTypes.INTEGER,
        // Allow null values (though this is typically false for primary keys)
        allowNull: false,
        // Mark this field as the primary key
        primaryKey: true,
        // Automatically increment the ID for each new product
        autoIncrement: true,
    },
    // Field to store the product name
    name: {
        // Set the data type as STRING
        type: DataTypes.STRING,
        // This field cannot be null (required)
        allowNull: false,
    },
    // Field to store the product price in ETH
    price: {
        // Set the data type as FLOAT for decimal values
        type: DataTypes.FLOAT,
        // This field cannot be null (required)
        allowNull: false,
    },
    // Field to store the product image URL
    url: {
        // Set the data type as STRING
        type: DataTypes.STRING,
        // This field cannot be null (required)
        allowNull: false,
    },
}, {
    // Enable automatic timestamp fields (createdAt and updatedAt)
    timestamps: true,
    // Enable the createdAt timestamp field
    createdAt: true,
    // Enable the updatedAt timestamp field
    updatedAt: true,
});

// Synchronize the Product model with the database (create table if it doesn't exist)
Product.sync();