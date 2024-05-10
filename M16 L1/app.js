import express from 'express'; // Import the express module
import { join, dirname } from 'path'; // Import the join and dirname functions from the path module
import { fileURLToPath } from 'url'; // Import the fileURLToPath function from the url module
import { connectDB } from './db/connect.js'; // Import the connectDB function from the './db/connect.js' file
import routes from './routes.js'; // Import the routes object from the './routes.js' file

const __dirname = dirname(fileURLToPath(import.meta.url)); // Get the current directory name using the dirname and fileURLToPath functions
const app = express(); // Create an instance of the express application

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public'))); // Serve static files from the 'public' directory using the express.static middleware

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html')); // Send the 'index.html' file as the response
});

app.use(express.json()); // Parse JSON request bodies using the express.json middleware

// Middleware to handle database connection
app.use(async (req, res, next) => {
    const db = await connectDB(); // Connect to the database
    if (!db) {
        return res.status(500).send('Database connection failed'); // If the database connection fails, send a 500 error response
    }
    req.db = db; // Attach the database connection to the request object
    next(); // Call the next middleware
});

app.use(routes); // Use the routes defined in the routes.js file

// POST endpoint for adding an employee
app.post('/api/employees', async (req, res) => {
    const employee = req.body; // Get the employee object from the request body
    console.log('Adding new employee:', employee); // Log the new employee object
    
    try {
        const db = req.db; // Get the database connection from the request
        const collection = db.collection('employees'); // Get the 'employees' collection from the database
        const result = await collection.insertOne(employee); // Insert the employee object into the collection
        res.status(201).json({ message: "Employee added successfully", employee: result.ops[0] }); // Send a 201 response with the added employee object
    } catch (error) {
        console.error('Failed to add employee:', error); // Log the error message if adding the employee fails
        res.status(500).json({ message: "Failed to add employee", error: error.message }); // Send a 500 error response with the error message
    }
});

app.post('/api/delete-employee', async (req, res) => {
    const { id } = req.body; // Get the employee's ID from the request body
    if (!id) {
        return res.status(400).json({ message: "Employee ID is required" }); // If the ID is missing, send a 400 error response
    }

    try {
        const db = await connectDB(); // Connect to the database
        const collection = db.collection('employees'); // Get the 'employees' collection from the database
        const result = await collection.deleteOne({ _id: new ObjectId(id) }); // Delete the employee with the provided ID

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No employee found with the provided ID" }); // If no employee is found with the provided ID, send a 404 error response
        }

        res.status(200).json({ message: "Employee deleted successfully" }); // Send a 200 response with a success message
    } catch (error) {
        console.error('Failed to delete employee:', error); // Log the error message if deleting the employee fails
        res.status(500).json({ message: "Failed to delete employee", error: error.message }); // Send a 500 error response with the error message
    }
});

const PORT = process.env.PORT || 5001; // Set the port number from the environment variable or use 5001 as the default
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server and log the port number
