# Future Home Healthcare Platform Frontend

Welcome to the Future Home Healthcare Platform frontend repository. This project was developed as part of the Abu Dhabi Health Care Challenge 2024, aiming to revolutionize health monitoring and chronic disease management in the UAE. Below, you'll find all the necessary information to understand, run, and contribute to this project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Future Home Healthcare Platform is designed to offer continuous health monitoring and management, focusing on chronic diseases such as diabetes, hypertension, and respiratory disorders. Utilizing advanced sensor technology from wearable devices, the platform provides real-time health metrics and insights to users and healthcare providers, facilitating early detection and timely intervention.

## Features

- **Wearable Devices Integration**: Continuous monitoring of vital signs like body temperature, heart rate, respiration rate, blood pressure, and blood oxygen saturation.
- **User Dashboard**: A bilingual (Arabic and English) interface providing real-time health data, historical trends, and customizable alerts.
- **Emergency Notifications**: Immediate alerts to healthcare providers in case of emergencies.
- **Health Suggestions**: Automated health tips and lifestyle recommendations based on data analysis and medical history.
- **Seamless Integration**: Compatibility with existing digital health systems and IoT frameworks for continuous data sharing with healthcare providers.
- **Provider Interface**: Tools for healthcare providers to monitor patient data, manage emergencies, and deliver coordinated care.

## Technology Stack

- **React**: JavaScript library for building user interfaces
- **Redux**: State management
- **React Router**: Routing library for React
- **i18next**: Internationalization framework
- **Material-UI**: React components for faster and easier web development
- **Axios**: Promise-based HTTP client for making requests

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/future-home-healthcare-frontend.git
    cd future-home-healthcare-frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

## Usage

After starting the development server, you can access the application at `http://localhost:3000`. The application provides various interfaces for users and healthcare providers to monitor and manage health metrics effectively.

## Project Structure

The project structure is as follows:

```
/future-home-healthcare-frontend
|-- /public
|-- /src
    |-- /assets
    |-- /components
        |-- /Auth
            |-- Register.jsx
            |-- Login.jsx
        |-- /Dashboard
            |-- Dashboard.jsx
        |-- /HealthMonitoring
            |-- HealthMonitoring.jsx
        |-- /Alerts
            |-- Alerts.jsx
        |-- /Profile
            |-- Profile.jsx
        |-- /Recommendations
            |-- Recommendations.jsx
        |-- /Settings
            |-- Settings.jsx
    |-- /pages
    |-- /redux
        |-- /reducers
            |-- userReducer.js
        |-- store.js
    |-- /services
    |-- /translations
        |-- en.json
        |-- ar.json
    |-- App.jsx
    |-- index.jsx
    |-- i18n.js
|-- package.json
```

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

