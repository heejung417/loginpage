import { useAuth } from "../context/AuthContext";

function MyPage() {
  const { currentUser } = useAuth();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm text-center">
      <div className="text-4xl mb-3">🔑</div>
      <h1 className="text-xl font-semibold mb-3 text-gray-900">
        {currentUser.username}님의 마이페이지
      </h1>
      <p className="text-sm text-gray-500">로그인한 사용자만 볼 수 있는 화면입니다.</p>
    </div>
  );
}

export default MyPage;
