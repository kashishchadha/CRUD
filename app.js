const express = require('express');
const app = express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const userModel = require('./Modals/users'); // Assuming you have a users.js file in models directory


app.get('/', (req, res) => {
  res.render('index');
}
);
app.get('/read', async(req, res) => {
 let users=await userModel.find()
  res.render('read',{users: users});
}
);
app.post('/create',  async (req, res) => {
  const { name, email, url } = req.body;
 let createdUser = await userModel.create({
    name: name,
    email: email,
    url: url
  });
  res.redirect('/read');

  
}
);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);     
});