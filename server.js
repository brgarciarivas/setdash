var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');
var _ = require('underscore');
var MixpanelExport = require('mixpanel-data-export');
var fs = require('fs');
var webpack = require('webpack');


var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var origin = req.get("Origin");
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || 3000, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:3080');
  });

//MIXPANEL ROUTES TO GET RETENTON DATA FROM ALL APPS
    app.get('/mixSmIos', function(request, response){
    var today = moment().format("YYYY-MM-D");
    var monthAgo =  moment().subtract(7,'months').format("YYYY-MM-D");  

        SetmineIos = new MixpanelExport({
            api_key: "68551b7268ce7f3058c8867b27f1348d",
            api_secret: "7c59753a4f28110435cc5f968e57b456"
        });

        SetmineIos.segmentation({
            interval: "7",
            event:"Application Opened",
            from_date: monthAgo,
            to_date: today,
            type: "unique"   
        }).then(function(SetmineIos2){
            console.log(SetmineIos2)
          
            response.json(SetmineIos2)
        });
      });
    app.get('/mixSmAd', function(request,response){
        var today = moment().format("YYYY-MM-D");
        var monthAgo =  moment().subtract(7,'months').format("YYYY-MM-D");

        SetmineAd = new MixpanelExport({
            api_key: 'e16beae52106d40206434bbce35e6571',
            api_secret: '56906e8df009ea4cc1f3147bf20c6e5f'
        });

        SetmineAd.segmentation({
            interval: "7",
            event:"Application Opened",
            from_date: monthAgo,
            to_date: today,
            type: "unique"   
        }).then(function(SetmineAd2){
            console.log(SetmineAd2)
            response.json(SetmineAd2)
        });
    });
    app.get('/mixSmWb',function(request,response){
        var today = moment().format("YYYY-MM-D");
        var monthAgo =  moment().subtract(7,'months').format("YYYY-MM-D");

        SetmineWb = new MixpanelExport({
            api_key:'ea11f57823ddd76b6573d4d5c28950b7',
            api_secret: '8bd2e550f11b36b0d2b011af7d46d22e'
        });

        SetmineWb.segmentation({
            interval: "7",
            event:"Page Load",
            from_date: monthAgo,
            to_date: today,
            type: "unique"   
        }).then(function(SetmineWb2){
            console.log(SetmineWb2)
            response.json(SetmineWb2)
        });
    });
   
//END OF MIXPANEL ROUTES 

if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}
