import { Separator } from './ui/separator';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'בית' },
    { id: 'doctors', label: 'לרופאים' },
    { id: 'gallery', label: 'גלריה' },
    { id: 'location', label: 'מיקום ונגישות' },
    { id: 'contact', label: 'צור קשר' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir="rtl">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4">Midtown Medical</h3>
            <p className="text-blue-200 leading-relaxed mb-4">
              מרכז רפואי פרטי בסטנדרט בינלאומי, המציב את רופאיו בחזית הרפואה ומעניק למטופליו חוויה יוצאת דופן בלב תל אביב.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">פרטי קשר</h4>
            <div className="space-y-3">
              <div className="flex items-center text-blue-200">
                <MapPin className="h-5 w-5 ml-2 flex-shrink-0" />
                <span className="text-sm">מגדל מידטאון, דרך מנחם בגין 144, תל אביב, קומה 21</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Phone className="h-5 w-5 ml-2 flex-shrink-0" />
                <span className="text-sm">03-1234567</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Mail className="h-5 w-5 ml-2 flex-shrink-0" />
                <span className="text-sm">info@midtownmedical.co.il</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-blue-200/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200" dir="rtl">
          <p>&copy; {currentYear} Midtown Medical. כל הזכויות שמורות.</p>
          <div className="flex space-x-6 mt-4 md:mt-0" dir="ltr">
            <button className="hover:text-white transition-colors duration-200">
              תנאי שימוש
            </button>
            <button className="hover:text-white transition-colors duration-200">
              מדיניות פרטיות
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}