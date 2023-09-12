# Node.js 14 버전을 기반으로하는 공식 이미지를 사용합니다.
FROM node:18.17.1

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드를 컨테이너로 복사
COPY . .

# 앱 의존성 설치
RUN npm install

# 앱 빌드
RUN npm run build

# 앱 실행 (포트 80에서 실행)
CMD ["npm", "start"]