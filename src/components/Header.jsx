import { useAuth } from "../context/AuthContext";

function Header({ onNavigate }) {
  const { currentUser, logout } = useAuth();

  function handleLogout() {
    logout();
    onNavigate("home");
  }

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center box-border">
      <span
        className="font-bold text-lg text-orange-500 cursor-pointer"
        onClick={() => onNavigate("home")}
      >
        Likelion~
      </span>
      <nav className="flex items-center gap-1">
        {currentUser ? (
          <>
            <button
              className="text-sm text-gray-700 bg-transparent border-none cursor-pointer px-3.5 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => onNavigate("mypage")}
            >
              마이페이지
            </button>
            <button
              className="text-sm text-gray-700 bg-transparent border-none cursor-pointer px-3.5 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button
              className="text-sm text-gray-700 bg-transparent border-none cursor-pointer px-3.5 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => onNavigate("login")}
            >
              로그인
            </button>
            <button
              className="text-sm text-gray-700 bg-transparent border-none cursor-pointer px-3.5 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => onNavigate("signup")}
            >
              회원가입
            </button>
          </>
        )}
      </nav>
    </header>
  );
}


export default Header;
