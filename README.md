# Inventory Allocation System Task 2.

**Tech Stack:** Node.js (Backend) + React.js (Web Frontend) + Flutter (Mobile Frontend)  


---

## 1️ Project Summary

This project is an **Inventory Allocation System** where person can place orders for products. The backend ensures that:

- Only one API (`POST /order`) handles all order operations.
- Product stock is validated before placing orders.
- Stock cannot go negative, even under concurrent requests.
- Orders are created and stock updated in **a single transaction**.
- Frontend apps (React and Flutter) are minimal and only call the backend API to show how api is integrated within frontend.

---

## 2️ Folder Structure
```
inventory_order_management/
├── backend/ # Node.js backend
│ ├── controllers/ # Handle HTTP requests/responses
│ ├── services/ # contain business logic 
│ ├── repositories/ # Database CRUD operations are done here
│ ├── models/ #  models for order and product to ensure type safety
│ ├── routes/ # API route definition where we have only one route
│ ├── server.ts # Main backend entry point
│ ├── package.json
│ └── .env # Database config (not committed)
│
├── frontend/ # Using React frontend
│ ├── src/
│ ├── package.json
│ └── .env # API URL 
│
├── mobile/ # Usong Flutter frontend
│ ├── lib/
│ ├── pubspec.yaml
│ └── .env # API URL (optional)
│
└── README.md # whole project documentation
```


---

## 3️ API Explanation

**Only one API is implemented: placing order**

### POST `/order`

- **Request Body:**
```json
{
  "productId": "1",
  "quantity": 3
}
```
**Functionality (handled entirely in Service layer):**


checking product existence.

Check quantity in stock .

Deduct stock if sufficient.

Prevent negative stock.

Handle concurrent requests safely using transactions/row-level locks.
## 4 Concurrency Handling (edge case) 
Node.js backend uses database transactions with `SELECT --- FOR UPDATE` to lock the row while updating stock so as two users can't place orders at the same time.This reduce oversell stock.


## 5 Frontend Overview
I used react to implement simple form which accept product id and quantity as input and submit button by calling backend api `Post /order`
## 6 Flutter for mobile development
I used the same api as in react and using different widgets to creat form to collect product id and quantity so as to place an order.
## 3️ How to run project
### backend side
cd backend 
`npm install`
`npm run dev or npm start`

### frontend side
cd frontend
`npm install`
`npm run dev`
### mobile side
cd mobile
`flutter pub get`
`flutter run`
