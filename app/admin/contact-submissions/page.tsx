"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ContactSubmission {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
  read: boolean;
  created_at: string;
}

export default function AdminContactSubmissions() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchSubmissions();
  }, [router]);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/contact-submissions");
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string, read: boolean) => {
    try {
      const response = await fetch("/api/contact-submissions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, read: !read }),
      });

      if (response.ok) {
        fetchSubmissions();
      }
    } catch (error) {
      alert("Error updating submission");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    try {
      const response = await fetch(`/api/contact-submissions?id=${id}`, { method: "DELETE" });
      if (response.ok) {
        fetchSubmissions();
      }
    } catch (error) {
      alert("Error deleting submission");
    }
  };

  const unreadCount = submissions.filter((s) => !s.read).length;

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
            <h1 className="text-2xl font-bold text-gray-900">
              Contact Submissions {unreadCount > 0 && <span className="text-emerald-600">({unreadCount} unread)</span>}
            </h1>
            <div></div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {submissions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600">No submissions yet.</p>
            </div>
          ) : (
            submissions.map((submission) => (
              <div
                key={submission.id}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  submission.read ? "border-gray-300" : "border-emerald-600"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{submission.full_name}</h3>
                      {!submission.read && (
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-semibold">Email:</span> {submission.email}
                      </div>
                      <div>
                        <span className="font-semibold">Phone:</span> {submission.phone}
                      </div>
                      <div>
                        <span className="font-semibold">Inquiry Type:</span>{" "}
                        {submission.inquiry_type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </div>
                      <div>
                        <span className="font-semibold">Submitted:</span>{" "}
                        {new Date(submission.created_at).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleMarkAsRead(submission.id, submission.read)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      submission.read
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    {submission.read ? "Mark as Unread" : "Mark as Read"}
                  </button>
                  <button
                    onClick={() => handleDelete(submission.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

