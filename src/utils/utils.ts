export function numberToChinese(num: number): string {
    const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units = ['', '十', '百', '千'];
    const decades = ['万', '亿', '兆'];
  
    if (num === 0) return chineseNumbers[0];
    if (num < 0) return '负' + numberToChinese(-num);
  
    let str = '';
    let unitIndex = 0;
    let section = 0;
  
    while (num > 0) {
      let v = num % 10;
      if (v !== 0) {
        const part = chineseNumbers[v] + units[unitIndex];
        str = part + str;
      } else if (str !== '') {
        str = chineseNumbers[0] + str;
      }
      num = Math.floor(num / 10);
      unitIndex++;
    }
  
    str = str.replace(/一十/, '十');
    str = str.replace(/零+/g, '零'); // 合并连续的零
    str = str.replace(/零(千|百|十)/g, '$1'); // 修复零的问题
    str = str.replace(/零+/g, '零'); // 再次合并连续的零
    str = str.replace(/一十/g, '十'); // 修复11-19的问题
  
    // 添加万、亿、兆单位
    const sectionSizes = [1, 4, 8];
    let sectionStr = '';
    for (let i = 0; i < sectionSizes.length; i++) {
      if (str.length > sectionSizes[i]) {
        sectionStr += decades[section - 1] + str;
        str = '';
        section++;
      }
    }
  
    return sectionStr + str;
  }


  export function stringToHtml(text:string):string{
    
    // 替换加粗文本
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // 替换超链接
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
        return `<a href="${p2}" style="color: rgb(54, 173, 106);" target="_blank">${p1}</a>`;
    });

    // 返回HTML字符串
    return html;
  }