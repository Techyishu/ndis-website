export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
  display_order: number;
  is_active: boolean;
  updated_at?: string;
}

export interface Statistic {
  id?: string;
  label: string;
  value: string;
  icon?: string;
  display_order: number;
  is_active: boolean;
  updated_at?: string;
}

export interface SiteSetting {
  id?: string;
  key: string;
  value: string;
  group: string;
  updated_at?: string;
}

export interface AboutSection {
  id?: string;
  section_type: 'value' | 'approach' | 'accreditation';
  title: string;
  content: string;
  icon?: string;
  display_order: number;
  is_active: boolean;
  updated_at?: string;
}

export interface ServiceDetail {
  id?: string;
  service_type: 'core' | 'capacity';
  section_title: string;
  section_description: string;
  items: string[];
  image_url?: string;
  display_order: number;
  is_active: boolean;
  updated_at?: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio: string;
  image_url?: string;
  display_order: number;
  is_active: boolean;
  updated_at?: string;
}

export interface InquiryType {
  id?: string;
  label: string;
  value: string;
  display_order: number;
  is_active: boolean;
  updated_at?: string;
}
