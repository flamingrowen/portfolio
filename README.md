# SDE Portfolio Website

A premium, high-performance portfolio website designed for Software Development Engineers. Built with React, Vite, and Framer Motion, featuring a dark-themed glassmorphism UI.

## 🚀 Features

-   **Premium Dark UI**: Modern aesthetic with glassmorphism effects.
-   **Responsive Design**: Fully responsive for all devices (Mobile First).
-   **Animations**: Smooth entrance and scroll animations using `framer-motion` and `react-scroll`.
-   **Sections**: Hero, About, Experience, Skills, Projects, Contact.
-   **SEO Optimized**: Meta tags and semantic HTML structure.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: CSS Variables & Custom Utility Classes
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🏃‍♂️ Local Development

Follow these steps to run the project locally on your machine.

### Prerequisites
-   Node.js (v16 or higher)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/flamingrowen/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

## 🚀 Deployment

This project is configured to deploy to **GitHub Pages** automatically.

### How it works
-   `predeploy`: Automatically builds the project (`vite build`) into a `dist` folder.
-   `deploy`: Pushes the `dist` folder to the `gh-pages` branch on GitHub.

### To Deploy Updates
Whenever you make changes to the code, run:

```bash
npm run deploy
```

This will build the new version and publish it live to:
**https://flamingrowen.github.io/portfolio**

## 📂 Project Structure

```
src/
├── components/      # React components
│   ├── Navbar.jsx   # Navigation bar
│   ├── Hero.jsx     # Landing section
│   ├── About.jsx    # Introduction
│   ├── Experience.jsx # Work history
│   ├── Projects.jsx # Project grid
│   ├── Skills.jsx   # Tech stack
│   └── Contact.jsx  # Contact form
├── index.css        # Global styles & variables
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```

## 📝 Customization

-   **Personal Info**: Update text in `src/components/About.jsx` and `Hero.jsx`.
-   **Experience**: Update your work history in `src/components/Experience.jsx`.
-   **Projects**: Change project details and images in `src/components/Projects.jsx`.
-   **Contact Form**: Update the form action URL in `src/components/Contact.jsx`.
