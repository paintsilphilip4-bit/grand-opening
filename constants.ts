import { 
  Baby, 
  Stethoscope, 
  Siren, // Emergency
  Pill, 
  FlaskConical, 
  Scan, 
  UserCheck, // Specialist
} from 'lucide-react';
import { ServiceItem } from './types';

export const GRAND_OPENING_DATE = '2026-03-14T16:00:00';

export const CONTACT_INFO = {
  phone: '0535 907 203',
  location: 'Nurses Quarters, Kasoa',
  email: 'adlaicommunityhospital@gmail.com'
};

// Helper for image optimization proxy (wsrv.nl)
// Caches, resizes, and converts to WebP
const optimize = (url: string, width = 600) => 
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=75&output=webp`;

export const SERVICES: ServiceItem[] = [
  { 
    id: '1', 
    title: 'Maternity & Ante-Natal', 
    icon: Baby, 
    description: 'Comprehensive care for mother and child, from conception through delivery and beyond.',
    // Optimized via Unsplash parameters
    image: 'https://images.theconversation.com/files/695776/original/file-20251012-56-tpl4bn.jpg?ixlib=rb-4.1.0&q=50&auto=format&w=600&fit=crop'
  },
  { 
    id: '2', 
    title: 'Emergency Services', 
    icon: Siren, 
    description: 'Rapid response unit equipped for critical situations 24/7.',
    // Replaced Base64 with optimized Unsplash image (WebP)
    image: 'https://github.com/paintsilphilip4-bit/adlai-assets/blob/main/1_ltQaXxqvFU25i2PD4bGHyA.webp?raw=true'
  },
  { 
    id: '3', 
    title: 'General OPD Services', 
    icon: Stethoscope, 
    description: 'Daily out-patient consultations for general health ailments and wellness.',
    // Replaced low-res thumbnail with optimized Unsplash image
    image: 'https://github.com/paintsilphilip4-bit/adlai-assets/blob/main/Outpatients-Department-Overview.jpg?raw=true'
  },
  { 
    id: '4', 
    title: '24/7 Pharmacy Service', 
    icon: Pill, 
    description: 'Fully stocked pharmacy ensuring medication availability round the clock.',
    // Proxy optimization for GitHub raw content
    image: optimize('https://raw.githubusercontent.com/paintsilphilip4-bit/adlai-assets/main/WhatsApp%20Image%202026-01-20%20at%207.32.21%20PM.jpeg')
  },
  { 
    id: '5', 
    title: 'State of the Art Laboratory', 
    icon: FlaskConical, 
    description: 'State-of-the-art diagnostics and precise testing services.',
    // Proxy optimization
    image: optimize('https://raw.githubusercontent.com/paintsilphilip4-bit/adlai-assets/b6f0645dad7c9988c4081ee480aa4351c169390b/WhatsApp%20Image%202026-01-20%20at%207.32.21%20PM%20(2).jpeg')
  },
  { 
    id: '6', 
    title: 'Ultrasound & Imaging', 
    icon: Scan, 
    description: 'Advanced sonography and diagnostic imaging technologies.',
    // Proxy optimization
    image: optimize('https://raw.githubusercontent.com/paintsilphilip4-bit/adlai-assets/main/WhatsApp%20Image%202026-01-20%20at%207.32.21%20PM%20(1).jpeg')
  },
  { 
    id: '7', 
    title: 'Specialist Clinics', 
    icon: UserCheck, 
    description: 'Expert care in Paediatrics, Obs & Gyn, Dermatology, Fertility, and other specialties.',
    // Proxy optimization
    image: optimize('https://thebankhospital.com/wp-content/uploads/2023/04/Mask-Group-15.jpg')
  },
];