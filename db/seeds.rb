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

walk1 = Walk.new(
id: 1,
name: 'Great Architecture Buildings!',
description: "Cool things",
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
category_id: architecture.id,
user_id: bob.id,
city: "Toronto, Ontario, Canada"
)

walk1.waypoint = Waypoint.create!(
name: 'ROM',
description: 'Museum',
latitude: 43.6677,
longitude: -79.3948,
address: '220 king street west, toronto, ontario, canada',

)

walk1.waypoint2 = Waypoint.create!(
name: 'AGO',
description: 'Museum',
latitude: 43.65342,
longitude: -79.392625,
address: '317 Dundas Street West',

)

walk1.save!



waypoint3 = Waypoint.create!(
name: 'Vancouver art gallery',
description: 'Museum',
address: '750 Hornby St, Vancouver, BC V6Z 2H7',
walk_id: 2
)

waypoint4 = Waypoint.create!(
name: 'ubc',
description: 'Museum',
latitude: 43.65342,
longitude: -79.392625,
address: '2329 West Mall, Vancouver, BC V6T 1Z4',
walk_id: 2
)

walk2 = Walk.create!(
id: 2,
name: 'Great Architecture Buildings!',
description: "Cool things",
picture: 'http://digital.library.unlv.edu/cgi-bin/getimage.exe?CISOROOT=/sky&CISOPTR=1033&DMX=0&DMY=0&DMWIDTH=256&DMHEIGHT=256&DMROTATE=0&DMSCALE=14.569737441189861',
category_id: architecture.id,
user_id: bob.id,
city: "Vancouver, British Columbia, Canada"

)
