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
      "level": 1,
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
      "level": 1,
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
    "ranking": "",
    ...
}

```