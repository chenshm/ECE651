# Documentation of Customer Profile
- [Introduction](#intro)
- [Requirement](#req)
- [API](#api)


## <a name="intro">Introduction</a>
This is the documentation of customer profile branch. This branch
implements the addition, deletion and modification of the customer
profile. Please refer to this as a guideline. 

## <a name="req">Requirement</a>
### Functional Requirement
- User shall be able to create a new customer profile including first name,
last name, phone number, password, e-mail, address and description
- User shall be able to log into their account using phone number and password
- User shall be able to logout

### Non-functional Requirement
- App shall be able to auto login if user is willing to
- Only admin can edit(delete or modify) the customer profiles
- Admin shall be able to login/logout

## <a name="intro">API</a>
### /api/customers/

#### Function
List all the customers in the database

#### Request Method
GET

#### Parameter
None

#### Response
```
{
    'data': {
                '0':{
                        'pk': 1,
                        'first_name': "shimeng",
                        'last_name': "chen",
                        'email': "844650898@qq.com",
                        'phone': "123456789",
                        'address': "white house",
                        'description': "waterloo",
                },
                '1':{
                        'pk': 2,
                        'first_name': "shimeng",
                        'last_name': "chen",
                        'email': "shimengchern@gmail.com",
                        'phone': "2265812983",
                        'address': "20 west",
                        'description': "dt",
                },

                ......
            },
}
```

#### Possible Error State
None


#### Request Method
POST

#### Parameter
```
{
    "first_name": "Rongzhi",
    "last_name": "Gu",
    "email": "rongzhi.gu@uwaterloo.ca",
    "phone": "2269750663",
    "address": "268 Lester St",
    "description": "(■)__(■) Soooooo Violentttttt (■)__(■)"
}
```

#### Response
None

#### Possible Error State
- 400 BAD REQUEST

### /api/customers/pk
#### Function
Retrieve, update or delete a customer by id/pk.

#### Request Method
GET

#### Parameter
None

#### Response
```
{
    "first_name": "Rongzhi",
    "last_name": "Gu",
    "email": "rongzhi.gu@uwaterloo.ca",
    "phone": "2269750663",
    "address": "268 Lester St",
    "description": "(■)__(■) Soooooo Violentttttt (■)__(■)"
}
```
#### Possible Error State
None
