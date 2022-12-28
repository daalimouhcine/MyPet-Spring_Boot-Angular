# Adoption Application

This is a web application for adopting animals (birds, dogs, cats) for people who have commitments and cannot care for their pets full-time.

The application allows users to manage the adoption of animals for a certain number of days. Each user is characterized by an ID, login, password, address, email, phone number, and number of animals to adopt.

Each animal is characterized by its type, age, number of days, adoption description, and photos. Users who want to make an adoption offer or adopt an animal must have a profile. Viewing adoption posts does not require an account.

To add an adoption offer, the owner must provide a title for the post, a description, the city, the type, the number of days, images, and a price. The client wants to add a search feature for the most active users. Adoption posts can have comments and replies.

## Technologies Used
- API management
- Single page application
- Components
- Business logic
- Java
- TypeScript
- Springboot
- Angular
- PostgreSQL
- Git
- Jira/Trello


## Performance Criteria
- Use of a project management tool (Trello, Jira)
- Practice of all concepts at the application design level
- Good code quality and project structure
- The interface meets the functional and adaptive requirement needs.

## Installation

### Prerequisites
- Java 8 or higher
- Node.js and npm
- PostgreSQL database

### Steps
1. Clone the repository to your local machine
```
git clone https://github.com/daalimouhcine/MyPet-Spring_Boot.git
```
2. Navigate to the root directory of the project
```
cd my-pet-application
```
3. Install the backend dependencies
```
./mvnw clean install
```
4.Navigate to the `frontend` directory
```
cd frontend
```
5. Install the frontend dependencies
```
yarn install
```
6. Create a PostgreSQL database and update the `application.properties` file in the `backend` directory with the correct database credentials.
7. Run the backend server
```
./mvnw spring-boot:run
```
8. Run the frontend server
```
yarn start
```
9. The application will be running at http://localhost:4200.
