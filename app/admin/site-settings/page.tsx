"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type TabKey = "contact" | "social" | "cta";

const TAB_LABELS: Record<TabKey, string> = {
  contact: "Contact Info",
  social: "Social Links",
  cta: "CTA Section",
};

const TAB_FIELDS: Record<TabKey, { key: string; label: string; placeholder: string; type?: string }[]> = {
  contact: [
    { key: "contact_phone", label: "Phone Number", placeholder: "03 7303 7203" },
    { key: "contact_email", label: "Email Address", placeholder: "support@evercarecommunity.com.au", type: "email" },
    { key: "contact_address", label: "Address", placeholder: "Melbourne, Victoria" },
    { key: "contact_hours", label: "Availability Hours", placeholder: "Available 24/7" },
  ],
  social: [
    { key: "social_facebook", label: "Facebook URL", placeholder: "https://facebook.com/..." },
    { key: "social_instagram", label: "Instagram URL", placeholder: "https://instagram.com/..." },
    { key: "social_linkedin", label: "LinkedIn URL", placeholder: "https://linkedin.com/..." },
  ],
  cta: [
    { key: "cta_heading", label: "Heading", placeholder: "Ready to Live Life Your Way?" },
    { key: "cta_subheading", label: "Subheading", placeholder: "Let's have a friendly chat..." },
    { key: "cta_button1_text", label: "Button 1 Text", placeholder: "Start Free Consultation" },
    { key: "cta_button1_link", label: "Button 1 Link", placeholder: "/contact" },
    { key: "cta_button2_text", label: "Button 2 Text", placeholder: "Call 03 7303 7203" },
    { key: "cta_button2_link", label: "Button 2 Link", placeholder: "tel:0373037203" },
  ],
};

export default function AdminSiteSettings() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("contact");
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedTab, setSavedTab] = useState<TabKey | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchSettings();
  }, [router]);

  const fetchSettings = async () => {
    setError(null);
    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value");
      if (error) throw error;
      const map: Record<string, string> = {};
      (data || []).forEach((row: { key: string; value: string }) => {
        map[row.key] = row.value;
      });
      setSettings(map);
    } catch (err: any) {
      setError(err.message || "Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (tab: TabKey) => {
    setSaving(true);
    try {
      const fields = TAB_FIELDS[tab];
      const rows = fields.map((f) => ({
        key: f.key,
        value: settings[f.key] || "",
        group: tab,
        updated_at: new Date().toISOString(),
      }));

      const { error } = await supabase
        .from("site_settings")
        .upsert(rows, { onConflict: "key" });

      if (error) throw error;

      setSavedTab(tab);
      setTimeout(() => setSavedTab(null), 3000);
    } catch (err: any) {
      alert("Error saving settings: " + (err.message || "Unknown error"));
    } finally {
      setSaving(false);
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
            <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
            <div />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-500 mb-6">
          Changes here update the contact info in the footer and contact page, social media links, and the CTA banner text sitewide.
        </p>

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
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {(Object.keys(TAB_FIELDS) as TabKey[]).map((tab) => (
          <div key={tab} className={activeTab === tab ? "block" : "hidden"}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">{TAB_LABELS[tab]}</h2>
              <div className="space-y-5">
                {TAB_FIELDS[tab].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      value={settings[field.key] || ""}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                ))}
              </div>

              {savedTab === tab && (
                <div className="mt-4 px-4 py-2 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                  Settings saved successfully!
                </div>
              )}

              <button
                onClick={() => handleSave(tab)}
                disabled={saving}
                className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Saving..." : `Save ${TAB_LABELS[tab]}`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
