# Backend with Basic Frontend

## Overview
This folder contains the backend and a basic frontend for the JKLU Cleanliness Management System. **The backend is not fully functional** due to database connection issues and incomplete implementation. It is **not connected to the attractive frontend** (located in the root and `dashboards/` folders) and instead includes a basic frontend structure for core functionality.

## Status
- The backend is partially implemented with Node.js and Express but requires further work to be fully operational.
- Database connectivity (MySQL) is configured in `db.js` but may not work without proper MySQL setup.
- The basic frontend is minimal and separate from the attractive frontend prototype.

## Files
- **Backend**:
  - `server.js`: Express server setup.
  - `db.js`: MySQL database connection (placeholder credentials).
  - `package.json`: Project dependencies.
- **Basic Frontend**:
  - `index.html`: Landing page.
  - `login.html`, `register.html`: Authentication pages.
  - `dashboard.html`: Displays issues and tasks.
  - `report-issue.html`: Form to submit cleanliness issues.
  - `task-manager.html`: Interface for task management.
  - `inventory-management.html`: Interface for inventory updates.

## Features (Intended)
- User authentication (register/login) with JWT.
- Issue reporting (submit cleanliness issues with area, priority, description).
- Task management (view/mark tasks as completed).
- Inventory management (update quantities for admins).
- Dashboard displaying issue and task counts.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL (not fully functional)
- **Libraries**: bcrypt, jsonwebtoken, cors, body-parser, mysql2

## Setup Instructions
**Note**: The backend is not fully functional and provided for reference. To attempt running it:
