export const NODE_ENV = process.env.NODE_ENV || 'development'
export const IS_PROD = NODE_ENV === 'production'
export const MOCK_DATA = {
  "data": {
    "count": 6,
    "next": null,
    "previous": null,
    "results": [
      {
        "mock data": true
      }
    ]
  }
}
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY || ''
export const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || ''
export const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID || ''
export const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || ''
export const FIREBASE_MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || ''
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID || ''
export const FIREBASE_MEASURMENT_ID = process.env.REACT_APP_FIREBASE_APP_ID || ''


