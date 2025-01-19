# TravelTrucks Frontend Project

## Project Description and Features

The **TravelTrucks Frontend Project** is a web application designed for a camper rental company, "TravelTrucks." The primary goal of this project is to provide users with a seamless experience in browsing, filtering, and booking campers. The project includes the following key features:

- **Home Page**: Includes a banner with a call-to-action button that redirects users to the catalog page.
- **Catalog Page**: Displays a list of available campers with filtering options based on location, body type, and features (e.g., air conditioning, kitchen, etc.). Users can also add campers to their favorites and load more results dynamically.
- **Camper Details Page**: Shows detailed information about a selected camper, including specifications, user reviews, and a booking form. The page also features a gallery of camper images and a five-star review system.
- **Filters and Favorites**: Allows users to filter campers based on their preferences and maintain a list of favorite campers even after refreshing the page.
- **Dynamic Price Formatting**: Camper rental prices are displayed in a user-friendly format (e.g., 8,000.00).
- **Booking Functionality**: Users can book a camper through a form with instant feedback on successful submissions.
- **Responsive Design**: While the desktop layout is prioritized, the application can be easily adapted in the future for different screen sizes.

The backend API is available at: [MockAPI - Campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers). Key endpoints include:

- `GET /campers`: Retrieves all camper listings with optional filtering parameters.
- `GET /campers/:id`: Retrieves detailed information for a specific camper.

## Technologies Used

The project leverages modern technologies and tools to ensure performance, scalability, and maintainability:

- **Frontend Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) as the bundler.
- **State Management**: [Redux](https://redux.js.org/) for global state management.
- **Routing**: [React Router](https://reactrouter.com/) for navigation between pages.
- **HTTP Requests**: [Axios](https://axios-http.com/) for API interactions.
- **Styling**: CSS modules.
- **Deployment**: Deployed using [Vercel](https://vercel.com/).

## Project Setup and Launch

To get started with the project, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher) and **npm** (v7 or higher)

```
node --version
npm --version
```

- **Git** (latest version)

```
git --version
```

### Steps to Clone and Run the Project

1. **Clone the Repository**

```
git clone <repository-url>
cd <repository-folder>
```

2. Install Dependencies

```
npm install
```

3. Start the Development Server

```
npm run dev
```

4. View the Application opened in your browser using http://localhost:5173 to access the application.

### Additional Commands

- Build the Project: To build the project for production, use:

```
npm run build
```

- Preview the Production Build: To preview the production build locally:

```
npm run preview
```

- Lint and Format Code: To ensure clean and formatted code:

```
npm run lint
```

### Deployment

The project is deployed to [Vercel](https://vercel.com/).
