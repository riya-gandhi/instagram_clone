const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./controllers/authController'); 
const profileRoutes = require('./controllers/profileController');
const postsController = require('./controllers/postController');
const followsController = require('./controllers/followController');
const commentsController = require('./controllers/followController');
const likesController = require('./controllers/followController');
const searchController = require('./controllers/followController');
const notificationsController = require('./controllers/followController');
const exploreController = require('./controllers/followController');

const PORT = 8000;
const db = require('./config/dbConnect');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);  
app.use('/posts', postsController);
app.use('/follows', followsController);
app.use('/comments', commentsController);
app.use('/likes', likesController);
app.use('/search', searchController);
app.use('/notifications', notificationsController);
app.use('/explore', exploreController);


app.get("/", (err, res) => {
    res.json({"success": true})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
