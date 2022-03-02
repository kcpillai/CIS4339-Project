<h1>CIS 4339 Group 14 API Documentation</h1>
<h2>1. Overview</h2>
Group 14’s API is node-based APIs, and all requests are made with the endpoints beginning 
http://localhost:3000/.

<h2>2. Resources</h2>

<h2>2.1. Employees<h2>
  <h3>2.1.1 GET All Employees</h3>
   GET ALL EMPLOYEES: Getting all the employees and their information  
  
  GET http://localhost:3000/employees
  
   Example Response:
   <GET> /employees 200 61.347 ms – 682
  
     
```
[
    {
        "_id": "d38d20f0-99d8-11ec-a586-15e259293eaf",
        "employeeId": 1,
        "employeeName": [
            {
                "lastName": "Smith",
                "firstName": "Kyle",
                "_id": "621ee45c118cc03952373021"
            }
        ],
        "organizationName": "CFC",
        "jobTitle": "Manager",
        "employeeEmail": "ksmith@gmail.com",
        "startDate": "2006-12-12T06:00:00.000Z",
        "endDate": "2020-03-30T05:00:00.000Z",
        "phoneNumber": 8327635294,
        "clients": [
            {
                "clientId": 2,
                "_id": "621ee45c118cc03952373022"
            }
        ],
        "__v": 0
    },
    {
        "_id": "dce833b0-99dd-11ec-99c0-113ecace86eb",
        "employeeId": 5,
        "employeeName": [
            {
                "lastName": "Johnson",
                "firstName": "Luke",
                "_id": "621eeccf8c4976fa26e2771e"
            }
        ],
        "organizationName": "BOL",
        "jobTitle": "HR",
        "employeeEmail": "ljohnson@gmail.com",
        "startDate": "2018-08-22T05:00:00.000Z",
        "endDate": "2021-07-04T05:00:00.000Z",
        "phoneNumber": 7136548345,
        "clients": [
            {
                "clientId": 3,
                "_id": "621eeccf8c4976fa26e2771f"
            }
        ],
        "__v": 0
    }
]
     
```
Where Employee Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| employeeId   | Number   | The employee id number     |
| lastName   | String   | Employee last name     |
| firstName   | String   | Employee first name     |
| organizationName   | String   | The name of organization     |
| jobTitle   | String   | Employee Job title     |
| employeeEmail   | String   | The employees email     |
| startDate   | Date   | When the employee started     |
| EndDate   | Date   | When the employee ended working      |
| phoneNumber   | Number   | The employees phone number     |
| clientId   | Number   | Client ID     |
 
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Url is incorrect       |


  <h3>2.1.2 GET One Employee</h3>
   GET ONE EMPLOYEE: Getting one the employees and their information based on employeeId 
  
  GET http://localhost:3000/employees/:id
  
   Example Response:
   GET /employees/5 200 54.207 ms - 400
     
```
     {
    "_id": "dce833b0-99dd-11ec-99c0-113ecace86eb",
    "employeeId": 5,
    "employeeName": [
        {
            "lastName": "Johnson",
            "firstName": "Luke",
            "_id": "621eeccf8c4976fa26e2771e"
        }
    ],
    "organizationName": "BOL",
    "jobTitle": "HR",
    "employeeEmail": "ljohnson@gmail.com",
    "startDate": "2018-08-22T05:00:00.000Z",
    "endDate": "2021-07-04T05:00:00.000Z",
    "phoneNumber": 7136548345,
    "clients": [
        {
            "clientId": 3,
            "_id": "621eeccf8c4976fa26e2771f"
        }
    ],
    "__v": 0
}

```
Where Employee Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| employeeId   | Number   | The employee id number     |
| lastName   | String   | Employee last name     |
| firstName   | String   | Employee first name     |
| organizationName   | String   | The name of organization     |
| jobTitle   | String   | Employee Job title     |
| employeeEmail   | String   | The employees email     |
| startDate   | Date   | When the employee started     |
| EndDate   | Date   | When the employee ended working      |
| phoneNumber   | Number   | The employees phone number     |
| clientId   | Number   | Client ID     |
 
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Employee does not exist       |
  
   
<h3>2.1.3 POST Adding One Employee</h3>
    Adding one  employee and their information to the employees collection 
  
  POST http://localhost:3000/employees
  
     
   Example Body:
     
    
     {
    "employeeId":"5",
    "employeeName": [{
    "lastName":"Johnson",
    "firstName":"Luke"
    }],
    "organizationName": "BOL",
    "jobTitle": "HR",
    "employeeEmail": "ljohnson@gmail.com",
    "startDate": "08-22-2018",
    "endDate": "07-04-2021",
    "phoneNumber": "7136548345",
    "clients":[{
    "clientId":"3"
    }]
     }
     
   Example Response:
     POST /employees 200 66.054 ms – 44
     
     Worker information is added to the database.
     
     
Where Employee Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| employeeId   | Number   | The employee id number     |
| lastName   | String   | Employee last name     |
| firstName   | String   | Employee first name     |
| organizationName   | String   | The name of organization     |
| jobTitle   | String   | Employee Job title     |
| employeeEmail   | String   | The employees email     |
| startDate   | Date   | When the employee started     |
| EndDate   | Date   | When the employee ended working      |
| phoneNumber   | Number   | The employees phone number     |
| clientId   | Number   | Client ID     |
 
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The URL is incorrect      |

 
<h3>2.1.4 PUT Updating One Employee</h3>
    Updating one employee and their information to the employees collection 
  
  PUT http://localhost:3000/employees/:id
  
     
   Example Body:
     
     {
    "employeeName": [{
    "lastName":"Paul ",
    "firstName":"Tom"
    }]
     }
     
   Example Response:
    PUT /employees/5 200 64.628 ms - 31     
     
     Employee is edited via PUT.
     
Where Employee Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| employeeId   | Number   | The employee id number     |
| lastName   | String   | Employee last name     |
| firstName   | String   | Employee first name     |
| organizationName   | String   | The name of organization     |
| jobTitle   | String   | Employee Job title     |
| employeeEmail   | String   | The employees email     |
| startDate   | Date   | When the employee started     |
| EndDate   | Date   | When the employee ended working      |
| phoneNumber   | Number   | The employees phone number     |
| clientId   | Number   | Client ID     |
 
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | Employee does not exist      |
     
     
<h3>2.1.5 DELETE Deleteing One Employee</h3>
    Deleing one employee and their information from the employees collection 
  
  DELETE http://localhost:3000/employees/:id
     
   Example Response:
    DELETE /employees/5 200 64.628 ms - 31     
     
     {
        "msg": {
             "deletedCount":1
        }
     }
     
 The employee Id is what is used to select the employee that will be deleted
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| employeeId   | Number   | The employee id number     |
  
     
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | Employee does not exist      |

     
  
<h2>2.2 Events<h2>
  
  <h3>2.2.1 GET All Events</h3>
   GET ALL EMPLOYEES: Getting all the employees and their information  
  
  GET http://localhost:3000/events
  
   Example Response:
   GET /events 200 45.017 ms - 539
  
  ```
[
    {
        "_id": "1d6a7490-99e1-11ec-99c0-113ecace86eb",
        "eventsId": 1,
        "program": "Unknown",
        "eventDescription": "A food dive in Houston",
        "eventInfo": [],
        "__v": 0
    },
    {
        "_id": "4b64e6f0-9a5e-11ec-80fa-eb21938b5602",
        "eventsId": 7,
        "program": "Unknown",
        "eventDescription": "Clothing donation drive",
        "eventInfo": [],
        "__v": 0
    },
]
  ```
  
Where Events Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| eventsID   | Number   | The events id number     |
| program   | String   | The program name     |
| eventDescription   | String   | A description of the event    |
| address   | String   | The events street address    |
| city   | String   | The city the event is located    |
| state   | String   | The state the event is located     |
| zipcode   | Number   | The zipcode the event is located     |
  
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | URL is inccorrect     |
  

 <h3>2.2.2 GET One Event</h3>
   GET ONE Event: Getting one the Events and their information based on eventsId 
  
  GET http://localhost:3000/events/:id
  
   Example Response:
   GET /events/1 200 53.890 ms - 146
     
```
{
    "_id": "1d6a7490-99e1-11ec-99c0-113ecace86eb",
    "eventsId": 1,
    "program": "Unknown",
    "eventDescription": "A food dive in Houston",
    "eventInfo": [],
    "__v": 0
}
  ```
  
 Where Events Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| eventsID   | Number   | The events id number     |
| program   | String   | The program name     |
| eventDescription   | String   | A description of the event    |
| address   | String   | The events street address    |
| city   | String   | The city the event is located    |
| state   | String   | The state the event is located     |
| zipcode   | Number   | The zipcode the event is located     |
  
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | Event does not exist     |
  
  
  
  <h3>2.2.3 POST Adding One Event</h3>
    Adding one event and their information to the events collection 
  
  POST http://localhost:3000/events
  
     
   Example Body:
     
    {
    "eventsId": 7,
    "program": "Unknown",
    "eventDescription": "Clothing donation drive",
    "eventDate":"2022-04-05",
    "address": "8134 Birdsing Lane",
    "city": "Houston",
    "state": "Texas",
    "zipcode":77004
}

Example Response:
    POST /events 200 48.728 ms – 36    
  
     Events info is added to the database.
  
Where Events Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| eventsID   | Number   | The events id number     |
| program   | String   | The program name     |
| eventDescription   | String   | A description of the event    |
| address   | String   | The events street address    |
| city   | String   | The city the event is located    |
| state   | String   | The state the event is located     |
| zipcode   | Number   | The zipcode the event is located     |
  
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The URL is incorrect   |
  
  
<h3>2.2.4 PUT Updating One Event</h3>
    Updating one event and their information to the events collection 
  
  PUT http://localhost:3000/events/:id
  
     
 Example Body:
  ```
 {
    "program": "Unknown",
    "eventDescription": "Food donation drive",
    "eventDate":"2022-06-15",
    "address": "2352 Hollows Drive"
}
  
```
  
  
   Example Response:
    PUT /events/5 200 64.628 ms - 31     
     
     Events is edited via PUT.
  
 Where Events Object is
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| eventsID   | Number   | The events id number     |
| program   | String   | The program name     |
| eventDescription   | String   | A description of the event    |
| address   | String   | The events street address    |
| city   | String   | The city the event is located    |
| state   | String   | The state the event is located     |
| zipcode   | Number   | The zipcode the event is located     |
  
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | Event does not exist     |
  
  
<h3>2.2.5 DELETE Deleteing One Event</h3>
    Deleing one event and their information from the events collection 
  
  DELETE http://localhost:3000/events/:id
     
   Example Response:
    DELETE /events/5 200 55.161 ms - 26    
     
     {
        "msg": {
             "deletedCount":1
        }
     }
     
 The event Id is what is used to select the event that will be deleted
     
| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| eventsId   | Number   | The events id number     |
  
     
Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | events does not exist      |
