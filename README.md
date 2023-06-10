# plan-my-trip-api
 Minimalist Backend API where users can post details of their travel destination, and other users can access it.



### Demo Link

[https://plan-my-trip-api.onrender.com/data](https://plan-my-trip-api.onrender.com/data)


### Data Model

```
{
    name : {type : String , required:true},
    email : {type : String , required:true},
    destination : {type : String , required:true , enum:["India", "Africa", "Europe", "America"]},
    no_of_travellers : {type : Number , required:true},
    budget_per_person : {type : Number , required:true}
}
```

### API Endpoints Description

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| GET | /data | This endpoint should return a list of all the data of trips you can also sort and filter by destination and budget per person using query string `eg.=="?filter=yourdestination&sort=asc"` | 201 |
| POST | /data | This endpoint should allow users to post their trip details in Database | 201 |
| DELETE | /data/:id | This endpoint should delete a particular data of trip based on its id which is passed in params | 202 |
| GET | /data/:id |This endpoint should get a particular data of trip based on its id which is passed in params | 200 |
