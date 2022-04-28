# app-vue

### 2022-04-20
```
vue는 컴포넌트 구조이다.
vue 컴포넌트는 vue 인스턴스에 의해 라이프싸이클을 통해서 생성 소멸을 관리 한다.

vue 라이프 사이클
생성 : 부모 컴포넌트가 생성이 되고 자식 컴포넌트를 생성, 탬플릿을 패치 후에 부모 컴포넌트의 템플릿이 패치가 된다.
소멸 : 부모 컴포넌트가 소멸이 시작하면 자식 컴포넌트를 소멸 후에 부모 컴포넌트도 소멸을 완료 한다.

vue Lifecycle Hooks
    beforeCreate()
    created()
    beforeMount()
    mounted()
    beforeUpdate()
    updated()
    beforeUnmount()
    unmounted()
  
vue Component Hooks
    methods
    computed
    components
    watch
    data()

vue directive
    v-if
    v-for
    v-text
    v-show
    v-bind => :
    v-on => @
```

### 2022-04-25
```
1. entry 파일 분석

2. entry 파일의 vue 생성자에서 store를 선언하는 방법 
제일 먼저 읽는 main.js에서 vue 인스턴스에 store를 모듈로 가져온다.

```
