export const scrollToSection = (sectionId: string) => {
  const ele = document.getElementById(sectionId);
  const offset = 72; // 헤더의 높이를 나타내는 값입니다.
  if (ele) {
    const elementPosition = ele.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};
