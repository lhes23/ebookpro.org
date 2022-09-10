(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[52],{135:function(e,t,s){"use strict";var a=s(0);s(191),t.a=()=>Object(a.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},191:function(e,t){},201:function(e,t,s){"use strict";s.d(t,"b",(function(){return Y})),s.d(t,"a",(function(){return L}));var a=s(0),n=s(61),c=s(7);let r,o;!function(e){e.PRISTINE="pristine",e.STARTED="started",e.PROCESSING="processing",e.ERROR="has_error",e.FAILED="failed",e.SUCCESS="success",e.COMPLETE="complete"}(r||(r={})),function(e){e.SET_REGISTERED_PAYMENT_METHODS="set_registered_payment_methods",e.SET_REGISTERED_EXPRESS_PAYMENT_METHODS="set_registered_express_payment_methods",e.SET_SHOULD_SAVE_PAYMENT_METHOD="set_should_save_payment_method",e.SET_ACTIVE_PAYMENT_METHOD="set_active_payment_method"}(o||(o={}));const i={currentStatus:r.PRISTINE,shouldSavePaymentMethod:!1,activePaymentMethod:"",paymentMethodData:{payment_method:""},errorMessage:"",paymentMethods:{},expressPaymentMethods:{}},d={setPaymentStatus:()=>({pristine:()=>{},started:()=>{},processing:()=>{},completed:()=>{},error:e=>{},failed:(e,t)=>{},success:(e,t)=>{}}),currentStatus:{isPristine:!0,isStarted:!1,isProcessing:!1,isFinished:!1,hasError:!1,hasFailed:!1,isSuccessful:!1,isDoingExpressPayment:!1},paymentStatuses:r,paymentMethodData:{},errorMessage:"",activePaymentMethod:"",activeSavedToken:"",setActivePaymentMethod:()=>{},customerPaymentMethods:{},paymentMethods:{},expressPaymentMethods:{},paymentMethodsInitialized:!1,expressPaymentMethodsInitialized:!1,onPaymentProcessing:()=>()=>()=>{},setExpressPaymentError:()=>{},isExpressPaymentMethodActive:!1,setShouldSavePayment:()=>{},shouldSavePayment:!1};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,{type:t,paymentMethodData:s,shouldSavePaymentMethod:a=!1,errorMessage:n="",paymentMethods:c={},paymentMethod:d=""}=arguments.length>1?arguments[1]:void 0;switch(t){case r.PRISTINE:return{...i,...e,errorMessage:"",currentStatus:r.PRISTINE};case r.STARTED:return{...e,currentStatus:r.STARTED};case r.ERROR:return e.currentStatus!==r.ERROR?{...e,currentStatus:r.ERROR,errorMessage:n||e.errorMessage}:e;case r.FAILED:return e.currentStatus!==r.FAILED?{...e,currentStatus:r.FAILED,paymentMethodData:s||e.paymentMethodData,errorMessage:n||e.errorMessage}:e;case r.SUCCESS:return e.currentStatus!==r.SUCCESS?{...e,currentStatus:r.SUCCESS,paymentMethodData:s||e.paymentMethodData}:e;case r.PROCESSING:return e.currentStatus!==r.PROCESSING?{...e,currentStatus:r.PROCESSING,errorMessage:""}:e;case r.COMPLETE:return e.currentStatus!==r.COMPLETE?{...e,currentStatus:r.COMPLETE}:e;case o.SET_REGISTERED_PAYMENT_METHODS:return{...e,paymentMethods:c};case o.SET_REGISTERED_EXPRESS_PAYMENT_METHODS:return{...e,expressPaymentMethods:c};case o.SET_SHOULD_SAVE_PAYMENT_METHOD:return{...e,shouldSavePaymentMethod:a};case o.SET_ACTIVE_PAYMENT_METHOD:return{...e,activePaymentMethod:d,paymentMethodData:s||e.paymentMethodData}}},u=s(1),m=s(17),p=s(30),h=s(2),S=s(47),y=s(27),E=s(46),g=s(31),b=s(29),M=s(64);const O=(e,t,s,n)=>{const[r,o]=Object(a.useState)(!1),{isEditor:i}=Object(y.a)(),{selectedRates:d}=Object(M.a)(),{billingData:l,shippingAddress:m}=Object(E.b)(),b=Object(p.a)(d),O=Object(p.a)(s),v=Object(g.a)(),{cartTotals:P,cartIsLoading:_,cartNeedsShipping:f,paymentRequirements:j}=v,R=Object(a.useRef)({cart:v,cartTotals:P,cartNeedsShipping:f,billingData:l,shippingAddress:m,selectedShippingMethods:b,paymentRequirements:j}),{createErrorNotice:T}=Object(c.useDispatch)("core/notices");Object(a.useEffect)(()=>{R.current={cart:v,cartTotals:P,cartNeedsShipping:f,billingData:l,shippingAddress:m,selectedShippingMethods:b,paymentRequirements:j}},[v,P,f,l,m,b,j]);const D=Object(a.useCallback)(async()=>{let s={};const a=e=>{s={...s,[e.name]:e}};for(let e=0;e<O.length;e++){const s=O[e],c=t[s];if(c)try{const e=!!i||await Promise.resolve(c.canMakePayment(R.current));if(e){if("object"==typeof e&&null!==e&&e.error)throw new Error(e.error.message);a(c)}}catch(e){if(h.CURRENT_USER_IS_ADMIN||i){const t=Object(u.sprintf)(
/* translators: %s the id of the payment method being registered (bank transfer, cheque...) */
Object(u.__)("There was an error registering the payment method with id '%s': ","woocommerce"),c.paymentMethodId);T(`${t} ${e}`,{context:n,id:`wc-${c.paymentMethodId}-registration-error`})}}}e(s),o(!0)},[T,e,i,n,O,t]),A=Object(S.a)(D,500,{leading:!0});return Object(a.useEffect)(()=>{_||A()},[A,v,b,l,_]),r},v=e=>({type:e}),P=e=>({type:r.ERROR,errorMessage:e}),_=e=>{let{errorMessage:t,paymentMethodData:s}=e;return{type:r.FAILED,errorMessage:t,paymentMethodData:s}},f=e=>{let{paymentMethodData:t}=e;return{type:r.SUCCESS,paymentMethodData:t}},j=e=>({type:o.SET_REGISTERED_PAYMENT_METHODS,paymentMethods:e}),R=e=>({type:o.SET_REGISTERED_EXPRESS_PAYMENT_METHODS,paymentMethods:e}),T=e=>({type:o.SET_SHOULD_SAVE_PAYMENT_METHOD,shouldSavePaymentMethod:e}),D=(e,t)=>({type:o.SET_ACTIVE_PAYMENT_METHOD,paymentMethod:e,paymentMethodData:t});var A=s(65),C=s(34),I=s(91),N=s(197);var k=s(199),w=s(194);const x=Object(a.createContext)(d),Y=()=>Object(a.useContext)(x),L=e=>{let{children:t}=e;const{isProcessing:s,isIdle:o,isCalculating:d,hasError:u}=Object(C.b)(),{isEditor:p,getPreviewData:S}=Object(y.a)(),{setValidationErrors:E}=Object(w.b)(),{createErrorNotice:g,removeNotice:M}=Object(c.useDispatch)("core/notices"),{isSuccessResponse:Y,isErrorResponse:L,isFailResponse:F,noticeContexts:H}=Object(b.d)(),[G,U]=Object(a.useReducer)(I.b,{}),{onPaymentProcessing:z}=(e=>Object(a.useMemo)(()=>({onPaymentProcessing:Object(N.a)("payment_processing",e)}),[e]))(U),B=Object(a.useRef)(G);Object(a.useEffect)(()=>{B.current=G},[G]);const[V,X]=Object(a.useReducer)(l,i),{dispatchActions:K,setPaymentStatus:$}=(e=>{const{setBillingData:t,setShippingAddress:s}=Object(A.a)();return{dispatchActions:Object(a.useMemo)(()=>({setRegisteredPaymentMethods:t=>{e(j(t))},setRegisteredExpressPaymentMethods:t=>{e(R(t))},setShouldSavePayment:t=>{e(T(t))},setActivePaymentMethod:function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(D(t,s))}}),[e]),setPaymentStatus:Object(a.useCallback)(()=>({pristine:()=>e(v(r.PRISTINE)),started:()=>e(v(r.STARTED)),processing:()=>e(v(r.PROCESSING)),completed:()=>e(v(r.COMPLETE)),error:t=>e(P(t)),failed:function(s,a){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;n&&t(n),e(_({errorMessage:s||"",paymentMethodData:a||{}}))},success:function(a){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;n&&t(n),void 0!==typeof c&&null!=c&&c.address&&s(c.address),e(f({paymentMethodData:a}))}}),[e,t,s])}})(X),q=(e=>{const t=Object(m.getPaymentMethods)(),{noticeContexts:s}=Object(b.d)(),a=new Set([...Object(h.getSetting)("paymentGatewaySortOrder",[]),...Object.keys(t)]);return O(e,t,Array.from(a),s.PAYMENTS)})(K.setRegisteredPaymentMethods),J=(e=>{const t=Object(m.getExpressPaymentMethods)(),{noticeContexts:s}=Object(b.d)();return O(e,t,Object.keys(t),s.EXPRESS_PAYMENTS)})(K.setRegisteredExpressPaymentMethods),W=Object(a.useMemo)(()=>p?S("previewSavedPaymentMethods"):q?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0===Object.keys(e).length)return{};const t=Object(h.getSetting)("customerPaymentMethods",{}),s=Object.keys(t),a={};return s.forEach(s=>{const n=t[s].filter(t=>{var s;let{method:{gateway:a}}=t;return a in e&&(null===(s=e[a].supports)||void 0===s?void 0:s.showSavedCards)});n.length&&(a[s]=n)}),a}(V.paymentMethods):{},[p,S,q,V.paymentMethods]),Q=Object(a.useCallback)(e=>{e?g(e,{id:"wc-express-payment-error",context:H.EXPRESS_PAYMENTS}):M("wc-express-payment-error",H.EXPRESS_PAYMENTS)},[g,H.EXPRESS_PAYMENTS,M]),Z=Object.keys(V.expressPaymentMethods).includes(V.activePaymentMethod),ee=Object(a.useMemo)(()=>({isPristine:V.currentStatus===r.PRISTINE,isStarted:V.currentStatus===r.STARTED,isProcessing:V.currentStatus===r.PROCESSING,isFinished:[r.ERROR,r.FAILED,r.SUCCESS].includes(V.currentStatus),hasError:V.currentStatus===r.ERROR,hasFailed:V.currentStatus===r.FAILED,isSuccessful:V.currentStatus===r.SUCCESS,isDoingExpressPayment:V.currentStatus!==r.PRISTINE&&Z}),[V.currentStatus,Z]);Object(a.useEffect)(()=>{const e=Object.keys(V.paymentMethods);if(!q||!e.length)return;const t=[...e,...Object.keys(V.expressPaymentMethods)];if(V.activePaymentMethod&&t.includes(V.activePaymentMethod))return;$().pristine();const s=Object.keys(W).flatMap(e=>W[e])[0]||void 0;if(s){const e=s.tokenId.toString(),t=s.method.gateway,a=`wc-${t}-payment-token`;K.setActivePaymentMethod(t,{token:e,payment_method:t,[a]:e,isSavedToken:!0})}else K.setActivePaymentMethod(Object.keys(V.paymentMethods)[0])},[q,V.paymentMethods,V.expressPaymentMethods,K,$,V.activePaymentMethod,W]),Object(a.useEffect)(()=>{!s||u||d||ee.isFinished||$().processing()},[s,u,d,ee.isFinished,$]),Object(a.useEffect)(()=>{o&&!ee.isSuccessful&&$().pristine()},[o,ee.isSuccessful,$]),Object(a.useEffect)(()=>{u&&ee.isSuccessful&&$().pristine()},[u,ee.isSuccessful,$]),Object(a.useEffect)(()=>{ee.isProcessing&&(M("wc-payment-error",H.PAYMENTS),Object(k.b)(B.current,"payment_processing",{}).then(e=>{let t,s;var a,n,c,r,o,i;if(e.forEach(e=>{Y(e)&&(t=e),(L(e)||F(e))&&(s=e)}),t&&!s)$().success(null===(a=t)||void 0===a||null===(n=a.meta)||void 0===n?void 0:n.paymentMethodData,null===(c=t)||void 0===c||null===(r=c.meta)||void 0===r?void 0:r.billingData,null===(o=t)||void 0===o||null===(i=o.meta)||void 0===i?void 0:i.shippingData);else if(s&&F(s)){var d,l,u,m,p,h;s.message&&s.message.length&&g(s.message,{id:"wc-payment-error",isDismissible:!1,context:(null===(h=s)||void 0===h?void 0:h.messageContext)||H.PAYMENTS}),$().failed(null===(d=s)||void 0===d?void 0:d.message,null===(l=s)||void 0===l||null===(u=l.meta)||void 0===u?void 0:u.paymentMethodData,null===(m=s)||void 0===m||null===(p=m.meta)||void 0===p?void 0:p.billingData)}else if(s){var S,y;s.message&&s.message.length&&g(s.message,{id:"wc-payment-error",isDismissible:!1,context:(null===(y=s)||void 0===y?void 0:y.messageContext)||H.PAYMENTS}),$().error(s.message),E(null===(S=s)||void 0===S?void 0:S.validationErrors)}else $().success()}))},[ee.isProcessing,E,$,M,H.PAYMENTS,Y,F,L,g]);const te="object"==typeof V.paymentMethodData&&Object(n.b)(V.paymentMethodData,"token")?V.paymentMethodData.token+"":"",se={setPaymentStatus:$,currentStatus:ee,paymentStatuses:r,paymentMethodData:V.paymentMethodData,errorMessage:V.errorMessage,activePaymentMethod:V.activePaymentMethod,activeSavedToken:te,setActivePaymentMethod:K.setActivePaymentMethod,onPaymentProcessing:z,customerPaymentMethods:W,paymentMethods:V.paymentMethods,expressPaymentMethods:V.expressPaymentMethods,paymentMethodsInitialized:q,expressPaymentMethodsInitialized:J,setExpressPaymentError:Q,isExpressPaymentMethodActive:Z,shouldSavePayment:V.shouldSavePaymentMethod,setShouldSavePayment:K.setShouldSavePayment};return Object(a.createElement)(x.Provider,{value:se},t)}},258:function(e,t,s){"use strict";var a=s(11),n=s.n(a),c=s(0),r=s(50),o=s(4),i=s.n(o),d=s(135);s(259),t.a=e=>{let{className:t,showSpinner:s=!1,children:a,variant:o="contained",...l}=e;const u=i()("wc-block-components-button",t,o,{"wc-block-components-button--loading":s});return Object(c.createElement)(r.a,n()({className:u},l),s&&Object(c.createElement)(d.a,null),Object(c.createElement)("span",{className:"wc-block-components-button__text"},a))}},259:function(e,t){},265:function(e,t){},269:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return o}));var a=s(30),n=s(201);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethods:t,expressPaymentMethods:s,paymentMethodsInitialized:c,expressPaymentMethodsInitialized:r}=Object(n.b)(),o=Object(a.a)(t),i=Object(a.a)(s);return{paymentMethods:e?i:o,isInitialized:e?r:c}},r=()=>c(!1),o=()=>c(!0)},272:function(e,t,s){"use strict";var a=s(11),n=s.n(a),c=s(0),r=s(4),o=s.n(r);const i=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var d=e=>{let{id:t,src:s=null,alt:a=""}=e;return s?Object(c.createElement)("img",{className:i(t),src:s,alt:a}):null},l=s(44);const u=[{id:"alipay",alt:"Alipay",src:l.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:l.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:l.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:l.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:l.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:l.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:l.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:l.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:l.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:l.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:l.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:l.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:l.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:l.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:l.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:l.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:l.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:l.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:l.l+"payment-methods/wechat.svg"}];var m=s(52);s(265),t.a=e=>{let{icons:t=[],align:s="center",className:a}=e;const r=(e=>{const t={};return e.forEach(e=>{let s={};"string"==typeof e&&(s={id:e,alt:e,src:null}),"object"==typeof e&&(s={id:e.id||"",alt:e.alt||"",src:e.src||null}),s.id&&Object(m.a)(s.id)&&!t[s.id]&&(t[s.id]=s)}),Object.values(t)})(t);if(0===r.length)return null;const i=o()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===s,"wc-block-components-payment-method-icons--align-right":"right"===s},a);return Object(c.createElement)("div",{className:i},r.map(e=>{const t={...e,...(s=e.id,u.find(e=>e.id===s)||{})};var s;return Object(c.createElement)(d,n()({key:"payment-method-icon-"+e.id},t))}))}},30:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(0),n=s(12),c=s.n(n);function r(e){const t=Object(a.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},372:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>Object.values(e).reduce((e,t)=>(null!==t.icons&&(e=e.concat(t.icons)),e),[])},424:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s(10),r=s(37),o=s(269),i=s(31),d=s(272),l=s(372),u=s(2),m=s(44),p=s(258),h=s(201),S=s(4),y=s.n(S);const E=()=>{const{paymentMethods:e}=Object(o.b)();return Object(a.createElement)(d.a,{icons:Object(l.a)(e)})};t.default=e=>{let{className:t}=e;const{cartTotals:s}=Object(i.a)(),o=Object(u.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(s.total_items,10)+parseInt(s.total_items_tax,10):parseInt(s.total_items,10);return Object(a.createElement)("div",{className:y()(t,"wc-block-mini-cart__footer")},Object(a.createElement)(c.TotalsItem,{className:"wc-block-mini-cart__footer-subtotal",currency:Object(r.getCurrencyFromPriceResponse)(s),label:Object(n.__)("Subtotal","woocommerce"),value:o,description:Object(n.__)("Shipping, taxes, and discounts calculated at checkout.","woocommerce")}),Object(a.createElement)("div",{className:"wc-block-mini-cart__footer-actions"},m.c&&Object(a.createElement)(p.a,{className:"wc-block-mini-cart__footer-cart",href:m.c,variant:"outlined"},Object(n.__)("View my cart","woocommerce")),m.d&&Object(a.createElement)(p.a,{className:"wc-block-mini-cart__footer-checkout",href:m.d},Object(n.__)("Go to checkout","woocommerce"))),Object(a.createElement)(h.a,null,Object(a.createElement)(E,null)))}},46:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return o}));var a=s(0),n=s(65);const c=Object(a.createContext)({isInitialized:!1,billingData:{first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",email:"",phone:""},shippingAddress:{first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},setBillingData:()=>{},setShippingAddress:()=>{}}),r=()=>Object(a.useC��e�V  ��e�V                   �V�V          PT�V  (�e�V          �e�V  �      �e�V          e:s},t)}},64:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(5),n=s(7),c=s(0),r=s(12),o=s.n(r),i=s(61),d=s(67);const l=()=>{const{shippingRates:e,needsShipping:t,hasCalculatedShipping:s,isLoadingRates:r}=Object(n.useSelect)(e=>{const t=e(a.CART_STORE_KEY);return{shippingRates:t.getShippingRates(),needsShipping:t.getNeedsShipping(),hasCalculatedShipping:t.getHasCalculatedShipping(),isLoadingRates:t.isCustomerDataUpdating()}}),{isSelectingRate:l,selectShippingRate:u}=Object(d.a)(),m=Object(c.useRef)({});return Object(c.useEffect)(()=>{const t=(e=>Object.fromEntries(e.map(e=>{var t;let{package_id:s,shipping_rates:a}=e;return[s,null===(t=a.find(e=>e.selected))||void 0===t?void 0:t.rate_id]})))(e);Object(i.a)(t)&&!o()(m.current,t)&&(m.current=t)},[e]),{isSelectingRate:l,selectedRates:m.current,selectShippingRate:u,shippingRates:e,needsShipping:t,hasCalculatedShipping:s,isLoadingRates:r}}},65:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(7),n=s(5);const c=()=>{const{customerData:e,isInitialized:t}=Object(a.useSelect)(e=>{const t=e(n.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}}),{setShippingAddress:s,setBillingData:c}=Object(a.useDispatch)(n.CART_STORE_KEY);return{isInitialized:t,billingData:e.billingData,shippingAddress:e.shippingAddress,setBillingData:c,setShippingAddress:s}}},67:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var a=s(7),n=s(0),c=s(5),r=s(72),o=s(40);const i=()=>{const e=Object(r.a)(),{dispatchCheckoutEvent:t}=Object(o.a)(),{selectShippingRate:s}=Object(a.useDispatch)(c.CART_STORE_KEY);return{selectShippingRate:Object(n.useCallback)((a,n)=>{s(a,n).then(()=>{t("set-selected-shipping-rate",{shippingRateId:a})}).catch(t=>{e(t)})},[s,t,e]),isSelectingRate:Object(a.useSelect)(e=>e(c.CART_STORE_KEY).isShippingRateBeingSelected(),[])}}},72:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=s(0);const n=()=>{const[,e]=Object(a.useState)();return Object(a.useCallback)(t=>{e(()=>{throw t})},[])}}}]);