import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Mail, Clock, Train, Car } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Import Supabase info
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-c7889a4b/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('הודעתכם נשלחה בהצלחה! נחזור אליכם בהקדם.');
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Contact form error:', result.error);
        alert(result.error || 'שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('שגיאה בשליחת ההודעה. אנא בדקו את חיבור האינטרנט ונסו שוב.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'כתובת',
      details: 'מגדל מידטאון, דרך מנחם בגין 144, תל אביב, קומה 21'
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

  const transportInfo = [
    {
      icon: Train,
      title: 'רכבת קלה',
      description: 'תחנת "שאול המלך" - יציאה B ישירות לבניין'
    },
    {
      icon: Car,
      title: 'חניה',
      description: 'חניון מידטאון בבניין + חניונים נוספים בסביבה'
    },
    {
      icon: MapPin,
      title: 'הגעה ברכב',
      description: 'דרך מנחם בגין 144, יציאה מספר 6 מנתיבי איילון'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            צרו קשר עוד היום
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
            נשמח לענות על כל שאלה ולעזור לכם למצוא את הפתרון הרפואי המתאים
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              פרטי יצירת קשר
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">שלחו לנו הודעה</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">שם מלא *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="הכניסו את שמכם המלא"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">טלפון *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="05X-XXXXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">דוא"ל *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">נושא פניה</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="בחרו נושא פניה" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doctor-inquiry">התעניינות רופאים</SelectItem>
                        <SelectItem value="patient-inquiry">פניית מטופלים</SelectItem>
                        <SelectItem value="general">פניה כללית</SelectItem>
                        <SelectItem value="partnership">שיתוף פעולה עסקי</SelectItem>
                        <SelectItem value="technical">תמיכה טכנית</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">תוכן ההודעה *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="כתבו כאן את ההודעה שלכם..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    שלח הודעה
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">מיקום המרפאה</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.993077697843!2d34.78657681523456!3d32.08332148119047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b06b5e8e6d1%3A0x6c96a7de2bb8b2a8!2sMenachem%20Begin%20Rd%20144%2C%20Tel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sil!4v1700000000000!5m2!1sen!2sil"
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
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      מגדל מידטאון, דרך מנחם בגין 144, תל אביב
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=דרך+מנחם+בגין+144+תל+אביב"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                      <MapPin className="h-4 w-4" />
                      פתח במפות גוגל
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              איך מגיעים אלינו
            </h2>
            <p className="text-lg text-muted-foreground">
              מגוון אפשרויות הגעה נוחות ונגישות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-primary">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              מוכנים לצעד הבא?
            </h2>
            <p className="text-lg opacity-90">
              בחרו את האפשרות המתאימה לכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="text-xl">לרופאים - קביעת סיור</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 opacity-90">
                  מעוניינים לראות את המתקנים? קבעו סיור אישי
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100 w-full">
                  03-7654321 - התקשרו עכשיו
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="text-xl">שאלות כלליות</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 opacity-90">
                  יש לכם שאלות? שלחו לנו מייל ונחזור אליכם תוך 24 שעות
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100 w-full">
                  contact@midtownmedical.co.il
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl mb-4">זקוקים לטיפול דחוף?</h3>
            <p className="opacity-75 mb-2">
              במקרי חירום, אנא פנו למוקד החירום 101 או לחדר מיון הקרוב
            </p>
            <p className="text-sm opacity-60">
              המרפאה אינה מטפלת במקרי חירום רפואיים
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}