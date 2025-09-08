import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Train, Car, Bus, Clock, Building, Navigation } from 'lucide-react';

export function LocationPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            מיקום ונגישות
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
            הגעה נוחה ונגישות מקסימלית מכל רחבי הארץ
          </p>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <Building className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              כתובת המרפאה
            </h2>
            <div className="text-xl text-muted-foreground">
              <p className="mb-2">מגדל מידטאון</p>
              <p className="mb-2">דרך מנחם בגין 144, תל אביב</p>
              <p>קומה 21</p>
            </div>
          </div>

          {/* Map */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.6855834826997!2d34.78393777499125!3d32.07684547410486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c8c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sMidtown%20Tower%20Tel%20Aviv-Yafo"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="מיקום מגדל מידטאון - Midtown Medical"
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-6">
              <a 
                href="https://maps.google.com/?q=Midtown+Tower,+Tel+Aviv,+Israel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                פתח במפות גוגל
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              אפשרויות הגעה
            </h2>
            <p className="text-lg text-muted-foreground">
              בחרו את דרך ההגעה הנוחה לכם ביותר
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <option.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-primary">{option.title}</CardTitle>
                  <p className="text-muted-foreground">{option.description}</p>
                  <Badge className="mx-auto w-fit">
                    {option.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full ml-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              אפשרויות חניה
            </h2>
            <p className="text-lg text-muted-foreground">
              מגוון פתרונות חניה נוחים ונגישים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parkingOptions.map((parking, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg text-primary">{parking.name}</CardTitle>
                  <Badge variant="outline">{parking.type}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl text-primary mb-4">{parking.price}</div>
                  <ul className="space-y-2">
                    {parking.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              מה בסביבה?
            </h2>
            <p className="text-lg text-muted-foreground">
              נקודות עניין ושירותים בקרבת המרפאה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyLandmarks.map((landmark, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Navigation className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg text-primary">{landmark.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3">{landmark.distance}</Badge>
                  <p className="text-sm text-muted-foreground">{landmark.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">שעות פעילות</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <div>
                  <p className="text-primary mb-2">ימים א׳-ה׳</p>
                  <p className="text-muted-foreground">08:00 - 20:00</p>
                </div>
                <div>
                  <p className="text-primary mb-2">יום ו׳</p>
                  <p className="text-muted-foreground">08:00 - 14:00</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  לקביעת תורים ופניות דחופות: 03-1234567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accessibility Note */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" dir="rtl">
          <h2 className="text-2xl md:text-3xl mb-4">
            נגישות למוגבלויות
          </h2>
          <p className="text-lg opacity-90">
            המרפאה מותאמת במלואה לאנשים עם מוגבלויות - עם מעלית נגישה, חניות ייעודיות ושירותים מותאמים
          </p>
        </div>
      </section>
    </div>
  );
}