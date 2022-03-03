## DOCUMENTATION for Clients, families, education, health

## 2.4. Clients

### 2.4.1 GET All Clients

## GET ALL Clients: Getting All Client Collection

GET [http://localhost:3000/clients](http://localhost:3000/employees)

Example Response:

GET /clients 200 64.125 ms – 1723

```
[
    {
        "_id": "62145a568b53b1352a47665f",
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
        "_id": "a9db85f0-99d6-11ec-9fb4-f31fb6cb6866",
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
        "__v": 0
    },
    {
        "_id": "d0bad900-99d6-11ec-9fb4-f31fb6cb6866",
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
        "__v": 0
    },
    {
        "_id": "6b1fcc70-9a50-11ec-9558-dfd4acf3ad5f",
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
        "__v": 0
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
    "_id": "d0bad900-99d6-11ec-9fb4-f31fb6cb6866",
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
    "__v": 0
}
```

Where Client Object is

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

Where Client Object is

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

Possible errors

| Error Code | Description |
| --- | --- |
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.4.4 PUT Updating Existing Client

## Updating one Client in Clients Collection with clientiD

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

Where Client Object is

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

Possible errors

| Error Code | Description |
| --- | --- |
| 404 Cannot PUT / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |

### 2.4.5 DELETE Deleting One Client

## Deleting one Client and their information from the Clients collection

DELETE [http://localhost:3000/Clients/:id](http://localhost:3000/employees/:id)

Example Response:
DELETE /Clients/5 200 64.628 ms - 31

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
| 404 Cannot POST / | URL may be missing one or several characters. |
| SyntaxError | Body payload may be missing one or several characters. |
