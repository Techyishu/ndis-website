"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Feature {
  id?: string;
  title: string;
  description: string;
  icon: string;
  display_order: number;
  is_active: boolean;
}

export default function AdminFeatures() {
  const router = useRouter();
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingFeature, setEditingFeature] = useState<Feature | null>(null);
  const [formData, setFormData] = useState<Feature>({
    title: "",
    description: "",
    icon: "",
    display_order: 0,
    is_active: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchFeatures();
  }, [router]);

  const fetchFeatures = async () => {
    setError(null);
    try {
      const { data, error } = await supabase
        .from("features")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      setFeatures(data || []);
    } catch (err: any) {
      setError(err.message || "Failed to load features");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingFeature?.id) {
        const { error } = await supabase
          .from("features")
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq("id", editingFeature.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("features")
          .insert([{ ...formData, updated_at: new Date().toISOString() }]);
        if (error) throw error;
      }
      fetchFeatures();
      setShowForm(false);
      setEditingFeature(null);
      setFormData({ title: "", description: "", icon: "", display_order: 0, is_active: true });
    } catch (err: any) {
      alert("Error saving feature: " + (err.message || "Unknown error"));
    }
  };

  const handleEdit = (feature: Feature) => {
    setEditingFeature(feature);
    setFormData(feature);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this feature?")) return;
    try {
      const { error } = await supabase
        .from("features")
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
      fetchFeatures();
    } catch (err: any) {
      alert("Error deleting feature: " + (err.message || "Unknown error"));
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
            <h1 className="text-2xl font-bold text-gray-900">Manage Features</h1>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingFeature(null);
                setFormData({ title: "", description: "", icon: "", display_order: 0, is_active: true });
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
              {editingFeature ? "Edit Feature" : "Add New Feature"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Icon (emoji)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g. 🏥"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                <input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 text-emerald-600"
                />
                <label className="ml-2 text-sm text-gray-700">Active</label>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditingFeature(null); }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.length === 0 && !error && (
            <div className="col-span-3 bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
              No features yet. Click "Add New" to create one.
            </div>
          )}
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${feature.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {feature.is_active ? "Active" : "Inactive"}
                </span>
                <span className="text-xs text-gray-400">Order: {feature.display_order}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              {feature.icon && <div className="text-2xl mb-4">{feature.icon}</div>}
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(feature)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => feature.id && handleDelete(feature.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
