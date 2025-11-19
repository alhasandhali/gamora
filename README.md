# Gamora – A Modern Gaming Showcase Website

Gamora is a responsive, single-layout React website showcasing popular games with Firebase authentication and protected routes.  
It includes user login/Signup, game details, dynamic routing, animations and secure environment variable usage.

---

## Features

### Layout & Routing

- **Single Layout:** Common header and footer across all pages.
- **Dynamic Content:** Main content changes per route.
- **404 Page:** Custom "Not Found" layout.
- **Dynamic Page Titles:** Each route updates the browser tab title dynamically.

### Navbar / Header

- **Logo:** Displayed on the left.
- **Navigation Links:** Home, Games, Newsletter, etc.
- **Authentication Links:**
  - If logged **out** → Show `Sign Up` and `Log In`.
  - If logged **in** → Show user profile picture and `Log Out` (redirects to **Current Page which is User visited**).

### Homepage

- **Banner Slider:** 3 slides with game images.
- **Popular Games:** Cards sorted by rating (at least 3).
- **Newsletter Section:** Non-functional subscription-style UI.

### Game Details Page (Protected)

- Displays full game info from local JSON data.
- Accessible **only if logged in**.
- Unauthenticated users are redirected to the **Login Page**.

### Authentication (Firebase)

- **Email & Password Login**
- **Google Login**
- **Register/SignUp with Name, Email, Password and Photo URL**
- **Password Validation:**
  - ≥ 6 characters
  - ≥ 1 uppercase letter
  - ≥ 1 lowercase letter

### Profile & Update Info

- **Dashboard Page:** Displays logged-in user info.
- **Update Information Page:**
  - Update `name` and `photoURL` via form.
  - Reflects updated data in Firebase.

### Forgot Password

- Functional password reset via Firebase.
- Auto-fills email if provided on login page.
- Clicking “Send” redirects to Gmail.

### JSON Data

Games are loaded from local JSON data and the data format is:

**_Example:_**

```json
{
  "id": "1",
  "title": "Player Unknowns Battle Ground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game...",
  "ratings": "4.5",
  "developer": "Krafton"
}
```

### Animations

- **Implemented using one of:**
  - Framer Motion (Page progress bar on top)
  - React Spring (Popular game section come from left)

### Additional Route

- Includes an extra route consistent with the website theme (e.g. **“About”**).

### Tech Stack

| Category           | Technology                   |
| ------------------ | ---------------------------- |
| **Frontend**       | React.js                     |
| **Routing**        | React Router                 |
| **Authentication** | Firebase Auth                |
| **Styling**        | Tailwind CSS / DaisyUI       |
| **Animation**      | Framer Motion / React Spring |
| **Deployment**     | Netlify                      |
| **Data**           | Local JSON file              |

### Challenges Implemented

- Animation using Framer Motion / React Spring
- Functional Forgot Password flow
- Profile Update with Firebase data
- Dynamic Titles for all routes
- Protected Game Details Page
- Newsletter Subscription Section

### Preview

**Visit Here:** [**_https://gamora-dhali.netlify.app/_**](https://gamora-dhali.netlify.app/)
