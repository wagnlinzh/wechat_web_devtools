'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(){return{envList:[],currentEnv:{},functionData:{},command:{},scfMapInEnv:{},fileMapInEnv:{}}}const{REHYDRATE:b}=require('redux-persist/lib/constants'),c=require('./5321b622f9bab971490e99e09b2389a9.js'),d=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('lodash');module.exports=function(b=a(),c){switch(c.type){case d.TCB_SET_ENV_LIST:return _extends({},b,{envList:c.data});case d.TCB_SELECT_ENV:{let a=b.envList[c.data];return a?_extends({},b,{currentEnv:a}):b}case d.TCB_CONSOLE_COMMAND:return _extends({},b,{command:c.data});case d.TCB_SET_SCF_LIST:{let a=b.scfMapInEnv[c.data.namespace]||{};return c.data.list.forEach((b)=>{b.modTimestamp=new Date(b.ModTime).getTime(),b.updateKey=c.data.updateKey,a[b.FunctionName]=b}),_extends({},b,{scfMapInEnv:_extends({},b.scfMapInEnv,{[c.data.namespace]:a})})}case d.TCB_CLEAN_SCF_LIST:{let a=b.scfMapInEnv[c.data.namespace]||{},d={};for(let b in a)a[b].updateKey==c.data.updateKey&&(d[b]=a[b]);return _extends({},b,{scfMapInEnv:_extends({},b.scfMapInEnv,{[c.data.namespace]:d})})}case d.TCB_SET_FILE:{let a=b.fileMapInEnv[c.data.namespace]||{};return _extends({},b,{fileMapInEnv:_extends({},b.fileMapInEnv,{[c.data.namespace]:_extends({},a,{[c.data.functionName]:c.data.fileList})})})}default:return b;}}}(require('lazyload'),require);