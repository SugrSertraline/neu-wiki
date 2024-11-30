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


  // export function stringToHtml(text:string):string{
  //   // 替换加粗文本
  //   let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  //   // 替换超链接
  //   html = html.replace(/\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
  //       return `<a href="${p2}" style="color: rgb(54, 173, 106);" target="_blank">${p1}</a>`;
  //   });
  //   html = html.replace(/\\/g, '<br/>');
  //   // 返回HTML字符串
  //   return html;
  // }
  export function stringToHtml(text: string): string {
    // 用正则匹配出 $$ 开始 $$ 结束的部分
    const formulaRegex = /\$\$(.*?)\$\$/g;
    let formulas: string[] = [];
    let tempText = text;
  
    // 提取公式部分并替换为占位符
    tempText = tempText.replace(formulaRegex, (match) => {
      formulas.push(match);  // 保存公式
      return `{{formula-${formulas.length - 1}}}`;  // 使用占位符替代公式
    });
  
    // 替换加粗文本
    let html = tempText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
    // 替换超链接
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
      return `<a href="${p2}" style="color: rgb(54, 173, 106); line-height: 16px;" target="_blank">${p1}</a>`;
    });
    
  
    // 替换换行符
    html = html.replace(/\\/g, '<br/>');
  
    // 恢复公式内容到占位符的位置
    formulas.forEach((formula, index) => {
      const formulaPlaceholder = `{{formula-${index}}}`;
      html = html.replace(formulaPlaceholder, formula);  // 恢复公式
    });
  
    // 返回最终的HTML字符串
    return html;
  }
  
  // cookie.ts
export function setCookie(name: string, value: string, days: number): void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function getCookie(name: string): string | undefined {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return undefined;
}