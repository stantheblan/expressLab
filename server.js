// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine

// Mount middleware (app.use)



// Mount routes
app.get('/thing1', (req, res) => {
    res.render('template1', { title: '1', message: 'Template 1!', content: 'thing1'})
})
app.get('/thing2', (req, res) => {
    res.render('template1', { title: '2', message: 'Template 1!', content: 'thing2'})
})
app.get('/thing3', (req, res) => {
    res.render('template1', { title: '3', message: 'Template 1!', content: 'thing3'})
})
app.get('/thing4', (req, res) => {
    res.render('template1', { title: '4', message: 'Template 1!', content: 'thing4'})
})
app.get('/thing5', (req, res) => {
    res.render('template1', { title: '5', message: 'Template 1!', content: 'thing5'})
})



app.get('/thing6', (req, res) => {
    res.render('template2', { title: '6', message: 'Template 2!', content: 'thing6'})
})
app.get('/thing7', (req, res) => {
    res.render('template2', { title: '7', message: 'Template 2!', content: 'thing7'})
})
app.get('/thing8', (req, res) => {
    res.render('template2', { title: '8', message: 'Template 2!', content: 'thing8'})
})
app.get('/thing9', (req, res) => {
    res.render('template2', { title: '9', message: 'Template 2!', content: 'thing9'})
})
app.get('/thing10', (req, res) => {
    res.render('template2', { title: '10', message: 'Template 2!', content: 'thing10'})
})


// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});