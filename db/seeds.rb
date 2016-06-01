# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.destroy_all
Walk.destroy_all
User.destroy_all
Waypoint.destroy_all


architecture = Category.create!(
theme: 'Architecture',
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
)

nature = Category.create!(
theme: 'Nature',
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
)

murals = Category.create!(
theme: 'Murals',
picture: 'http://susandrysdale.com/wp-content/uploads/2013/04/InstagramCapture_6f6efe60-e7bb-4c0b-b444-df7cb8821541.jpg',
)

statues = Category.create!(
theme: 'Statues',
picture: 'http://api.viglink.com/api/click?format=go&jsonp=vglnk_14641087157278&key=0da3f17dd3d3d8e710fb25246bc6e80c&libId=ioloiydj010004ox000DAjtmh30jg&loc=http%3A%2F%2Fhistorum.com%2Feuropean-history%2F72067-worst-historical-monuments-your-country-4.html&v=1&out=https%3A%2F%2Fc2.staticflickr.com%2F4%2F3622%2F3338702978_afe58027bc.jpg&ref=https%3A%2F%2Fwww.google.ca%2F&title=Worst%20historical%20monuments%20in%20your%20country%20-%20Page%204%20-%20Historum%20-%20History%20Forums&txt=',
)

statues = Category.create!(
theme: 'Statues',
picture: 'http://api.viglink.com/api/click?format=go&jsonp=vglnk_14641087157278&key=0da3f17dd3d3d8e710fb25246bc6e80c&libId=ioloiydj010004ox000DAjtmh30jg&loc=http%3A%2F%2Fhistorum.com%2Feuropean-history%2F72067-worst-historical-monuments-your-country-4.html&v=1&out=https%3A%2F%2Fc2.staticflickr.com%2F4%2F3622%2F3338702978_afe58027bc.jpg&ref=https%3A%2F%2Fwww.google.ca%2F&title=Worst%20historical%20monuments%20in%20your%20country%20-%20Page%204%20-%20Historum%20-%20History%20Forums&txt=',
)
bob = User.create!(
first_name: 'Bob',
last_name: 'Loblaw',
username: 'SneakyBob',
email: 'bbl@gmail.com',
icon: 'https://pbs.twimg.com/profile_images/688922841375322112/tTiPeHKd.png',
details: 'Lawyer',
location: 'Toronto, ON, Canada',
password: 'banana',
password_confirmation: 'banana'
)

walk1 = Walk.build(
name: 'Great Architecture, Buildings',
description: "A cool route which takes you across downtown Toronto and showcases Toronto's buildings. ",
picture: 'https://drscdn.500px.org/photo/original/store/54122812/m%3D900_k%3D2_b%3D2_dpi%3D300_attachment%3D1_tags%3D1/23e7dd40d7ae6a1f3fc8dd42ee65a1ee',
category_id: architecture.id,
user_id: bob.id,
city: "Toronto, ON, Canada"
)

waypoint1 = Waypoint.create!(
name: 'Historic Route',
description: 'A route that takes you through the ROM Museum and shows all the historic buildings within Toronto.',
latitude: 43.6677,
longitude: -79.3948,
address: '100 Queen\'s Park, Toronto, Ontario',
walk_id: walk1.id
)

waypoint2 = Waypoint.create!(
name: 'An artistic adventure',
description: 'A route that takes you through the AGO and shows all the historic buildings within Toronto.',
latitude: 43.65342,
longitude: -79.392625,
address: '317 Dundas Street West, Toronto, Ontario',
walk_id: walk1.id
)

walk1.save!

walk2 = Walk.build(
name: 'Coffee it up!',
description: 'A fantastic walk through your neighbourhood featuring coffee shops!',
category_id: nature.id,
user_id: bob.id,
city: "Toronto, ON, Canada"
)

waypoint3 = Waypoint.create!(
name: 'Dark Horse Espresso',
description: 'Basement hipster cafe.',
latitude: 43.6868,
longitude: -79.3663,
address: '550 Bayview Ave, Toronto, ON M4W 3X8',
walk_id: walk2.id
)

waypoint4 = Waypoint.create!(
name: 'Bitmaker Labs',
description: 'Where computer nerds and hatchling developers congregate!',
latitude: 43,
longitude: -79,
address: '220 king street west, toronto, ontario, canada',
walk_id: walk2.id
)

walk2.save!

walk3 = Walk.build(
name: 'Cool-Aid',
description: "A cool route which takes you across downtown Toronto and showcases Toronto's buildings. ",
picture: 'https://a1.muscache.com/airbnb/guidebook/v1_san_francisco_hero@2x.jpg',
category_id: architecture.id,
user_id: bob.id,
city: "Toronto, ON, Canada"
)

waypoint5 = Waypoint.create!(
name: 'Historic Route',
description: 'A route that takes you through the ROM Museum and shows all the historic buildings within Toronto.',
latitude: 43.6677,
longitude: -79.3948,
address: '100 Queen\'s Park, Toronto, Ontario',
walk_id: walk3.id
)

waypoint6 = Waypoint.create!(
name: 'An artistic adventure',
description: 'A route that takes you through the AGO and shows all the historic buildings within Toronto.',
latitude: 43.65342,
longitude: -79.392625,
address: '317 Dundas Street West, Toronto, Ontario',
walk_id: walk3.id
)

walk3.save!


walk4 = Walk.build(
name: 'Cool-Aid',
description: "A cool route which takes you across downtown Toronto and showcases Toronto's buildings. ",
picture: 'https://drscdn.500px.org/photo/original/store/54122812/m%3D900_k%3D2_b%3D2_dpi%3D300_attachment%3D1_tags%3D1/23e7dd40d7ae6a1f3fc8dd42ee65a1ee',
category_id: architecture.id,
user_id: bob.id,
city: "Toronto, ON, Canada"
)

waypoint5 = Waypoint.create!(
name: 'Historic Route',
description: 'A route that takes you through the ROM Museum and shows all the historic buildings within Toronto.',
latitude: 43.6677,
longitude: -79.3948,
address: '100 Queen\'s Park, Toronto, Ontario',
walk_id: walk4.id
)

waypoint6 = Waypoint.create!(
name: 'An artistic adventure',
description: 'A route that takes you through the AGO and shows all the historic buildings within Toronto.',
latitude: 43.65342,
longitude: -79.392625,
address: '317 Dundas Street West, Toronto, Ontario',
walk_id: walk4.id
)

walk4.save!
