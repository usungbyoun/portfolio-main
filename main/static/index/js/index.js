window.addEventListener("load", function() {
    const loadingScreen = document.querySelector(".loading-background");
    const html = document.querySelector('html');

    // 로딩 화면을 숨기고 메인 콘텐츠를 보이도록 설정
    setTimeout(function () {
      loadingScreen.style.opacity = '0'; //서서히 사라지는 효과
      loadingScreen.style.display = 'none';
    }, 200);
});


window.addEventListener("load", function() {
    const sections = document.querySelectorAll(".common-section");
  
    // Intersection Observer 생성 - 각 섹션이 화면에 보일 때 이전 섹션들과 함께 애니메이션 적용
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionIndex = Array.from(sections).indexOf(entry.target);
  
                // 현재 섹션과 그 이전 섹션들까지 모두 활성화
                for (let i = 0; i <= sectionIndex; i++) {
                    sections[i].classList.add("active");
                    observer.unobserve(sections[i]); // 이미 활성화된 섹션은 다시 관찰하지 않음
                }
            }
        });
    }, { threshold: 0.01 }); // 요소의 1%만 보여도 실행
  
    // 각 섹션에 대해 observer 연결
    sections.forEach((section) => {
        observer.observe(section); // IntersectionObserver에 섹션 등록
    });
  });
  