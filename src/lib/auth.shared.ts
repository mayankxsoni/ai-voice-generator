/**
 * Values shared between the edge middleware and the Node-only auth module.
 * Kept separate so middleware never pulls in better-sqlite3.
 */
export const SESSION_COOKIE = 'fp_admin_session';
