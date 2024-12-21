# Express Rick and Morty

RESTful API that fetches and manipulates data from the Rick and Morty API, the REST(ish) and GraphQL API based on the television show Rick and Morty.

## URL

```
/api/v1
```

## Endpoints

### Get all characters

- **URL:** `/characters`
- **Method:** `GET`
- **Description:** Retrieves a list of all characters.
- **Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "results": [
        // ...
        {
          "id": 16,
          "name": "Amish_Cyborg",
          "status": "Dead",
          "gender": "Male"
        }
        // ...
      ]
    }
    ```

### Get alive characters

- **URL:** `/characters/alive`
- **Method:** `GET`
- **Description:** Retrieves a list of all alive characters.
- **Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "results": [
        {
          "id": 1,
          "name": "Rick_Sanchez",
          "status": "Dead",
          "gender": "Male"
        }
        // ...
      ]
    }
    ```

## Testing

To run the tests, use the following command:

```bash
npm test
```
