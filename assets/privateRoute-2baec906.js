import{u as e,j as r,c as n}from"./index-9d24a4f4.js";import{useAuth as u}from"./authProvider-defeb3b5.js";function m({children:o}){const a=u(),t=e();return a.user===null?r.jsx(n,{to:"/login",state:{from:t.pathname,path:t.pathname},replace:!0}):o}export{m as PrivateRoute};