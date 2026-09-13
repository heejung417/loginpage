# loginpage — React 버전 localStorage 로그인 구현

지난 시간까지 배운 것들(useState/useEffect, Context API)을 그대로 활용해서
localStorage 기반 로그인/회원가입/접근제한을 React로 구현한 프로젝트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 파일 구조와 어떤 수업 내용을 썼는지

```
src/
├── utils/
│   └── auth.js          localStorage 저장/조회 순수 함수 (컴포넌트와 무관한 로직)
├── context/
│   └── AuthContext.jsx  Context API로 "지금 로그인한 사람" 전역 관리 (지난 시간 Context API 그대로 재사용)
├── components/
│   ├── Header.jsx        로그인 여부에 따라 다른 메뉴 표시
│   ├── Home.jsx           홈 화면
│   ├── LoginForm.jsx      로그인 폼 (useState로 controlled input 처리)
│   ├── SignupForm.jsx     회원가입 폼 (useState로 controlled input 처리)
│   ├── MyPage.jsx         로그인 사용자 전용 화면
│   └── RequireAuth.jsx    로그인 안 했으면 2초 뒤 쫓아냄 (useEffect + cleanup 패턴 재사용)
├── App.jsx                라우터 없이 state 하나로 화면 전환 (조건부 렌더링)
└── main.jsx                AuthProvider로 App 감싸기 (Context/Redux/QueryClient와 동일한 Provider 패턴)
```

## 바닐라 JS 버전과 로직은 완전히 동일합니다

`utils/auth.js`의 `getUsers`, `saveUsers`, `registerUser`, `loginUser`, `getCurrentUser`, `logoutUser`는
이전에 만든 바닐라 JS 버전(login-demo)의 auth.js와 로직이 100% 동일해요. 달라진 건 그 함수들을
"어떻게 화면에 연결하는가"뿐입니다 — DOM을 직접 조작(`innerHTML`)하는 대신, React의 state와
Context API로 화면을 자동으로 다시 그리게 만든 것이 핵심 차이입니다.
