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





