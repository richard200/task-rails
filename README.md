# Task Rails
Task-Rails is a basic app built with react that enables a user to register an account, login and create, read, update and delete todos.
## Prerequisites
In order to use this repository you will need the following:
- Operating System **(Windows `10+`, Linux `3.8+`, or MacOS X `10.7+`)**
- RAM >= 4GB
- Free Space >= 2GB

## Built With
This application has been built with the following tools:
React
CSS
JavaScript

## Setup
You can setup this repository by following this manual
1. Clone the repository
    ```{shell}
   git clone git@github.com:richard200/task-rails.git
   ```
2. Ensure the ruby gems are setup in your machine
    ```{shell}
   bundle install

   ```
3. Run the application/start server
    ```{shell}
   npm start --prefix client
    ```
4. Open the application from your browser
    ```
   http://localhost:4000
   ```
## Application
This application is a simple react app that allows users to:
- Register an account
- Login after registration
- Create Todos.
- View all Todos.
- Update a Todo.
- Delete a Todo.

#### Todos table
| COLUMN      | DATA TYPE                                       | DESCRIPTION                         |
|-------------|-------------------------------------------------|-------------------------------------|
| id          | Integer                                         | Unique identifier.                  |
| title       | String                                          | Title of the todo                   |
| description | String                                          | The description of the todo.        |
| status      | Text                                            | Status of the todo.                 |
| priority    | Date                                            | Priority of the todo e.g high, low. |
| createdAt   | Date                                            | The date the todo was created.      |
| updatedAt   | Date                                            | The date the todo  was updated.     |

#### User table
| COLUMN      | DATA TYPE                                       | DESCRIPTION                         |
|-------------|-------------------------------------------------|-------------------------------------|
| id          | Integer                                         | Unique identifier.                  |
| username    | String                                          | The username of the user.           |
| email       | String                                          | The email of the user.              |
| password_digest | String                                      | The password of the user.           |
| createdAt   | Date                                            | The date the user was created       |
| updatedAt   | Date                                            | The date the user was updated       |


## LICENSE
This repository is distributed under the MIT License
```markdown
Copyright 2023 Richard Ngeti
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
## Author
This repository is maintained by:
- [Richard Ngeti](https://github.com/richard200)