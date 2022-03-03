<h1>CIS 4339 Group 14 API Documentation</h1>
<h2>1. Overview and Setup</h2>
Group 14’s API is node-based APIs, and all requests are made with the endpoints beginning 
http://localhost:3000/.

To start up local server and begin connection to database, first install the necessasry packages from the package.json file using the following command in your terminal on VS Code: 

```
npm install.
```

Then, to run the server using Nodemon, use the following command on your terminal:

```
npm run devStart
```

The following string is the connection string to our cloud Mongo database:

```
MONGO_URL = mongodb+srv://group14:cis4339@projectcluster.kd8kw.mongodb.net/4339-Project-1?retryWrites=true&w=majority
```


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
"\_id": "1d6a7490-99e1-11ec-99c0-113ecace86eb",
"eventsId": 1,
"program": "Unknown",
"eventDescription": "A food dive in Houston",
"eventInfo": [],
"**v": 0
},
{
"\_id": "4b64e6f0-9a5e-11ec-80fa-eb21938b5602",
"eventsId": 7,
"program": "Unknown",
"eventDescription": "Clothing donation drive",
"eventInfo": [],
"**v": 0
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
"\_id": "1d6a7490-99e1-11ec-99c0-113ecace86eb",
"eventsId": 1,
"program": "Unknown",
"eventDescription": "A food dive in Houston",
"eventInfo": [],
"\_\_v": 0
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



<h2>2.3 Organizations<h2>
  <h3>2.3.1 GET All Organizations</h3>
   GET ALL Organizations: Getting all the Organizations and their information

  GET http://localhost:3000/organizations

   Example Response:

  GET /organizations 200 59.269 ms - 536

```

[
{
"\_id": "e9a91bd0-99e4-11ec-99c0-113ecace86eb",
"organizationNameId": "22",
"organizationDesc": "Food Donation Organization",
"organizationAddress": [
{
"address1": "2310 Passing Lane",
"city": "Houston",
"state": "Texas",
"zipcode": 770044,
"_id": "621ef8a38c4976fa26e2773a"
}
],
"**v": 0
},
{
"\_id": "fbf31d90-99e4-11ec-99c0-113ecace86eb",
"organizationNameId": "12",
"organizationDesc": "Homeless Relocation Help",
"organizationAddress": [
{
"address1": "2684 Oxford Loop",
"city": "Houston",
"state": "Texas",
"zipcode": 770044,
"_id": "621ef8c28c4976fa26e2773c"
}
],
"**v": 0
}
]

```

Where Organizations Object is

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| organizationNameId   | Number   | The events id number     |
| organizationDesc   | String   | The program name     |
| address1   | String   | The events street address    |
| address2   | String   | The events street address 2 if needed   |
| city   | String   | The city the organization is located    |
| state   | String   | The state the organization is located     |
| zipcode   | Number   | The zipcode the organization is located     |


Possible errors

| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Url is incorrect       |



<h3>2.3.2 GET One Organization</h3>
 GET ONE Organization: Getting one the Organizations and their information based on organizationNameId

GET http://localhost:3000/organizations/:id

 Example Response:
 GET /organizations/12 200 58.576 ms - 265

```

{
"\_id": "fbf31d90-99e4-11ec-99c0-113ecace86eb",
"organizationNameId": "12",
"organizationDesc": "Homeless Relocation Help",
"organizationAddress": [
{
"address1": "2684 Oxford Loop",
"city": "Houston",
"state": "Texas",
"zipcode": 770044,
"_id": "621ef8c28c4976fa26e2773c"
}
],
"\_\_v": 0
}

```

Where Organizations Object is

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| organizationNameId   | Number   | The events id number     |
| organizationDesc   | String   | The program name     |
| address1   | String   | The events street address    |
| address2   | String   | The events street address 2 if needed   |
| city   | String   | The city the organization is located    |
| state   | String   | The state the organization is located     |
| zipcode   | Number   | The zipcode the organization is located     |


Possible errors

| Error Code       | Description     |
| :---           |          ---: |
| 404      | Organization does not exist       |



<h3>2.3.3 POST Adding One Organization</h3>
  Adding one event and their information to the Organizations collection

POST http://localhost:3000/organizations


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
POST /organizations 200 57.730 ms – 51

   Organizations info is added to the database.

Where Organizations Object is

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| organizationNameId   | Number   | The events id number     |
| organizationDesc   | String   | The program name     |
| address1   | String   | The events street address    |
| address2   | String   | The events street address 2 if needed   |
| city   | String   | The city the organization is located    |
| state   | String   | The state the organization is located     |
| zipcode   | Number   | The zipcode the organization is located     |


Possible errors

| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Url is incorrect       |


<h3>2.3.4 PUT Updating One Organization</h3>
  Updating one Organization and their information to the Organizations collection

PUT http://localhost:3000/organizations/:id


Example Body:
```

{
"organizationNameId": "47",
"organizationDesc":"Test",
"organizationAddress": [{
"address1": "4444 Testing Lane",
"city":"Houston",
"state":"Texas",
"zipcode": 770044
}]
}

```


   Example Response:
    PUT /organizations/47 200 53.450 ms - 265

     Events is edited via PUT.

  Where Organizations Object is

 | Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | auto generated uuid   |
| organizationNameId   | Number   | The events id number     |
| organizationDesc   | String   | The program name     |
| address1   | String   | The events street address    |
| address2   | String   | The events street address 2 if needed   |
| city   | String   | The city the organization is located    |
| state   | String   | The state the organization is located     |
| zipcode   | Number   | The zipcode the organization is located     |


Possible errors

| Error Code       | Description     |
| :---           |          ---: |
| 404      | Organization does not exist     |

<h3>2.3.5 DELETE Deleteing One Organization</h3>
    Deleing one organization and their information from the organizations collection

  DELETE http://localhost:3000/organizations/:id

   Example Response:
    DELETE /organizations/47 200 53.890 ms - 146

     {
        "msg": {
             "deletedCount":1
        }
     }

 The organizationNameId is what is used to select the organization that will be deleted

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| organizationNameId   | Number   | The organizations id number     |


Possible errors

| Error Code       | Description     |
| :---           |          ---: |
| 404      | organizations does not exist      |


## 2.4. Clients

### 2.4.1 GET All Clients

## GET ALL Clients: Getting All Client Collection

GET [http://localhost:3000/clients](http://localhost:3000/employees)

Example Response:

GET /clients 200 64.125 ms – 1723

```

[
{
"\_id": "62145a568b53b1352a47665f",
"clientID": 123,
"clientName": [
{
"_id": "621fad6e295c1536e105a751",
"firstName": "First Name",
"middleName": "Middle Name",
"lastName": "Last Name"
}
],
"clientDemographics": [
{
"_id": "621fad6e295c1536e105a752",
"gender": "Gender",
"age": 30,
"birthday": "1985-03-12",
"raceEthnicity": "Hispanic",
"zipCode": "12345",
"is65orOlder": true,
"isVeteran": false
}
],
"phoneNumber": "1234567890",
"driverLicense": "1234567",
"isNeedSupport": true,
"clientVaccineInfo": "clientVaccineInfoID",
"dateTime": "2010-01-12",
"organization": "organizationNameID",
"employeeID": "employeeID",
"ssn": "1234567890"
},
{
"\_id": "a9db85f0-99d6-11ec-9fb4-f31fb6cb6866",
"clientID": 1,
"clientName": [
{
"firstName": "Debra",
"middleName": "Jones",
"lastName": "Smith",
"_id": "621ee0bbb728f6a33a71d4ac"
}
],
"clientDemographics": [
{
"gender": "female",
"age": 20,
"birthday": "1995-02-02",
"raceEthnicity": "Hispanic",
"zipCode": "77099",
"numChildren": "0",
"is65orOlder": false,
"isVeteran": false,
"_id": "621ee0bbb728f6a33a71d4ad"
}
],
"ssn": "123-45-6789",
"phoneNumber": "123-456-7890",
"driverLicense": "123456789",
"isNeedSupport": true,
"clientVaccineInfo": "null",
"dateTime": "null",
"organization": "Cool Org.",
"employeeID": "12345",
"**v": 0
},
{
"\_id": "d0bad900-99d6-11ec-9fb4-f31fb6cb6866",
"clientID": 2,
"clientName": [
{
"firstName": "Susan",
"middleName": "Jay",
"lastName": "Hingeberry",
"_id": "621f1d8c3a00830b5eae3802"
}
],
"clientDemographics": [
{
"gender": "female",
"age": 40,
"birthday": "1995-02-02",
"raceEthnicity": "Hispanic",
"zipCode": "77099",
"numChildren": "0",
"is65orOlder": false,
"isVeteran": false,
"_id": "621ee0fcb728f6a33a71d4b5"
}
],
"ssn": "123-45-6789",
"phoneNumber": "123-456-7890",
"driverLicense": "123456789",
"isNeedSupport": false,
"clientVaccineInfo": "null",
"dateTime": "null",
"organization": "Cool Org.",
"employeeID": "12345",
"**v": 0
},
{
"\_id": "6b1fcc70-9a50-11ec-9558-dfd4acf3ad5f",
"clientID": 999,
"clientName": [
{
"firstName": "Debra",
"middleName": "Jones",
"lastName": "Smith",
"_id": "621fad00295c1536e105a749"
}
],
"clientDemographics": [
{
"gender": "female",
"age": 45,
"birthday": "1995-02-02",
"raceEthnicity": "Hispanic",
"zipCode": "77099",
"numChildren": "0",
"is65orOlder": false,
"isVeteran": false,
"_id": "621fad00295c1536e105a74a"
}
],
"ssn": "123-45-6789",
"phoneNumber": "123-456-7890",
"driverLicense": "123456789",
"isNeedSupport": true,
"clientVaccineInfo": "null",
"dateTime": "null",
"organization": "Cool Org.",
"employeeID": "12345",
"\_\_v": 0
}
]

```

With the following fields:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| clientName | Object Array | Contains fields related to client’s full name. |
| firstName | String | The client’s first name. |
| middleName | String | The client’s middle name. |
| lastName | String | The client’s last name. |
| clientDemographics | Object Array | Contains fields related to the client’s Demographics. |
| gender | String | The client’s gender. |
| Birthday | String | The client’s date of birth. |
| raceEthnicity | String | The client’s race or ethnicity. |
| zipCode | String | The client’s residential zip code. |
| numChildren | String | The number of children claimed by the client. |
| Is65orOlder | Boolean | Specifies if the client is age 65+. |
| isVeteran | Boolean | Specifies if the client is a veteran. |
| Ssn | String | The client’s 9 digit social security number, formatted xxx-xx-xxxx. |
| phoneNumber | String | Client’s preferred phone number. |
| driverLicense | String | Client’s driver’s license number. |
| isNeedSupport | String | Specifies if Client needs additional support. |
| clientVaccineInfo | String | Stores information related to client’s vaccination information, such as their up-to-date status. |
| dateTime | String | The timestamp that the client joined an organization. |
| organization | String | The client’s first organization that they made contact. |
| employeeID | String | The unique identification number for the worker that first made contact with the client. |

Possible Errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.4.2 GET One Client

## GET ONE Client: Getting One Client With clientID

GET [http://localhost:3000/clients/:id](http://localhost:3000/employees/:id)

**Example: Getting documents where clientID=2:**

GET [http://localhost:3000/clients/2](http://localhost:3000/employees/:id)

Example Response:

GET /clients/2 200 56.787 ms - 573

```

{
"\_id": "d0bad900-99d6-11ec-9fb4-f31fb6cb6866",
"clientID": 2,
"clientName": [
{
"firstName": "Susan",
"middleName": "Jay",
"lastName": "Hingeberry",
"_id": "621f1d8c3a00830b5eae3802"
}
],
"clientDemographics": [
{
"gender": "female",
"age": 40,
"birthday": "1995-02-02",
"raceEthnicity": "Hispanic",
"zipCode": "77099",
"numChildren": "0",
"is65orOlder": false,
"isVeteran": false,
"_id": "621ee0fcb728f6a33a71d4b5"
}
],
"ssn": "123-45-6789",
"phoneNumber": "123-456-7890",
"driverLicense": "123456789",
"isNeedSupport": false,
"clientVaccineInfo": "null",
"dateTime": "null",
"organization": "Cool Org.",
"employeeID": "12345",
"\_\_v": 0
}

```

Where Client Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| clientName | Object Array | Contains fields related to client’s full name. |
| firstName | String | The client’s first name. |
| middleName | String | The client’s middle name. |
| lastName | String | The client’s last name. |
| clientDemographics | Object Array | Contains fields related to the client’s Demographics. |
| gender | String | The client’s gender. |
| Birthday | String | The client’s date of birth. |
| raceEthnicity | String | The client’s race or ethnicity. |
| zipCode | String | The client’s residential zip code. |
| numChildren | String | The number of children claimed by the client. |
| Is65orOlder | Boolean | Specifies if the client is age 65+. |
| isVeteran | Boolean | Specifies if the client is a veteran. |
| Ssn | String | The client’s 9 digit social security number, formatted xxx-xx-xxxx. |
| phoneNumber | String | Client’s preferred phone number. |
| driverLicense | String | Client’s driver’s license number. |
| isNeedSupport | String | Specifies if Client needs additional support. |
| clientVaccineInfo | String | Stores information related to client’s vaccination information, such as their up-to-date status. |
| dateTime | String | The timestamp that the client joined an organization. |
| organization | String | The client’s first organization that they made contact. |
| employeeID | String | The unique identification number for the worker that first made contact with the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.4.3 POST Adding One Client

## Inserting New Client Document

POST [http://localhost:3000/clients](http://localhost:3000/employees)

Example Body:

```

{
"clientID":"999",
"clientName": [{
"firstName":"Debra",
"middleName":"Jones",
"lastName":"Smith"
}],
"clientDemographics": [{
"gender":"female",
"age": 45,
"birthday":"1995-02-02",
"raceEthnicity": "Hispanic",
"zipCode":"77099",
"numChildren":"0",
"is65orOlder":0,
"isVeteran":0
}],
"ssn":"123-45-6789",
"phoneNumber":"123-456-7890",
"driverLicense":"123456789",
"isNeedSupport":1,
"clientVaccineInfo":"null",
"dateTime":"null",
"organization":"Cool Org.",
"employeeID":"12345"
}

```

Example Response:

POST /clients 200 94.042 ms - 50

```

new clients record added to the database via POST.

```

Where Client Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| clientName | Object Array | Contains fields related to client’s full name. |
| firstName | String | The client’s first name. |
| middleName | String | The client’s middle name. |
| lastName | String | The client’s last name. |
| clientDemographics | Object Array | Contains fields related to the client’s Demographics. |
| gender | String | The client’s gender. |
| Birthday | String | The client’s date of birth. |
| raceEthnicity | String | The client’s race or ethnicity. |
| zipCode | String | The client’s residential zip code. |
| numChildren | String | The number of children claimed by the client. |
| Is65orOlder | Boolean | Specifies if the client is age 65+. |
| isVeteran | Boolean | Specifies if the client is a veteran. |
| Ssn | String | The client’s 9 digit social security number, formatted xxx-xx-xxxx. |
| phoneNumber | String | Client’s preferred phone number. |
| driverLicense | String | Client’s driver’s license number. |
| isNeedSupport | String | Specifies if Client needs additional support. |
| clientVaccineInfo | String | Stores information related to client’s vaccination information, such as their up-to-date status. |
| dateTime | String | The timestamp that the client joined an organization. |
| organization | String | The client’s first organization that they made contact. |
| employeeID | String | The unique identification number for the worker that first made contact with the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.4.4 PUT Updating Existing Client

## Updating one Client in Clients Collection with clientID

PUT [http://localhost:3000/clients/:id](http://localhost:3000/employees/:id)

Example Input:

Changing "isNeedSupport" to false in document where ClientID=2:

PUT http://localhost:3000/clients/2

Example Body:

```

{
"isNeedSupport": false
}

```

Example Response:

PUT /clients/2 200 203.591 ms - 32

```

clients record is edited via PUT

```

Where Client Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| clientName | Object Array | Contains fields related to client’s full name. |
| firstName | String | The client’s first name. |
| middleName | String | The client’s middle name. |
| lastName | String | The client’s last name. |
| clientDemographics | Object Array | Contains fields related to the client’s Demographics. |
| gender | String | The client’s gender. |
| Birthday | String | The client’s date of birth. |
| raceEthnicity | String | The client’s race or ethnicity. |
| zipCode | String | The client’s residential zip code. |
| numChildren | String | The number of children claimed by the client. |
| Is65orOlder | Boolean | Specifies if the client is age 65+. |
| isVeteran | Boolean | Specifies if the client is a veteran. |
| Ssn | String | The client’s 9 digit social security number, formatted xxx-xx-xxxx. |
| phoneNumber | String | Client’s preferred phone number. |
| driverLicense | String | Client’s driver’s license number. |
| isNeedSupport | String | Specifies if Client needs additional support. |
| clientVaccineInfo | String | Stores information related to client’s vaccination information, such as their up-to-date status. |
| dateTime | String | The timestamp that the client joined an organization. |
| organization | String | The client’s first organization that they made contact. |
| employeeID | String | The unique identification number for the worker that first made contact with the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot PUT / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.4.5 DELETE Deleting One Client

## Deleting one Client and their information from the Clients collection

DELETE [http://localhost:3000/clients/:id]

Example Input: deleting client where clientID=5:
 [http://localhost:3000/clients/5]

Example Response:
DELETE /clients/5 200 64.628 ms - 31

```

{
"msg": {
"deletedCount":1
}
}

```

The ClientID is what is used to select the Client that will be deleted:

| Field | Type | Description |
| --- | --- | --- |
| clientID | Number | Unique identifier for the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot DELETE / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

## 2.5. Families
Family members are linked by the clientID of the client that they are related to.

### 2.5.1 GET All Families

## GET ALL Families: Getting Entire Family Collection

Family members are stored under their relative’s ID, the client ID.

GET [http://localhost:3000/families](http://localhost:3000/employees)

Example Response:

GET /families 200 77.749 ms - 817

```

[
{
"\_id": "b3e190b0-9915-11ec-9baa-455c9077d07c",
"clientID": 1,
"familyMember": [
{
"occupationOrGrade": "Contract",
"_id": "621edc46f15cd59cae7eba4e"
}
],
"**v": 0
},
{
"\_id": "12410410-99d4-11ec-86bc-7f149b464e6c",
"clientID": 2,
"familyMember": [
{
"lastName": "Smith2",
"firstName": "Johnny2",
"gender": "male",
"birthday": "1995-01-01",
"age": 20,
"relation": "cousin",
"race": "German",
"pregnant": false,
"whereWorkOrStudy": "Great Company",
"occupationOrGrade": "Contract",
"_id": "621edd39f15cd59cae7eba66"
}
],
"**v": 0
},
{
"\_id": "85240f60-99eb-11ec-b04c-93a3a0763b6e",
"clientID": 999,
"familyMember": [
{
"lastName": "Smith",
"firstName": "Johnny",
"gender": "male",
"birthday": "1995-01-01",
"age": 40,
"relation": "father",
"race": "Hispanic",
"pregnant": false,
"whereWorkOrStudy": "Cool Company",
"occupationOrGrade": "Field Worker",
"_id": "621f03b93a00830b5eae37c9"
}
],
"\_\_v": 0
}
]

```

With the following fields:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| familyMember | String | Object array containing demographic information of the family member. |
| firstName | String | The family member's first name. |
| gender | String | The family member's gender. |
| birthday | String | The family member's date of birth. |
| age | Number | The family member's age. |
| relation | String | The family member's relation to the client. |
| race | String | The family member's race/ethnicity. |
| pregnant | Boolean | Stores a Boolean value that indicates if the family member is pregnant. |
| whereWorkorStudy | String | The family member's current location of occupation. |
| occupationOrGrade | String | The family member's job title or current grade earned in education. |

Possible Errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.5.2 GET One Family Document

## GET ONE Family With clientID

GET [http://localhost:3000/families/:id](http://localhost:3000/employees/:id)

**Example: Getting documents where clientID=2:**

GET [http://localhost:3000/families/2](http://localhost:3000/employees/:id)

Example Response:

GET /families/2 200 62.989 ms - 329

```

{
"\_id": "12410410-99d4-11ec-86bc-7f149b464e6c",
"clientID": 2,
"familyMember": [
{
"lastName": "Smith2",
"firstName": "Johnny2",
"gender": "male",
"birthday": "1995-01-01",
"age": 20,
"relation": "cousin",
"race": "German",
"pregnant": false,
"whereWorkOrStudy": "Great Company",
"occupationOrGrade": "Contract",
"_id": "621edd39f15cd59cae7eba66"
}
],
"\_\_v": 0
}

```

Where Family Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| familyMember | String | Object array containing demographic information of the family member. |
| firstName | String | The family member's first name. |
| gender | String | The family member's gender. |
| birthday | String | The family member's date of birth. |
| age | Number | The family member's age. |
| relation | String | The family member's relation to the client. |
| race | String | The family member's race/ethnicity. |
| pregnant | Boolean | Stores a Boolean value that indicates if the family member is pregnant. |
| whereWorkorStudy | String | The family member's current location of occupation. |
| occupationOrGrade | String | The family member's job title or current grade earned in education. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.5.3 POST Adding One Family Member

## Inserting New Family Document

POST [http://localhost:3000/families](http://localhost:3000/employees)

Example Body:

```

{
"clientID":"888",
"familyMember": [{
"lastName":"Smith",
"firstName":"Johnny",
"gender":"male",
"birthday":"1995-01-01",
"age": 40,
"relation":"father",
"race":"Hispanic",
"pregnant":"0",
"whereWorkOrStudy":"Cool Company",
"occupationOrGrade":"Field Worker"
}]
}

```

Example Response:

POST /families 200 75.876 ms - 51

```

new families record added to the database via POST.

```

Where Family Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| familyMember | String | Object array containing demographic information of the family member. |
| firstName | String | The family member's first name. |
| gender | String | The family member's gender. |
| birthday | String | The family member's date of birth. |
| age | Number | The family member's age. |
| relation | String | The family member's relation to the client. |
| race | String | The family member's race/ethnicity. |
| pregnant | Boolean | Stores a Boolean value that indicates if the family member is pregnant. |
| whereWorkorStudy | String | The family member's current location of occupation. |
| occupationOrGrade | String | The family member's job title or current grade earned in education. |

Possible errors

| Error Code | Description |
| --- | --- |
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.5.4 PUT - Updating Existing Family Member

## Updating one Family in Families Collection with clientiD

PUT [http://localhost:3000/families/:id](http://localhost:3000/employees/:id)

Example Input:

Editing a Document with clientID = 888:

PUT [http://localhost:3000/families/888](http://localhost:3000/clients/2)

Example Body:

All data for a family member is embedded in an object array. For this reason, we must include all fields in familyMember, regardless if it is the desired field to be edited. Including only desired field will result in the entire embedded data to be entirely replaced by the edited field, so it is important to include all embedded fields in your BODY.

```

{
"familyMember": [{
"lastName":"Smith2",
"firstName":"Johnny2",
"gender":"male",
"birthday":"1995-01-01",
"age": 20,
"relation":"cousin",
"race":"German",
"pregnant":"0",
"whereWorkOrStudy":"Great Company",
"occupationOrGrade":"Contract"
}]
}

```

Example Response:

PUT /families/888 200 66.971 ms - 33

```

families record is edited via PUT

```

Where Family Object is

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| familyMember | String | Object array containing demographic information of the family member. |
| firstName | String | The family member's first name. |
| gender | String | The family member's gender. |
| birthday | String | The family member's date of birth. |
| age | Number | The family member's age. |
| relation | String | The family member's relation to the client. |
| race | String | The family member's race/ethnicity. |
| pregnant | Boolean | Stores a Boolean value that indicates if the family member is pregnant. |
| whereWorkorStudy | String | The family member's current location of occupation. |
| occupationOrGrade | String | The family member's job title or current grade earned in education. |

Possible errors

| Error Code | Description |
| --- | --- |
| 404 Cannot PUT / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.5.5 DELETE Deleting One Family Document

## Deleting one Family Document by clientID

DELETE [http://localhost:3000/families/:id](http://localhost:3000/employees/:id)

**Example: Deleting a families document where clientID=999:**

DEL http://localhost:3000/families/999

**Example Response:**

DELETE /families/999 200 65.163 ms - 26

```

{
"msg": {
"deletedCount":1
}
}

```

The ClientID is what is used to select the family member that will be deleted:

| Field | Type | Description |
| --- | --- | --- |
| clientID | Number | Unique identifier for the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot DELETE/ | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |


## 2.6. Education

### 2.6.1 GET All Education

## GET ALL Education: Getting All Education Collection

Fetch all Documents from Education Collection:

GET [http://localhost:3000/education](http://localhost:3000/employees)

Example Response:

GET /education 200 69.874 ms - 778

```

[
{
"_id": "62144bb31923d7267b84ea99",
"clientID": 123,
"hasAttended": true,
"school": "University of Houston",
"lastGrade": "12",
"hasGraduated": true,
"degree": "Bachelors",
"certification": "Cybersecurity"
},
{
"_id": "4dd03e80-9996-11ec-b10e-f93ccc92a66d",
"clientID": 123,
"hasAttended": true,
"school": "Program",
"lastGrade": "3.7",
"hasGraduated": true,
"degree": "B.S in Biology",
"certification": "none",
"__v": 0
},
{
"_id": "f211ebe0-99d4-11ec-86bc-7f149b464e6c",
"clientID": 1,
"hasAttended": true,
"school": "Program",
"lastGrade": "3.7",
"hasGraduated": true,
"degree": "B.S in Biology",
"certification": "none",
"__v": 0
},
{
"_id": "f4783d80-99d4-11ec-86bc-7f149b464e6c",
"clientID": 2,
"hasAttended": true,
"school": "Program",
"lastGrade": "3.7",
"hasGraduated": true,
"degree": "B.S in Biology",
"certification": "Wildlife",
"__v": 0
}
]

```

With the following fields:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| hasAttended | Boolean | Indicates whether the client has attended school or not. |
| School | String | The school the client has attended most recently. |
| lastGrade | String | The client's current grade earned in education. |
| hasGraduated | Boolean | Indicates whether the client has graduated. |
| Degree | String | The degree earned by the client. |
| Certification | String | The certification earned by the client. |

Possible Errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.6.2 GET One Education Document

## GET ONE Education Document With clientID

GET [http://localhost:3000/education/:id](http://localhost:3000/employees/:id)

**Example: Getting documents where clientID=2:**

GET [http://localhost:3000/education/2](http://localhost:3000/employees/:id)

Example Response:

GET /education/2 200 60.671 ms - 196

```

{
"\_id": "f4783d80-99d4-11ec-86bc-7f149b464e6c",
"clientID": 2,
"hasAttended": true,
"school": "Program",
"lastGrade": "3.7",
"hasGraduated": true,
"degree": "B.S in Biology",
"certification": "Wildlife",
"\_\_v": 0
}

```

Where Education Document is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| hasAttended | Boolean | Indicates whether the client has attended school or not. |
| School | String | The school the client has attended most recently. |
| lastGrade | String | The client's current grade earned in education. |
| hasGraduated | Boolean | Indicates whether the client has graduated. |
| Degree | String | The degree earned by the client. |
| Certification | String | The certification earned by the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.6.3 POST Adding One Education Document

## Inserting New Education Document

POST [http://localhost:3000/education](http://localhost:3000/employees)

Example Body:

```

{
"clientID":"888",
"hasAttended": 1,
"school":"Program",
"lastGrade":"3.7",
"hasGraduated":1,
"degree":"B.S in Biology",
"certification": "none"
}

```

Example Response:

POST /education 200 108.194 ms - 52

```

new education record added to the database via POST.

```

Where Education Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| hasAttended | Boolean | Indicates whether the client has attended school or not. |
| School | String | The school the client has attended most recently. |
| lastGrade | String | The client's current grade earned in education. |
| hasGraduated | Boolean | Indicates whether the client has graduated. |
| Degree | String | The degree earned by the client. |
| Certification | String | The certification earned by the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.6.4 PUT - Updating Existing Education Document

## Updating one Education in Education Collection with clientiD

PUT [http://localhost:3000/education/:id](http://localhost:3000/employees/:id)

Example Input:

Editing a Document with clientID = 888:

PUT [http://localhost:3000/education/888](http://localhost:3000/clients/2)

Example Body:

```

{
"certification":"Wildlife"
}

```

Example Response:

PUT /education/888 200 66.660 ms - 34

```

education record is edited via PUT

```

Where Education Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client that the family member belongs to. |
| hasAttended | Boolean | Indicates whether the client has attended school or not. |
| School | String | The school the client has attended most recently. |
| lastGrade | String | The client's current grade earned in education. |
| hasGraduated | Boolean | Indicates whether the client has graduated. |
| Degree | String | The degree earned by the client. |
| Certification | String | The certification earned by the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot PUT / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.6.5 DELETE Deleting One Education Document

## Deleting one Education Document by clientID

DELETE [http://localhost:3000/education/:id](http://localhost:3000/employees/:id)

**Example: Deleting a education document with clientID=999:**

DEL [http://localhost:3000/education/999](http://localhost:3000/families/999)

**Example Response:**

DELETE /education/999 200 65.163 ms - 26

```

{
"msg": {
"deletedCount":1
}
}

```

The ClientID is what is used to select the Client that will be deleted:

| Field | Type | Description |
| --- | --- | --- |
| clientID | Number | Unique identifier for the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot DELETE/ | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

## 2.7. Health

### 2.7.1 GET All Health

## GET ALL Health: Getting All Health Collection

Fetch all Documents from Health Collection:

GET [http://localhost:3000/health](http://localhost:3000/employees)

Example Response:

GET /health 200 63.644 ms - 407

```

[
{
"_id": "4232cb50-99dd-11ec-a6d2-bba274c57248",
"clientID": 1,
"hasHealthInsurance": true,
"healthInsuranceProgram": "Program",
"hasFoodStamps": true,
"foodStampsAmount": 1000,
"foodStampsReason": "in need",
"__v": 0
},
{
"_id": "44ab4560-99dd-11ec-a6d2-bba274c57248",
"clientID": 2,
"hasHealthInsurance": true,
"healthInsuranceProgram": "Program",
"hasFoodStamps": true,
"foodStampsAmount": 1000,
"foodStampsReason": "in need",
"__v": 0
}
]

```

With the following fields:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| hasHealthInsurance | Boolean | Indicates whether the client has health insurance. |
| healthInsuranceProgram | Boolean | Indicates whether the client is part of a health insurance program. |
| hasFoodStamps | Boolean | Indicates whether the client is on food stamps. |
| foodStampsAmount | Number | The amount of food stamps the client obtains. |
| foodStampsReason | String | The reason why the client is on food stamps. |

Possible Errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.7.2 GET One Health Document

## GET ONE Health Document With clientID

GET [http://localhost:3000/health/:id](http://localhost:3000/employees/:id)

**Example: Getting documents where clientID=2:**

GET [http://localhost:3000/health/2](http://localhost:3000/employees/:id)

Example Response:

GET /health/2 200 63.795 ms - 202

```

{
"\_id": "44ab4560-99dd-11ec-a6d2-bba274c57248",
"clientID": 2,
"hasHealthInsurance": true,
"healthInsuranceProgram": "Program",
"hasFoodStamps": true,
"foodStampsAmount": 1000,
"foodStampsReason": "in need",
"\_\_v": 0
}

```

Where Health Document is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| hasHealthInsurance | Boolean | Indicates whether the client has health insurance. |
| healthInsuranceProgram | Boolean | Indicates whether the client is part of a health insurance program. |
| hasFoodStamps | Boolean | Indicates whether the client is on food stamps. |
| foodStampsAmount | Number | The amount of food stamps the client obtains. |
| foodStampsReason | String | The reason why the client is on food stamps. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.7.3 POST Adding One Health Document

## Inserting New Health Document

POST [http://localhost:3000/health](http://localhost:3000/employees)

Example Body:

```

{
"clientID":"888”,
"hasHealthInsurance": 1,
"healthInsuranceProgram":"Program",
"hasFoodStamps":1,
"foodStampsAmount":1000,
"foodStampsReason":"in need"
}

```

Example Response:

POST /health 200 96.582 ms - 49

```

new health record added to the database via POST.

```

Where Health Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| hasHealthInsurance | Boolean | Indicates whether the client has health insurance. |
| healthInsuranceProgram | Boolean | Indicates whether the client is part of a health insurance program. |
| hasFoodStamps | Boolean | Indicates whether the client is on food stamps. |
| foodStampsAmount | Number | The amount of food stamps the client obtains. |
| foodStampsReason | String | The reason why the client is on food stamps. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.7.4 PUT - Updating Existing Health Document

## Updating one Health in Health Collection with clientiD

PUT [http://localhost:3000/health/:id](http://localhost:3000/employees/:id)

Example Input:

Editing a Document with clientID = 888:

PUT [http://localhost:3000/health/888](http://localhost:3000/clients/2)

Example Body:

```

{
"foodStampsAmount":777000
}

```

Example Response:

PUT /health/888 200 66.660 ms - 34

```

education record is edited via PUT

```

Where Health Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| hasHealthInsurance | Boolean | Indicates whether the client has health insurance. |
| healthInsuranceProgram | Boolean | Indicates whether the client is part of a health insurance program. |
| hasFoodStamps | Boolean | Indicates whether the client is on food stamps. |
| foodStampsAmount | Number | The amount of food stamps the client obtains. |
| foodStampReason | String | The reason why the client is on food stamps. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot PUT / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.7.5 DELETE Deleting One Health Document

## Deleting one Health Document by clientID

DELETE [http://localhost:3000/health/:id](http://localhost:3000/employees/:id)

**Example: Deleting a Health document with clientID=999:**

DEL [http://localhost:3000/health/999](http://localhost:3000/families/999)

**Example Response:**

DELETE /health/999 200 65.163 ms - 26

```

{
"msg": {
"deletedCount":1
}
}

```

The ClientID is what is used to select the Client that will be deleted:

| Field | Type | Description |
| --- | --- | --- |
| clientID | Number | Unique identifier for the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot DELETE/ | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

  ## 2.7. Residences

### 2.7.1 GET All Residences

## GET ALL Residences: Getting All Residences Collection

Fetch all Documents from Residences Collection:

GET [http://localhost:3000/residences](http://localhost:3000/employees)

Example Response:

GET /residences 200 65.692 ms - 619

```

[
{
"_id": "62144f42c1de9d07f2742f82",
"clientID": 123,
"address": "7676 Holly Hall St. ",
"city": "Houston",
"state": "TX",
"county": "Harris",
"zip": 77054,
"totalRent": 1470,
"timeofResidence": {
"residenceYear": "5",
"residenceMonth": "3"
},
"livingArrangement": "alone",
"hasUtilities": true,
"isSubsidized": true,
"isSingleParent": false
},
{
"_id": "6220075c2012b3b414c445ac",
"clientID": 456,
"address": "7865 Calhoun Rd",
"city": "Houston",
"state": "TX",
"county": "Harris",
"zip": 77204,
"totalRent": 21345,
"timeofResidence": {
"residenceYear": 7,
"residenceMonth": 8
},
"livingArrangement": "family",
"hasUtillities": true,
"isSubsidized": true,
"isSingleParent": false
}
]

```

With the following fields:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| address | String | Client's residential address. |
| city | String | Client's city of residence. |
| state | String | Client's state of residence. |
| county | String | Client's country of residence. |
| zip | Number | Client's residential zip code. |
| totalRent | Number | Total rent expenses of the client. |
| timeOfResidence | String | How long the client has stayed at their current residence. |
| residenceYear | Number | How many years the client has resided in their current location. |
| residenceMonth | Number | How many months the client has resided in their current location. |
| livingArrangemets | String | Any special notes related to client's current living arrangements. |
| hasUtilities | Boolean | Indicates whether the client has utilities at their residence. |
| isSubsidized | Boolean | Indicates whether the client's living situation is subsidized. |
| isSingleParent | Boolean | Indicates whether the client is a single parent. |

Possible Errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.7.2 GET One Residences Document

## GET ONE Residences Document With clientID

GET [http://localhost:3000/residences/:id](http://localhost:3000/employees/:id)

**Example: Getting documents where clientID=456:**

GET [http://localhost:3000/residences/456](http://localhost:3000/employees/:id)

Example Response:

GET /residences/456 200 73.399 ms - 305

```

{
"\_id": "6220075c2012b3b414c445ac",
"clientID": 456,
"address": "7865 Calhoun Rd",
"city": "Houston",
"state": "TX",
"county": "Harris",
"zip": 77204,
"totalRent": 21345,
"timeofResidence": {
"residenceYear": 7,
"residenceMonth": 8
},
"livingArrangement": "family",
"hasUtillities": true,
"isSubsidized": true,
"isSingleParent": false
}

```

Where Residences Document is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| address | String | Client's residential address. |
| city | String | Client's city of residence. |
| state | String | Client's state of residence. |
| county | String | Client's country of residence. |
| zip | Number | Client's residential zip code. |
| totalRent | Number | Total rent expenses of the client. |
| timeOfResidence | String | How long the client has stayed at their current residence. |
| residenceYear | Number | How many years the client has resided in their current location. |
| residenceMonth | Number | How many months the client has resided in their current location. |
| livingArrangemets | String | Any special notes related to client's current living arrangements. |
| hasUtilities | Boolean | Indicates whether the client has utilities at their residence. |
| isSubsidized | Boolean | Indicates whether the client's living situation is subsidized. |
| isSingleParent | Boolean | Indicates whether the client is a single parent. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot GET / | URL may be missing one or several characters. |

### 2.7.3 POST Adding One Residences Document

## Inserting New Residences Document

POST [http://localhost:3000/residences](http://localhost:3000/employees)

Example Body:

Adding a new Residence where clientID=999:

```

{
"clientID": 999,
"address": "7865 Calhoun Rd",
"city": "Houston",
"state": "TX",
"county": "Harris",
"zip": 77204,
"totalRent": 21345,
"timeOfResidence": "5",
"residenceYear": 2007,
"residenceMonth": 8,
"livingArrangemets": "family",
"hasUtilities": true,
"isSubsidized": true,
"isSingleParent": false
}

```

Example Response:

POST /residences 200 141.570 ms - 27

```

Residences have been added.

```

Where Residences Object is:

| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid |
| clientID | Number | Unique identifier for the client. |
| address | String | Client's residential address. |
| city | String | Client's city of residence. |
| state | String | Client's state of residence. |
| county | String | Client's country of residence. |
| zip | Number | Client's residential zip code. |
| totalRent | Number | Total rent expenses of the client. |
| timeOfResidence | String | How long the client has stayed at their current residence. |
| residenceYear | Number | How many years the client has resided in their current location. |
| residenceMonth | Number | How many months the client has resided in their current location. |
| livingArrangemets | String | Any special notes related to client's current living arrangements. |
| hasUtilities | Boolean | Indicates whether the client has utilities at their residence. |
| isSubsidized | Boolean | Indicates whether the client's living situation is subsidized. |
| isSingleParent | Boolean | Indicates whether the client is a single parent. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.7.4 PUT - Updating Existing Residences Document

## Updating one Residences in Residences Collection with clientiD

PUT [http://localhost:3000/residences/:id](http://localhost:3000/employees/:id)

Example Input:

Editing a Document with clientID = 888:

PUT [http://localhost:3000/residences/888](http://localhost:3000/clients/2)

Example Body:

```

{
"livingArrangemets": "State Housing"
}

```

Example Response:

PUT /residences/999 200 74.701 ms - 25

```

residences edited via PUT

```

Where Residences Object is:

| Field | Type | Description |
| --- | --- | --- |
| livingArrangemets | String | Any special notes related to client's current living arrangements. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot PUT / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.7.5 DELETE Deleting One Residences Document

## Deleting one Residences Document by clientID

DELETE [http://localhost:3000/residences/:id](http://localhost:3000/employees/:id)

**Example: Deleting a Residences document with clientID=999:**

DEL [http://localhost:3000/residences/999](http://localhost:3000/families/999)

**Example Response:**

DELETE /residences/999 200 65.163 ms - 26

```

{
"msg": {
"deletedCount":1
}
}

```

The ClientID is what is used to select the Document that will be deleted:

| Field | Type | Description |
| --- | --- | --- |
| clientID | Number | Unique identifier for the client. |

Possible errors:

| Error Code | Description |
| --- | --- |
| 404 Cannot DELETE/ | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |
```
