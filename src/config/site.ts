/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for SponsorOS AI
 *
 * Tailored specifically for:
 * AI-Native Sponsorship Platform for Commercial Rightsholders
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'sponsor-ai-core',
  name: 'SponsorOS AI',
  badge: 'AI-Native Sponsorship Operating System',
  tagline: 'Connected Agentic Platform for Commercial Rightsholders',
  description:
    'An end-to-end AI operating system that audits rights inventory, discovers high-affinity brand sponsors, generates bespoke sales materials, and tracks contract delivery SLAs across sports, culture, and entertainment.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Operations Cockpit' },
    { id: 'pipeline', label: 'Agent Lifecycle Engine' },
    { id: 'workspaces', label: 'Workspaces & Portals' },
    { id: 'records', label: 'Properties & Contracts' },
  ],
  metrics: [
    {
      id: 'metric-inventory',
      title: 'Active Inventory FMV',
      value: '$42.8M',
      change: '+18.4% YoY',
      trend: 'up',
      subtext: '1,420 asset units audited across 84 properties',
      badge: 'Real-time Valuation',
    },
    {
      id: 'metric-pipeline',
      title: 'Contracted Pipeline',
      value: '$14.2M',
      change: '+34.2% MoM',
      trend: 'up',
      subtext: '84 active brand partner negotiations',
      badge: '4.2x Deal Velocity',
    },
    {
      id: 'metric-delivery',
      title: 'Contract Obligation SLA',
      value: '99.4%',
      change: '0 Breached SLAs',
      trend: 'up',
      subtext: '218 verified partner activations this quarter',
      badge: 'Automated Guard',
    },
    {
      id: 'metric-turnaround',
      title: 'Agent Turnaround',
      value: '4.8 min',
      change: '-92% vs Agency',
      trend: 'up',
      subtext: 'Full lifecycle audit, deck generation & contracts',
      badge: 'Context Bus Active',
    },
  ],
  workflow: {
    badge: 'Connected Multi-Agent Pipeline',
    title: 'Run Autonomous Sponsorship Lifecycle Agent',
    description:
      'Test the multi-agent context flow: Asset Audit → Brand Matching → Deck Generation → Contract Obligation Guard → Partner Portal ROI wrap-up.',
    inputLabel: 'Rightsholder Asset or Sponsorship Scenario',
    inputPlaceholder:
      'e.g., Premier League Stadium naming rights + LED ribbon boards for Global FinTech brand',
    defaultInput:
      'Wembley Arena Tier-1 Digital Hospitality & Court-side LED package for Enterprise Cloud Platform ($2.5M Target)',
    buttonLabel: 'Run Autonomous Lifecycle Agent',
    sampleResponse: {
      lifecycle_stage: 'Stage 2: Brand Match & Valuation Synthesis',
      asset_id: 'ASSET-8821-LED-HOSP',
      property: 'Wembley Arena & Entertainment District',
      inventory_units: '360m Courtside 4K LED + 2x Executive Hospitality Boxes',
      computed_fmv: '$2,480,000 / season',
      brand_affinity_score: '94.8% (Enterprise Cloud & FinTech Infrastructure)',
      recommended_targets: ['Cloudflare', 'Stripe', 'Datadog', 'Snowflake'],
      category_exclusivity: 'Clear (No active cloud software partner conflicts)',
      agent_output_summary:
        'Valuation benchmarked against 14 comparable UK arena transactions. Generated bespoke 12-slide executive deck with custom brand integration mockups and automated contract schedule.',
      contract_deliverables_extracted:
        '24 broadcast minutes, 400 VIP hospitality passes, 4 social media co-branded activations',
      next_stage_handoff: 'Contract & Obligation Guard Agent (Ready for Rightsholder Approval)',
      firewall_status: {
        passed: true,
        pii_redacted: true,
        risk_score: 0.01,
      },
    },
  },
  table: {
    badge: 'Commercial Portfolio Ledger',
    title: 'Audited Rightsholder Assets & Active Deals',
    description:
      'Multi-tenant inventory and contract records reasoned across sports teams, stadium venues, and live entertainment properties.',
    columns: [
      { key: 'entityName', label: 'Property / Deal' },
      { key: 'category', label: 'Rights Inventory' },
      { key: 'status', label: 'Lifecycle Status' },
      { key: 'latency', label: 'Valuation / Size' },
      { key: 'provider', label: 'Active Agent' },
      { key: 'updatedAt', label: 'Last Activity' },
    ],
    rows: [
      {
        id: 'SP-8821',
        entityName: 'Apex Motorsport Grand Prix',
        category: 'Trackside LED Ribbon & Paddock Club',
        status: 'active',
        latency: '$4.5M Deal',
        provider: 'Brand Match & Prospecting Agent',
        updatedAt: '2 mins ago',
        payload: {
          property_id: 'PROP-APEX-01',
          rightsholder: 'Apex Racing Global Ltd',
          deal_value: '$4,500,000',
          tenure: '3-Year Multi-Season',
          brand_target: 'Quantum FinTech Global',
          category: 'Cross-Border Payments & FX',
          exclusivity_check: 'PASS • Zero Category Conflicts',
          deck_status: 'Executive Pitch Deck Generated (v3.2)',
          contract_sla_status: 'Drafting Schedules via Obligation Guard',
        },
      },
      {
        id: 'SP-8822',
        entityName: 'Metropolitan Arena Group',
        category: 'Venue Naming Rights & In-Bowl 360° Digital',
        status: 'verified',
        latency: '$8.2M Deal',
        provider: 'Contract & Obligation Guard Agent',
        updatedAt: '5 mins ago',
        payload: {
          property_id: 'PROP-METRO-04',
          rightsholder: 'Metropolitan Entertainment Authority',
          deal_value: '$8,200,000 / yr',
          tenure: '5-Year Title Agreement',
          partner: 'Aether Telecommunications',
          contract_verified: true,
          deliverables_count: 48,
          fulfilled_deliverables: 48,
          sla_compliance: '100% On-Time Delivery',
          partner_portal_status: 'Active • Live Telemetry Streamed',
        },
      },
      {
        id: 'SP-8823',
        entityName: 'Symphony Hall Cultural Trust',
        category: 'Season Presenting Partner & Gala Suite',
        status: 'active',
        latency: '$1.8M Deal',
        provider: 'Proposal & Pitch Deck Synthesizer',
        updatedAt: '8 mins ago',
        payload: {
          property_id: 'PROP-SYMPH-02',
          rightsholder: 'National Heritage & Arts Trust',
          deal_value: '$1,800,000',
          tenure: 'Annual Season Partnership',
          matched_sponsor: 'Vanguard Private Wealth',
          affinity_score: '96.2%',
          esg_alignment: 'Verified Cultural Endowment Policy',
          sales_collateral: 'Bespoke Printed + Interactive Web Deck',
          user_approval_state: 'Pending Commercial Director Sign-off',
        },
      },
      {
        id: 'SP-8824',
        entityName: 'National Athletics Championship',
        category: 'Broadcast Lower-Third & Kit Sponsorship',
        status: 'queued',
        latency: '$3.2M Deal',
        provider: 'Asset Audit & Valuation Agent',
        updatedAt: '12 mins ago',
        payload: {
          property_id: 'PROP-ATH-09',
          rightsholder: 'Federation of Athletics',
          deal_value: '$3,200,000',
          tenure: 'Olympic Qualification Cycle',
          inventory_scanned: 184,
          fmv_benchmark_model: 'Gartner Sports Comp Matrix v4.8',
          valuation_confidence: '98.6%',
          automated_action: 'Dispatched to Inngest context bus for brand matching',
        },
      },
      {
        id: 'SP-8825',
        entityName: 'Festival of Arts & Sound',
        category: 'Immersive Stage Activations & Pouring Rights',
        status: 'verified',
        latency: '$1.1M Deal',
        provider: 'Proof-of-Performance & Reporting Agent',
        updatedAt: '16 mins ago',
        payload: {
          property_id: 'PROP-FEST-07',
          rightsholder: 'Live Sound Productions LLC',
          deal_value: '$1,100,000',
          tenure: 'Multi-City Summer Festival',
          brand_partner: 'Citrus Wave Beverage Group',
          on_site_attendance: '142,000 attendees',
          digital_impressions: '18.4M across TikTok/IG',
          partner_roi_report: 'Automated Wrap-Up PDF Generated & Delivered',
          renewal_probability: '92% Intent to Re-up',
        },
      },
    ],
  },
};
