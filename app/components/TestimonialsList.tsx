"use client";

import { useEffect, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string | null;
  content: string;
  image: string | null;
  email: string | null;
  rating: number | null;
  created_at: string;
}

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials");
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>;
  }

  if (testimonials.length === 0) {
    return <div className="text-center py-8 text-gray-600">No testimonials yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className="group bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-primary/50 transform hover:-translate-y-1"
        >
          {/* Card Header with Quote Icon */}
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 p-6">
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-full blur-xl"></div>
            <svg className="w-10 h-10 text-secondary/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            
            {/* Rating */}
            {testimonial.rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating! ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-6 line-clamp-6">
              "{testimonial.content}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 truncate">{testimonial.name}</p>
                {testimonial.role && testimonial.role !== "Reviewer" && (
                  <p className="text-sm text-gray-600 truncate">{testimonial.role}</p>
                )}
                {testimonial.location && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 px-6 py-3 border-t border-gray-100">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-700">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Verified Review
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

