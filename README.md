# Personal Space — Firebase version

This version uses Firebase Authentication + Cloud Firestore instead of Supabase.

## Firebase setup
1. Enable Authentication → Sign-in method → Email/Password.
2. Create Cloud Firestore.
3. Register a Web app and keep the Firebase config in `config.js`.
4. Publish the included `firestore.rules` in Firebase Console → Firestore Database → Rules.

## Data model
Collections:
- `profiles` — one document per user; document ID is the Firebase Auth UID.
- `goals`
- `tasks`
- `matches`
- `training_sessions`
- `study_sessions`

The app stores `user_id` on every non-profile document and queries only the signed-in user's documents.

## Running locally
Because this is a static site, you can serve the folder with any simple local HTTP server. Opening `index.html` directly may work in some browsers, but a local server is recommended.
