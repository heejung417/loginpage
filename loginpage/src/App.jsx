// src/App.jsx
import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MyPage from "./components/MyPage";
import RequireAuth from "./components/RequireAuth";

function App() {

  const [page, setPage] = useState("home"); 
  useAuth(); 

  function renderPage() {
    if (page === "login") return <LoginForm onNavigate={setPage} />;
    if (page === "signup") return <SignupForm onNavigate={setPage} />;
    if (page === "mypage") {
      return (
        <RequireAuth onNavigate={setPage}>
          <MyPage />
        </RequireAuth>
      );
    }
    return <Home />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-100 font-sans">
      <Header onNavigate={setPage} />
      <div className="w-full max-w-sm mt-16 px-5">{renderPage()}</div>
    </div>
  );
}

export default App;
