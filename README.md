# Welcome to your Ageas assessment #

## Instructions
Within this project you will find a node js backend server for a notes app. Your task is to create a frontend for this server using React.

## Getting Started

Get the code

    git clone 'whereever the repository will be'

Install the node dependencies
    cd ageasTechTestStarter/
    npm install / yarn install, 

Start the server
    npm start / yarn start

## Your app

This project contains a `public` directory in the project root. This directory contains `index.html` and `bundle.js`.

Provided you're targetting a div with an id of 'app' in your React bundle, all you need to do to host your React app with this server is to replace our `bundle.js` with yours.

## Server endpoints and responses.

In addition to the documentation below, you will find the file Ageas_Tech_Test_Server.postman_collection.json in the root of this project. You can import this into [postman](https://www.getpostman.com/) to see example calls to each of the endpoints.

### GET 'http://localhost:3333/api/notes'
Return all notes: GET request

Expected output:
```
[
    {
        "id":1,
        "title":"A Title",
        "body":"A Body",
        "createdAt":"2018-02-07T08:54:41.311Z",
        "updatedAt":"2018-02-07T08:54:41.311Z"
    },
    {
        "id":2,
        "title":"Another Note",
        "body":"Another Body",
        "createdAt":"2018-02-07T08:55:27.347Z",
        "updatedAt":"2018-02-07T08:55:27.347Z"
    }
]
```
### GET 'http://localhost:3333/api/notes/:id'
Return single note: GET request

The ID of the note requested is appended to the end of the url. eg: `http://localhost:3333/api/notes/1`

Expected output:
```
{
    "id":1,
    "title":"A Title",
    "body":"A Body",
    "updatedAt":"2018-02-07T08:50:54.106Z",
    "createdAt":"2018-02-07T08:50:54.106Z"
}
```

### POST 'http://localhost:3333/api/notes'
Create note: POST request

Required input:
```
{
    title: "A Title",
    body: "A Body"
}
```

Expected output:
```
{
    "id":1,
    "title":"A Title",
    "body":"A Body",
    "updatedAt":"2018-02-07T08:50:54.106Z",
    "createdAt":"2018-02-07T08:50:54.106Z"
}
```
### PATCH 'http://localhost:3333/api/notes'
Update Note: PATCH request

Required input:
```
{
    id: 1
    title: "Changed Title",
    body: "Changed Body"
}
```

Expected output:
```
{
    "id": 1
    "title": "Changed Title",
    "body": "Changed Body",
    "createdAt":"2018-02-07T08:54:41.311Z",
    "updatedAt":"2018-02-07T09:17:44.693Z"
}
```

### DELETE 'http://localhost:3333/api/notes/:id'
Delete Note: DELETE request

Note id to be deleted is appended to the end of the url. eg: `http://localhost:3333/api/notes/1`

By way of confirmation, the note that has been deleted is returned by the endpoint.

Expected output:
```
{
    "id": 1
    "title": "Changed Title",
    "body": "Changed Body",
    "createdAt":"2018-02-07T08:54:41.311Z",
    "updatedAt":"2018-02-07T09:17:44.693Z"
}
```
