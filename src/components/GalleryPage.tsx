import image_83ea5f692583f6098df51b9810775b0322f51e2d from 'figma:asset/83ea5f692583f6098df51b9810775b0322f51e2d.png';
import image_e6fc893921bd395d3f6f46c28cb4142c603d1462 from 'figma:asset/e6fc893921bd395d3f6f46c28cb4142c603d1462.png';
import image_f9381bfb30dbb95f02abe41b8d920ea9c9620b85 from 'figma:asset/f9381bfb30dbb95f02abe41b8d920ea9c9620b85.png';
import image_c40a462750fc3929445eb03eea22a2447161a6a2 from 'figma:asset/c40a462750fc3929445eb03eea22a2447161a6a2.png';
import image_a8db97a4169ca7a2aa2af5bc2013c0a235077dd5 from 'figma:asset/a8db97a4169ca7a2aa2af5bc2013c0a235077dd5.png';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage() {
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
      src: image_f9381bfb30dbb95f02abe41b8d920ea9c9620b85,
      alt: "קרבה לאיכילוב",
      title: "קרבה לאיכילוב",
      category: "נגישות"
    },
    {
      id: 4,
      src: image_e6fc893921bd395d3f6f46c28cb4142c603d1462,
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



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            גלריית תמונות
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
            הציצו פנימה והכירו את המרפאה המתקדמת והיוקרתית שלנו
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">


          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-[1px]"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg text-primary mb-2 font-bold font-normal text-[20px]">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" dir="rtl">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            מעוניינים בסיור אישי?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            קבעו פגישה לסיור אישי במתקנים ולהכיר מקרוב את המרפאה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              צור קשר לפרטים נוספים
            </a>
            <a
              href="tel:03-1234567"
              className="inline-flex items-center justify-center rounded-md border border-primary px-8 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}