# Testing Express REST API
## Overview
- REST API with user and product end points

## Tests
- Users
  - user registration
    - given the username and password are valid
    - given the passwords do not match
    - given the user service throws
  - create user session
    - given the username and password are valid
- Products
  - get product route
    - given the product does not exist
    - given the product does exist
  - create product route
    - given the user is not logged in
    - given the user is logged in
  - update product route
  - delete product route



## Learnings?
* Testing a REST API end-to-end with Supertest & mongodb-memory-server
* Mocking services
* Testing from the controller to the service


Read: https://github.com/goldbergyoni/javascript-testing-best-practices
