# Foo Parameterization

A package for calculating the complex Foo et al. parameterization for the volume of a sphere.

## Installation and Execution of Code

### Initial Setup

Firstly, you can clone the code into the local repository, and then, on the terminal, run:

npm install

This will bring back all the node modules and the package-lock.json.

## Code Arrangement
- src/core.js contains the core function for calculating the volume of the sphere.
- src/api.js and src/cli.js provide different ways to execute the code.

## Different Code Executions
### Verify the Core Function:
To verify the correctness of the function that calculates the volume of the sphere, run:
node tests/test_core.js
![Screenshot (149)](https://github.com/Abhi939/Foo-parameterization/assets/66879893/1f9d2d20-5028-49c9-a12b-976e45b06bc8)


### Through Command Line:
Execute the code via the command line, where it asks for the radius of the sphere and prints the volume of the sphere run:
node src/cli.js
![Screenshot (151)](https://github.com/Abhi939/Foo-parameterization/assets/66879893/a831c445-785e-4f40-ae24-4767f9b432ac)


### Through API Call:
You can run the code in a local environment and make an API call using any browser or Postman. Since it's a GET request, you can pass the radius of the sphere through the URL.
![Screenshot (150)](https://github.com/Abhi939/Foo-parameterization/assets/66879893/b028e5b4-91bf-4043-9db3-0cdb5316a0e0)

## Future Considerations
- This will be a community project, and we expect the continuous introduction of new scientific features over the course of many years by many contributors.
- We aim to target a wide range of users, from those who want to use the software directly and interactively to those who want to incorporate our implementation of Foo physics into larger software packages.



