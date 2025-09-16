import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from 'lucide-react';

const Map = () => {
  return (
    <Card className="gym-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Find Us on Map
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7234567891234!2d77.0835397!3d10.9917537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857510ae52a2d%3A0x585947dfa5701218!2sNikki%20Towers%2C%20Sri%2C%20Pappampatti%20Rd%2C%20Pallapalayam%2C%20Kannampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641402!5e0!3m2!1sen!2sin!4v1679123456789!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
          <div className="absolute top-2 right-2">
            <a
              href="https://www.google.com/maps/place/Lee+Gym/@10.9917537,77.0835397,17z/data=!4m22!1m15!4m14!1m6!1m2!1s0x3ba9a95673dd8dfb:0x6effc31a8745d016!2sPalladam,+Tamil+Nadu,+India!2m2!1d77.2852097!2d10.9955767!1m6!1m2!1s0x3ba857510ae52a2d:0x585947dfa5701218!2sNikki+Towers,+Sri,+Pappampatti+Rd,+Pallapalayam,+Kannampalayam,+Coimbatore,+Tamil+Nadu+641402!2m2!1d77.0860137!2d10.9917538!3m5!1s0x3ba857510ae52a2d:0x585947dfa5701218!8m2!3d10.9917538!4d77.0860137!16s%2Fg%2F11yf7q9xch?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 inline-flex items-center justify-center"
              title="Open in Google Maps"
            >
              <ExternalLink className="w-4 h-4 text-gray-700" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Map;