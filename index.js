const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/category.json')
const courses = require('./data/course.json')
const premium = require('./data/premium.json')

app.get('/', (req, res) => {
    res.send('Courses API Running')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c =>c._id===id);
    res.send(selectedCourse)
})


app.get('/premium/:id', (req, res)=>{
    const id= req.params.id;
    const selectedPremium= premium.find(p=>p._id===id);
    res.send(selectedPremium)
})

app.listen(port, () => {
    console.log('EduHub server running on port', port)
})