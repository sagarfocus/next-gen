type CellValue = boolean;

export interface FeatureRow {
  feature: string;
  values: [CellValue, CellValue, CellValue];
}

export interface FeatureGroup {
  label: string;
  rows: FeatureRow[];
}

export const GROUPS: FeatureGroup[] = [
  {
    label: 'Marketing & Acquisition',
    rows: [
      { feature: 'SEO Services', values: [true, true, true] },
      { feature: 'Google My Business Management', values: [true, true, true] },
      { feature: 'Google Ads Management', values: [true, true, true] },
      { feature: 'Meta / Facebook Ads', values: [true, true, true] },
      { feature: 'Social Media Content', values: [true, true, true] },
      { feature: 'Content & Copywriting', values: [true, true, true] },
    ],
  },
  {
    label: 'Automation & Operations',
    rows: [
      { feature: 'AI Chatbot Setup', values: [true, true, true] },
      { feature: 'Monthly Strategy Reports', values: [true, true, true] },
      { feature: 'Advanced AI Call Handling', values: [false, true, true] },
      { feature: 'Insurance Verification Bots', values: [false, true, true] },
    ],
  },
  {
    label: 'Scale & Support',
    rows: [
      { feature: 'Multi-Location Campaigns', values: [false, true, true] },
      { feature: '24/7 Performance Monitoring', values: [false, true, true] },
      { feature: 'Dedicated Account Manager', values: [false, true, true] },
      { feature: 'Priority SLA Response', values: [false, true, true] },
    ],
  },
  {
    label: 'Enterprise Tier',
    rows: [
      { feature: 'Custom Software Development', values: [false, false, true] },
      { feature: 'HIPAA-Compliant API Integrations', values: [false, false, true] },
      { feature: 'Multi-State Network Management', values: [false, false, true] },
      { feature: 'Advanced BI Dashboards', values: [false, false, true] },
      { feature: 'Dedicated Development Team', values: [false, false, true] },
      { feature: 'White-Glove Onboarding', values: [false, false, true] },
    ],
  },
];
