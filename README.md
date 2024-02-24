# Hapi.js RESTful API Project

This project is a Hapi.js server for Backend Developer Coding Challenge

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ahmedcharef/hapi-restful-api.git
```

2. Install dependencies:

```bash
npm install
```

3. Configuration:

Copy the .env.example file to a new file named .env

```bash
cp .env.example .env
```

Open the .env file and set PORT and HOST variables to listen on.

4. Running the server:

```bash
npm run start
```

## Model

This application uses a simple Note model for its data. Here is how it is defined:

- title: The title of the note. This is a string with a minimum length of 4 characters.
- body: The body of the note. This is a non-empty string.

## API Endpoints

```
POST /notes: Create a new note.
GET /notes: Get all notes.
GET /notes/{id}: Get a note by ID.
PUT /notes/{id}: Update a note by ID.
DELETE /notes/{id}: Delete a note by ID.
```

## Project Structure
As the project expands, it's vital to maintain a modular codebase, separate responsibilities into different layers.
We need to implement testing and deployment automation with CI/CD to ensure code quality and simplify deployment processes.
Additionally, incorporating a caching mechanism like Redis server can enhance performance by storing frequently accessed data.
