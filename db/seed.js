var models = require('../models');


  LocationsList =[
  {
   set_name:'Penthouse',
   category: 'Homes & Residences',
   daily_fee: ' $300',
   pic_url: 'https://static.mansionglobal.com/production/media/article-images/8bf4b58342b20c211dc28b2b3c9422a3/small_MN-AQ624_MAGNUM_M_20180130133401.jpg',
   description: 'Penthouse located on the 53rd floor of the Market Street Tower Residences. Great for dialog shots and also panoramic establishing shots of SF.'
  },
  {
    set_name: 'Pool',
    category: 'Homes & Residences',
    daily_fee: '$100',
    pic_url: 'http://www.sanluisobispo.com/news/local/community/cambrian/bqggnl/picture165556052/alternates/FREE_480/Neptune%20Pool064',
    description: 'Pool with decor aesthetics resembling ancient Greece.'
  },
  {
    set_name: 'Rooftop',
    category: 'Homes & Residences',
    daily_fee: '$150',
    pic_url: 'http://www.brianrose.com/blog/wp-content/uploads/2011/06/chelseawatertowers.jpg',
    description: 'Rooftop, 14 floors up. Rough urban feel to this rooftop. Great for action shots.'
  },
  {
   set_name: 'Dessert Home',
   category: 'Rural Area',
   daily_fee: '$100',
   pic_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHne29Q97PN32EmlD3ku9kl8GjAZzBRo2R9bmabed0AXEy63V',
   description: 'Dessert area. Good for westerns.'
  },
  {
    set_name: 'Italian Restaraunt',
    category: 'businesses',
    daily_fee: '$250',
    pic_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uyYQo7RNApxb10ByD5uQA4rjh55Q20y5rx6Z5sJGIaEW4Yww8A',
    description: 'Authentic Italian Restaraunt. Perfect for mafia assasniations and romatic comddies.'
  },
  {
    set_name: 'Helipad',
    category: 'Miscellaneous',
    daily_fee: '$500',
    pic_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvUo-bwJz_7Zbek8OmXuNKlWTpMjkzXm-MJIjUIVQ87ry9mNPxw',
    description: 'This is a real rooftop helipad. Helicopter is not included with set location booking. High speed fans available on set though. Great for filmmakers who have access to CGI!'
  }
  ];

// var createdLocations = Location.create
models.Location.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing locations: ', err);
    return;
  }
  console.log('Removed all Locations');

  models.Location.create(LocationsList, function(err, locations) {
    if (err) {
      console.log('Error creating locations: ', err);
      return;
    }
    console.log('Created', locations.length, 'Location');

    models.User.remove({}, function(err, res) {
      if (err) {
        console.log('Error removing Users', err);
        return;
      }
      console.log('Removed all Users');


    models.User.create([
    {
       name: 'Tom',
       locations: [locations[0], locations[1], locations[2]],
     },
    {
       name: 'Sam',
     locations: [locations[3], locations[4], locations[5]]
    }], function(err, users) {
      if (err) {
        console.log('Error creating Users', err);
        return;
      }
      console.log('Created', users.length, 'users');
      process.exit();
    });
    });

  })
});
