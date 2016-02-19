"use strict";

function _copyArray(src: any[], recursive): any[] {
    let res = new Array(src.length);
    src.forEach(function(item, index) {
        if (recursive && Array.isArray(item)) {
            res[index] = _copyArray(item, true);
        } else if (recursive && typeof item === 'object') {
            res[index] = _copyObject(item, true);
        } else
            res[index] = item;
    });
    return res;
}


function _copyObject(src: any, recursive): any {
    if (!recursive && Object.assign)
        return Object.assign({}, src);
    let res = {};
    Object.keys(src).forEach(function(pn) {
        let item = src[pn];
        if (recursive && Array.isArray(item)) {
            res[pn] = _copyArray(item, true);
        } else if (recursive && typeof item === 'object') {
            res[pn] = _copyObject(item, true);
        } else
            res[pn] = item;
    });
    return res;
}

function _clone(src: any, recursive: boolean): any {
    if (!src) return src;
    if (Array.isArray(src)) {
        return _copyArray(src, recursive);
    } else if (typeof src === 'object') {
        return _copyObject(src, recursive);
    } else
        return src;
}

function path2value(value: any, path: string) {
   if (!path) return value;
   let segments = path.split('.');
   let v = value;
   for(let segment of segments) {
       if (v === undefined || v === null) return null;
       if (typeof v !== 'object') return null;
       v = v[segment];
   }   
   return v; 
} 

function updValue(obj: any, path: string, value: any) {
   let segments = path.split('.');
   let lastSegment = segments.pop();
   let v = obj;
   for(let segment of segments) {
       if (v === undefined || v === null) return;
      v = v[segment];
   }   
   if (v) v[lastSegment] =  value; 
} 


export var utils = {
    clone: _clone,
    value: path2value,
    setValue: updValue
}