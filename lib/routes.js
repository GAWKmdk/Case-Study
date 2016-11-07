Router.configure({
    //frame-build
   layoutTemplate: 'layout'
    //,
    //loadingTemplate:'layoutLoading',
    //notFoundTemplate:'notFound'
});

Router.route('/', function () {
    //posting-board
  this.render('Home');
});

// when user logs in, action = 
//if(Meteor.isClient){
//  Tracker.autorun( function(tracker){

//      if(Meteor.user()){
//      Router.go('Home');
//      tracker.stop();
//    }
//  });
//}


Router.route('/publishers', function () {
    //content-feed
    this.render('publishers',{
    data: function () {
     // return Collection.findOne({_id: this.params._id});
    }
});                                         
});

Router.route('/productions', function () {
    //content-feed
    this.render('productions',{
    data: function () {
     // return Collection.findOne({_id: this.params._id});
    }
});                  
});

Router.route('/bios', function () {
    //content-feed
    this.render('bios',{
    data: function () {
     // return Collection.findOne({_id: this.params._id});
    }
});                                        
});

Router.route('/community', function () {
    //content-feed
    this.render('community', {
    data: function () {
     // return Collection.findOne({_id: this.params._id});
    }
});                       
});



