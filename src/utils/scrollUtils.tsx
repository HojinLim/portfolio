export const scrollToSection = (sectionId: string) => {
  const header = document.getElementById('header')

  const ele = document.getElementById(sectionId)
  const offset = header?.offsetHeight // 헤더의 높이를 나타내는 값입니다.
  if (ele) {
    const elementPosition = ele.offsetTop - offset!
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤 효과
  })
}
