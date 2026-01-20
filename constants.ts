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
  email: 'info@adlaicommunityhospital.com'
};

// Optimized images for web: w=600 for grid items, q=75 for compression, fm=webp for format
export const SERVICES: ServiceItem[] = [
  { 
    id: '1', 
    title: 'Maternity & Ante-Natal', 
    icon: Baby, 
    description: 'Comprehensive care for mother and child, from conception through delivery and beyond.',
    // Black mother holding baby
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
  { 
    id: '2', 
    title: 'Emergency Services', 
    icon: Siren, 
    description: 'Rapid response unit equipped for critical situations 24/7.',
    // Focused Black male doctor in scrubs
    image: 'https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
  { 
    id: '3', 
    title: 'General OPD Services', 
    icon: Stethoscope, 
    description: 'Daily out-patient consultations for general health ailments and wellness.',
    // Friendly Black male doctor
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
  { 
    id: '4', 
    title: '24/7 Pharmacy Service', 
    icon: Pill, 
    description: 'Fully stocked pharmacy ensuring medication availability round the clock.',
    // Black pharmacist at work
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
  { 
    id: '5', 
    title: 'Modern Laboratory', 
    icon: FlaskConical, 
    description: 'State-of-the-art diagnostics and precise testing services.',
    // Dedicated lab technician analyzing samples
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
  { 
    id: '6', 
    title: 'Ultrasound & Imaging', 
    icon: Scan, 
    description: 'Advanced sonography and diagnostic imaging technologies.',
    // Doctor with patient setting
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
  { 
    id: '7', 
    title: 'Specialist Clinics', 
    icon: UserCheck, 
    description: 'Expert care in Paediatrics, Obs & Gyn, Dermatology, Fertility, and other specialties.',
    // Specialist consulting with patient
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=600&fm=webp'
  },
];