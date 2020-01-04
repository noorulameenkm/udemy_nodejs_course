const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const expresshbs = require('express-handlebars');
app.engine('hbs', expresshbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));

// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000,() => {
    console.log('App started at 3000');
});
