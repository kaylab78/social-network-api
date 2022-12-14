# Social Network API
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
This is the back end API for a social media app that uses a NoSQL database. Routes can be tested in Insomnia.

Walkthough Video: [https://youtu.be/eYGa59kQyzg](https://youtu.be/eYGa59kQyzg)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Credits](#credits)

## Installation
In order to use this project, the user must have Node.js and MongoDB installed on their local machine.

To clone the repository, type `git clone git@github.com:kaylab78/social-network-api.git` in the command-line interface.

This project requires several npm packages as listed in the [Technologies](#technologies) section below. First use `npm init -y` to initialize. Then use `npm install` to install the required packages.

## Usage
To start the server and test the API routes, type `node server` in the command-line interface.

Once the server has started, navigate to Insomnia. Test the following routes.

**User:**
- Use a GET route with http://localhost:3001/api/users to read all of the users in the database.
- Use a GET route with an ID to read just one user. Example: http://localhost:3001/api/users/6300fe4ced1f42e04139d96b
- Use a POST route to create a new user. Use http://localhost:3001/api/users and JSON in the body. Example:
```
{
    "username" : "chandler",
    "email" : "chandler@email.com"
}
``` 
- Use a PUT route to update a user using the user's ID. Example: http://localhost:3001/api/users/6300fe4ced1f42e04139d96b with JSON body `{ "username" : "chandlerbing" }`
- Use a DELETE route to delete a user using their ID. Example: http://localhost:3001/api/users/6300fe4ced1f42e04139d96b

![The screen shows the Insomnia app with example GET, POST, PUT and DELETE routes running successfully.](/assets/screenshot-1.gif)

**Friend:**
- Use a POST route to add a friend to the user's friend list. Example: http://localhost:3001/api/users/6300fe4ced1f42e04139d96b/friends/6302a3561429ea87a5b6a36e where 6300fe4ced1f42e04139d96b is the user's ID and 6302a3561429ea87a5b6a36e is the friend's ID.
- Use a DELETE route to remove a friend from the user's friend list. Example: http://localhost:3001/api/users/6300fe4ced1f42e04139d96b/friends/6302a3561429ea87a5b6a36e where 6300fe4ced1f42e04139d96b is the user's ID and 6302a3561429ea87a5b6a36e is the friend's ID.

![The screen shows the Insomnia app with example POST and DELETE routes running successfully.](/assets/screenshot-3.gif)

**Thought:**
- Use a GET route with http://localhost:3001/api/thoughts to read all of the thoughts in the database.
- Use a GET route with an ID to read just one thought. Example: http://localhost:3001/api/thoughts/630107be3c82c66e18cd7763
- Use a POST route to create a new thought. Use http://localhost:3001/api/thoughts and JSON in the body. Example:
```
{
    "thoughtText" : "Can I interest you in a sarcasic comment?",
    "username" : "chandler",
    "userId" : "6300fe4ced1f42e04139d96b"
}
```
- Use a PUT route to update a thought using the thought ID. Example: http://localhost:3001/api/thoughts/630107be3c82c66e18cd7763 with JSON body `{ "thoughtText" : "I'm not good at the advice. Can I interest you in a sarcastic comment?" }`
- Use a DELETE route to delete a thought using the thought ID. Example: http://localhost:3001/api/thoughts/630107be3c82c66e18cd7763

![The screen shows the Insomnia app with example GET, POST, PUT and DELETE routes running successfully.](/assets/screenshot-2.gif)

**Reaction:**
- Use a POST route to create a reaction. Example: http://localhost:3001/api/thoughts/63027c4b373017473d5b491e/reactions with JSON body
```
{
    "reactionBody" : "Hilarious"
    "username" : "monica"
}
```
- Use a DELETE route to remove a reaction using the reaction's ID. Example: http://localhost:3001/api/thoughts/63027c4b373017473d5b491e/reactions/6302a66abac57a5252d6df83 where 63027c4b373017473d5b491e is the thought ID and 6302a66abac57a5252d6df83 is the reaction ID.

![The screen shows the Insomnia app with example POST and DELETE routes running successfully.](/assets/screenshot-4.gif)

## Technologies
- [Express.js](https://expressjs.com/)
- JavaScript
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.org/en/)

## License
&copy; 2022 by Kayla Backus

This project is licensed under the MIT license.

[License: MIT License](https://opensource.org/licenses/MIT)

## Credits
Boot Camp Module 18

Boot Camp Tutor Meg Meyers

*Guides.* (n.d.) Mongoose. Retrieved August 19, 2022, from [https://mongoosejs.com/docs/guides.html](https://mongoosejs.com/docs/guides.html)

Ramon22. (2014, June 13). *Mongoose - validate email syntax.* Stack Overflow. [https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax)

