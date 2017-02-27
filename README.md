##**Sehati API**
#### Demo app with basic REST API

##**REST API**
#### List of basic routes:

**Route**                          | **HTTP** | **Description**
----------------------------------|---------------|------------------------
/ | GET            | Print: Express, Welcome to {title}!

#### List of api/users routes:

**Route**                          | **HTTP** | **Description**
----------------------------------|---------------|------------------------
/api/users			     | GET            | Get all the users info (admin only)
/api/users/:id		     | GET            | Get a single user info (admin and authenticated user)
/api/users			     | POST          | Create a user (admin only)
/api/users/:id		     | DELETE     | Delete a user (admin only)
/api/users/:id		     | PUT            | Update a user with new info (admin and authenticated user)

#### List of api/signin & api/signup routes:
**Route**                              | **HTTP** | **Description**
-------------------------------------|---------------|------------------------
/api/signin | POST            | Sign in while get an access token based on credentials
/api/signup	 | POST            | Sign up with new user info

### **USAGE**
#### With only npm:

>npm install <br>
>npm start <br>
>npm run dev <br>

##### Special for CRUD using Token in headers (postman):
P.s. Token will get when sign in as Admin


Access the website via http://localhost:3000 or API via http://localhost:3000/api <br>
Debugger encode & decode via https://jwt.io/
