import express from 'express';
import { getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from './controllers/employeeController.js';

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

// Employee Routes
router.get('/api/employees', getAllEmployees); // Route to get all employees
router.get('/api/employees/:id', getEmployee); // Route to get a specific employee by ID
router.post('/api/employees', createEmployee); // Route to create a new employee (interacts with MongoDB)
router.patch('/api/employees/:id', updateEmployee); // Route to update an existing employee by ID
router.delete('/api/employees/:id', deleteEmployee); // Route to delete an employee by ID

export default router;
