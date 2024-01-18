# courses
- This project is a basic web application for managing courses and its audio book, built with Node.js, Express.js, MongoDB. It provides basic CRUD operations for courses and includes user authentication.



## Tech-Stacks:

# **Backend:**
- Node.js
- Express.js
- Mongodb  (as the database for storing course details)
- bcrypt
- jsonwebtoken


# **Development and Deployment:**
- GitHub
- Postman

# project repo link
[https://github.com/AakashGaurab/hyperface](https://github.com/AakashGaurab/hyperface)


# 1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/AakashGaurab/hyperface.git](https://github.com/AakashGaurab/hyperface.git)
   cd Backend
   ```
# Install backend dependencies
```
cd Backend
npm install
```
# add enviroment variable
```
key = 
num =
```
# Start the backend server
```
cd Backend
npm run server
```

# Entities
User
- userId(Primary key)
- name
- email(unique)
- password(hashed)

# courses
- id(primary key)
- title
- instructor
- length
- description
- courseImage
- content


# postman collection of API
- https://www.postman.com/telecoms-geologist-65366203/workspace/public/collection/32425541-4b3e0bfa-f6d4-49b2-add8-56bdfd512ff1?action=share&creator=32425541


# Routes
User Routes
# Registration
POST /user/signup
```
{
"name":"Aakash",
"email":"aakash@gmail.com",
"password":"1234"
}

 Response: User Created
```                  
# Login
POST /user/login
```
              Request:{
                  "email":example@gmail.com,
                  "password":"example123"
              }

  Response:{
  {msg:"Login Succesfull",token:"token from server"}
```

# course Routes

# upload a course
```
POST /course/post
headers token (jwtToken)

{
    "title":"AI",
    "instructor":"Pulkit Tyagi",
    "length":"120",
    "description":"An Intro to AI",
    "coverImage":"https://localhost:3501",
    "contents":[]
}

```

# Get All course
```
GET /course/get-all
header token:{jwtToken from login}
```

# GET a single course
```
GET /course/:id of course
header token:{jwtToken from login}
```
# Update a course
```
PATCH /course/: id of course
headers token (jwtToken)
```
# Delete file
```
DELETE /course/:id of course
header token:{jwtToken from login}
```



# upload a audio
```
POST /audio/post/:id of course
headers token (jwtToken)
{
    "title":"Intro to AI",
    "author":"Pulkit Tyagi",
    "length":"123",
    "summary":"An insight on what is AI",
    "coverImage":"http://localhost:3501",
    "audioFileURL":"https://drive.google.com/file/d/1KvnGhivBhlWogW2loWmU4oF2of6usFq-/view?usp=sharing"

}


```

# Get All audio
```
GET /audio/get-all
header token:{jwtToken from login}
```

# GET a single audio
```
GET /audio/:id of audio
header token:{jwtToken from login}
```
# Update a audio
```
PATCH /audio/: id of audio
headers token (jwtToken)
```
# Delete file
```
DELETE /audio/:id of couse/:id of audio
header token:{jwtToken from login}
```

