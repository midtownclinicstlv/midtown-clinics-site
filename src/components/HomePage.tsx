import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Users, Diamond, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import midtownTowerImage from 'figma:asset/e6fc893921bd395d3f6f46c28cb4142c603d1462.png';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
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
            The Art of Healing.
            <br />
            The Science of Location.
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Midtown Medical. מרכז רפואי פרטי בסטנדרט בינלאומי,
            המציב את רופאיו בחזית הרפואה ומעניק למטופליו חוויה
            יוצאת דופן בלב הפועם של תל אביב.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onPageChange("doctors")}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
            >
              לרופאים: גלו את סביבת העבודה הבאה שלכם
            </Button>
            <Button
              onClick={() => onPageChange("contact")}
              size="lg"
              variant="outline"
              className="border-white text-[rgba(30,58,138,1)] hover:bg-white hover:text-primary px-8 py-3"
            >
              צרו קשר לפרטים נוספים
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          dir="rtl"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              חווית ריפוי מתחילה בחוויית עבודה מושלמת
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl mb-4 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          dir="rtl"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            מוכנים להצטרף לקהילת Midtown Medical?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            צרו קשר עוד היום כדי לגלות איך אנחנו יכולים לעזור
            לכם להצמיח את הפרקטיקה שלכם
          </p>
          <Button
            onClick={() => onPageChange("contact")}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
          >
            צרו קשר עוד היום
          </Button>
        </div>
      </section>
    </div>
  );
}