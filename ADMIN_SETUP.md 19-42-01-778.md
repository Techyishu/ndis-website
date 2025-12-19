# Admin Panel Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following content:

```env
NEXT_PUBLIC_SUPABASE_URL=https://cbudpskomknibsxwxxmo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNidWRwc2tvbWtuaWJzeHd4eG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNDUxMzEsImV4cCI6MjA3ODkyMTEzMX0.basl7_1vNjgp14ql3sgHnU-ymCKv0s3p9pfx-gbUqA0
```

## Default Admin Credentials

- **Email:** admin@everecare.com.au
- **Password:** Admin123@

## Accessing the Admin Panel

1. Navigate to `/admin/login` in your browser
2. Enter the default credentials above
3. You'll be redirected to the dashboard where you can manage:
   - Hero Section
   - Services
   - Testimonials
   - Features

## Database Tables Created

The following tables have been created in Supabase:

- `hero_section` - Homepage hero content
- `services` - NDIS services
- `testimonials` - Client testimonials
- `features` - Homepage features
- `about_content` - About page content (for future use)
- `admin_users` - Admin user accounts

## Security Notes

⚠️ **Current Implementation:**
- Passwords are stored as plain text (for development only)
- Authentication uses simple token-based system
- No RLS policies for admin operations (handled via API routes)

🔒 **For Production:**
- Implement proper password hashing (bcrypt)
- Use JWT tokens for authentication
- Add proper authorization checks
- Use Supabase service role key for admin operations
- Implement rate limiting on API routes

## Adding New Admin Users

You can add new admin users directly in Supabase:

```sql
INSERT INTO admin_users (email, password_hash, is_active)
VALUES ('newadmin@example.com', 'securepassword', true);
```

Remember to change passwords to use proper hashing in production!

