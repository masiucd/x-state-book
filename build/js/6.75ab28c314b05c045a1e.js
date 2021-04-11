(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(113),l=n(111),r=n(11),c=n(17);var o=(e,t)=>{const[n,a]=Object(i.d)((()=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return console.error(e),t}}));return{storedValue:n,setValue:t=>{try{const i=t instanceof Function?t(n):t;a(i),localStorage.setItem(e,JSON.stringify(i))}catch(e){console.error(e)}}}};var s=(e="theme",t="light")=>{const{storedValue:n,setValue:a}=o(e,t);return Object(i.c)((()=>{document.body.dataset.theme=n}),[n]),{storedTheme:n,setTheme:a,handleTheme:()=>{a("light"===n?"dark":"light")}}},h=n(114);const m=c.a.div`
  min-width: 20em;
  padding: 1em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  .btns {
    display: flex;
  }
`,d=Object(l.b)({id:"theme",initial:"hidden",states:{hidden:{on:{TURN_ON:{target:"visible.hist"}}},visible:{initial:"light",states:{light:{on:{SWITCH:{target:"dark"}}},dark:{on:{SWITCH:{target:"light"}}},hist:{type:"history"}},on:{TURN_OFF:{target:"hidden"}}}}}),b=({isAnimating:e,switchThemeHandler:t})=>i.b.createElement(r.a,null,e&&i.b.createElement(r.b.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},layout:!0},i.b.createElement("button",{onClick:t},"Switch theme ")));t.default=()=>{const[e,t]=Object(a.a)(d),n=e.matches("visible"),l=e.matches("visible.dark"),{setTheme:r}=s("theme");return i.b.createElement(h.a,null,i.b.createElement(m,null,i.b.createElement("h1",null,"Theme toggler"),i.b.createElement(b,{isAnimating:n,switchThemeHandler:()=>{t("SWITCH"),r(l?"dark":"light")}}),i.b.createElement("div",{className:"btns"},i.b.createElement("button",{type:"button",onClick:()=>t("TURN_ON")},"open"),i.b.createElement("button",{type:"button",onClick:()=>t("TURN_OFF")},"Close"))))}}}]);