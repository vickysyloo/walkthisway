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
theme: 'green space',
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
name: 'Great Architecture, Buildings!',
description: "Cool things",
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
category_id: architecture.id,
user_id: bob.id,
city: "Toronto, Ontario, Canada"
)

waypoint1 = Waypoint.create!(
name: 'ROM',
description: 'Museum',
latitude: 43.6677,
longitude: -79.3948,
address: '100 Queen\'s Park, Toronto, Ontario',
walk_id: walk1.id
)

waypoint2 = Waypoint.create!(
name: 'AGO',
description: 'Museum',
latitude: 43.65342,
longitude: -79.392625,
address: '317 Dundas Street West, Toronto, Ontario',
walk_id: walk1.id
)

walk1.save!

walk2 = Walk.new(
id: 2,
name: 'greenest of spaces',
description: 'such nature',
picture: 'http://www.whattodotoronto.com/assets/Kay-Gardner-Beltline-Park-whatTOdo-Toronto.jpg',
category_id: nature.id,
user_id: bob.id,
city: "Toronto"
)

waypoint = Waypoint.create!(
name: 'ROM',
description: 'Museum',
latitude: 43.6868,
longitude: -79.3663,
address: '550 Bayview Ave, Toronto, ON M4W 3X8',
walk_id: walk2.id
)

waypoint2 = Waypoint.create!(
name: 'Bitmaker',
description: 'learning!',
latitude: 43,
longitude: -79,
address: '220 king street west, toronto, ontario, canada',
walk_id: walk2.id
)

walk2.save!
