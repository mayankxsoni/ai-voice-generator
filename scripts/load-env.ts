/** Load env the same way Next.js does: .env.local overrides .env. */
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local', quiet: true });
dotenv.config({ quiet: true });
