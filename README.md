# Emotist Therapists API

## Setup Instructions

1. Clone the repository
   git clone <your-repo-link>

2. Navigate to project folder
   cd emotist-therapists-api

3. Install dependencies
   npm install

4. Start the server
   npm start

Server will run at:
http://localhost:3000

---

## API Endpoints

### GET /therapists
Returns all therapists

### GET /therapists?id=1
Returns a specific therapist

### Error Handling
If therapist not found:
404 Not Found

---

## Example Response

[
  {
    "id": 1,
    "name": "Dr. Sarah Johnson",
    "specialization": "Anxiety"
  },
  {
    "id": 2,
    "name": "Dr. Michael Lee",
    "specialization": "Depression"
  }
]
