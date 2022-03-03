<h3>GET All Incomes</h3>
GET ALL Incomes: Getting income information
GET http://localhost:3000/incomes

Example Response: /incomes 200 320.389 ms - 269

[
    {
        "_id": "62144cc4c1de9d07f2742f7f",
        "clientID": 123,
        "isHeadofHousehold": true,
        "monthlyIncome": 67890,
        "spousalSupport": 12345,
        "childSupport": 67890,
        "workComp": 12345,
        "incomeFederalAid": {
            "tanf": 12345,
            "ssi": 67890,
            "unemployment": 12345,
            "socialSecurity": 67890
        },
        "otherIncome": 12345
    }
    
    {
        "_id": "622005cd2012b3b414c445a9",
        "clientID": 190,
        "isHeadofHousehold": true,
        "monthlyIncome": 763456,
        "spousalSupport": 78425,
        "childSupport": 93638,
        "workComp": 56348,
        "incomeFederalAid": {
            "tanf": 679408,
            "ssi": 93568,
            "unemployment": 8654,
            "socialSecurity": 45687567
        },
        "otherIncome": 78978
    }
]

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | Auto Generated uuid   |
| clientId   | Number   | The client id number     |
| isHeadofHousehold   | String   | States if client is the head of household    |
| monthlyIncome   | Number   | Client's Monthly Income     |
| spousalSupport   | Number   | Support from Spouse     |
| childSupport   | Number   | Child Support    |
| workComp   | Number   | Workers Compensation    |
| incomeFederalAid   | Number   | Federal Aid Income     |
| tanf  | Number   | Temporary Assistance for Needy Families      |
| ssi   | Number   | Social Security Administration    |
| unemployment   | Number   | Unemployment Number    |
| socialSecurity  | Number   | Social Security Number |
| otherIncome  | Number    |  Any other income info |

Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Url is incorrect       |

<h3>2.1.3 POST Adding Income</h3>
    Adding Income
  
  POST http://localhost:3000/incomes
  
  [
    {
        "_id": "7f898u9j98j9876",
        "clientID": 190,
        "isHeadofHousehold": true,
        "monthlyIncome": 677444,
        "spousalSupport": 09766,
        "childSupport": 36599,
        "workComp": 35647,
        "incomeFederalAid": {
            "tanf": 097754,
            "ssi": 34799,
            "unemployment": 1652,
            "socialSecurity": 5673453
        },
        "otherIncome": 43288
    }
]


GET all Residences
GET ALL Residences: Getting information for all residences
GET http://localhost:3000/residences

Example Response: /GET /residences 200 51.551 ms - 619

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

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | Auto Generated uuid   |
| clientId   | Number   | The client id number     |
| address   | String   | Address    |
| city  | String   | City     |
| state   | String   | State     |
| county  | String  | County    |
| zip   | Number   | Zip Code    |
| totalRent   | Number   | Total Rent     |
| residenceYear  | Number   | How many years of residence      |
| ResidenceMonth   | Number   | How many months of residence   |
| livingArrangement   | String   | Living Arrangements   |
| hasUtilities  | Boolean   | Utilities |
| isSubsidized  | Boolean    |  Subsidized |
| isSingleParent  | Boolean    |  Single Parent |

Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Url is incorrect       |

GET all Client Vaccine Information
GET ALL Client Vaccine Information: Getting vaccine information for all clients
GET http://localhost:3000/clientvaccineinfo

Example Response: /clientvaccineinfo 200 50.833 ms - 283

[
    {
        "_id": "62144b4ac1de9d07f2742f72",
        "clientID": 123,
        "isGettingVaccine": true,
        "isVaccinated": true,
        "vaccinePreference": "is vaccinated"
    },
    {
        "_id": "622009062012b3b414c445af",
        "clientID": 578,
        "isGettingVaccinated": false,
        "isVaccinated": false,
        "vaccinePreferance": "does not want to be vaccinated"
    }
]

| Field      | Type | Description     |
| :---        |    :----:   |          ---: |
| _id      | String       | Auto Generated uuid   |
| clientId   | Number   | The client id number     |
| isGettingVaccinated   | Boolean   | States if Client is Going to Get Vaccinated    |
| isVaccinated  | Boolean   | States if the Client is Vaccinationed     |
| vaccinePreferance   | String   | Vaccine Preferance    |

Possible errors
     
| Error Code       | Description     |
| :---           |          ---: |
| 404      | The Url is incorrect       |

Example Response: PUT /clientvaccineinfo/578 200 501.407 ms - 34
client vaccine info edited via PUT
