# Node Project Structure
## Folders
### **api**
Express route controllers for all the endpoints of the app.
- v1.0 : API Versioning
    - services : All the business logic is here.
    - controllers : All the request-response handlers goes here.
    - models : All Database models.
    - routes : All the application routes is here.
    - validators : All the necessary applicaiton validations are stored here.
### **bin** 
The bin/ directory serves as a location where you can define your various startup scripts. The www is an example to start the express app as a web server. You can refer this [link](https://stackoverflow.com/questions/23169941/what-does-bin-www-do-in-express-4-x) for more details.
### **config**
Environment variables, database connections and other configuration related stuff
### **enums**
Constants strings are stored here.
### **jobs**
Cron Jobs definitions are stored here.
### **logs**
Application logs are stored here.
### **middlewares**
All the necessary middleware functions are stored here. For eg. Authentication, Multer Storage, etc.
### **postman_collections**
All postman collections can be stored and found here at one place.
### **public**
Contains all the static files like images, style, and JavaScript
### **subscribers**
Event handlers for async task. All event emitters will be handled over here.
### **tests (Optional)**
Contains all the test files for automation testing tools like Mocha,etc.
### **types (Optional)**
It is used for typescript Nodejs projects.
### **views**
Contains layout templates for the web page representation.
## Run the app
```bash
npm install

DEBUG=node-project-structure:* npm start
```
Where node-project-structure is project name and * represents to print all the debug statements. You can replace * with function name or filename to print particular debug statements respectively.
## Packages
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Cron](https://www.npmjs.com/package/cron)
- [Debug](https://www.npmjs.com/package/debug)
- [Express](https://www.npmjs.com/package/express)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Http-Errors](https://www.npmjs.com/package/http-errors)
- [Jade](https://www.npmjs.com/package/pug)
- [Morgan](https://www.npmjs.com/package/morgan)

## Security Practices
- https://blog.risingstack.com/node-js-security-checklist/

## External Links For Reference
- https://readme.com/documentation