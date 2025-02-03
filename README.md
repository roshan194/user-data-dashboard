# User Data Dashboard

A React-based dashboard that includes authentication, a counter, a rich text editor, a user form, and a bar chart. This app allows users to log in, update their information, and see their data persist across sessions.

---

## Features

- **Authentication**: Sign in using Clerk.
- **Counter**: Increment, decrement, and reset a counter.
- **Rich Text Editor**: Edit user data in a rich text format.
- **User Form**: Input and save user details (name, email, phone, address).
- **Bar Chart**: Visualize counter trends over time.
- **Data Persistence**: User data is saved in `localStorage` and persists across sessions.

---

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Clerk**: Authentication and user management.
- **ReactQuill**: Rich text editor for editing user data.
- **Recharts**: Library for rendering bar charts.
- **CSS**: Styling for components and layout.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-data-dashboard.git
   cd user-data-dashboard
   
2. Install dependencies:
   ```bash
   npm install

3. Set up Clerk:
   
   * Sign up at Clerk and create a new application.

   * Add your Clerk publishable key to a .env file:
      ```env
     REACT_APP_CLERK_PUBLISHABLE_KEY=your_publishable_key

4. Start the development server:
   ```bash
   npm start
   
5. Open your browser and navigate to http://localhost:3000.

### Project Structure
user-data-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AuthPage.js
│   │   ├── Dashboard.js
│   │   ├── Counter.js
│   │   ├── RichTextEditor.js
│   │   ├── UserForm.js
│   │   └── BarChart.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── App.css
│       ├── Dashboard.css
│       ├── Counter.css
│       ├── UserForm.css
│       └── BarChart.css
├── .env
├── package.json
├── package-lock.json
└── README.md
   
