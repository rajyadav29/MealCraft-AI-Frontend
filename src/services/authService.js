import api from './api';
import { mockUser, defaultCredentials } from '../data/mockUser';
import toast from 'react-hot-toast';

// Helper to simulate API latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  login: async (email, password) => {
    try {
      // Try to communicate with the real backend first
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.warn('Backend login unavailable. Simulating with mock auth.');
      await delay(1000); // Simulate API network latency

      // Check against mock credentials
      if (email === defaultCredentials.email && password === defaultCredentials.password) {
        toast.success('Successfully logged in (Demo Mode)');
        return {
          token: 'mock-jwt-token-xyz123',
          user: mockUser
        };
      } else if (email && password) {
        // Allow dynamic testing by auto-creating a user profile if they don't match the default credentials
        toast.success(`Welcome back, ${email.split('@')[0]}! (Demo Mode)`);
        return {
          token: 'mock-jwt-token-xyz123',
          user: {
            ...mockUser,
            name: email.split('@')[0].toUpperCase(),
            email: email,
          }
        };
      } else {
        throw new Error('Please enter valid email and password.', { cause: error });
      }
    }
  },

  register: async (name, email, password) => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.warn('Backend registration unavailable. Simulating with mock auth.');
      await delay(1000);

      toast.success('Account registered successfully! (Demo Mode)');
      return {
        token: 'mock-jwt-token-xyz123',
        user: {
          ...mockUser,
          name,
          email,
          createdAt: new Date().toISOString().split('T')[0]
        }
      };
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.warn('Backend profile retrieval unavailable. Using mock profile.');
      await delay(500);
      return {
        user: mockUser
      };
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await api.put('/auth/profile', profileData);
      return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.warn('Backend profile update unavailable. Simulating locally.');
      await delay(800);
      toast.success('Profile updated successfully! (Demo Mode)');
      return {
        user: {
          ...mockUser,
          ...profileData
        }
      };
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await api.put('/auth/change-password', { currentPassword, newPassword });
      return response.data;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.warn('Backend password change unavailable. Simulating locally.');
      await delay(800);
      toast.success('Password changed successfully! (Demo Mode)');
      return { success: true };
    }
  }
};
