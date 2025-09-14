import image_5ddf8b743ac047c919de955782306d1e482e445d from 'figma:asset/5ddf8b743ac047c919de955782306d1e482e445d.png';
import image_e7e52753be5dba85c7b29907f7036ef2d6aa4dc2 from 'figma:asset/e7e52753be5dba85c7b29907f7036ef2d6aa4dc2.png';
import image_83ea5f692583f6098df51b9810775b0322f51e2d from 'figma:asset/83ea5f692583f6098df51b9810775b0322f51e2d.png';
import image_a00a0bfc6aff537e1b378b8042dcb2acbbb19cba from 'figma:asset/a00a0bfc6aff537e1b378b8042dcb2acbbb19cba.png';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  MapPin, 
  Users, 
  Diamond, 
  Settings, 
  Phone, 
  Mail, 
  Clock, 
  Train, 
  Car, 
  Bus, 
  Building, 
  Navigation,
  Briefcase,
  Handshake,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import midtownTowerImage from 'figma:asset/e6fc893921bd395d3f6f46c28cb4142c603d1462.png';
import image_a8db97a4169ca7a2aa2af5bc2013c0a235077dd5 from 'figma:asset/a8db97a4169ca7a2aa2af5bc2013c0a235077dd5.png';
import image_77f6e8c7c830c5edd7151b6a5a9254efeff033c1 from 'figma:asset/77f6e8c7c830c5edd7151b6a5a9254efeff033c1.png';
import image_f9381bfb30dbb95f02abe41b8d920ea9c9620b85 from 'figma:asset/f9381bfb30dbb95f02abe41b8d920ea9c9620b85.png';
import image_c40a462750fc3929445eb03eea22a2447161a6a2 from 'figma:asset/c40a462750fc3929445eb03eea22a2447161a6a2.png';
import clinicImage1 from 'figma:asset/5e494d70b473882aa8df79f2960a24fc236358fa.png';
import clinicImage2 from 'figma:asset/aed80df9a14326bfbef671feb5ea3bfcc39da9f4.png';
import clinicImage3 from 'figma:asset/0caa0b783662fc23215a5463007e25248f06567a.png';
import { useState, useEffect } from 'react';

// Carousel images for the doctors section
const carouselImages = [
  clinicImage1,
  clinicImage2,
  clinicImage3
];

// Carousel image titles
const carouselTitles = [
  "אזור המתנה מודרני ומרווח",
  "חדר רופא עם נוף מרהיב לים",
  "חדר רופא עם נוף מרהיב לים"
];

// Location carousel images
const locationImages = [
  image_83ea5f692583f6098df51b9810775b0322f51e2d, // איכילוב
  image_e7e52753be5dba85c7b29907f7036ef2d6aa4dc2, // עזריאלי
  image_a00a0bfc6aff537e1b378b8042dcb2acbbb19cba, // חניה
  image_c40a462750fc3929445eb03eea22a2447161a6a2  // רכבת קלה
];

// Location carousel titles
const locationTitles = [
  "5 דקות מאיכילוב",
  "5 דקות מעזריאלי ורכבת השלום", 
  "חניה לכל רופא והסדר למטופלים",
  "רכבת קלה לפתח הבניין"
];

export function LandingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showPriceModal, setShowPriceModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [activeBenefitTab, setActiveBenefitTab] = useState('prestige');

  // Show price modal on component mount, but only if not shown before
  useEffect(() => {
    const hasSeenPriceModal = localStorage.getItem('midtown-price-modal-seen');
    if (!hasSeenPriceModal) {
      const timer = setTimeout(() => {
        setShowPriceModal(true);
      }, 1000); // Show after 1 second
      return () => clearTimeout(timer);
    }
  }, []);

  // Carousel effect - change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Location carousel effect - change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prevIndex) => 
        (prevIndex + 1) % locationImages.length
      );
    }, 4000); // Slightly different timing for variety
    
    return () => clearInterval(interval);
  }, []);

  const closePriceModal = () => {
    setShowPriceModal(false);
    localStorage.setItem('midtown-price-modal-seen', 'true');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Check if at least phone or email is provided
  if (!formData.phone && !formData.email) {
    alert('חובה למלא לפחות אחד מהפרטים: מספר טלפון או כתובת אימייל');
    return;
  }
  
  try {
    const formData_submit = new FormData();
    formData_submit.append('name', formData.fullName);
    formData_submit.append('email', formData.email || 'לא סופק');
    formData_submit.append('phone', formData.phone || 'לא סופק');
    formData_submit.append('subject', formData.subject || 'פנייה כללית');
    formData_submit.append('message', formData.message);
    formData_submit.append('_next', window.location.href);
    formData_submit.append('_captcha', 'false');

    const response = await fetch('https://formsubmit.co/midtownclinicstlv@gmail.com', {
      method: 'POST',
      body: formData_submit
    });

    if (response.ok) {
      alert('ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert(`שגיאה בשליחת ההודעה. קוד שגיאה: ${response.status} - ${response.statusText}. אנא נסו שוב או צרו קשר טלפונית: 055-989-0643`);
    }
  } catch (error) {
    alert(`שגיאת רשת: ${error.message}. בדקו חיבור לאינטרנט או צרו קשר טלפונית: 055-989-0643`);
  }
};
  const benefits = [
    {
      icon: MapPin,
      title: "נגישות אבסולוטית",
      description:
        'עם יציאה ישירה מתחנת הרכבת הקלה "שאול המלך" אל תוך הבניין, וחמש דקות הליכה מאיכילוב ועזריאלי, הנגישות למרפאה היא חסרת תקדים.',
    },
    {
      icon: Users,
      title: "קהל יעד מיידי",
      description:
        "מיקום המרכז חושף אתכם לעשרות אלפי מטופלים פוטנציאליים - עובדי המגדלים, דיירי שכונות היוקרה ונוסעי הרכבות.",
    },
    {
      icon: Diamond,
      title: "תדמית ויוקרה",
      description:
        "מקמו את הקליניקה שלכם בקומה ה-21 של מגדל מידטאון, לצד ענקיות כמו Microsoft ו-EY, ותיהנו מתדמית הממצבת אתכם עם הטובים ביותר.",
    },
    {
      icon: Settings,
      title: "מעטפת שירותים מלאה",
      description:
        "אנו דואגים לכל מה שמסביב - מזימון תורים 24/7 וגבייה ועד לשיווק דיגיטלי - כדי שאתם תוכלו להתרכז במטופלים.",
    },
  ];

  const locationFeatures = [
    {
      icon: Train,
      title: 'רכבת קלה',
      description: 'גישה ישירה מתחנת "שאול המלך" (יציאה B) לרחבת הבניין. 15 דקות נסיעה מפתח תקווה.'
    },
    {
      icon: Building,
      title: 'סמיכות למרכזים רפואיים',
      description: 'כ-5-6 דקות הליכה משער שיקום של בית החולים איכילוב.'
    },
    {
      icon: MapPin,
      title: 'תחבורה ציבורית נוספת',
      description: '5 דקות הליכה מקניון עזריאלי ומתחנת רכבת השלום.'
    },
    {
      icon: Car,
      title: 'חניה',
      description: 'חניון מידטאון בבניין וחניונים נוספים בקרבת מקום, עם אפשרות לחניה מוזלת.'
    }
  ];

  const services = [
    {
      icon: Clock,
      title: 'שירותי משרד',
      description: 'מזכירות לקביעת תורים 24/7 ושירותי גבייה.'
    },
    {
      icon: Users,
      title: 'שיווק ודיגיטל',
      description: 'פרסום ושיווק, בניית אתר אישי, ניהול רשתות חברתיות.'
    },
    {
      icon: Briefcase,
      title: 'סביבת עבודה',
      description: 'מרפאות מרווחות ומודרניות, מטבחון מאובזר לרווחתך.'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      src: image_83ea5f692583f6098df51b9810775b0322f51e2d,
      alt: "קרבה לעזריאלי",
      title: "קרבה לעזריאלי",
      category: "נגישות"
    },
    {
      id: 2,
      src: image_c40a462750fc3929445eb03eea22a2447161a6a2,
      alt: "מתחנת הרכבת הקלה ישר לכניסה לבניין",
      title: "מתחנת הרכבת הקלה ישר לכניסה לבניין",
      category: "נגישות"
    },
    {
      id: 3,
      src: image_a00a0bfc6aff537e1b378b8042dcb2acbbb19cba,
      alt: "קרבה לאיכילוב",
      title: "קרבה לאיכילוב",
      category: "נגישות"
    },
    {
      id: 4,
      src: midtownTowerImage,
      alt: "הצוות הרפואי המקצועי",
      title: "הצוות הרפואי המקצועי",
      category: "צוות"
    },
    {
      id: 5,
      src: image_83ea5f692583f6098df51b9810775b0322f51e2d,
      alt: "פינת ההמתנה הנוחה",
      title: "פינת ההמתנה הנוחה",
      category: "מרחבים משותפים"
    },
    {
      id: 6,
      src: image_c40a462750fc3929445eb03eea22a2447161a6a2,
      alt: "חדר יעוץ פרטי",
      title: "חדר יעוץ פרטי",
      category: "חדרי טיפול"
    }
  ];

  const transportOptions = [
    {
      icon: Train,
      title: 'רכבת קלה',
      description: 'תחנת "שאול המלך" - יציאה B',
      details: [
        'יציאה ישירות לרחבת הבניין',
        '15 דקות נסיעה מפתח תקווה',
        'קו אדום - פועל כל השבוע'
      ],
      duration: '2 דקות הליכה'
    },
    {
      icon: Bus,
      title: 'תחבורה ציבורית',
      description: 'מגוון קווי אוטובוס',
      details: [
        'תחנת מרכז עזריאלי - 5 דקות הליכה',
        'קווים: 4, 5, 18, 25, 142',
        'פועל בתדירות גבוהה'
      ],
      duration: '5 דקות הליכה'
    },
    {
      icon: Car,
      title: 'הגעה ברכב',
      description: 'נגישות מעולה מכל הארץ',
      details: [
        'יציאה 6 מנתיבי איילון',
        'כביש 4 - יציאה "שדרות שאול המלך"',
        'מכיוון הצפון/דרום'
      ],
      duration: 'ישירות לחניון'
    }
  ];

  const parkingOptions = [
    {
      name: 'חניון מידטאון',
      type: 'בבניין',
      price: '₪15/שעה',
      features: ['מקורה', 'מאובטח', 'גישה ישירה']
    },
    {
      name: 'חניון עזריאלי',
      type: 'ציבורי',
      price: '₪12/שעה',
      features: ['5 דקות הליכה', 'פתוח 24/7']
    },
    {
      name: 'חניית רחוב',
      type: 'כחול-לבן',
      price: '₪5/שעה',
      features: ['מוגבל בזמן', 'בכפוף לזמינות']
    }
  ];

  const nearbyLandmarks = [
    {
      name: 'בית חולים איכילוב',
      distance: '5-6 דקות הליכה',
      description: 'מרכז רפואי מוביל'
    },
    {
      name: 'קניון עזריאלי',
      distance: '5 דקות הליכה',
      description: 'קניות ובילוי'
    },
    {
      name: 'תחנת רכבת השלום',
      distance: '5 דקות הליכה',
      description: 'רכבת ישראל'
    },
    {
      name: 'מתחם שרונה',
      distance: '10 דקות הליכה',
      description: 'מרכז עסקים ובילוי'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'כתובת',
      details: 'מגדל ��ידטאון, דרך מנחם בגין 144, תל אביב, קומה 21'
    },
    {
      icon: Phone,
      title: 'טלפון',
      details: '03-7654321\nמזכירות זמינה 24/7'
    },
    {
      icon: Mail,
      title: 'דוא"ל',
      details: 'contact@midtownmedical.co.il\ninfo@midtownmedical.co.il'
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      details: 'ראשון-חמישי: 08:00-20:00\nשישי: 08:00-14:00'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextLocation = () => {
    setCurrentLocationIndex((prevIndex) => 
      (prevIndex + 1) % locationImages.length
    );
  };

  const goToPreviousLocation = () => {
    setCurrentLocationIndex((prevIndex) => 
      prevIndex === 0 ? locationImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Price Modal */}
      {showPriceModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closePriceModal}></div>
          <Card className="relative z-10 max-w-md mx-4 shadow-2xl border-2 border-primary">
            <CardHeader className="text-center bg-gradient-to-r from-primary to-blue-800 text-primary-foreground rounded-t-lg relative">
              <button
                onClick={closePriceModal}
                className="absolute top-4 left-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                dir="ltr"
              >
                <X className="h-5 w-5" />
              </button>
            <CardTitle className="text-2xl">מחיר השקה מיוחד</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center" dir="rtl">
              <div className="mb-6">
                <div className="text-4xl text-primary mb-2">ססיה שבועית, החל מ - </div>
                <div className="text-4xl text-primary mb-2">₪2,500 \לחודש</div>
                <div className="text-lg text-muted-foreground"> + מע"מ </div>
              </div>
              <div className="flex gap-3 w-full">
                <a
                  href="tel:055-989-0643"
                  onClick={closePriceModal}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">טלפון</span>
                </a>
                
                <a
                  href="mailto:midtownclinicstlv@gmail.com"
                  onClick={closePriceModal}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">אימייל</span>
                </a>
                
                <a
                  href={`https://wa.me/972559890643?text=${encodeURIComponent('שלום, אשמח לשמוע עוד פרטים על מרפאת מידטאון - Midtown Clinics')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-[rgba(255,255,255,1)]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                  </svg>
                  <span className="text-sm text-[rgba(255,255,255,1)]">WhatsApp</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-xl text-primary">Midtown Clinics</span>
            </div>
            <div className="flex space-x-6 space-x-reverse">
              <button 
                onClick={() => scrollToSection('doctors')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                שירותים
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                מיקום ונגישות
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                תדמית ויוקרה
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                צור קשר
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors">
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <ImageWithFallback
          src={midtownTowerImage}
          alt="מגדל מידטאון - בית המרכז הרפואי מידטאון"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
        <div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          dir="rtl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            מרפאת מידטאון
            <br />
            בית הרופאים שחושב עליך
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Midtown Clinics. מרכז רפואי פרטי בסטנדרט בינלאומי,
            המציב את רופאיו בחזית הרפואה ומעניק למטופליו חוויה
            יוצאת דופן בלב הפועם של תל אביב.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('doctors')}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
            >
              לרופאים: גלו את סביבת העבודה הבאה שלכם
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-white text-[rgba(30,58,138,1)] hover:bg-white hover:text-primary px-8 py-3"
            >
              צרו קשר לפרטים נוספים
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white relative">
        {/* Photo Credit */}
        <div className="absolute top-0 right-4 z-10">
          <p className="text-xs text-muted-foreground not-italic text-right">
            www.dnmr.co.il תמונה באדיבות
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight text-primary">
                אתם מטפלים<br />
                <span className="text-blue-600">אנחנו דואגים לכל השאר</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[20px]">מזכירות, קביעת תורים 24/7, וגביה</span>
                </div>
                <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-[20px] underline font-bold">חניה לכל הרופאים, הסדר למטופלים</span>
                  </div>
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[20px]">ניקיון ותחזוקה, אחסון ושמירת ציוד</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[20px]">תשתית לרופאי קופות עצמאיים</span>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[20px]">פרסום ושיווק, אתר אישי, סושיאל</span>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[20px]">קידום שת"פ עם חברות, עו"ד, ומחקרים</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <ImageWithFallback
                src={carouselImages[currentImageIndex]}
                alt="מרפאה מודרנית במידטאון מדיקל"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="תמונה קודמת"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="תמונה הבאה"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`עבר לתמונה ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-center py-4 rounded-b-lg">
                <h3 className="text-lg text-white transition-opacity duration-500">
                  {carouselTitles[currentImageIndex]}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Clinic Status Note */}
          <div className="text-center mb-16" dir="rtl">
            <p className="text-lg text-muted-foreground italic text-left mt-[-80px] mb-[4px] text-[14px] mr-[0px] ml-[0px]">
              *המקום משמש כיום את מכבי אסתטיקה ויעבור התאמה לחדרי רופאים; תמונות באדיבות מכבי אסתטיקה
            </p>
          </div>
          
          {/* Location Advantages Section */}
      <section id="location" className="py-20 bg-secondary rounded-[10px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div className="relative group">
              <ImageWithFallback
                src={locationImages[currentLocationIndex]}
                alt="יתרונות המיקום במידטאון מדיקל"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousLocation}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="תמונה קודמת"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={goToNextLocation}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="תמונה הבאה"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
                {locationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLocationIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentLocationIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`עבר לתמונה ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-center py-4 rounded-b-lg">
                <h3 className="text-lg text-white transition-opacity duration-500">
                  {locationTitles[currentLocationIndex]}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl text-primary">
                מיקום מושלם בלב תל אביב
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="text-[20px]">
                  מרכז Midtown Clinics ממוקם באופן אסטרטגי במגדל מידטאון היוקרתי, 
                  המספק נגישות יוצאת דופן לרופאים ומטופלים מכל רחבי הארץ.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-[20px] underline font-bold">חניה לכל הרופאים, הסדר למטופלים</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Train className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-[20px]">רכבת קלה לפתח הבניין</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-[20px]">5 דקות מאיכילוב, עזריאלי ורכבת ישראל</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-[20px]">קהל יעד מיידי - אלפי תושבים ועובדים</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Diamond className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-[20px]">סביבה עסקית יוקרתית</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          {/* Photo Credit */}
          <div className="text-center mt-8" dir="rtl">
            <p className="text-sm text-muted-foreground italic -mt-6">
              תמונות באדיבות instagram.com/mini.droner , instagram.com/projecttlv
            </p>
          </div>
        </div>
      </section>
          {/* Prestige Section */}
          <div id="gallery" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 mt-12">
            <div>
              <h3 className="text-3xl md:text-4xl mb-6 text-primary">
                תדמית הממצבת אותך בפסגה
              </h3>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                המרפאה ממוקמת בקומה ה-21 של מגדל מידטאון, אחד ממגדלי היוקרה המצליחים בתל אביב. היא מעוצבת ברמת גימור מהגבוהות ביותר ומשקיפה לנוף מרהיב של הים.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                הנוכחות שלך כאן משדרת הצלחה ומקצועיות, ומעמידה אותך לצד חברות מובילות כמו Microsoft , EY , WEWORK ועוד...
              </p>
            </div>
            <div>
              <ImageWithFallback
                src={image_5ddf8b743ac047c919de955782306d1e482e445d}
                alt="נוף תל אביב מקומה 21"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <p className="text-sm text-muted-foreground italic text-center mt-2">
                תמונות באדיבות instagram.com/mini.droner
              </p>
            </div>
          </div>
        </div>
      </section>      

      {/* Separator */}
      <div className="h-px bg-border"></div>
      
      <footer id="contact" className="bg-[rgba(248,250,252,1)] py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[rgba(9,10,9,0)] rounded-[10px]" dir="rtl">
          <div className="text-center mb-12">
            <div className="text-2xl text-primary mb-4">Midtown Clinics</div>
            <p className="text-muted-foreground mb-6">
              מרכז רפואי פרטי בסטנדרט בינלאומי • קומה 21, מגדל מידטאון
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
              <div>
                <p className="mb-1">דרך מנחם בגין 144, תל אביב</p>
                <p>קומה 21</p>
              </div>
              <div>
                <p className="mb-1">טלפון: 055-989-0643</p>
              </div>
              <div>
                <p className="mb-1">midtownclinicstlv@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form and Map/Video Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            {/* Contact Form - Left side */}
            <div className="order-2 lg:order-1">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary text-center">צור קשר</CardTitle>
                  <p className="text-muted-foreground text-center">
                    השאירו פרטים ונחזור אליכם בהקדם
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">שם מלא *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                        className="bg-input-background"
                        placeholder="הכניסו את שמכם המלא"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">מספר טלפון *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="bg-input-background"
                        placeholder="050-1234567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">כתובת אימייל *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="bg-input-background"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">נושא הפנייה</Label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                      >
                        <SelectTrigger className="bg-input-background">
                          <SelectValue placeholder="בחרו נושא" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">פנייה כללית</SelectItem>
                          <SelectItem value="rental">השכרת מרפאה</SelectItem>
                          <SelectItem value="services">שירותים נוספים</SelectItem>
                          <SelectItem value="partnership">שיתוף פעולה</SelectItem>
                          <SelectItem value="other">אחר</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">הודעה</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-input-background min-h-[120px]"
                        placeholder="כתבו כאן את הודעתכם..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Mail className="h-4 w-4 ml-2" />
                      שלח הודעה
                    </Button>
                  </form>

                  <div className="pt-6 border-t border-border space-y-4">
                    <div className="text-center text-sm text-muted-foreground mb-4">
                      או צרו קשר ישירות:
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:055-989-0643"
                        className="flex items-center justify-center gap-2 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                      >
                        <Phone className="h-4 w-4" />
                        <span>055-989-0643</span>
                      </a>
                      
                      <a
                        href="mailto:midtownclinicstlv@gmail.com"
                        className="flex items-center justify-center gap-2 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                      >
                        <Mail className="h-4 w-4" />
                        <span>midtownclinicstlv@gmail.com</span>
                      </a>
                      
                      <a
                        href={`https://wa.me/972559890643?text=${encodeURIComponent('שלום, אשמח לשמוע עוד פרטים על מרפאת מידטאון - Midtown Clinics')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-white"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Video - Right side */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Map */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.993077697843!2d34.78657681523456!3d32.08332148119047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b06b5e8e6d1%3A0x6c96a7de2bb8b2a8!2sMenachem%20Begin%20Rd%20144%2C%20Tel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sil!4v1700000000000!5m2!1sen!2sil"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="מיקום מגדל מידטאון - Midtown Tower"
                  />
              </div>

              {/* Video */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KkgZgQFM_ig"
                  title="Midtown Medical Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="pt-8 border-t border-border text-sm text-muted-foreground">
              <p>© 2025 Midtown Clinics. כל הזכויות שמורות. כל השירותים המוצגים בכפוף להסכמים . טל"ח</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground shadow-lg border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center py-3 gap-4 sm:gap-6" dir="rtl">
            <a
              href="tel:055-989-0643"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm hidden sm:inline">055-989-0643</span>
              <span className="text-xs sm:hidden">טלפון</span>
            </a>
            
            <a
              href="mailto:midtownclinicstlv@gmail.com"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">אימייל</span>
            </a>
            
            <a
              href={`https://wa.me/972559890643?text=${encodeURIComponent('שלום, אשמח לשמוע עוד פרטים על מרפאת מידטאון - Midtown Clinics')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
              </svg>
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}