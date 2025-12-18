document.addEventListener('DOMContentLoaded', () => {
    
    // 1. كود القائمة للموبايل (زي ما هو)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 2. كود الأنيميشن (المعدل للتكرار)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // لما العنصر يظهر في الشاشة
                entry.target.classList.add('show'); 
            } else {
                // التعديل هنا: لما العنصر يخرج من الشاشة
                entry.target.classList.remove('show'); 
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
});