# Website Project
  As for this project, we build a website for tenants and landords to get and post off-campus housing information 

# Reqirements
* Docker version 19.03.5
* docker-compose version 1.21.0
  
# Installation
* git clone [repository](ist-git@git.uwaterloo.ca:ece651/react_django.git)
* sudo docker-compose up

# Some Common Command
* Run backend and frontend at the same time:  
   sudo docker-compose up
* Run frontend alone:  
  sudo docker-compose run frontend npm start / run
* Run backend alone:  
  sudo docker-compose run backend python manage.py runserver 0.0.0.0:8000 --settings=hello_world.settings.development
* Test backend:  
  sudo docker-compose run backend python manage.py test
* Test frontend:  
  sudo docker-compose run frontend npm test
* Git push branch:  
git push origin branch-name
# Software stack
Our website runs on the following software:  
* Ubuntu
* Docker
* Docker-compose
* Django
* React
* Node.js
* SQLite
