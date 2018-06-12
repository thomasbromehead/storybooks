module.exports = {
   ensureAuthenticated : (req, res, next) => {
      if(req.isAuthenticated()){ //built-in passport method
         return next();
      } 
         res.redirect('/');
   }, 
   ensureGuest : (req, res, next) =>  {
      if(req.isAuthenticated()){
         res.redirect('/dashboard');
      } else {
         return next();
      }
   }

}