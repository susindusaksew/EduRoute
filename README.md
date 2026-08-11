# EduRoute - Student Shuttle & Route Finder App

EduRoute is a mobile application built with React Native and Expo. The app helps university students find shuttle routes and check useful information such as schedules, stops, distances, fees, and driver contact details.

This application was developed as part of the CSI2114 Mobile Application Development - Sprint 1 Assessment.

---

## Main Features

### 1. Route Search and Listing

The Home Screen displays the available university shuttle routes in a scrollable list using the React Native `FlatList` component.

Users can search for a route using the search bar. The search checks both the route name and stop names, so students can find a route based on either the route itself or a particular pickup location.

When there are no matching results, the application displays a "No routes found." message.

### 2. Route Details

The Route Details screen shows detailed information about the selected shuttle route.

Users can view:

- Route name
- Departure times
- Monthly fee
- Driver contact number
- Vehicle number
- Route stops
- Total distance

The app also supports switching the distance unit between kilometres (km) and miles (mi) from the Settings screen.

### 3. Application Settings

The Settings Screen provides options for changing the app's preferences.

**Distance Unit**

Users can switch between:

- Kilometres (km)
- Miles (mi)

The selected unit is applied to the route distance throughout the app.

**Dark Mode**

Users can switch between Light Mode and Dark Mode.

The theme setting is managed globally using the React Context API, so the selected theme is applied consistently across the different screens.

**Bus Arrival Alerts (Notifications)**

Users can enable or disable push alerts to receive notifications 5 minutes before their scheduled shuttle arrives at the stop.

### 4. Student Profile

The Profile Screen allows students to manage their basic profile information.

Users can view and update:

- Name
- Gender
- Email
- Shuttle route
- Pickup stop

The profile also includes a dynamic student avatar. The displayed emoji and avatar background change depending on the selected gender.

---

## Technologies Used

- React Native - Mobile application development
- Expo - Development and testing environment
- JavaScript / TypeScript - Programming
- React Navigation - Screen navigation
- React Context API - Global application settings
- useState - Local component state management
- FlatList - Displaying shuttle routes
- ScrollView - Displaying scrollable content
- Switch - Settings controls
- TextInput - User input and search
- TouchableOpacity - Interactive buttons
- View and Text - User interface elements

---

## Application Architecture

The application is organised into separate folders for screens, data, context, and project configuration.

Main navigation is handled through React Navigation, while `SettingsContext` is used to share application settings such as the selected theme and distance unit between screens.

Local screen-level information is managed using React's `useState` hook.

---

## Project Structure

```text
EDUROUTE/
│
├── assets/
│   └── screenshots/
│       ├── home.png
│       ├── detail.png
│       ├── settings.png
│       └── profile.png
│
├── context/
│   └── SettingsContext.js
│
├── data/
│   └── routesData.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── DetailScreen.js
│   ├── SettingsScreen.js
│   └── ProfileScreen.js
│
├── scripts/
│   └── reset-project.js
│
├── src/
│
├── android/
│
├── .claude/
│   └── settings.json
│
├── .idea/
├── .vscode/
│
├── .gitignore
├── AGENTS.md
├── App.js
├── app.json
├── CLAUDE.md
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

### Important Files and Folders

**assets/screenshots/**
Contains screenshots of the application's main screens for the project documentation.

**context/SettingsContext.js**
Contains the global settings logic used for Dark Mode and distance unit selection.

**data/routesData.js**
Contains the sample shuttle route data used by the application.

**screens/**
Contains the main screens of the EduRoute application.

- HomeScreen.js - Displays and searches shuttle routes.
- DetailScreen.js - Shows detailed information about a selected route.
- SettingsScreen.js - Provides theme and distance settings.
- ProfileScreen.js - Allows students to view and edit their profile.

**App.js**
Acts as the main entry point of the application. It sets up the navigation stack and connects the global settings context.

**app.json**
Contains the Expo application configuration.

**package.json**
Contains the project dependencies and npm scripts.

**tsconfig.json**
Contains the TypeScript configuration for the project.

---

## Getting Started

### 1. Clone the Project

Clone the project repository and open it in Visual Studio Code.

### 2. Install Dependencies

Run the following command inside the project folder:

```bash
npm install
```

### 3. Start the Expo Development Server

Run:

```bash
npx expo start
```

After the development server starts, the application can be opened using Expo Go or an available Android emulator.

---

## Sprint 1 Objectives

The Sprint 1 prototype focuses on creating the main mobile application structure and implementing the core user interface.

The project demonstrates:

- Multiple application screens
- Navigation between screens
- Route listing using FlatList
- Search functionality
- Local state management with useState
- Global state management using Context API
- Light and Dark themes
- Distance unit conversion
- Editable student profile information
- Basic user interaction through native React Native components

---

## Project Purpose

EduRoute was created to give students a simple way to find university shuttle information without having to manually search through different sources.

The prototype focuses on making route information easy to access, while also providing useful features such as search, route details, settings, and student profile management.

---

## Project

**Application:** EduRoute
**Module:** CSI2114 - Mobile Application Development
**Assessment:** Sprint 1 Assessment
**Platform:** Android / React Native
**Development Environment:** Expo

---

## Screenshots

| Home Screen | Route Details |
|:---:|:---:|
| ![Home](./assets/screenshots/home.png) | ![Detail](./assets/screenshots/detail.png) |

| Settings Screen | Student Profile |
|:---:|:---:|
| ![Settings](./assets/screenshots/settings.png) | ![Profile](./assets/screenshots/profile.png) |

| Expo QR Code |
|:---:|
| ![Expo QR](./assets/screenshots/qrcode.png) |

---

## Setup Instructions

#### 1. Clone the Repository

Clone this repository:

```bash
git clone https://github.com/susindusaksew/EduRoute.git
cd EduRoute
```