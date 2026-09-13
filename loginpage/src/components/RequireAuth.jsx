
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function RequireAuth({ onNavigate, children }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      const timer = setTimeout(() => {
        onNavigate("login");
      }, 2000);

    
      return () => clearTimeout(timer);
    }
  }, [currentUser, onNavigate]);

  if (!currentUser) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm text-center">
        <div className="text-4xl mb-3">🚫</div>
        <h1 className="text-xl font-semibold mb-3 text-gray-900">로그인이 필요한 페이지입니다</h1>
        <p className="text-sm text-gray-500">2초 후 로그인 화면으로 이동합니다.</p>
      </div>
    );
  }

  return children;
}

export default RequireAuth;


