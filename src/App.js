import React from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <SignedOut>
        <AuthPage />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </ClerkProvider>
  );
}

export default App;