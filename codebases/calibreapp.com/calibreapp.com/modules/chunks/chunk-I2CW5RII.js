import{a as y,b as h,c as O,d as v}from"./chunk-EHER635N.js";import{a as p}from"./chunk-D3V43LVN.js";import{a as b}from"./chunk-M5TAP4VX.js";import{a as f,b as T,f as B,i as Q}from"./chunk-ORNWO27Z.js";var r=B(Q());var A=(0,r.createContext)({}),k=({children:m})=>{let[a,n]=(0,r.useState)(null),[g,t]=(0,r.useState)(null),[l,u]=(0,r.useState)(null),[S,o]=(0,r.useState)(null),[d,i]=(0,r.useState)(null),{data:E,loading:M}=b(y),[x]=p(h,{onCompleted:e=>{let{organisation:s}=e||{};s&&(n(s),i(s.membership),o(null))},onError:e=>o({type:"Organisation",error:e}),fetchPolicy:"cache-and-network"}),[P]=p(O,{onCompleted:e=>{let{team:s}=e||{};s&&(t(s),n(s.organisation),i(s.organisation.membership),o(null))},onError:e=>o({type:"Team",error:e})}),[I]=p(v,{onCompleted:e=>{let{team:s}=e||{};s&&(t(s),n(s.organisation),i(s.organisation.membership),u(s.site),o(null))},onError:e=>o({type:"Site",error:e})}),C=({orgId:e})=>{x({variables:{orgId:e}})},G=({teamId:e})=>{P({variables:{teamId:e}})},K=({teamId:e,siteId:s})=>{I({variables:{teamId:e,siteId:s}})};if(M)return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{height:"60px",backgroundColor:"rgb(4,20,82)"}}),r.default.createElement("div",{style:{height:"calc(100vh - 60px - 48px - 15px)"}}));let{currentUser:c}=E||{};return r.default.createElement(A.Provider,{value:{currentUser:c,error:S,membership:d,memberships:(c==null?void 0:c.memberships)||[],organisation:a,setOrganisation:C,team:g,setTeam:G,site:l,setSite:K}},m)},z=()=>{var d;let m=(0,r.useContext)(A),{currentUser:a,organisation:n,memberships:g,membership:t,error:l}=m,u=((t==null?void 0:t.scopes)||[]).map(({tag:i})=>i),{slug:S}=(t==null?void 0:t.organisation)||(l==null?void 0:l.type)!=="Organisation"&&n||((d=g[0])==null?void 0:d.organisation)||{},{role:o}=t||g[0]||{role:"member"};return T(f({},m),{error:l,currentUser:a,organisation:n,currentOrganisationId:S,currentRole:o,membership:g.find(({uuid:i})=>i===(t==null?void 0:t.uuid)),teams:(t==null?void 0:t.teams)||(n==null?void 0:n.teams)||[],permissions:u,can:i=>(a==null?void 0:a.staff)||u.includes(i),features:(n==null?void 0:n.features)||(a==null?void 0:a.features)||[]})},J=k;export{z as a,J as b};
//# sourceMappingURL=chunk-I2CW5RII.js.map