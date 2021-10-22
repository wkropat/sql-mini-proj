const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'HitTwF!5Q',
    database: 'courses_db'
  },
  console.log(`Connected to the courses_db database.`)
);

// * It's done when the `/api/movies` route renders a list of all movies.

app.get('/api/movies', (res,req)=>{


})

// * It's done when the `/api/add-movie` route successfully adds a movie when tested using Insomnia.

app.get('/api/movies', (res,req)=>{


})

// * It's done when the `/api/update-review` route successfully updates a movie when tested using Insomnia.

app.get('/api/update-review', (res,req)=>{
    // Query database
    db.query('SELECT * FROM course_names', function (err, results) {
    console.log(results);
    });

})

// * It's done when the `/api/movie/:id` route deletes a route when tested using Insomnia.

app.get('/api/movies/:id', (res,req)=>{

// Hardcoded query: DELETE FROM course_names WHERE id = 3;

    db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
    });

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
