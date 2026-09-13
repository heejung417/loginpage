import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginForm({ onNavigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    const success = login(username, password);
    if (!success) {
      setMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    onNavigate("home");
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm text-center">
      <h1 className="text-xl font-semibold mb-3 text-gray-900">로그인</h1>
      <form className="text-left" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1.5">아이디</label>
          <input
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1.5">비밀번호</label>
          <input
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button
          className="w-full py-3 bg-orange-500 text-white rounded-lg text-sm font-semibold cursor-pointer mt-2 hover:bg-orange-600 transition-colors border-none"
          type="submit"
        >
          로그인
        </button>
        {message && <p className="text-xs text-red-600 mt-3">{message}</p>}
      </form>
      <p className="text-center mt-4 text-xs text-gray-500">
        아직 계정이 없으신가요?{" "}
        <span
          className="text-orange-500 cursor-pointer hover:underline"
          onClick={() => onNavigate("signup")}
        >
          회원가입
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
