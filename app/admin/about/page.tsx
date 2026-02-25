"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { AboutSection } from "@/lib/types";

type TabKey = "value" | "approach" | "accreditation";

const TAB_LABELS: Record<TabKey, string> = {
  value: "Core Values",
  approach: "Our Approach",
  accreditation: "Accreditations",
};

const defaultForm = (sectionType: TabKey): AboutSection => ({
  section_type: sectionType,
  title: "",
  content: "",
  icon: "",
  display_order: 0,
  is_active: true,
});

export default function AdminAbout() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("value");
  const [items, setItems] = useState<AboutSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<AboutSection | null>(null);
  const [formData, setFormData] = useState<AboutSection>(defaultForm("value"));

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchItems();
  }, [router]);

  const fetchItems = async () => {
    setError(null);
    try {
      const { data, error } = await supabase
        .from("about_sections")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      setItems(data || []);
    } catch (err: any) {
      setError(err.message || "Failed to load about sections");
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter((item) => item.section_type === activeTab);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem?.id) {
        const { error } = await supabase
          .from("about_sections")
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq("id", editingItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("about_sections")
          .insert([{ ...formData, updated_at: new Date().toISOString() }]);
        if (error) throw error;
      }
      fetchItems();
      setShowForm(false);
      setEditingItem(null);
      setFormData(defaultForm(activeTab));
    } catch (err: any) {
      alert("Error saving section: " + (err.message || "Unknown error"));
    }
  };

  const handleEdit = (item: AboutSection) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleActive = async (id: string, currentState: boolean) => {
    try {
      const { error } = await supabase
        .from("about_sections")
        .update({ is_active: !currentState, updated_at: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
      fetchItems();
    } catch (err: any) {
      alert("Error updating status: " + (err.message || "Unknown error"));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this section?")) return;
    try {
      const { error } = await supabase.from("about_sections").delete().eq("id", id);
      if (error) throw error;
      fetchItems();
    } catch (err: any) {
      alert("Error deleting section: " + (err.message || "Unknown error"));
    }
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setShowForm(false);
    setEditingItem(null);
    setFormData(defaultForm(tab));
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
            <h1 className="text-2xl font-bold text-gray-900">Manage About Page</h1>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingItem(null);
                setFormData(defaultForm(activeTab));
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

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          {(Object.keys(TAB_LABELS) as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {TAB_LABELS[tab]}
              <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded-full">
                {items.filter(i => i.section_type === tab).length}
              </span>
            </button>
          ))}
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? `Edit ${TAB_LABELS[activeTab]}` : `Add New ${TAB_LABELS[activeTab]}`}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder={activeTab === "value" ? "e.g. Compassion First" : activeTab === "approach" ? "e.g. Person-Centered Planning" : "e.g. NDIS Registered"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Description text..."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icon (optional emoji)</label>
                  <input
                    type="text"
                    value={formData.icon || ""}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="e.g. ❤️"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                  <input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex items-center mt-6">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-4 h-4 text-emerald-600"
                    id="about-active"
                  />
                  <label htmlFor="about-active" className="ml-2 text-sm text-gray-700">Active</label>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Save</button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditingItem(null); }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length === 0 && !error && (
            <div className="col-span-3 bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
              No {TAB_LABELS[activeTab].toLowerCase()} yet. Click "Add New" to create one.
            </div>
          )}
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${item.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {item.is_active ? "Active" : "Inactive"}
                </span>
                <span className="text-xs text-gray-400">Order: {item.display_order}</span>
              </div>
              {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">{item.content}</p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleActive(item.id!, item.is_active)}
                  className={`px-3 py-1.5 rounded-lg text-sm text-white ${item.is_active ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"}`}
                >
                  {item.is_active ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => item.id && handleDelete(item.id)}
                  className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
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
