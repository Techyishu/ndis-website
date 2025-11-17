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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 transform hover:-translate-y-2 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
        >
          {testimonial.image && (
            <div className="relative h-64 overflow-hidden">
              <ImagePlaceholder
                src={testimonial.image}
                alt={testimonial.name}
                width={600}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
          <div className="p-8">
            {testimonial.rating && (
              <div className="flex items-center gap-1 mb-4">
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
            <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
              "{testimonial.content}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
              {testimonial.role && testimonial.role !== "Reviewer" && (
                <p className="text-gray-600">{testimonial.role}</p>
              )}
              {testimonial.location && (
                <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

