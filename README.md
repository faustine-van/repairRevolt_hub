![smalllogo](https://github.com/faustine-van/repairRevolt_hub/assets/125466059/477f14ca-be77-4c60-9c7a-47ca0cfd5550)
# Repair Revolt Hub

Repair Revolt Hub is a web application designed to connect vehicle owners with nearby technicians in their local area.
This platform simplifies the process of finding and contacting skilled technicians, ensuring a quick and reliable solution for vehicle maintenance and repairs. 

## Table of Contents

- [Inspiration](#inspiration)
- [Features](#features)
  - [User Authentication for Technicians](#user-authentication-for-technicians)
  - [Technician profile creation](#technician-profile-creation)
  - [Auto repair service discovery](#auto-repair-service-discovery)
  - [Technician profile creation](#technician-profile-creation)
- [Get started](#get-started)
- [Usage](#usage)
- [Api](#api)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
![home](https://github.com/faustine-van/repairRevolt_hub/assets/125466059/c7b04ac3-8842-46c0-af8a-6fa017756b68)

## Inspiration 
Picture yourself standing alone on the deserted streets, a place where people rarely reside. It was in the midst of this solitude that the inspiration for RepairRevolt struck, born out of a real-life scenario.

On that particular day, faced with a sudden vehicle issue in an area less frequented, the simple task of finding a technician transformed into a time-consuming and daunting process. 

## Features

### User Authentication for Technicians
This feature involves creating a secure system for technicians to authenticate themselves on your platform. Technicians might need to create an account, log in, and manage their profiles. Authentication ensures that only authorized users (technicians, in this case) can access certain features or data.


### Search functionality
This feature involves creating a secure system for technicians to authenticate themselves on your platform. Technicians might need to create an account, log in, and manage their profiles. Authentication ensures that only authorized users (technicians, in this case) can access certain features or data.
![search](https://github.com/faustine-van/repairRevolt_hub/assets/125466059/841c7a9f-0f7e-4b79-94fc-d795ed69d7da)


### Technician profile creation
Technicians should have the ability to create and manage their profiles on the platform. This includes providing details such as their full name, bio, contact information, service offerings, and possibly even uploading a profile picture. A well-crafted profile helps end-users understand the technician's expertise and services.
### Auto repair service discovery
This feature involves showcasing a variety of auto repair services offered by the technicians on your platform. Users should be able to discover and explore the range of services available. This could include services like collision repair, dent repair, tire and wheel services, etc. Each service might have its own details, and users can choose the technicians based on their specific needs.
![create profile](https://github.com/faustine-van/repairRevolt_hub/assets/125466059/e4f4fa72-f83d-489e-9715-33563c4fa510)
![profile](https://github.com/faustine-van/repairRevolt_hub/assets/125466059/c3b6d3a5-651b-4df0-a288-34f2a832a39f)


## Get started

1. Clone the repository.
2. Install project dependencies with
   `pip install -r requirements.txt`.
3. add environment variables in `.env` file.
4. Run project with `python3 -m api.v1.app`

## Workflow of RepairRevolt Hub

### Technician Profile Creation

Technicians can easily sign up on the platform and create detailed profiles. They provide information about their expertise, location, and the range of auto repair services they offer.

### Search Functionality

End-users can efficiently search for technicians in their local area using the platform's search functionality. This allows users to find relevant technicians based on specific criteria.

### Limited Details for Users

End users have the ability to view all details about each technician without the need to create an account. These details may include the technician's name, location, and a brief overview of their expertise.


## Technologies Used

- React.js
- Python with flask
- Mysql

## Api

RepairRevolt Hub's web application leverages an API to facilitate access to technicians' profiles and related functionalities. The API serves as the backbone for retrieving information about registered technicians, enabling users to discover and connect with skilled professionals in the auto repair industry.
all endpoint can be found `api/v1/views` and `api/v1/auth`

### Endpoints
- `/api/v1/technicians`: Retrieve a list of all registered technicians.
- `/api/v1/search_technicians`: Perform a search for technicians based on location or expertise.
- `/api/v1/register`: Retrieve a list of all registered technicians.

## Future Enhancements

- Implementing real-time chat between users and technicians.
- Implementing scheduling appointements users (vechicle owner) and technicians.

More info about this project visit LinkedIn using this link:
 - [Lessons from RepairRevolt Hub Development](https://www.linkedin.com/pulse/lessons-from-repairrevolt-hub-development-muhayemariya-faustine-s2c9f/)

For inquiries, please contact [faustinemuhayemariya44@gmail.com](mailto:faustinemuhayemariya44@gmail.com).

### AUTHOR:
  - [MUHAYEMARIYA Fautsine](https://github.com/faustine-van/AirBnB_clone/edit/master/README.md)
