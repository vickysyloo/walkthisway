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

photo_walk = Category.create!(
theme: 'Photo Walk',
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
)

street_art = Category.create!(
theme: 'street_art',
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
)

bob = User.create!(
first_name: 'Bob',
last_name: 'Loblaw',
username: 'SneakyBob',
email: 'bbl@gmail.com',
icon: 'https://pbs.twimg.com/profile_images/688922841375322112/tTiPeHKd.png',
details: 'Lawyer',
location: 'Toronto, ON',
password: 'banana',
password_confirmation: 'banana'
)

walk1 = Walk.new(
id: 1,
name: 'Great Architecture, Buildings',
description: "A cool route which takes you across downtown Toronto and showcases Toronto's buildings. ",
picture: 'https://drscdn.500px.org/photo/original/store/54122812/m%3D900_k%3D2_b%3D2_dpi%3D300_attachment%3D1_tags%3D1/23e7dd40d7ae6a1f3fc8dd42ee65a1ee',
category_id: architecture.id,
user_id: bob.id,
city: "Toronto, Ontario, Canada"
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

walk2 = Walk.new(
id: 2,
name: 'Coffee it up!',
description: 'A fantastic walk through your neighbourhood featuring coffee shops!',
picture: 'http://imgh.us/Toronto_skyline_250x250.jpg',
category_id: nature.id,
user_id: bob.id,
city: "Toronto"
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
