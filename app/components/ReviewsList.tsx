"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string | null;
  content: string;
  email: string | null;
  rating: number | null;
  created_at: string;
}

export default function ReviewsList() {
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
        setTestimonials(data.slice(0, 6)); // Show latest 6 testimonials
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
    return null;
  }

  return (
    <div className="space-y-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
              {testimonial.role && testimonial.role !== "Reviewer" && (
                <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
              )}
              {testimonial.rating && (
                <div className="flex items-center gap-1 mt-1">
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
            <span className="text-sm text-gray-500">
              {new Date(testimonial.created_at).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{testimonial.content}</p>
        </div>
      ))}
    </div>
  );
}

