import image_a8db97a4169ca7a2aa2af5bc2013c0a235077dd5 from 'figma:asset/a8db97a4169ca7a2aa2af5bc2013c0a235077dd5.png';
import image_77f6e8c7c830c5edd7151b6a5a9254efeff033c1 from 'figma:asset/77f6e8c7c830c5edd7151b6a5a9254efeff033c1.png';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Building, Users, Briefcase, Train, Car, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DoctorsPageProps {
  onPageChange: (page: string) => void;
}

export function DoctorsPage({ onPageChange }: DoctorsPageProps) {
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
      description: 'מזכירות לקביעת תורים 24/7, שירותי גבייה וטיפול מול חברות הביטוח.'
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
                הקליניקה הפרטית שתמיד רצית.<br />
                <span className="text-blue-200">בלי כאב הראש.</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                ב-Midtown Medical, יצרנו עבורך מרחב עבודה המשלב מיקום אסטרטגי, תדמית יוקרתית ומעטפת שירותים תומכת, כדי שתוכל להעניק למטופליך את הרפואה הטובה ביותר, ולהצמיח את הפרקטיקה שלך.
              </p>
              <Button 
                onClick={() => onPageChange('contact')}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                אני רוצה לשמוע עוד פרטים
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={image_77f6e8c7c830c5edd7151b6a5a9254efeff033c1}
                alt="מרפאה מודרנית במידטאון מדיקל"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              מיקום ונגישות ללא תחרות
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              המרפאה ממוקמת במגדל מידטאון, דרך מנחם בגין 144. המיקום נבחר בקפידה כדי להבטיח זרימה קבועה של מטופלים ונוחות מקסימלית עבורך ועבורם.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prestige Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={image_a8db97a4169ca7a2aa2af5bc2013c0a235077dd5}
                alt="נוף תל אביב מקומה 21"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-primary">
                תדמית הממצבת אותך בפסגה
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                המרפאה ממוקמת בקומה ה-21 של מגדל מידטאון, אחד ממגדלי היוקרה המצליחים בתל אביב. היא מעוצבת ברמת גימור מהגבוהות ביותר ומשקיפה לנוף מרהיב של הים.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                הנוכחות שלך כאן משדרת הצלחה ומקצועיות, ומעמידה אותך לצד חברות מובילות כמו Microsoft ו-EY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              מעטפת שירותים 360°
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              אנו מספקים לך את כל הכלים כדי שהקליניקה שלך תתנהל באופן חלק ויעיל
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" dir="rtl">
          <h2 className="text-3xl md:text-4xl mb-6">
            מוכן להצטרף אלינו?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            קבע פגישה עוד היום לסיור במתקנים ולשמוע על האפשרויות הזמינות
          </p>
          <Button 
            onClick={() => onPageChange('contact')}
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100"
          >
            אני רוצה לשמוע עוד פרטים
          </Button>
        </div>
      </section>
    </div>
  );
}