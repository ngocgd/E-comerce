const convertAnswer = (val) => {
    const yes = ['Yes', 'হ্যাঁ', 'ஆம்', 'Ada', '有', 'ဟုတ္ကဲ႕', 'เคย']
    const no = ['No', 'না', 'இல்லை', 'Tidak Ada', '没有', 'မဟုတ္ပ', 'ไม่เคย']
    const dont = ['Don\'t know', 'অজ্ঞাত', 'অজ্ঞাত', 'Tidak Tahu', '不知道', 'မသိပါ', 'ไม่ทราบ', 'Unknown']
  
    for (let i = 0; i <= yes.length - 1; i++) {
      if (yes[i] === val) {
        return yes[0]
      }
    }
  
    for (let i = 0; i <= no.length - 1; i++) {
      if (no[i] === val) {
        return no[0]
      }
    }
  
    for (let i = 0; i <= dont.length - 1; i++) {
      if (dont[i] === val) {
        return dont[0]
      }
    }
  }
  
  const removeSpaceString = (str) => {
    return str.replace(/\s/g, ""); //delete all space
    // return str.replace(/\s+/, " ");    // delete space more than 1
  }
  
  const validateEmailWithoutSpecial = (email) => {
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }
  
  const blackListInputNumber = (e) => {
    // Allow: backspace, delete, tab, escape, enter and .
    if ([46, 8, 9, 27, 13, 110].includes(e.keyCode)
      // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
      || ((e.keyCode === 65 || e.keyCode === 86 || e.keyCode === 67) && (e.ctrlKey === true || e.metaKey === true))
      // Allow: home, end, left, right, down, up
      || (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      return true
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      return false
    }
    return true
  }
  
  function formatWeight(
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ","
  ) {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;
  
      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
          : "")
      );
    } catch (error) {
      alert(error || error?.message)
    }
  }
  
  const LIMIT_PAGE = 30
  const LIMIT_PAGE_MODAL = 5
  const LIMIT_PAGE_MAX = 999999999
  
  const convertToSlug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();
  
    // xóa dấu
    str = str
      .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
      .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
  
    // Thay ký tự đĐ
    str = str.replace(/[đĐ]/g, 'd');
  
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
  
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
  
    // Xóa ký tự - liên tiếp
    str = str.replace(/-+/g, '-');
  
    // xóa phần dư - ở đầu & cuối
    str = str.replace(/^-+|-+$/g, '');
  
    // return
    return str;
  }
  export {
    convertAnswer,
    removeSpaceString,
    blackListInputNumber,
    validateEmailWithoutSpecial,
    formatWeight,
    convertToSlug,
    LIMIT_PAGE,
    LIMIT_PAGE_MAX,
    LIMIT_PAGE_MODAL
  }