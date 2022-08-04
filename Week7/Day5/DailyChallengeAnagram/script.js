checkAnagram = (str1, str2) => {
  const s1 = str1
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
  const s2 = str2
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
  return s1 === s2
    ? `${str1} is an anagram of ${str2}`
    : `${str1} isn't an anagram of ${str2}`;
};

console.log(
  checkAnagram("Astronomer", "Moon starer")
);
