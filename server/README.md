# Mongo Schema Definitions:

### User Schema

```json
{
  "username": "",
  "email": "",
  "name": "",
  "location": "",
  "skillz": [
    {
      "skillname": "",
      "level": "",
    },
    ...
  ] 
}
```

### Skillz Schema

```json
[
  {
    "skillName": ""
  },
  ...
 ]  

```

### Job_Skillz Schema

```json
{
  "sector": "",
  "job": "",
  "skillz": [
    {
      "skillname": "",
      "level": "",
    },
    ...
  ] 
}

```


### Resource Schema

```json
{
    "skillname": "",
    "level": 1,
    "provider": "",
    "location": "",
    "date": "",
    "rating": 1,
    ...
}

```