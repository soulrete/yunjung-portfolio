# Bryn Jones - Web Developer Portfolio

웹 개발자 포트폴리오 웹사이트입니다. HTML, CSS, JavaScript로 구현된 반응형 웹사이트입니다.

## 주요 기능

- **반응형 디자인**: 데스크톱, 태블릿, 모바일 모든 기기에서 최적화된 화면 제공
- **부드러운 스크롤**: 네비게이션 클릭 시 부드러운 스크롤 애니메이션
- **프로젝트 슬라이더**: 좌우로 이동 가능한 프로젝트 카드 슬라이더
- **모바일 메뉴**: 모바일 화면에서 햄버거 메뉴로 변환
- **컨택트 폼**: 방문자가 메시지를 보낼 수 있는 폼

## 구조

```
yunjung-portfolio/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일시트
├── script.js       # JavaScript 기능
└── README.md       # 프로젝트 설명
```

## 섹션 구성

1. **Hero Section** - 메인 소개 섹션
2. **About Section** - 자기소개 및 통계
3. **Projects Section** - 프로젝트 포트폴리오
4. **Client Reviews** - 고객 리뷰
5. **Contact Section** - 연락처 폼
6. **Footer** - 푸터 정보

## 사용 방법

1. 모든 파일을 같은 폴더에 저장합니다
2. `index.html` 파일을 웹 브라우저에서 엽니다
3. 또는 라이브 서버를 사용하여 실행합니다

```bash
# Python 3를 사용한 간단한 로컬 서버
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

## 반응형 브레이크포인트

- **데스크톱**: 992px 이상
- **태블릿**: 768px ~ 992px
- **모바일**: 768px 이하

## 커스터마이징

### 색상 변경
`style.css` 파일의 상단에 있는 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #e63946;  /* 메인 색상 */
    --text-dark: #1a1a1a;      /* 진한 텍스트 */
    --text-gray: #666;          /* 회색 텍스트 */
    --bg-light: #f8f9fa;       /* 배경 색상 */
}
```

### 내용 수정
`index.html` 파일에서 텍스트와 내용을 직접 수정할 수 있습니다.

## 기술 스택

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome (아이콘)

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

MIT License

