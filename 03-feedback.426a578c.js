!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,u,f,a,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,a=setTimeout(w,t),s?y(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=p();if(O(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function S(e){return a=void 0,v&&o?y(e):(o=i=void 0,f)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(d)return a=setTimeout(w,t),y(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=h(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?f:S(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j="feedback-form-state",O=document.querySelector("form"),w={};O.addEventListener("input",e(t)((function(e){var t=e.target;w[t.name]=t.value,function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e.message)}}(j,w)}),500));var S=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.message)}}(j);if(S)for(var T in S)O.elements[T].value=S[T],w[T]=S[T];O.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),O.reset(),localStorage.removeItem(j)}))}();
//# sourceMappingURL=03-feedback.426a578c.js.map