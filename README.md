# Gamora – Modern Gaming Showcase

**Gamora** is a responsive, single-layout React website that showcases popular games. It integrates **Firebase Authentication**, protected routes, dynamic routing, animations, and secure usage of environment variables.

---

## Overview

Gamora is a modern gaming showcase platform featuring:

- A single layout with a common header and footer across all pages.
- Dynamic content that changes based on routes.
- Protected game detail pages, accessible only to authenticated users.
- Firebase authentication for email/password and Google login.
- User profile management (view and update user information).
- Password reset functionality (Forgot Password) using Firebase.
- Tailwind CSS / DaisyUI styling for a responsive UI.
- Smooth animations with Framer Motion or React Spring.
- Dynamic browser titles for each page.
- An extra route consistent with the website theme, e.g., About page.

---

## Key Features

### Layout & Navigation
- **Single Layout:** Header and footer persist across all pages.
- **Dynamic Routing:** Main content updates based on the active route.
- **404 Page:** Custom "Not Found" page for undefined routes.
- **Navbar Authentication Links:**
  - Logged out → Show **Sign Up** and **Log In**.
  - Logged in → Show **Profile picture** and **Log Out** (redirects to the current page).

### Homepage
- **Banner Slider:** 3 slides featuring game images.
- **Popular Games:** Cards sorted by rating (minimum 3 games).
- **Newsletter Section:** UI-only subscription layout.

### Game Details Page (Protected)
- Displays complete game information from a local JSON file.
- Redirects unauthenticated users to the **Login Page**.

### Authentication (Firebase)
- **Email & Password Login**
- **Google Sign-In**
- **Sign-Up / Register** with Name, Email, Password, and Photo URL
- **Password Validation:**
  - Minimum 6 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter

### Profile Management
- **Dashboard Page:** Displays logged-in user information.
- **Update Info Page:** Allows updating `name` and `photoURL`, reflecting changes in Firebase.

### Forgot Password
- Fully functional password reset via Firebase.
- Auto-fills email if provided on the login page.
- Redirects users to Gmail after sending the reset email.

---

## Data Structure

**Games** are stored locally in JSON format:

```json
{
  "id": "1",
  "title": "Player Unknown's Battleground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game...",
  "ratings": "4.5",
  "developer": "Krafton"
}
```
## Animations

- **Framer Motion:** Page progress bar and entrance animations.  
- **React Spring:** Popular games section slides in from left.

---

## Tech Stack

| Category       | Technology                   |
|----------------|-------------------------------|
| Frontend       | React.js                     |
| Routing        | React Router v6+             |
| Authentication | Firebase Authentication      |
| Styling        | Tailwind CSS / DaisyUI       |
| Animation      | Framer Motion / React Spring |
| Deployment     | Netlify                      |
| Data           | Local JSON                   |

---

## Dependencies
```json
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^7.1.0",
    "@fortawesome/free-brands-svg-icons": "^7.1.0",
    "@fortawesome/free-solid-svg-icons": "^7.1.0",
    "@fortawesome/react-fontawesome": "^3.1.0",
    "@react-spring/web": "^10.0.3",
    "@tailwindcss/vite": "^4.1.15",
    "firebase": "^12.4.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3",
    "tailwindcss": "^4.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "daisyui": "^5.3.7",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
```

---

## Installation & Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/alhasandhali/gamora.git
cd gamora
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env.local` with Firebase config**
4. **Build for production**
```bash
npm run build
```
---

**Firebase Environment Variables (`.env.local`)**
```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxx
REACT_APP_FIREBASE_APP_ID=1:xxxx:web:yyyy
```
---

## Protected Routes & Authentication Flow

Gamora implements secure user authentication and route protection using Firebase. The following flows are supported:

### 1. Register
- Users can create an account by providing:
  - Name
  - Email
  - Password (with validation)
  - Profile photo URL (`photoURL`)
- Registration data is stored in Firebase Authentication.

### 2. Login
- Users can log in using:
  - **Email & Password**
  - **Google Sign-In** via Firebase Authentication
- Upon successful login, users are redirected to the page they were attempting to access.

### 3. Private Routes
- Certain pages (e.g., **Game Details**, **Dashboard**) are protected.
- Unauthenticated users attempting to access these routes are automatically redirected to the **Login Page**.
- Implementation uses a `ProtectedRoute` component or Higher-Order Component (HOC) that checks authentication state.

### 4. Profile Update
- Logged-in users can update:
  - Display name (`displayName`)
  - Profile photo URL (`photoURL`)
- Changes are reflected immediately in Firebase Authentication and the UI.

### 5. Forgot Password
- Users can request a password reset email.
- Firebase handles sending the reset email.
- After submitting, users are redirected appropriately (e.g., Gmail or a confirmation page).
---

## Live Link & Repository

- **Live Website:** [Gamora Live Demo](https://gamora-dhali.netlify.app/)  
- **GitHub Repository:** [Add your repository link here](https://github.com/your-username/your-repo)

