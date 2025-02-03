import { SignInButton, useUser } from "@clerk/clerk-react";

const AuthPage = () => {
  const { isSignedIn } = useUser();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {!isSignedIn && <SignInButton />}
    </div>
  );
};

export default AuthPage;