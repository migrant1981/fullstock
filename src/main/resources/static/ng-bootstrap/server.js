const express = require('express');

const app = express();
const config = {
    root: __dirname + '/dist/ng-bootstrap',
    port: process.env.PORT || 4200
};

app.use('/', express.static(config.root));

app.all('*', function (req, res) {
    res.sendfile(config.root + '/index.html');
});
app.listen(config.port, () => {
    console.log("running……");
})
