# Event Application - Sunrise

## Overview
The **Event Application - Sunrise** is a simple React-based web application for managing events. It uses the browser's local storage for authentication and data persistence. The app simulates a basic event management system, where users can:

- Log in with predefined credentials.
- Add events to the record.
- View created events in view-only mode after signing out.

### Features
- **Authentication:** Users log in with predefined credentials stored in local storage.
- **Event Management:** Users can add and view events stored in local storage.
- **View Mode:** Logged-out users can only view the events created previously.
- **Local Storage Integration:** The application avoids using a conventional database as React runs entirely in the browser.

## Predefined Credentials
- **Email ID:** `animesh@gmail.com`
- **Password:** `Abcd@1234`

These credentials are hardcoded into the application and are stored in the browser's local storage for validation purposes.

## How It Works

### Initial State
- Upon launching the application, the local storage will contain the login credentials (`email` and `password`).
- No events will be present initially in the local storage.

### User Flow
1. **Login:**
   - The user logs in using the predefined credentials.
   - If the credentials are correct, the user gains access to the event management system.

2. **Add Events:**
   - The user can add events to the records.
   - Events are stored in the browser's local storage.

3. **Sign Out:**
   - Upon signing out, the user can still view the events in a view-only mode.
   - Adding or editing events requires logging back in.

### Why Local Storage?
- Since React runs entirely in the browser and doesn’t natively support conventional databases, local storage is used to store authentication data and events.


## Development Setup

### Prerequisites
- Node.js and npm installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/event-application-sunrise.git
   ```
2. Navigate to the project directory:
   ```bash
   cd event-application-sunrise
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

### Usage
1. Open the application in your browser (default: `http://localhost:3000`).
2. Log in with the predefined credentials.
3. Add events and manage them within the app.
4. Sign out to view events in view-only mode.

