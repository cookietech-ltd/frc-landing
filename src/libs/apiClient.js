/**
 * Centralized API client for FRC Backend
 * Base URL configured via environment variable
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5010/api';

class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        // Handle API errors
        throw {
          status: response.status,
          message: data.message || 'Request failed',
          errors: data.errors || null,
          data,
        };
      }

      return data;
    } catch (error) {
      // Network or parsing errors
      if (error.status) {
        // Already formatted API error
        throw error;
      }
      // Network error
      throw {
        status: 0,
        message: 'Network error. Please check your connection.',
        errors: null,
      };
    }
  }

  // Quote/Visit Request API
  async createVisitRequest(payload) {
    return this.request('/visit-requests', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Email API (existing endpoint)
  async sendEmail(payload) {
    // Using Next.js API route
    return fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      if (!res.ok) {
        throw new Error('Failed to send email');
      }
      return res.json();
    });
  }
}

// Export singleton instance
const apiClient = new ApiClient();
export default apiClient;

