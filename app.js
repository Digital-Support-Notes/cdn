const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('static'))

app.listen(port, () => {
  console.log(`Nayan Patel Digital Support Notes. (APP LISTENING)`)
})

// Initializing the router from express
var router = express.Router();

app.get('/api', function(req, res){
   res.attachment('sitelogo.png');
   console.log(res.get('Content-Disposition'));
   res.end();
});
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});
