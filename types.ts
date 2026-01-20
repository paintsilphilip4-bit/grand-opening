import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
  image: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RSVPData {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  timestamp: string;
}