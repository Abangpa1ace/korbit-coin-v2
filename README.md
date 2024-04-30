# 가상자산 목록 및 상세

## 실행방법

```
# 1. 설치(Node v20.11.0, .nvmrc 참고)
yarn
# 2. 실행(PORT 5173)
yarn dev
```

<br />

## 기술스택

- react(v18), typescript(v5)
- vite
- emotion
- react-query, axios
- zustand
- 이외, hot-toast, loader-spinner 등 UI 라이브러리
  <br />

## 프로젝트 구조

```
client
├── node_modules                  - CRA 모듈
│
└── src/

    ├── components/               - 엘리먼트 컴포넌트 모듈집합
    │   ├── coin/                  - 코인(list, detail, 공통공유) 내 사용되는 컴포넌트
    │   └── List/                  - 광범위하게 사용된느 컴포넌트
    │
    ├── constants/                - 상수값 모듈집합 (vsCurrency, 탭, 스토리지 키 등)
    │
    ├── hooks/                    - 커스텀 훅 모듈집합
    │   ├── apis/                  - React Query 기반 패칭훅
    │   └── list/                  - 목록 페이지 전영 커스텀훅
    │
    ├── pages/                    - 페이지 컴포넌트 모듈집합
    │
    ├── router/Router.tsx         - Router(react-router)
    │
    ├── store/                    - 도메인 별 스토어 모듈집합 (zustand 기반)
    │
    ├── themes/variable.ts        - CSS 공용값 팔레트
    │
    ├── types/                    - 타입 모듈집합 (constants 추출타입, 유틸리티 타입 등 )
    │
    ├── utils/                    - 함수 모듈집합
    │
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-end.d.ts
```

<br />
