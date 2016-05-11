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

greenspace = Category.create!(
theme: 'Green spaces',
picture: 'http://farm3.static.flickr.com/2179/2090898183_e70e0bab6e.jpg',
)

bob = User.create!(
first_name: 'Bob',
last_name: 'Loblaw',
username: 'SneakyBob',
email: 'bbl@gmail.com',
icon: 'https://pbs.twimg.com/profile_images/688922841375322112/tTiPeHKd.png',
details: 'Lawyer',
location: 'Toronto, ON',
crypted_password: 'hello'
)

walk = Walk.create!(
name: 'Great Architecture Buildings!',
description: "Cool things",
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
category_id: architecture.id,
user_id: bob.id
)

walk = Walk.create!(
name: 'trees!',
description: "branchy",
picture: 'ttp://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
category_id: greenspace.id,
user_id: bob.id
)

waypoint = Waypoint.create!(
name: 'bitmaker',
description: 'school is cool',
latitude: 43.64692,
longitude: -79.3871,
address: '100 Queen\'s Park',
walk_id: walk.id
)
