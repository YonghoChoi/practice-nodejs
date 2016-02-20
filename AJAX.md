# Ajax

* Ajax는 비동기 통신만을 의미하는 것이 아니다.
  * Asynchronous JavaScript + CSS + DOM + XMLHttpRequest

## 요소 기술 역할

* XHTML과 CSS를 사용하여 표준을 준수한 프레젠테이션
* DOM을 사용하여 동적 표시 및 상호작용
* XML과 XLST로 데이터 변환 및 제어
* XMLHttpRequest를 사용하여 비동기로 데이터 송수신
* Javascript로 상기 기술의 결합
* [Ajax: A New Approach to Web Applications] 참고

## XMLHttpRequest

* [XHL spec]

* 정의
  * 클라이언트와 서버 간에 데이터 전송을 위해 클라이언트에 스크립트 기능을 제공하는 API
  * XMLHttpRequest에서 XML은 과거에 사용한 것으로 특별한 의미 없음.

* SOP(Same Origin Policy)
  * 콘텐츠 source가 같은 URL에만 접근 가능
  * XMLHttpRequest는 SOP에 영향을 받음

## onreadystatechange

* readyState 속성 값이 바뀔 때마다 핸들러 함수 호출
  * UNSENT = 0
    * open() 하지 않은 상태
  * OPENED = 1
    * send() 하지 않은 상태
  * HEADERS_RECEIVED = 2
    * send() 실행. Header와 status를 받은 상태
  * LOADING = 3
    * 다운로드 중인 상태 (responseText에 부분적으로 데이터가 있음)
  * DONE = 4
    * 통신을 완료한 상태
* 동기에서는 사용 불가


[Ajax: A New Approach to Web Applications]: http://adaptivepath.org/ideas/ajax-new-approach-web-applications/
[XHL spec]: http://xhr.spec.whatwg.org
