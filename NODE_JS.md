# Node.js

## 환경

```
node.js 설치
npm install -g node-inspector
npm install express, body-parser, socket.io, ws, multer, corser
```

## 개요

* 네트워크 애플리케이션 플랫폼
* 싱글 스레드
  * 하나의 스레드로 scalable에 대응
* 비동기 I/O
* 이벤트 처리
  * 비동기 방식에 대한 처리가 끝나면 이벤트를 발생시켜 통지.

## 구성

* Node.js 엔진
* 자바스크립트 엔진 : 구글 V8
* 비동기 I/O 처리 : Libuv

## 개발 언어

* C++
* node.js 프로젝트를 컴파일하려면 Python 필요

## node.js의 효율적인 사용

* 작은 데이터, 짧은 처리
  * 채팅, IoT 등
* 고려 사항
  * 데이터 복사 또는 긴 시간의 batch처리와 같이 지속적인 연결 처리에는 효율이 떨어짐.

## 메시지

* 시작 줄
  * 요청 : URL, address, method(Get, Post)
  * 응답 : status

* 헤더
  * 요청 : Accept, Cache-Control, Cookie, User-Agent 등
  * 응답 : Content-Encoding, Content-Type 등

## 참고

* promise : 자바스크립트로 비동기 처리 지원
  * html5에서는 클라이언트와 서버간 통신이 아닌 로컬에서의 처리도 비동기 처리 지원되는 기능들이 많이 포함되어 있다.
  * 이러한 비동기 처리를 쉽게 해줄 수 있도록 해주는 것이 promise

* HTTP
  * 웹 브라우저와 웹 서버 사이의 콘텐츠 송수신 프로토콜 (TCP/IP)

* 기술 결합
  * XMLHttpRequest, promise, bind
    * 모든 처리를 비동기
