# Social-Media-API
API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Description
This is a web development project that aims to build an API for a social network web application. The API allows users to share their thoughts, react to friends' thoughts, and manage their friend list. It utilizes Express.js for routing, MongoDB as the database, and the Mongoose ODM.

To ensure the successful completion of this project, please follow the acceptance criteria listed below:

## Acceptance Criteria:

1. Server Initialization and Database Sync

    -When the command to invoke the application is executed, the server should start running.
    -The Mongoose models should be synced to the MongoDB database.

2. GET Routes for Users and Thoughts

    -When API GET routes for users and thoughts are accessed using tools like Insomnia, the data for each of these routes should be displayed in a formatted JSON.

3. POST, PUT, and DELETE Routes for Users and Thoughts

    -When API POST, PUT, and DELETE routes for users and thoughts are tested using tools like Insomnia, the following operations should be successfully performed:
        -Creation, update, and deletion of users in the database.
        -Creation, update, and deletion of thoughts in the database.

4. POST and DELETE Routes for Reactions and Friend List

    -When API POST and DELETE routes for reactions and friend list are tested using tools like Insomnia, the following operations should be successfully performed:
        -Creation and deletion of reactions to thoughts.
        -Addition and removal of friends to a user's friend list.

## Walkthrough Video

Please refer to the following walkthrough video link that demonstrates the functionality of the social network API: https://drive.google.com/file/d/17M8wFX0DlVK--c6hkfFuCIElUCNYNz/view

## Installation Instructions

To run this project locally, please follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running the command: npm install.
3. Configure the MongoDB connection in the project's configuration file.
4. Start the server by running the command: npm start.
5. Use a tool like Insomnia to test the API endpoints mentioned in the acceptance criteria.

## Technologies Used

Express.js
MongoDB
Mongoose

## Dependencies

The project relies on the following dependencies:

-express
-mongoose

Please ensure that you have these dependencies installed before running the project.

## Summary

This API provides the foundation for a social network web application, allowing users to share thoughts, react to friends' thoughts, and manage their friend list. With the use of Express.js, MongoDB, and Mongoose, it offers the speed and flexibility required to handle large amounts of unstructured data. For further details and demonstrations, please refer to the provided walkthrough video.