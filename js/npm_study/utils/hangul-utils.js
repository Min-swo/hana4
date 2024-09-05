export default isEndJaum = (str) => {
  const val = str.charCodeAt(str.length - 1);
  // ㄱ ~ ㅎ => true
  if ("ㄱ".charCodeAt(0) <= val && val <= "ㅎ".charCodeAt(0)) return true;
  // ㅏ ~ ㅣ => false
  else if ("ㅏ".charCodeAt(0) <= val && val <= "ㅣ".charCodeAt(0)) return false;
  // Not Hanguel
  else if ("가".charCodeAt(0) > val || val > "힣".charCodeAt(0)) {
    // Number
    if (48 <= val && val <= 57) {
      // 2, 4, 5, 9 => false
      if (val == 50 || val == 52 || val == 53 || val == 57) return false;
      return true;
    }
    // English[A-Z]
    else if (65 <= val && val <= 90) {
      // L M N R => true
      if (val == 76 || val == 77 || val == 78 || val == 82) return true;
      else return false;
    }
    // English[a-z]
    else if (97 <= val && val <= 122) {
      // l m n r => true
      if (val == 108 || val == 109 || val == 110 || val == 114) return true;
      else return false;
    }
  }
  // 가 ~ 힣
  else if ("가".charCodeAt(0) <= val && val <= "힣".charCodeAt(0)) {
    // 모음으로 끝남 => false
    if ((val - "가".charCodeAt(0)) % 28 == 0) return false;
    return true;
  }
  return false;
};

const iga = (str) => {
  return isEndJaum(str) ? "이" : "가";
};

const eunun = (str) => {
  return isEndJaum(str) ? "은" : "는";
};

const eulul = (str) => {
  return isEndJaum(str) ? "을" : "를";
};

export { iga, eunun, eulul };
