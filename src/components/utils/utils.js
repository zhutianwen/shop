export function debounce(func,delay){
    let timer = null
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

export function transNumber(num,point){
    var numStr = num.toString()
     // 千元以内直接返回
     if (numStr.length < 5) {
     return numStr;
     }
      //大于8位数是亿
     else if (numStr.length > 8) {
     var decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
     return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
     }
      //大于4位数是万 
     else if (numStr.length > 4) {
     var decimal = numStr.substring(numStr.length - 3, numStr.length - 3 + point)
     return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
     }
  }

  export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};  
function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};



