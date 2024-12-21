# Express Rick and Morty

RESTful API that fetches and manipulates data from the Rick and Morty API, the REST(ish) and GraphQL API based on the television show Rick and Morty.

## URL

```
http://3.133.134.106:3000/api/v1
```

## Endpoints

### Sign In

- **URL:** `/profile/signin`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a token.
- **Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "email": "ricky@example.com",
      "password": "hashed_password"
    }
    ```

### Sign Out

- **URL:** `/profile/signout`
- **Method:** `POST`
- **Description:** Signs out a user by clearing the token.
- **Response:**
  - **Status:** `204 No Content`

### Verification

- **URL:** `/profile/verification`
- **Method:** `GET`
- **Description:** Verifies the user's token.
- **Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "email": "ricky@example.com"
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
        // more characters...
      ]
    }
    ```

### Get alive character by ID

- **URL:** `/characters/:id`
- **Method:** `GET`
- **Description:** Retrieves a character by its ID.
- **Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "results": [
        {
          "id": 18,
          "name": "Antenna_Morty",
          "status": "Alive",
          "gender": "Male"
        }
      ]
    }
    ```

## Testing

To run the tests, use the following command:

```bash
npm test
```
