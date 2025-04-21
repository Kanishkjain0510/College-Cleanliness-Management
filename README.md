# JKLU Cleanliness Management System

## Overview
This is my first web development project, a web application designed to manage campus cleanliness at JKLU. The repository contains two parts:
- **Frontend Prototype**: A visually appealing login/signup page and dashboards for students, admins, and staff.
- **Backend with Basic Frontend**: A partially implemented backend with a basic frontend (not fully functional and not connected to the attractive frontend).

## Repository Structure
- **`index.html`, `script.js`, `styles.css`**: Frontend for the login/signup page with user type selection (Student, Admin, Staff).
- **`dashboards/`**: HTML and CSS files for admin, staff, and student dashboards (static data). See `dashboards/README.md` for details.
- **`backend/`**: Node.js/Express backend and basic frontend files (not fully functional). See `backend/README.md` for details.

## Features
### Frontend Prototype
- **Login/Signup Page**: User-friendly interface with user type selection, dynamic forms, and animations.
- **Dashboards**:
  - **Admin**: Displays staff, buildings, feedback, complaints, and leave applications (static data).
  - **Staff**: Shows tasks and staff metrics (static data).
  - **Student**: Includes a calendar, cleaning requests, complaints, and feedback (static data).
- Responsive design with sidebar navigation, cards, and a gradient-based UI.

### Backend with Basic Frontend (Not Fully Functional)
- Intended features (partially implemented):
  - User authentication (register/login) with JWT.
  - Issue reporting (submit cleanliness issues).
  - Task management (view/mark tasks).
  - Inventory management (update quantities).
  - Dashboard for issues and tasks.
- The backend is not connected to the attractive frontend and uses a basic frontend structure.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL (not functional)
- **Libraries**: bcrypt, jsonwebtoken, cors, body-parser, mysql2

## Setup Instructions
- **Frontend Prototype**: See `dashboards/README.md` for setup.
- **Backend with Basic Frontend**: See `backend/README.md` for setup (not fully functional).

## Notes
- The frontend prototype and backend are separate due to time constraints.
- The backend requires further development to be fully functional.
- Future work includes fixing the backend and integrating it with the attractive frontend.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- My first web development project, built to learn full-stack development.
- Inspired by JKLU's campus management needs.

## Setup Instructions
1. Clone the repository: 'git clone https://github.com/Kanishkjain0510/College-Cleanliness-Management.git'