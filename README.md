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

## Tests Performed
- ### Unit Tests
    - Example unit test for user registration for given the username and password are valid that should return the user payload
 
      ![image](https://github.com/user-attachments/assets/f83c6b99-90d7-4834-989c-539fe284a0c7)

- ### Integration Tests
  - Example Integration test to update a product, assuming the user is logged in and should return a 200 and update the product
 
      ![image](https://github.com/user-attachments/assets/4e126946-9b2d-4131-bb4c-fe1f79191c91)

- End-to-End (E2E) Tests
  - Example E2E test for a get product in each case of user loggedin or not
 
      ![image](https://github.com/user-attachments/assets/2b6553a9-7956-4200-932f-096cd1f485b8)

- Performance Testing
    - Example Performance testing to create a product, given the user is logged in and should return a 200 and create the product under 200s
 
      ![image](https://github.com/user-attachments/assets/44b33f61-c5bf-4ad5-9b6f-9b98c2355844)
 


## Learnings
* Testing a REST API end-to-end with Supertest & mongodb-memory-server
* Mocking services
* Testing from the controller to the service


Read: https://github.com/goldbergyoni/javascript-testing-best-practices
