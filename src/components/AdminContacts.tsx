import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Home } from "lucide-react";

export function AdminContacts() {
  return (
    <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl text-primary mb-4">
            מרכז ניהול הודעות - Midtown Clinics
          </h1>
          <p className="text-muted-foreground">
            דף זה מיועד לניהול הודעות יצירת הקשר
          </p>
        </div>

        <Card className="text-center p-8 mb-6">
          <CardContent>
            <div className="mb-6">
              <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-4">צור קשר עם מידטאון</h3>
              <p className="text-muted-foreground mb-6">
                ההודעות מהאתר נשלחות ישירות לאימייל של המרפאה
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center justify-center gap-2 p-4 bg-blue-50 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-primary">055-989-0643</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 bg-blue-50 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-primary text-sm">midtownclinicstlv@gmail.com</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={() => window.location.href = 'mailto:midtownclinicstlv@gmail.com'}
                className="w-full"
              >
                פתח תיבת מייל
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full"
              >
                <Home className="h-4 w-4 ml-2" />
                חזור לעמוד הבית
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">הנחיות לניהול הודעות</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• הודעות שנשלחות דרך טופס יצירת הקשר באתר מגיעות ישירות לאימייל</p>
              <p>• כל הודעה כוללת את פרטי השולח ותוכן הפנייה</p>
              <p>• מומלץ לענות תוך 24 שעות לשמירה על שירות מקצועי</p>
              <p>• ניתן להגיע לדף זה על ידי הוספת ?admin=true לכתובת האתר</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}