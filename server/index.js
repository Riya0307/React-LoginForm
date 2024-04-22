
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", {

}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

app.post('/login',(req,res) => {
    const{email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
        }
        else {
            res.json("incorrect password")
        }
    }
    else {
        res.json("No records found")
    }
})
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => {
            res.status(201).json(employee); 
        })
        .catch(err => {
            console.error('Error creating employee:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
