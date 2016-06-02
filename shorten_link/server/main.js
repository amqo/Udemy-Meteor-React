import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

// Executed when a user visits with a route like
// 'localhost:3000/token'
function onRoute(req, res, next) {
  const token = req.params.token;
  const link = Links.findOne({ token });
  if (link) {
    // Increment the link counter
    // No Meteor method needed as this code is already in the server side
    Links.update(link, { $inc: { clicks: 1 }});
    // 307 is the code for redirection
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    next();
  }
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
