

#Walk This Way  

##Introduction 
This application was created as a way for users to explore and share their neighbourhoods through local landmarks and walks.  

##Purpose 
This application was created for Bitmaker March 2016 cohort final project. 

##Deployment 
This is a simple web project, it can be deployed on any web server or local host. Please see the tool kit and known bugs for further details. 

##Tool Kit 
This project is a Ruby on Rails application, which uses the Google Maps JS API and the Google Cloud Storage for image hosting. Please see the gem file, the assets folder, and the public folder for a fuller list of external resources used. 

##Upcoming Sprints  

We would like to get the following sprints completed:
* AJAX-based like buttons and unlike buttons 
* Twitter sign-in and registration in production environment
** Use Twitter API with websockets / SSE to interact with Twitter dynamically 
* friending or following other users 
* revisions of forms to remove redundancies and potential inconsistencies  
* reconfiguration of database for more effective retrieval of walk data 
* dynamic gallery 
* porting to a mobile app environment 
* real time chat 
* static maps and ability to print directions 
* background jobs to create image or pdf version of static maps for javascript-disabled devices  
* point and click forms 

##Known Bugs 

There are a number of known bugs we would like to fix for the next step. 
* Inconsistencies in migrations in development environment between machines (may require local migration differing from master) 
* Sorcery, External (OAuth) not working in development environment (Heroku) 
* Google maps calls being maxed out with seeding of database and sometimes with file retrieval 
* Edit form causes duplication of waypoints 

##How to Contribute 

In general, we follow the "fork-and-pull" Git workflow.

Fork the repo on GitHub
Clone the project to your own machine
Commit changes to your own branch
Push your work back up to your fork
Submit a Pull request so that we can review your changes
NOTE: Be sure to merge the latest from "upstream" before making a pull request!

Please don't do this: 


[from reddit](http://i.imgur.com/snLplqq.jpg). 



In that spirit, we'd like to acknowledge the following inspirations for this project:
* Jane's Walks 
* Airbnb  
* Google maps 
* the bitmaker community (especially bitmaker staff, and michael. and steven. you know who you are.)


From the team here at WalkthisWay, 

Dinophile, Vickysylooooooo, Tinathientruong, Mokutsu



