"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { TeamMember } from "@/lib/types";

const defaultForm: TeamMember = {
  name: "",
  role: "",
  bio: "",
  image_url: "",
  display_order: 0,
  is_active: true,
};

export default function AdminTeam() {
  const router = useRouter();
  const [items, setItems] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState<TeamMember>(defaultForm);

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
        .from("team_members")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      setItems(data || []);
    } catch (err: any) {
      setError(err.message || "Failed to load team members");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem?.id) {
        const { error } = await supabase
          .from("team_members")
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq("id", editingItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("team_members")
          .insert([{ ...formData, updated_at: new Date().toISOString() }]);
        if (error) throw error;
      }
      fetchItems();
      setShowForm(false);
      setEditingItem(null);
      setFormData(defaultForm);
    } catch (err: any) {
      alert("Error saving team member: " + (err.message || "Unknown error"));
    }
  };

  const handleEdit = (item: TeamMember) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleActive = async (id: string, currentState: boolean) => {
    try {
      const { error } = await supabase
        .from("team_members")
        .update({ is_active: !currentState, updated_at: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
      fetchItems();
    } catch (err: any) {
      alert("Error updating status: " + (err.message || "Unknown error"));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) return;
    try {
      const { error } = await supabase.from("team_members").delete().eq("id", id);
      if (error) throw error;
      fetchItems();
    } catch (err: any) {
      alert("Error deleting team member: " + (err.message || "Unknown error"));
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
            <h1 className="text-2xl font-bold text-gray-900">Manage Team Members</h1>
            <button
              onClick={() => { setShowForm(true); setEditingItem(null); setFormData(defaultForm); }}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Add New
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-6">Team members appear on the About page. Add at least one member for the section to be visible.</p>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            Error: {error}
          </div>
        )}

        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? "Edit Team Member" : "Add New Team Member"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. Jane Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role / Title</label>
                  <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. Registered Nurse" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Brief description about this team member..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL (optional)</label>
                <input type="text" value={formData.image_url || ""} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="/images/team-member.jpg or full URL" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                  <input type="number" value={formData.display_order} onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="flex items-center mt-6">
                  <input type="checkbox" checked={formData.is_active} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} className="w-4 h-4 text-emerald-600" id="team-active" />
                  <label htmlFor="team-active" className="ml-2 text-sm text-gray-700">Active</label>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Save</button>
                <button type="button" onClick={() => { setShowForm(false); setEditingItem(null); }} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length === 0 && !error && (
            <div className="col-span-3 bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
              No team members yet. Click "Add New" to create one.
            </div>
          )}
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${item.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {item.is_active ? "Active" : "Inactive"}
                </span>
                <span className="text-xs text-gray-400">Order: {item.display_order}</span>
              </div>
              {item.image_url && (
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-200">
                  <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{item.role}</p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.bio}</p>
              <div className="flex gap-2 flex-wrap">
                <button onClick={() => handleEdit(item)} className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm">Edit</button>
                <button
                  onClick={() => handleToggleActive(item.id!, item.is_active)}
                  className={`px-3 py-1.5 rounded-lg text-sm text-white ${item.is_active ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"}`}
                >
                  {item.is_active ? "Deactivate" : "Activate"}
                </button>
                <button onClick={() => item.id && handleDelete(item.id)} className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
