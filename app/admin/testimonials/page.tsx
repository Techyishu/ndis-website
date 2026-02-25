"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  location: string;
  content: string;
  image: string;
  email?: string | null;
  rating?: number | null;
  is_active: boolean;
  display_order: number;
}

export default function AdminTestimonials() {
  const router = useRouter();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState<Testimonial>({
    name: "",
    role: "",
    location: "",
    content: "",
    image: "",
    email: null,
    rating: null,
    is_active: true,
    display_order: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchTestimonials();
  }, [router]);

  const fetchTestimonials = async () => {
    setError(null);
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      setTestimonials(data || []);
    } catch (err: any) {
      setError(err.message || "Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTestimonial?.id) {
        const { error } = await supabase
          .from("testimonials")
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq("id", editingTestimonial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("testimonials")
          .insert([{ ...formData, updated_at: new Date().toISOString() }]);
        if (error) throw error;
      }
      fetchTestimonials();
      setShowForm(false);
      setEditingTestimonial(null);
      setFormData({ name: "", role: "", location: "", content: "", image: "", email: null, rating: null, is_active: true, display_order: 0 });
    } catch (err: any) {
      alert("Error saving testimonial: " + (err.message || "Unknown error"));
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData(testimonial);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this testimonial?")) return;
    try {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
      fetchTestimonials();
    } catch (err: any) {
      alert("Error deleting testimonial: " + (err.message || "Unknown error"));
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/admin/dashboard" className="text-emerald-600 hover:text-emerald-700">
              ← Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Manage Testimonials</h1>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingTestimonial(null);
                setFormData({ name: "", role: "", location: "", content: "", image: "", email: null, rating: null, is_active: true, display_order: 0 });
              }}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Add New
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            Error: {error}
          </div>
        )}

        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating (1-5)</label>
                  <input type="number" min="1" max="5" value={formData.rating || ""} onChange={(e) => setFormData({ ...formData, rating: e.target.value ? parseInt(e.target.value) : null })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                  <input type="number" value={formData.display_order} onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={formData.is_active} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} className="w-4 h-4 text-emerald-600" />
                <label className="ml-2 text-sm text-gray-700">Active</label>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Save</button>
                <button type="button" onClick={() => { setShowForm(false); setEditingTestimonial(null); }} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.length === 0 && !error && (
            <div className="col-span-3 bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
              No testimonials yet. Click "Add New" to create one.
            </div>
          )}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${testimonial.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {testimonial.is_active ? "Active" : "Inactive"}
                </span>
                {testimonial.rating && <span className="text-xs text-gray-400">{"★".repeat(testimonial.rating)}</span>}
              </div>
              <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
              <p className="text-gray-600 mb-1 text-sm">{testimonial.role}</p>
              {testimonial.location && <p className="text-gray-500 mb-3 text-xs">{testimonial.location}</p>}
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{testimonial.content}</p>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(testimonial)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm">Edit</button>
                <button onClick={() => testimonial.id && handleDelete(testimonial.id)} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
