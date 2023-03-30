# 23-React1 이호영

<h1>2023-03-30 5주차 수업</h1><br>

### 엘리먼트 정의
- 엘리먼트는 리액트 앱을 구성하는 요소
- 웹사이트 경우 DOM 엘리먼트이며 HTML요소를 의미
  
### 엘리먼트와 DOM엘리먼트 차이
- 리엑트 엘리먼트는 Virtual DOM 형태를 취함
- DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁다.
- 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍다.

### 엘리먼트의 생김새
- 리액트 엘리먼트는 JSP 객체의 형태로 존재
- 컴포넌트, 속성 및 내부의 childern을 포함하는 일반 JS객체
- 이 객체는 마음대로 변경할 수 없는 불변성을 가짐.

### DOM 엘리먼트를 사용하여 현재시간 출력(1초마다 초기화)
1. 폴더 만들고 html 파일 만들기
2. react 사이트에서 코드 복붙 <img src = "image/0330.1.PNG">


<h1>2023-03-23 4주차 수업</h1><br>

### github repositories 새로 만들기
  1. README.md 백업
  2. local에 있는 저장소 이름 바꾸기/삭제
  3. 새 프로젝트 생성(23-React1)
  4. README.md 덮어쓰기
  5. GitHub 저장소 삭제
  6. 로컬에서 23-React1 push
  7. GitHub 저장소 확인 <br>
   <img src = "image/0323.1.PNG"> <br>
### 명령어
- git init
- git remote add origin 깃허브 내주소
- git commit -m "멘트"
- git branch -M main
- git push origin main 

### JSX란?
- JavaScript에 XML을 추가한 확장 문법
- JSX는 XML/HTML 코드를 자바스크립트로 변환
- React가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해줌

### JSX의 장점
- 코드가 간결해짐.
- 가독성이 향상됨.
- Injection Attack 해킹 방법을 방어함으로서 보안에 강함.

### JSX 사용법
- 모든 자바스크립트 문법 지원.
- 자바스크립트 문법에 XML/HTML을 섞어 사용.
- HTML/XML에 자바스크립트 코드를 사용할시 {}괄호를 사용.
   
<h1>2023-03-16 3주차 수업</h1><br>
1.개발 환경 설정 <br>
1. Node.js, npm 설치 <br>
   
Git Bash에서 Node 버전 확인<br>
node --version == node -v<br>
npm -v<br>

### 1. React(리액트) 
- 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리<br>
### 2. React 장점 
- 빠른 업데이트와 렌더링 속도<br>

### 3. 컴포넌트 기반 구조<br>
- file 이름 컴포넌트 이름과 동일하게<br>
- Pascal Case - 첫번째 문자는 대문자<br>
- camel Case - 각 단어의 첫문자를 대문자로 표기하되, 맨처음 문자는 소문자<br>
- 리액트의 모든 페이지는 컴포넌트로 구성
- 컴포넌트를 조합해서 웹사이트를 개발

### 4. 재사용성
- 반복적인 작업을 줄여줘 생산성을 높임
- 유지보수 용이
- 재사용이 가능 하면 해당 모듈의 의존성X

### 5. npx 설치
- 내 폴더에 my-app 설치<br>
- npx create-react-app my-app 




<hr>
2023-03-11수업 2주차<br>
1.깃허브 설치<br>
2.깃허브 가입<br>
레파지토리생성(23-React1)<br>
+버튼을 눌러버렸을 상태로 변경> commit 확인여부 확인 후 깃에 올라감.<br>
commit 사용 이유 > 지금 까지 했던 작업을 잊지 않기 위해 <br>
(어떤 시점에서 어느 파일을 adding 했는가를 확인 하기 위해 commit)<br>
commit comment는 50byte가 원칙 <br>
폴더 디렉토리 들어가서 git clone (복사 링크 붙여넣기)<br>

1. 이호영 <br>
2. 2023-03-16 <br>
3. 학습 내용(필수) : h2이하 사이즈 자유 사용 <br>
4. 작성 코드(선택) <br>
5. 최근 내용이 위에 오도록 작성 <br>
6. 날자 별 구분이 잘 가도록 작성
>>>>>>> 3996c6c43d88c4775b8de747e1021d0853b5a362
