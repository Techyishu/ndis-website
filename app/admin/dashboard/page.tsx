"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-emerald-600">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/services"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-emerald-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Services</h3>
            <p className="text-gray-600">Manage NDIS services</p>
          </Link>

          <Link
            href="/admin/testimonials"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-emerald-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Testimonials</h3>
            <p className="text-gray-600">Manage client testimonials</p>
          </Link>

          <Link
            href="/admin/features"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-emerald-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Features</h3>
            <p className="text-gray-600">Manage homepage features</p>
          </Link>

          <Link
            href="/admin/contact-submissions"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-emerald-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Submissions</h3>
            <p className="text-gray-600">View contact form submissions</p>
          </Link>

        </div>
      </div>
    </div>
  );
}

