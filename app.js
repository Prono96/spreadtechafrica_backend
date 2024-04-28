const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const myFunction = require('./myFunction');
const conn = require('./database/connection');
const User = require('./schema/users');
conn

// Parse JSON request body
app.use(bodyParser.json());

app.get('/', function (req, res) {
  let callFunction = myFunction()
  res.send(callFunction);
});

// CREATE API
app.post('/users/sign_up', async(req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
} catch (error) {
    res.status(500).json({ message: 'Failed to add user', error: error.message });
}
})



// GET API
app.get('/users', async (req, res) => {
  try {
    
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
});


// EDIT API
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
});


// DELETE API 
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID and delete it
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
});




app.listen(3000, function() {
  console.log(`Server is running at http://localhost:3000`)
});