# Admin Panel Documentation

## Overview

The admin panel allows you to manage dynamic content on the website without needing to edit code. You can update hero sections, services, testimonials, and features directly from the admin interface.

## Access

1. Navigate to `/admin/login`
2. Login with your admin credentials
3. You'll be redirected to the dashboard at `/admin/dashboard`

## Features

### Hero Section Management (`/admin/hero`)
- Edit homepage hero title and subtitle
- Update button text and link
- Change background image
- Adjust overlay opacity
- Toggle active/inactive status

### Services Management (`/admin/services`)
- Add, edit, and delete services
- Organize by category (Core, Capacity Building, Capital Supports)
- Set display order
- Upload images
- Toggle active/inactive status

### Testimonials Management (`/admin/testimonials`)
- Add, edit, and delete testimonials
- Set display order
- Upload testimonial images
- Toggle active/inactive status

### Features Management (`/admin/features`)
- Add, edit, and delete homepage features
- Set display order
- Toggle active/inactive status

## Database Setup

The admin panel uses Supabase for data storage. The following tables are created:

- `hero_section` - Homepage hero content
- `services` - NDIS services
- `testimonials` - Client testimonials
- `features` - Homepage features
- `about_content` - About page content
- `admin_users` - Admin user accounts

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Security Notes

- The current authentication is basic. For production, implement proper JWT authentication
- Use Row Level Security (RLS) policies in Supabase
- Store passwords using bcrypt hashing
- Implement rate limiting on API routes

## API Endpoints

- `GET /api/hero` - Fetch hero section
- `POST /api/hero` - Create hero section
- `PUT /api/hero` - Update hero section
- `GET /api/services` - Fetch services
- `POST /api/services` - Create service
- `PUT /api/services` - Update service
- `DELETE /api/services` - Delete service
- Similar endpoints for testimonials and features

