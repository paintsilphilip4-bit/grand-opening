import { RSVPData } from '../types';

const DB_KEY = 'adlai_hospital_rsvps_db';

// Simulate network delay to mimic real backend interaction
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simple regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const api = {
  /**
   * BACKEND: POST /rsvp
   * Handles the submission of a new RSVP.
   */
  async submitRSVP(data: Omit<RSVPData, 'id' | 'timestamp'>): Promise<{ success: boolean; message: string }> {
    await delay(1000); // Fake server processing time
    
    try {
      // Backend Validation
      if (!data.name || data.name.trim().length < 2) {
        throw new Error("Please enter a valid full name.");
      }
      if (!data.phone || data.phone.trim().length < 10) {
        throw new Error("Please enter a valid phone number.");
      }
      if (data.email && !emailRegex.test(data.email)) {
        throw new Error("Please enter a valid email address.");
      }
      if (data.guests < 1) {
        throw new Error("At least one guest is required.");
      }

      const newRSVP: RSVPData = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString()
      };

      // Database Transaction (LocalStorage)
      const currentData = localStorage.getItem(DB_KEY);
      const rsvps: RSVPData[] = currentData ? JSON.parse(currentData) : [];
      
      // Check for duplicates (logic based on phone number)
      if (rsvps.some(r => r.phone.replace(/\D/g,'') === data.phone.replace(/\D/g,''))) {
        throw new Error("An RSVP with this phone number has already been registered.");
      }

      rsvps.unshift(newRSVP); // Add to top
      localStorage.setItem(DB_KEY, JSON.stringify(rsvps));

      return { success: true, message: "RSVP Successfully Recorded" };
    } catch (error: any) {
      console.error("Backend Error:", error);
      throw error;
    }
  },

  /**
   * BACKEND: GET /rsvps
   * Retrieves all RSVPs for the admin dashboard.
   */
  async getRSVPs(): Promise<RSVPData[]> {
    await delay(600);
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
  },

  /**
   * BACKEND: DELETE /rsvps/:id
   */
  async deleteRSVP(id: string): Promise<boolean> {
    await delay(400);
    const currentData = localStorage.getItem(DB_KEY);
    if (!currentData) return false;

    let rsvps: RSVPData[] = JSON.parse(currentData);
    rsvps = rsvps.filter(r => r.id !== id);
    localStorage.setItem(DB_KEY, JSON.stringify(rsvps));
    return true;
  }
};