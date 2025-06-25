import { DataTypes } from 'sequelize';
import { db } from '../db.js';

// Define and export the Order model using Sequelize
export const Order = db.define('Order', {
    // Primary key field for the order
    id: {
        // Set the data type as INTEGER
        type: DataTypes.INTEGER,
        // Allow null values (though this is typically false for primary keys)
        allowNull: false,
        // Mark this field as the primary key
        primaryKey: true,
        // Automatically increment the ID for each new order
        autoIncrement: true,
    },
    // Field to store the delivery address
    deliveryAddress: {
        // Set the data type as STRING
        type: DataTypes.STRING,
        // This field cannot be null (required)
        allowNull: false,
    },
    // Field to store the blockchain transaction address
    transactionAddress: {
        // Set the data type as STRING
        type: DataTypes.STRING,
        // This field cannot be null (required)
        allowNull: false,
        // Ensure each transaction address is unique
        unique: true,
    },
    // Field to store the ID of the product being ordered
    productId: {
        // Set the data type as INTEGER
        type: DataTypes.INTEGER,
        // This field cannot be null (required)
        allowNull: false,
    },
    // Field to store the customer's phone number
    phone: {
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

// Synchronize the Order model with the database (create table if it doesn't exist)
Order.sync();