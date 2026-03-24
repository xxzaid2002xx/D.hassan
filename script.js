const translations = {
    ar: {
        pageTitle: "عيادة الدكتور حسن سلمان الطائي لزراعة الشعر",
        navLogo: "عيادة د. حسن الطائي",
        navBookBtn: "احجز موعدك",
        heroBadge: "العيادة رقم #1 في العراق",
        heroTitle: "عيادة الدكتور حسن سلمان الطائي لزراعة الشعر",
        heroSubtitle: "نستعيد ثقتك بمظهر طبيعي وكثافة عالية تدوم مدى الحياة، باستخدام أحدث التقنيات العالمية.",
        feat1: '<i class="fas fa-check-circle"></i> خبرة أكثر من ٨ سنوات',
        feat2: '<i class="fas fa-check-circle"></i> تقنيات حديثة ونتائج مضمونة',
        heroBtn1: "استشارة مجانية",
        heroBtn2: "شاهد النتائج",
        locationText: "بغداد / المنصور",
        expTitle: "إشراف طبي",
        expSub: "د. حسن الطائي",
        whyUsTitle: "لماذا تختار عيادتنا؟",
        why1Title: "ضمان مدى الحياة",
        why1Desc: "نقدم شهادة ضمان معتمدة بنجاح الزراعة وعدم تساقط الشعر المزروع أبداً.",
        why2Title: "رعاية متكاملة",
        why2Desc: "متابعة مستمرة بعد العملية لمدة عام كامل لضمان أفضل النتائج.",
        why3Title: "مظهر طبيعي 100%",
        why3Desc: "رسم خط الشعر الأمامي بدقة ليتناسب مع ملامح الوجه وعمر المريض.",
        servicesTitle: "أحدث تقنيات الزراعة",
        tech1: "تقنية السفير (Sapphire FUE)",
        tech1Desc: "استخدام أقلام السفير لفتح القنوات، مما يقلل من فترة التعافي ويزيد من كثافة الزراعة بشكل كبير.",
        tech2: "تقنية أقلام تشوي (DHI)",
        tech2Desc: "زراعة البصيلات مباشرة دون فتح قنوات مسبقة، مثالية لتكثيف الشعر وتحديد اللحية.",
        galleryTitle: "نتائج غيرت حياة عملائنا",
        case1: "حالة زراعة شعر الرأس - ٤٠٠٠ بصيلة",
        case2: "حالة تكثيف الخط الأمامي",
        contactTitle: "تواصل معنا الآن",
        contactDesc: "احجز استشارتك المجانية، وسيقوم فريقنا الطبي بالتواصل معك للإجابة على كافة استفساراتك وتقييم حالتك.",
        phoneLabel: "رقم الهاتف",
        timeLabel: "أوقات العمل",
        timeValue: "يومياً من 10 صباحاً إلى 8 مساءً",
        formTitle: "طلب استشارة مجانية",
        submitBtn: "تأكيد الحجز",
        footerText: 'صمم هذا الموقع بواسطة شركة <strong>codex</strong> للتواصل <a href="https://wa.me/9647715204894" class="codex-link" target="_blank">اضغط هنا</a>'
    },
    en: {
        pageTitle: "Dr. Hasan Salman Al-Tai Clinic",
        navLogo: "Dr. Hasan Clinic",
        navBookBtn: "Book Now",
        heroBadge: "The #1 Clinic in Iraq",
        heroTitle: "Dr. Hasan Salman Al-Tai Hair Transplant Clinic",
        heroSubtitle: "We restore your confidence with a 100% natural look and high density that lasts a lifetime using global technologies.",
        feat1: '<i class="fas fa-check-circle"></i> Over 8 years of experience',
        feat2: '<i class="fas fa-check-circle"></i> Modern tech & guaranteed results',
        heroBtn1: "Free Consultation",
        heroBtn2: "View Results",
        locationText: "Baghdad / Al-Mansour",
        expTitle: "Medical Supervision",
        expSub: "Dr. Hasan Al-Tai",
        whyUsTitle: "Why Choose Us?",
        why1Title: "Lifetime Guarantee",
        why1Desc: "We provide a certified guarantee that transplanted hair will never fall out.",
        why2Title: "Complete Care",
        why2Desc: "Continuous follow-up for a full year after the procedure to ensure the best results.",
        why3Title: "100% Natural Look",
        why3Desc: "Precise drawing of the front hairline to suit the patient's facial features.",
        servicesTitle: "Latest Technologies",
        tech1: "Sapphire FUE Technique",
        tech1Desc: "Using sapphire blades to open channels, reducing recovery time and maximizing density.",
        tech2: "DHI (Choi Pens)",
        tech2Desc: "Direct hair implantation without prior channels, ideal for density and beard transplants.",
        galleryTitle: "Life-Changing Results",
        case1: "Hair Transplant - 4000 Grafts",
        case2: "Frontal Hairline Density",
        contactTitle: "Contact Us Now",
        contactDesc: "Book your free consultation, and our medical team will contact you to answer all your questions.",
        phoneLabel: "Phone Number",
        timeLabel: "Working Hours",
        timeValue: "Daily from 10 AM to 8 PM",
        formTitle: "Request Free Consultation",
        submitBtn: "Confirm Booking",
        footerText: 'Designed by <strong>codex</strong>. To contact <a href="https://wa.me/9647715204894" class="codex-link" target="_blank">Click Here</a>'
    }
};

let currentLang = 'ar';
const langToggleBtn = document.getElementById('langToggle');

function updateContent(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            // استخدام innerHTML للفوتر والمميزات لدعم الروابط والايكونات
            if (id === 'feat1' || id === 'feat2' || id === 'footerText') {
                el.innerHTML = translations[lang][id];
            } else {
                el.innerText = translations[lang][id];
            }
        }
    });

    document.getElementById('inputName').placeholder = lang === 'ar' ? 'الاسم الكامل' : 'Full Name';
    document.getElementById('inputPhone').placeholder = lang === 'ar' ? 'رقم الهاتف' : 'Phone Number';
    document.getElementById('inputMessage').placeholder = lang === 'ar' ? 'رسالتك أو استفسارك (اختياري)' : 'Your message (Optional)';
    document.getElementById('formSuccess').innerText = lang === 'ar' ? 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.' : 'Request sent successfully! We will contact you soon.';

    const socialBar = document.querySelector('.floating-social');
    const socialLinks = socialBar.querySelectorAll('a');

    if (lang === 'en') {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        document.body.style.fontFamily = "'Roboto', sans-serif";
        document.querySelector('.floating-card').style.right = 'auto';
        document.querySelector('.floating-card').style.left = '-30px';
        document.querySelector('.whatsapp-btn').style.right = 'auto';
        document.querySelector('.whatsapp-btn').style.left = '30px';
        
        // تعديل اتجاه السوشيال ميديا للإنجليزية
        socialBar.style.left = 'auto';
        socialBar.style.right = '0';
        socialLinks.forEach(link => { link.style.borderRadius = '10px 0 0 10px'; });
        
        langToggleBtn.innerText = "AR";
    } else {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.style.fontFamily = "'Cairo', sans-serif";
        document.querySelector('.floating-card').style.left = 'auto';
        document.querySelector('.floating-card').style.right = '-30px';
        document.querySelector('.whatsapp-btn').style.left = 'auto';
        document.querySelector('.whatsapp-btn').style.right = '30px';
        
        // تعديل اتجاه السوشيال ميديا للعربية
        socialBar.style.right = 'auto';
        socialBar.style.left = '0';
        socialLinks.forEach(link => { link.style.borderRadius = '0 10px 10px 0'; });

        langToggleBtn.innerText = "EN";
    }
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateContent(currentLang);
});

// مراقبة الحركة عند التمرير
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
// ========================================= //
// معالجة نموذج الاتصال وإرسال البيانات إلى الواتساب //
// ========================================= //

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // 1. جلب البيانات من الحقول
    const name = document.getElementById('inputName').value;
    const phone = document.getElementById('inputPhone').value;
    const message = document.getElementById('inputMessage').value;

    // 2. رقم الواتساب الخاص بالعيادة لاستقبال الحجوزات
    // ⚠️ تنبيه: ضع الرقم هنا بالصيغة الدولية بدون علامة (+) وبدون أصفار في البداية
    // مثال: 9647755600578
    //const whatsappNumber = "9647755600578"; 
    const whatsappNumber = "9647715204894";

    // 3. تجهيز نص الرسالة وتنسيقها
    let text = `مرحباً عيادة د. حسن الطائي، أود طلب استشارة مجانية.%0a%0a`;
    text += `👤 الاسم: ${name}%0a`;
    text += `📞 رقم الهاتف: ${phone}%0a`;
    
    if (message.trim() !== "") {
        text += `📝 الاستفسار: ${message}%0a`;
    }

    // 4. إنشاء رابط الواتساب المباشر
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // 5. تأثير حركي للزر
    const btn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('formSuccess');
    
    btn.innerText = currentLang === 'ar' ? 'جاري التحويل للواتساب...' : 'Redirecting...';
    btn.style.opacity = '0.7';

    // 6. فتح الواتساب بعد ثانية ونصف وإظهار رسالة النجاح
    setTimeout(() => {
        window.open(whatsappUrl, '_blank'); // يفتح الواتساب في نافذة جديدة
        
        btn.innerText = translations[currentLang].submitBtn; // إعادة النص الأصلي للزر
        btn.style.opacity = '1';
        successMsg.style.display = 'block'; // إظهار رسالة "تم الإرسال"
        this.reset(); // تفريغ الحقول
        
        // إخفاء رسالة النجاح بعد 5 ثوانٍ
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
    }, 1500);
});
