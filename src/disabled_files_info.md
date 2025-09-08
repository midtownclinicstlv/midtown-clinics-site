# Disabled Files Information

This file documents the changes made to resolve deployment issues.

## Changes Made:

### 1. Supabase Edge Functions Disabled
- `/supabase/functions/server/index.tsx` - Replaced with stub
- `/supabase/functions/server/kv_store.tsx` - Replaced with stub  
- `/utils/supabase/info.tsx` - Replaced with stub

### 2. Contact Form Updated
- Now uses `mailto:` functionality instead of Supabase backend
- Form opens user's email client with pre-filled data
- No server-side processing required

### 3. Admin Panel Updated
- AdminContacts component now shows contact information
- No longer attempts to fetch data from Supabase
- Provides direct access to email and phone contact methods

## Contact Information:
- Phone: 055-989-0643
- Email: midtownclinicstlv@gmail.com

These changes eliminate the 403 deployment error by removing all Supabase Edge Function dependencies.