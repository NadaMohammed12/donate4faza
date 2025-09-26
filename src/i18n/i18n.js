import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";



const resources = {
  ar: {
    translation: {
      // navbar
     home: "الرئيسية",
     about:"عن الحملة",
     CurrentCampaigns:"الحملات الجارية",
     donate: "اتبرع الان",
     contact: "تواصل معنا",
     language: "اللغة",
     //footer
     rights: "جميع الحقوق محفوظة",
   madeBy: "تم التطوير لخدمة أهل غزة",
   ContactBy:"تواصلوا معنا عبر",
     //donoers
     start:"لقد تبرع",
     from:"من",
     //home
     slide1:"لاجل غزة",
     slide1Description:"ساهم في منح أهل غزة بصيص أمل في الحياة، ودعم صمودهم في وجه الحصار والمعاناة.",
     slide2:"  لاجل اطفال غزة ",
     slide2Description:"ساعد الأطفال الرُضّع في الحصول على أبسط حقوقهم؛ من الحليب والحفاضات، لتأمين بداية حياة كريمة.",
     slide3:" لاجل صحة الاطفال",
     slide3Description:"ساهم في توفير الغذاء والوجبات الصحية للأطفال، ودعنا نعمل معًا من أجل وقف المجاعة وإنقاذ الأرواح ",
     slide4:"من أجل الكرامة الإنسانية",
     slide4Description:"ساهم في توفير الاحتياجات الأساسية للعائلات المتضررة في غزة، وكن سببًا في صمودهم وعيشهم بكرامة.",
     whyDonate: "لماذا نتبرع؟",
     whyText:  "من أهل غزة... لغزة  قلب الألم يولد الأمل. نمدّ أيدينا من أبناء غزة إلى أهلنا في غزة، لنُعيد الحياة إلى مدن أنهكها الحصار والدمار  نُطلق هذه المبادرة لنكون عونًا لمن تضرر، وسندًا لمن فقد كل شيء.  كبيرة والوجع عميق: آلاف الأسر بلا مأوى، أطفال بلا غذاء، ومرضى ينتظرون العلاج. ساهم معنا اليوم، ولو بالقليل، فكل مساهمة تُحدث فرقًا وتُعيد نبض الحياة لغزة.",     
     aboutC:"عرض التفاصيل",
      //compaing
      title1: 'خبزٌ يطعم الجائعين في غزة',
      description1: 'في ظلّ الحصار والمعاناة اليومية التي يعيشها أهل غزة، أصبح الحصول على الخبز تحديًا حقيقيًا لعائلات بأكملها. آلاف الأطفال ينامون جائعين، وأمهات لا يجدن ما يُقدمنه لصغارهن.
        تبرعك اليوم يمكن أن يُوفر لهم الخبز الذي يسدّ الجوع، ويعيد شيئًا من الكرامة لحياتهم... ساهم الآن، وكن سببًا في إشباع جائع.',
      title2: "قطرة حليب... تنقذ حياة رضيع ", 
      description2:  "في غزة، لا تملك كثير من الأمهات ما يكفي لإطعام أطفالهن الرضّع.  الحصار والدمار جعل من الحليب سلعة نادرة، وثمينة تفوق قدرات العائلات المنكوبة.  هناك رضّع يبكون جوعًا ولا يجدون قطرة حليب تُسكّن ألمهم. تبرعك اليوم يُمكن أن يكون الفارق بين الحياة والموت لطفل بريء. ساهم في إنقاذ الأرواح الصغيرة. كن سببًا في البقاء.", 
       title3: "سلّة غذاء تُعيد الحياة لعائلة في غزة", 
      description3:  "في غزة،  العائلات لا تملك ما تضعه على مائدة الطعام.  الجوع لا يطرق الباب مرةً واحدة... بل كل يوم.  من خلال هذه الحملة، نوفّر كابونة غذائية (سلّة مواد أساسية) تحتوي على:أرز، طحين، زيت، عدس، سكر، معلبات، وبعض المواد الأساسية 
      التي تكفي الأسرة لمدة أسبوعين على الأقل. بتبرعك تُنقذ عائلة من الجوع،   وتمنحهم أملًا في وقتٍ خذلهم فيه كل شيء. كن سببًا في إشباع الجائعين.. وشارك الان", 
       title4: "دواء ينقذ.. لا تتركهم يتألمون", 
      description4:  "في غزة، الجروح لا تلتئم، والمرضى ينتظرون جرعة دواء قد لا تأتي.  هناك مرضى سكّري، سرطان، ربو، وأطفال يعانون من الحمى والالتهابات... ولا دواء.  المستشفيات عاجزة، والصيدليات شبه فارغة. تبرعك اليوم يعني حياة بلا ألم، يعني شفاء لطفل أو راحة لمُسن.
         هدفنا توفير دواءً لمريض لا يستطيع شراءه.  كن أملًا في زمن القهر.. وشارك في إنقاذ الأرواح", 
       title5: "أطفال غزة بحاجة لكرامة.. ساعد بتوفير الحفاضات", 
      description5:  "في ظلّ الحصار والدمار، لا تجد كثير من الأمهات في غزة ما يُبقِي أطفالهن الرُضّع في نظافة وراحة.   الحفاضات أصبحت عبئًا ماديًا لا يُطاق، ومع غياب الدعم، يضطر البعض لاستخدام بدائل غير صحية تُعرض الأطفال للالتهابات والأمراض.
        تبرعك الآن يمكن أن يوفّر الراحة والنظافة لرضيع صغير، ويمنح أمًا كرامة وطمأنينة.  لا شيء صغير في العطاء، فكل تفصيل يصنع فرقًا في حياة طفل", 
     //Aboutpage
    title: "من نحن",
    imageAlt: "صورة تعبر عن أهل غزة",
    paragraph1: "نحن مجموعة من أبناء غزة، تأثرنا شخصيًا بما تمر به أرضنا وأهلنا. بعضنا عانى من ويلات الحرب وخرج منها يحمل الأمل، وبعضنا لا تزال عائلته هناك تصارع الظروف القاسية.",
    paragraph2: "من قلب الألم ولدت فكرتنا. رأينا الحاجة الماسّة فكانت هذه المنصة... حملة إنسانية صادقة تهدف لدعم أهل غزة بشكل مباشر وفعّال.",
    paragraph3: "نعمل على جمع التبرعات لتوفير الضروريات: الغذاء، الماء، الأدوية، المأوى، والحياة الكريمة. هدفنا ليس فقط تخفيف المعاناة، بل إحياء الأمل في قلوب أهلنا.",
    cta: "ساعد أهل غزة الآن",
    //ContactPaje
   titleC: "اتصل بنا",
   description: "نحن هنا للرد على استفساراتك ومساعدتك. لا تتردد في التواصل معنا.",
   name: "الاسم الكامل",
   namePlaceholder: "ادخل اسمك الكامل",
   email: "البريد الإلكتروني",
   emailPlaceholder: "ادخل بريدك الإلكتروني",
   subject: "الموضوع",
   subjectPlaceholder: "ادخل موضوع الرسالة",
   message: "الرسالة",
   messagePlaceholder: "اكتب رسالتك هنا...",
   send: "إرسال",
  nameRequired: "الاسم مطلوب",
  emailRequired: "البريد الإلكتروني مطلوب",
  emailInvalid: " البريد الإلكتروني غير صحيح",
  messageRequired: "الرسالة مطلوبة",
  messageSent: "تم إرسال الرسالة بنجاح",
  // صفحة التبرع
  thankyou:"تم التبرع بنجاح..... شكرا على تبرعك",
  amount:"مبلغ مخصص",

   
  
    
    
    }
  },
  en: {
    translation: {
      //navbar
      home: "Home",
      about: "About us",
      CurrentCampaigns:"Current Relief Campaigns",
      donate: "Donate Now",
      contact: "Contact",
      language: "Language",
      //footer
      rights: "All rights reserved",
    madeBy: "Developed to serve the people of Gaza",
    ContactBy:"Get in touch...",
      //donoers
     start:"donated ",
     from:"from",
      //home
      slide1:"4 Gaza",
      slide1Description:"Contribute to giving hope for life in Gaza and support their resilience under siege and hardship",
      slide2:"4 Children of Gaza ",
      slide2Description:"Help infants access their most basic rights — milk and diapers — for a dignified start in life",
      slide3:"4 Gaza Health",
      slide3Description:"Support providing food and healthy meals for people in gaza. Let’s work together to end hunger and save lives",
      slide4:"4 Human Dignity",
      slide4Description:"Help provide basic necessities for affected families in Gaza. Be a reason for their resilience aHelp provide basic necessities for affected families in Gaza. Be a reason for their resilience",
      whyDonate: "Why Donate?",
      whyText: "From the People of Gaza…For Gaza From the heart of suffering, hope is born.We extend our hands from the people of Gaza to our brothers and sisters in Gaza to help revive a land exhausted by siege and destruction.This initiative is a call to stand with those who have lost everything and to support those in desperate need.The need is great, and the pain is deep: Thousands of families are without shelter, children go hungry, and patients await treatment.Join us today even the smallest donation can make a real difference and help bring life back to Gaza.",
      aboutC:"View Details",
        //compaing
      title1: 'Bread to Feed the Hungry in Gaza Campaign ',
      description1: 'In Gaza, where war and blockade have left families in despair, even basic food like bread has become a struggle to find.
        Thousands of children go to bed hungry, and parents are helpless... Your donation today can help provide daily bread for those who need it most... Give hope. Give bread. Donate now.',
       title2: "Milk for Gaza's Infants A Lifesaving Drop", 
      description2:  "In Gaza, many mothers can’t find or afford baby formula for their infants. Due to siege and poverty, milk has become a luxury out of reach.Babies cry in hunger, with no relief in sight.
        Your donation today could be the reason a baby survives... Be their lifeline. Donate milk. Save a life.", 
       title3: "Food Basket for Gaza .. Feed a Family Today", 
      description3:  "families in Gaza go to bed hungry every night. Hunger is not a one-time visitor—it comes every day. This campaign provides a complete food basket (coupon) with essentials like: rice, flour, oil, lentils, sugar, canned food — enough to support a family for at least two weeks.
        you can fill an empty table and give hope to a struggling household. Be the reason they eat today. Donate a food basket.", 
       title4: "Medicine saves lives… don’t let them suffer", 
      description4:  "In Gaza, the sick suffer silently..Hospitals lack supplies, and pharmacies are nearly empty.Chronic patients – diabetes, asthma, cancer – go without medicine.
        Your donation can relieve pain, restore dignity, and even save lives. we trying to provide vital medicine for someone in desperate need..Give them a chance. Send healing. Donate medicine.", 
       title5: "Dignity for Gaza's Babies... Provide Diapers Today", 
      description5:  "In Gaza, many mothers struggle to provide clean diapers for their babies. The cost is overwhelming, and some are forced to use unsafe alternatives.This leads to infections, discomfort, and suffering for the youngest lives.
        Your donation can bring comfort, hygiene, and dignity to a child and their mother.Every small gift makes a big difference. Help now.", 
         
      //AboutPage   
    title: "About Us",
    imageAlt: "Image representing the people of Gaza",
    paragraph1: "We are a group of people from Gaza, personally affected by what our land and people are going through. Some of us have suffered the horrors of war and made it out with hope, while others still have family members struggling under harsh conditions.",
    paragraph2: "From the heart of pain, our idea was born. We saw the urgent need and created this platform—a sincere humanitarian campaign aimed at supporting the people of Gaza directly and effectively.",
    paragraph3: "We work to collect donations to provide necessities: food, water, medicine, shelter, and a dignified life. Our goal is not just to ease suffering, but to revive hope in the hearts of our people.",
    cta: "Support Gaza Now",
  //ContactPaje
    titleC: "Contact Us..",
    description: "We are here to answer your inquiries and help you. Feel free to reach out.",
    name: "Full Name:",
    namePlaceholder: "Enter your full name",
    email: "Email Address:",
    emailPlaceholder: "Enter your email address",
    subject: "Subject:",
    subjectPlaceholder: "Enter the subject",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    send: "Send",
    nameRequired: "Name is Required",
  emailRequired: "Email is Required",
  emailInvalid: "",
  messageRequired: "Message is Required",
  messageSent: "Message Sent Successfully....Thank you ",
  // التبرع
  thankyou:"Donation successful… Thank you for your contribution",
  amount:"Allocated Amount",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n;
