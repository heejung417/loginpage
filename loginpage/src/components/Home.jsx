import { useAuth } from "../context/AuthContext";

function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm text-center">
      {currentUser ? (
        <>
          <div className="text-4xl mb-3">👋</div>
          <h1 className="text-xl font-semibold mb-3 text-gray-900">
            환영합니다, {currentUser.username}님!
          </h1>
          <p className="text-sm text-gray-500">
            새로고침을 해도 로그인 상태가 유지되는지 확인해보세요.
          </p>
        </>
      ) : (
        <>
          <div className="text-4xl mb-3">🔒</div>
          <h1 className="text-xl font-semibold mb-3 text-gray-900">로그인이 필요합니다</h1>
          <p className="text-sm text-gray-500">먼저 회원가입 후 로그인해주세요.</p>
        </>
      )}
    </div>
  );
}

export default Home;
