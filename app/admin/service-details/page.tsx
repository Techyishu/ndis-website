"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ServiceDetail } from "@/lib/types";

type TabKey = "core" | "capacity";

const TAB_LABELS: Record<TabKey, string> = {
  core: "Core Supports",
  capacity: "Capacity Building",
};

const defaultForm = (serviceType: TabKey): ServiceDetail => ({
  service_type: serviceType,
  section_title: "",
  section_description: "",
  items: [],
  image_url: "",
  display_order: 0,
  is_active: true,
});

export default function AdminServiceDetails() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("core");
  const [items, setItems] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<ServiceDetail | null>(null);
  const [formData, setFormData] = useState<ServiceDetail>(defaultForm("core"));
  // Items textarea: one bullet point per line
  const [itemsText, setItemsText] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchItems();
  }, [router]);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/service-details?all=true");
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      }
    } catch (error) {
      console.error("Error fetching service details:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter((item) => item.service_type === activeTab);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bulletItems = itemsText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    try {
      const method = editingItem ? "PUT" : "POST";
      const payload = { ...formData, items: bulletItems };
      const body = editingItem ? { ...payload, id: editingItem.id } : payload;
      const response = await fetch("/api/service-details", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        fetchItems();
        setShowForm(false);
        setEditingItem(null);
        setFormData(defaultForm(activeTab));
        setItemsText("");
      }
    } catch {
      alert("Error saving service detail");
    }
  };

  const handleEdit = (item: ServiceDetail) => {
    setEditingItem(item);
    setFormData(item);
    setItemsText(Array.isArray(item.items) ? item.items.join("\n") : "");
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleActive = async (id: string, currentState: boolean) => {
    try {
      await fetch("/api/service-details", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_active: !currentState }),
      });
      fetchItems();
    } catch {
      alert("Error updating status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this section?")) return;
    try {
      const response = await fetch(`/api/service-details?id=${id}`, { method: "DELETE" });
      if (response.ok) fetchItems();
    } catch {
      alert("Error deleting section");
    }
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setShowForm(false);
    setEditingItem(null);
    setFormData(defaultForm(tab));
    setItemsText("");
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
            <h1 className="text-2xl font-bold text-gray-900">Manage Service Details</h1>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingItem(null);
                setFormData(defaultForm(activeTab));
                setItemsText("");
              }}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Add New
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-6">
          These sections appear on the Core Supports and Capacity Building detail pages. Each section has a title, description, and bullet points.
        </p>

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
                {items.filter(i => i.service_type === tab).length}
              </span>
            </button>
          ))}
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? `Edit ${TAB_LABELS[activeTab]} Section` : `Add New ${TAB_LABELS[activeTab]} Section`}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input
                  type="text"
                  value={formData.section_title}
                  onChange={(e) => setFormData({ ...formData, section_title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Assistance with Daily Life"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Description</label>
                <textarea
                  value={formData.section_description}
                  onChange={(e) => setFormData({ ...formData, section_description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="A brief description of this section..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bullet Points <span className="text-gray-400">(one per line)</span>
                </label>
                <textarea
                  value={itemsText}
                  onChange={(e) => setItemsText(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm"
                  placeholder={"Personal hygiene and grooming\nDressing and getting ready\nMeal preparation"}
                />
                <p className="text-xs text-gray-400 mt-1">Each line becomes one bullet point on the page.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Image URL (optional)</label>
                <input
                  type="text"
                  value={formData.image_url || ""}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="/images/daily-living.jpg"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    id="svc-active"
                  />
                  <label htmlFor="svc-active" className="ml-2 text-sm text-gray-700">Active</label>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Save</button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditingItem(null); setItemsText(""); }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {filteredItems.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
              No {TAB_LABELS[activeTab]} sections yet. Click "Add New" to create one.
            </div>
          )}
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${item.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {item.is_active ? "Active" : "Inactive"}
                    </span>
                    <span className="text-xs text-gray-400">Order: {item.display_order}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.section_title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.section_description}</p>
                  {Array.isArray(item.items) && item.items.length > 0 && (
                    <ul className="text-xs text-gray-500 list-disc list-inside space-y-0.5">
                      {item.items.slice(0, 3).map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                      {item.items.length > 3 && <li className="text-gray-400">+{item.items.length - 3} more...</li>}
                    </ul>
                  )}
                </div>
                <div className="flex gap-2 flex-shrink-0 flex-col sm:flex-row">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
