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
        "_id": "b3e190b0-9915-11ec-9baa-455c9077d07c",
        "clientID": 1,
        "familyMember": [
            {
                "occupationOrGrade": "Contract",
                "_id": "621edc46f15cd59cae7eba4e"
            }
        ],
        "__v": 0
    },
    {
        "_id": "12410410-99d4-11ec-86bc-7f149b464e6c",
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
        "__v": 0
    },
    {
        "_id": "85240f60-99eb-11ec-b04c-93a3a0763b6e",
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
        "__v": 0
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
    "_id": "12410410-99d4-11ec-86bc-7f149b464e6c",
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
    "__v": 0
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
