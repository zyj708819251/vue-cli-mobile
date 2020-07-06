// JS特殊字符过滤，防止xss和sql注入
export function stripscript (s) {
  var pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") // 格式 RegExp("[在中间定义特殊过滤字符]")
  var rs = ''
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '')
  }
  return rs
}

// 判断字符串是否为空
export function isNull (str) {
  return str == null || str.length === 0 || str === ''
}
