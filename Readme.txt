 1. Start MongoDB

"C:\Program Files\MongoDB\Server\3.4\bin\mongod" --dbpath=/data


2. Start project

@see https://expressjs.com/en/starter/generator.html

set DEBUG=myapp:* & npm start

set DEBUG=myapp:* & nodemon npm start --ignore client/ --ignore public/ --ignore node_modules


And open localhost:3000 manually.


3. Start build

webpack --watch --progress



4. Run tests

karma start