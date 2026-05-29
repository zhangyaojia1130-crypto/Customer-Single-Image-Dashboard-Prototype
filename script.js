const icons = {
  home: '<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  customer: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/></svg>',
  network: '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="m8.6 10.5 6.8-3"/><path d="m8.6 13.5 6.8 3"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  tasks: '<svg viewBox="0 0 24 24"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="m3 6 1 1 2-2"/><path d="m3 12 1 1 2-2"/><path d="m3 18 1 1 2-2"/></svg>',
  data: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"/><path d="m19.4 15 .2 2.2-2 1.2-1.8-1a7.4 7.4 0 0 1-1.6.7L13.5 20h-3l-.7-1.9a7.4 7.4 0 0 1-1.6-.7l-1.8 1-2-1.2.2-2.2a7 7 0 0 1-.8-1.5L2 12l1.8-1.5c.2-.5.4-1 .8-1.5l-.2-2.2 2-1.2 1.8 1c.5-.3 1-.5 1.6-.7L10.5 4h3l.7 1.9c.6.2 1.1.4 1.6.7l1.8-1 2 1.2-.2 2.2c.3.5.6 1 .8 1.5L22 12l-1.8 1.5c-.2.5-.5 1-.8 1.5Z"/></svg>',
  collapse: '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  help: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 0 1 5.2 1c0 2-2.7 2.2-2.7 4"/><path d="M12 17.5h.01"/></svg>',
  person: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  receipt: '<svg viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 0 1 2 2v18l-3-2-2 2-2-2-2 2-2-2-3 2V4a2 2 0 0 1 2-2Z"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h4"/></svg>',
  card: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/></svg>',
  cube: '<svg viewBox="0 0 24 24"><path d="m21 16-9 5-9-5V8l9-5 9 5v8Z"/><path d="m3.3 7.7 8.7 5 8.7-5"/><path d="M12 22v-9"/></svg>',
  paperclip: '<svg viewBox="0 0 24 24"><path d="m21.4 11.6-8.5 8.5a6 6 0 1 1-8.5-8.5l9.2-9.2a4 4 0 1 1 5.7 5.7L10 17.4a2 2 0 1 1-2.8-2.8l8.5-8.5"/></svg>',
  sync: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 0-15.5-6.2L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.5 6.2L21 16"/><path d="M16 16h5v5"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7V5Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M8 5v14"/><path d="M16 5v14"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  more: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>'
};

const customers = {
  anxun: {
    initials: "AH",
    name: "Ardenbrook Hospitality Group",
    displayName: "Ardenbrook Hospitality",
    customerType: "Multi-Brand Hotel Management Group",
    accountSegment: "Global Strategic Account",
    website: "ardenbrook-hospitality.example",
    overviewName: "Ardenbrook Hospitality Group",
    tier: "Tier 1 (Global Core KA)",
    overviewTier: "Tie 1",
    industry: "Hospitality / Resort Operations",
    overviewSegment: "Hospitality / Resort",
    arr: "$2,640,000",
    expiration: "2026-12-31",
    location: "Bethesda, Maryland, USA",
    score: 86,
    health: "Healthy",
    churn: "Low",
    oes: "8.1 / 10",
    nps: "42",
    executive: { name: "David Sinclair", email: "david.sinclair@derbysoft.net" },
    csm: { name: "Emma Rutherford", email: "emma.rutherford@derbysoft.net" },
    customerId: "CUST-ARDENBROOK-99875",
    hq: "Bethesda, Maryland, USA",
    parent: "Ardenbrook Holdings Group LLC",
    tags: ["Multi-Brand Hotel Group", "Global Chain", "CRS Connected", "Direct API Enabled"],
    contacts: [
      {
        role: "Decision Maker",
        roleClass: "decision",
        name: "David Sterling",
        title: "CTO",
        influence: 5,
        email: "david.sterling@ardenbrook.com",
        phone: "+1 (202) 555-0198",
        im: "Teams: david.sterling",
        responsibility: "Technical decision owner and executive sponsor."
      },
      {
        role: "IT & Technical Integration",
        roleClass: "tech",
        name: "Jane Gallagher",
        title: "Head of IT",
        influence: 5,
        email: "jane.gallagher@ardenbrook.com",
        phone: "+1 (301) 555-0721",
        im: "Teams: jane.gallagher",
        responsibility: "Key stakeholder for platform integration and delivery."
      },
      {
        role: "Operations & Admin",
        roleClass: "ops",
        name: "Michael O'Connor",
        title: "Product Manager",
        influence: 4,
        email: "michael.oconnor@ardenbrook.com",
        phone: "+44 (0) 7700 900461",
        im: "Teams: michael.oconnor",
        responsibility: "Drives daily operational coordination."
      },
      {
        role: "Finance & Billing",
        roleClass: "finance",
        name: "Emma Kensington",
        title: "Finance Director",
        influence: 5,
        email: "emma.kensington@ardenbrook.com",
        phone: "+1 (301) 555-0143",
        im: "Teams: emma.kensington",
        responsibility: "Budget owner and renewal approval authority."
      }
    ]
  },
  bluepeak: {
    initials: "BP",
    name: "BluePeak Hospitality Group",
    tier: "Tier 1",
    industry: "Travel / Hospitality",
    arr: "$18,920,000",
    expiration: "2026-09-30",
    score: 78,
    health: "Watch",
    churn: "Medium",
    oes: "7.2 / 10",
    nps: "31",
    executive: { name: "Sofia Miller", email: "sofia.miller@bluepeak.example" },
    csm: { name: "Noah Smith", email: "noah.smith@bluepeak.example" },
    customerId: "CUST-BLUEPEAK-01884",
    hq: "Singapore",
    parent: "BluePeak Holdings",
    tags: ["Gold Account", "Renewal Window", "GDN Consumer"],
    contacts: [
      {
        role: "Decision Maker",
        roleClass: "decision",
        name: "Sofia Miller",
        title: "Chief Digital Officer",
        influence: 5,
        email: "sofia.miller@bluepeak.example",
        phone: "+65 6000 0901",
        im: "WhatsApp: sofia.bp",
        responsibility: "Owns digital transformation and vendor consolidation."
      },
      {
        role: "Finance & Billing",
        roleClass: "finance",
        name: "Ethan Ross",
        title: "VP Finance",
        influence: 4,
        email: "ethan.ross@bluepeak.example",
        phone: "+65 6000 0902",
        im: "Teams: ethan.ross",
        responsibility: "Reviews renewal economics and credit exposure."
      },
      {
        role: "Operations & Admin",
        roleClass: "ops",
        name: "Maya Patel",
        title: "Regional Ops Lead",
        influence: 4,
        email: "maya.patel@bluepeak.example",
        phone: "+65 6000 0903",
        im: "WhatsApp: maya.ops",
        responsibility: "Coordinates property rollout and service feedback."
      }
    ]
  },
  orbit: {
    initials: "OT",
    name: "Orbit Travel Network",
    tier: "Tier 3",
    industry: "Distribution / Agency",
    arr: "$4,280,000",
    expiration: "2027-03-15",
    score: 91,
    health: "Healthy",
    churn: "Low",
    oes: "8.8 / 10",
    nps: "55",
    executive: { name: "Carlos Vega", email: "carlos.vega@orbit.example" },
    csm: { name: "Iris Wu", email: "iris.wu@orbit.example" },
    customerId: "CUST-ORBIT-09324",
    hq: "Madrid, Spain",
    parent: "Independent",
    tags: ["Expansion Ready", "Partner", "High Adoption"],
    contacts: [
      {
        role: "Commercial & Revenue",
        roleClass: "commercial",
        name: "Carlos Vega",
        title: "Chief Revenue Officer",
        influence: 5,
        email: "carlos.vega@orbit.example",
        phone: "+34 910 000 701",
        im: "WhatsApp: carlos.orbit",
        responsibility: "Sponsors cross-sell to partner marketplace."
      },
      {
        role: "IT & Technical Integration",
        roleClass: "tech",
        name: "Elena Martin",
        title: "Integration Director",
        influence: 4,
        email: "elena.martin@orbit.example",
        phone: "+34 910 000 702",
        im: "Slack: elena.m",
        responsibility: "Owns API performance and network onboarding."
      }
    ]
  }
};

let currentCustomerKey = "anxun";
let demoTimer = null;
let demoIndex = 0;
let selectedDnaIndex = 0;

const stakeholderDnaEnrichment = {
  "David Sterling": {
    initials: "DS",
    portrait: "portrait-david",
    department: "Technology & Digital",
    seniority: "C-Level",
    preferredChannel: "Email / Teams",
    location: "Bethesda, Maryland, USA",
    tenure: "4 years 8 months",
    profileTags: ["Executive Sponsor", "Decision Maker", "Innovation Advocate"],
    relationshipOwner: "David Sinclair",
    personaType: "Strategic Buyer",
    interestScore: 86,
    engagementHealth: "warm",
    decisionPower: 92,
    influenceScore: 94,
    personaLabels: ["Strategic Buyer", "Technical Evaluator", "Executive Sponsor"],
    personaNotes:
      "David is a results-driven leader focused on platform modernization, measurable ROI, and low-risk delivery. He responds best to executive summaries with clear milestones and quantified business impact.",
    industryExperience: ["SaaS Platform", "AI Enablement", "Global Distribution", "Enterprise Integration"],
    assignedAE: { name: "David Sinclair", initials: "DS", portrait: "portrait-david", email: "david.sinclair@derbysoft.net" },
    assignedCSM: { name: "Emma Rutherford", initials: "ER", portrait: "portrait-emma", email: "emma.rutherford@derbysoft.net" },
    escalationOwner: {
      name: "Alex Winston",
      initials: "AW",
      portrait: "portrait-alex",
      email: "alex.winston@derbysoft.net"
    },
    lastMeeting: "2025-06-18",
    nextTouchpoint: "2025-06-28",
    priority: "high",
    daysSinceLastTouch: 3,
    engagementHeat: "High",
    lastEmailOpen: "2025-06-20",
    lastMeetingDate: "2025-06-18",
    relationshipContext:
      "David is a strong supporter of the GDN roadmap and renewal expansion. Sensitive to delivery risk — escalate integration delays early and pair technical updates with business outcomes.",
    interactions: [
      { time: "2025-06-18 14:00", event: "Executive alignment call", owner: "David Sinclair", channel: "Video Call", status: "Completed" },
      { time: "2025-06-12 09:30", event: "QBR summary delivered", owner: "Emma Rutherford", channel: "Email", status: "Delivered" },
      { time: "2025-06-05 16:15", event: "CloudStay latency review", owner: "Jane Gallagher", channel: "Teams", status: "Completed" },
      { time: "2025-05-28 11:00", event: "Renewal scope workshop", owner: "David Sinclair", channel: "Video Call", status: "Completed" }
    ]
  },
  "Jane Gallagher": {
    initials: "JG",
    portrait: "",
    department: "IT & Platform Engineering",
    seniority: "Director",
    preferredChannel: "Teams",
    location: "Bethesda, Maryland, USA",
    tenure: "6 years 2 months",
    profileTags: ["Technical Buyer", "Integration Owner", "Data Steward"],
    relationshipOwner: "Emma Rutherford",
    personaType: "Technical Evaluator",
    interestScore: 78,
    engagementHealth: "neutral",
    decisionPower: 84,
    influenceScore: 88,
    personaLabels: ["Technical Evaluator", "Delivery Gatekeeper", "Platform Owner"],
    personaNotes:
      "Jane prioritizes integration stability, security controls, and operational readiness. Provide architecture diagrams, SLA evidence, and clear rollback plans before major releases.",
    industryExperience: ["CRS Integration", "API Governance", "Data Platform", "Security Compliance"],
    assignedAE: { name: "David Sinclair", initials: "DS", portrait: "portrait-david", email: "david.sinclair@derbysoft.net" },
    assignedCSM: { name: "Emma Rutherford", initials: "ER", portrait: "portrait-emma", email: "emma.rutherford@derbysoft.net" },
    escalationOwner: {
      name: "Michael O'Connor",
      initials: "MO",
      portrait: "portrait-michael",
      email: "michael.oconnor@derbysoft.net"
    },
    lastMeeting: "2025-06-05",
    nextTouchpoint: "2025-06-25",
    priority: "medium",
    daysSinceLastTouch: 8,
    engagementHeat: "Medium",
    lastEmailOpen: "2025-06-14",
    lastMeetingDate: "2025-06-05",
    relationshipContext:
      "Neutral on renewal timing but engaged on delivery quality. CloudStay latency is the primary concern — schedule a technical deep-dive before executive escalation.",
    interactions: [
      { time: "2025-06-05 16:15", event: "Integration health review", owner: "Emma Rutherford", channel: "Teams", status: "Completed" },
      { time: "2025-05-22 10:00", event: "API error-rate follow-up", owner: "Jane Gallagher", channel: "Email", status: "Delivered" },
      { time: "2025-05-10 15:30", event: "Security questionnaire submitted", owner: "David Sterling", channel: "Email", status: "Completed" }
    ]
  },
  "Michael O'Connor": {
    initials: "MO",
    portrait: "",
    department: "Product & Operations",
    seniority: "Manager",
    preferredChannel: "Teams",
    location: "London, United Kingdom",
    tenure: "2 years 11 months",
    profileTags: ["Day-to-Day Operator", "Product Champion"],
    relationshipOwner: "Emma Rutherford",
    personaType: "User / Influencer",
    interestScore: 72,
    engagementHealth: "cool",
    decisionPower: 58,
    influenceScore: 76,
    personaLabels: ["User Champion", "Operational Coordinator"],
    personaNotes:
      "Michael coordinates daily operations and adoption feedback. He values practical release notes, training assets, and fast support routing for property teams.",
    industryExperience: ["Hotel Operations", "Product Adoption", "Workflow Automation"],
    assignedAE: { name: "David Sinclair", initials: "DS", portrait: "portrait-david", email: "david.sinclair@derbysoft.net" },
    assignedCSM: { name: "Emma Rutherford", initials: "ER", portrait: "portrait-emma", email: "emma.rutherford@derbysoft.net" },
    escalationOwner: {
      name: "Emma Rutherford",
      initials: "ER",
      portrait: "portrait-emma",
      email: "emma.rutherford@derbysoft.net"
    },
    lastMeeting: "2025-05-30",
    nextTouchpoint: "2025-07-02",
    priority: "low",
    daysSinceLastTouch: 14,
    engagementHeat: "Low",
    lastEmailOpen: "2025-06-08",
    lastMeetingDate: "2025-05-30",
    relationshipContext:
      "Supportive on feature adoption but not a budget signer. Useful for operational proof points and VoC signals ahead of renewal conversations.",
    interactions: [
      { time: "2025-05-30 11:00", event: "Adoption metrics review", owner: "Emma Rutherford", channel: "Video Call", status: "Completed" },
      { time: "2025-05-15 09:00", event: "Training deck shared", owner: "Michael O'Connor", channel: "Email", status: "Delivered" }
    ]
  },
  "Emma Kensington": {
    initials: "EK",
    portrait: "",
    department: "Finance & Commercial",
    seniority: "Director",
    preferredChannel: "Email",
    location: "Bethesda, Maryland, USA",
    tenure: "5 years 1 month",
    profileTags: ["Economic Buyer", "Renewal Approver", "Budget Owner"],
    relationshipOwner: "David Sinclair",
    personaType: "Economic Buyer",
    interestScore: 81,
    engagementHealth: "warm",
    decisionPower: 90,
    influenceScore: 91,
    personaLabels: ["Economic Buyer", "Renewal Approver", "Risk Reviewer"],
    personaNotes:
      "Emma evaluates renewal economics, credit exposure, and contract terms. Lead with TCO comparisons, liability clarity, and phased investment options.",
    industryExperience: ["Hospitality Finance", "Contract Management", "Vendor Consolidation"],
    assignedAE: { name: "David Sinclair", initials: "DS", portrait: "portrait-david", email: "david.sinclair@derbysoft.net" },
    assignedCSM: { name: "Emma Rutherford", initials: "ER", portrait: "portrait-emma", email: "emma.rutherford@derbysoft.net" },
    escalationOwner: {
      name: "David Sinclair",
      initials: "DS",
      portrait: "portrait-david",
      email: "david.sinclair@derbysoft.net"
    },
    lastMeeting: "2025-06-12",
    nextTouchpoint: "2025-06-26",
    priority: "high",
    daysSinceLastTouch: 5,
    engagementHeat: "High",
    lastEmailOpen: "2025-06-19",
    lastMeetingDate: "2025-06-12",
    relationshipContext:
      "Promoter on value but will pause if legal review slips. Align renewal pricing with auto-renewal timeline and finance reconciliation status.",
    interactions: [
      { time: "2025-06-12 09:30", event: "Renewal pricing discussion", owner: "David Sinclair", channel: "Video Call", status: "Completed" },
      { time: "2025-06-01 08:45", event: "Credit utilization report sent", owner: "Emma Rutherford", channel: "Email", status: "Delivered" },
      { time: "2025-05-20 13:00", event: "Contract terms clarification", owner: "Emma Kensington", channel: "Email", status: "Completed" }
    ]
  }
};

function defaultStakeholderEnrichment(contact, customer) {
  const seed = contact.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return {
    initials: seed,
    portrait: "",
    department: contact.role,
    seniority: "Lead",
    preferredChannel: contact.im || "Email",
    location: customer.location || customer.hq,
    tenure: "—",
    profileTags: [contact.role],
    relationshipOwner: customer.executive.name,
    personaType: contact.role,
    interestScore: 60 + contact.influence * 6,
    engagementHealth: contact.influence >= 5 ? "warm" : contact.influence >= 4 ? "neutral" : "cool",
    decisionPower: 50 + contact.influence * 8,
    influenceScore: contact.influence * 18,
    personaLabels: [contact.role],
    personaNotes: contact.responsibility,
    industryExperience: [customer.industry],
    assignedAE: {
      name: customer.executive.name,
      initials: customer.executive.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2),
      portrait: "portrait-david",
      email: customer.executive.email
    },
    assignedCSM: {
      name: customer.csm.name,
      initials: customer.csm.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2),
      portrait: "portrait-emma",
      email: customer.csm.email
    },
    escalationOwner: {
      name: customer.executive.name,
      initials: customer.executive.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2),
      portrait: "portrait-david",
      email: customer.executive.email
    },
    lastMeeting: "—",
    nextTouchpoint: "—",
    priority: "medium",
    daysSinceLastTouch: 10,
    engagementHeat: "Medium",
    lastEmailOpen: "—",
    lastMeetingDate: "—",
    relationshipContext: contact.responsibility,
    interactions: [
      {
        time: "2025-06-01 10:00",
        event: "Stakeholder check-in",
        owner: customer.csm.name,
        channel: "Email",
        status: "Delivered"
      }
    ]
  };
}

function getStakeholderProfiles() {
  const customer = getCustomer();
  return customer.contacts.map((contact) => ({
    ...contact,
    ...(stakeholderDnaEnrichment[contact.name] || defaultStakeholderEnrichment(contact, customer))
  }));
}

function getSelectedStakeholder() {
  const profiles = getStakeholderProfiles();
  return profiles[selectedDnaIndex] || profiles[0];
}

function engagementHealthLabel(health) {
  const labels = { warm: "Warm", cool: "Cool", neutral: "Neutral" };
  return labels[health] || "Neutral";
}

function renderEngagementHealthPill(health) {
  return `<span class="engagement-pill ${escapeHtml(health)}">${escapeHtml(engagementHealthLabel(health))}</span>`;
}

function renderMetricBar(label, value, suffix = "%") {
  const display = String(value);
  const numeric = Number(display.split("/")[0]) || 0;
  const showSuffix = suffix === "%" && !display.includes("/");
  return `
    <div class="dna-metric-row">
      <div class="dna-metric-head">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(display)}${showSuffix ? suffix : ""}</strong>
      </div>
      <progress value="${Math.min(100, numeric)}" max="100"></progress>
    </div>
  `;
}

function renderOwnerRow(label, owner) {
  const portraitClass = owner.portrait ? ` ${owner.portrait}` : "";
  const escalationClass = label === "Executive Escalation Owner" ? " escalation-avatar" : "";
  return `
    <div class="dna-owner-row">
      <span>${escapeHtml(label)}</span>
      <div class="dna-owner-person">
        <span class="mini-avatar portrait${portraitClass}${escalationClass}">${escapeHtml(owner.initials)}</span>
        <strong>${escapeHtml(owner.name)}</strong>
        <button type="button" class="icon-button dna-contact-icon" data-dna-mail="${escapeHtml(owner.email)}" aria-label="Email ${escapeHtml(owner.name)}">
          <span class="nav-icon" data-icon="mail"></span>
        </button>
      </div>
    </div>
  `;
}

function filterStakeholderProfiles() {
  const query = (document.getElementById("dnaContactSearch")?.value || "").trim().toLowerCase();
  const ownership = document.getElementById("dnaFilterOwnership")?.value || "all";
  const persona = document.getElementById("dnaFilterPersona")?.value || "all";
  const interest = document.getElementById("dnaFilterInterest")?.value || "all";

  return getStakeholderProfiles()
    .map((profile, index) => ({ profile, index }))
    .filter(({ profile }) => {
      const haystack = [
        profile.role,
        profile.name,
        profile.title,
        profile.email,
        profile.phone,
        profile.personaType,
        profile.relationshipOwner
      ]
        .join(" ")
        .toLowerCase();
      if (query && !haystack.includes(query)) return false;
      if (ownership !== "all" && profile.relationshipOwner !== ownership) return false;
      if (persona !== "all" && profile.personaType !== persona) return false;
      if (interest === "high" && profile.interestScore < 80) return false;
      if (interest === "medium" && (profile.interestScore < 60 || profile.interestScore >= 80)) return false;
      if (interest === "low" && profile.interestScore >= 60) return false;
      return true;
    });
}

function renderDnaFilterOptions() {
  const profiles = getStakeholderProfiles();
  const ownershipSelect = document.getElementById("dnaFilterOwnership");
  const personaSelect = document.getElementById("dnaFilterPersona");
  if (!ownershipSelect || !personaSelect) return;

  const owners = [...new Set(profiles.map((profile) => profile.relationshipOwner))];
  const personas = [...new Set(profiles.map((profile) => profile.personaType))];
  const currentOwner = ownershipSelect.value;
  const currentPersona = personaSelect.value;

  ownershipSelect.innerHTML = `<option value="all">All owners</option>${owners
    .map((owner) => `<option value="${escapeHtml(owner)}">${escapeHtml(owner)}</option>`)
    .join("")}`;
  personaSelect.innerHTML = `<option value="all">All personas</option>${personas
    .map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`)
    .join("")}`;

  if (owners.includes(currentOwner)) ownershipSelect.value = currentOwner;
  if (personas.includes(currentPersona)) personaSelect.value = currentPersona;
}

function renderDnaContacts() {
  const table = document.getElementById("dnaContactsTable");
  if (!table) return;

  const filtered = filterStakeholderProfiles();
  if (!filtered.some(({ index }) => index === selectedDnaIndex)) {
    selectedDnaIndex = filtered[0]?.index ?? 0;
  }

  table.innerHTML = filtered.length
    ? filtered
        .map(({ profile, index }) => {
          const active = index === selectedDnaIndex ? " selected" : "";
          const portraitClass = profile.portrait ? ` portrait ${profile.portrait}` : "";
          return `
            <tr class="dna-contact-row${active}" data-dna-index="${index}" tabindex="0" role="button" aria-pressed="${index === selectedDnaIndex}">
              <td><span class="role-badge ${profile.roleClass}">${escapeHtml(profile.role)}</span></td>
              <td>
                <span class="dna-name-cell">
                  <span class="mini-avatar${portraitClass}">${escapeHtml(profile.initials)}</span>
                  <strong>${escapeHtml(profile.name)}</strong>
                </span>
              </td>
              <td>${escapeHtml(profile.title)}</td>
              <td>${renderInfluence(profile.influence)}</td>
              <td>
                <span class="contact-stack">
                  <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
                  <span>${escapeHtml(profile.phone)}</span>
                </span>
              </td>
              <td><span class="dna-score">${profile.interestScore}<small>/100</small></span></td>
              <td>${renderEngagementHealthPill(profile.engagementHealth)}</td>
              <td>
                <span class="row-actions">
                  <button type="button" class="icon-button" data-dna-view="${index}" aria-label="View ${escapeHtml(profile.name)} profile">
                    <span class="nav-icon" data-icon="person"></span>
                  </button>
                  <button type="button" class="icon-button" data-dna-select="${index}" aria-label="Expand ${escapeHtml(profile.name)}">
                    <span class="dna-chevron" aria-hidden="true"></span>
                  </button>
                </span>
              </td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="8" class="dna-empty">No contacts match the current filters.</td></tr>`;

  mountIcons(table);
  renderDnaDetail();
}

function renderDnaDetail() {
  const container = document.getElementById("dnaDetailGrid");
  if (!container) return;

  const profile = getSelectedStakeholder();
  if (!profile) {
    container.innerHTML = "";
    return;
  }

  const priorityClass =
    profile.priority === "high" ? "high" : profile.priority === "low" ? "low" : "medium";
  const priorityLabel =
    profile.priority === "high"
      ? "High Priority"
      : profile.priority === "low"
        ? "Low Priority"
        : "Medium Priority";
  const portraitClass = profile.portrait ? ` ${profile.portrait}` : "";

  container.innerHTML = `
    <article class="panel dna-card dna-profile-card">
      <h2>Stakeholder Profile</h2>
      <div class="dna-card-body">
        <div class="dna-profile-head">
          <span class="customer-avatar mini-profile-avatar${portraitClass}">${escapeHtml(profile.initials)}</span>
          <div>
            <strong>${escapeHtml(profile.name)}</strong>
            <p>${escapeHtml(profile.title)} · ${escapeHtml(profile.department)}</p>
            <p class="muted">${escapeHtml(profile.seniority)}</p>
          </div>
        </div>
        <dl class="dna-meta-list">
          <div><dt>Contact</dt><dd><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a><span>${escapeHtml(profile.phone)}</span></dd></div>
          <div><dt>Preferred Channel</dt><dd>${escapeHtml(profile.preferredChannel)}</dd></div>
          <div><dt>Location</dt><dd>${escapeHtml(profile.location)}</dd></div>
          <div><dt>Customer Tenure</dt><dd>${escapeHtml(profile.tenure)}</dd></div>
        </dl>
        <div class="dna-tag-cluster dna-tag-cluster--footer">
          ${profile.profileTags.map((tag) => `<span class="dna-tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
    </article>

    <article class="panel dna-card dna-persona-card">
      <h2>Persona Details</h2>
      <div class="dna-card-body">
        <div class="dna-persona-metrics">
          ${renderMetricBar("Decision Power Matrix", profile.decisionPower)}
          ${renderMetricBar("Influence Score", `${profile.influenceScore}/100`, "")}
          ${renderMetricBar("Interest Score", `${profile.interestScore}/100`, "")}
        </div>
        <div class="dna-tag-cluster">
          ${profile.personaLabels.map((label) => `<span class="dna-tag">${escapeHtml(label)}</span>`).join("")}
        </div>
        <div class="dna-persona-notes-block">
          <h3>Persona Notes</h3>
          <p>${escapeHtml(profile.personaNotes)}</p>
        </div>
        <div class="dna-persona-experience-block">
          <h3>Industry Experience &amp; Knowledge</h3>
          <div class="dna-tag-cluster">
            ${profile.industryExperience.map((item) => `<span class="dna-tag">${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
      </div>
    </article>

    <article class="panel dna-card dna-ownership-card">
      <h2>Relationship Ownership &amp; Activity</h2>
      <div class="dna-card-body">
        <div class="dna-ownership-list">
          ${renderOwnerRow("Assigned AE", profile.assignedAE)}
          ${renderOwnerRow("Assigned CSM", profile.assignedCSM)}
          ${renderOwnerRow("Executive Escalation Owner", profile.escalationOwner)}
        </div>
        <div class="dna-activity-snapshot dna-activity-snapshot--ownership">
          <div>
            <span>Last Meeting</span>
            <strong><span class="nav-icon" data-icon="card"></span>${escapeHtml(profile.lastMeeting)}</strong>
          </div>
          <div>
            <span>Next Touchpoint</span>
            <strong><span class="nav-icon" data-icon="card"></span>${escapeHtml(profile.nextTouchpoint)}</strong>
          </div>
          <div>
            <span>Priority</span>
            <strong><span class="priority-pill ${priorityClass}">${escapeHtml(priorityLabel)}</span></strong>
          </div>
        </div>
      </div>
    </article>

    <article class="panel dna-card dna-engagement-card">
      <h2>Engagement Logs</h2>
      <div class="dna-card-body dna-engagement-body">
        <div class="dna-engagement-tiles">
          <div><span>Days Since Last Touch</span><strong>${profile.daysSinceLastTouch}</strong></div>
          <div><span>Engagement Heat</span><strong class="dna-heat">${escapeHtml(profile.engagementHeat)}</strong></div>
          <div><span>Last Email Open Date</span><strong>${escapeHtml(profile.lastEmailOpen)}</strong></div>
          <div><span>Last Meeting Date</span><strong>${escapeHtml(profile.lastMeetingDate)}</strong></div>
        </div>
        <div class="dna-context">
          <h3>Relationship Context</h3>
          <p>${escapeHtml(profile.relationshipContext)}</p>
        </div>
      </div>
    </article>

    <article class="panel dna-card dna-history-card">
      <h2>Interaction History</h2>
      <div class="dna-history-stack">
        <div class="table-wrap dna-history-wrap">
          <table class="dna-history-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
                <th>Owner</th>
                <th>Channel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${profile.interactions
                .map(
                  (item) => `
                <tr>
                  <td>${escapeHtml(item.time)}</td>
                  <td>${escapeHtml(item.event)}</td>
                  <td>${escapeHtml(item.owner)}</td>
                  <td>${escapeHtml(item.channel)}</td>
                  <td><span class="pill ${item.status === "Completed" ? "success" : ""}">${escapeHtml(item.status)}</span></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <button type="button" class="dna-view-all" data-drawer="stakeholder" data-dna-view-all>View all interactions <span class="dna-chevron" aria-hidden="true"></span></button>
      </div>
    </article>
  `;

  mountIcons(container);
}

function syncDnaContactRowState() {
  const table = document.getElementById("dnaContactsTable");
  if (!table) return;
  table.querySelectorAll(".dna-contact-row").forEach((row) => {
    const isSelected = Number(row.dataset.dnaIndex) === selectedDnaIndex;
    row.classList.toggle("selected", isSelected);
    row.setAttribute("aria-pressed", String(isSelected));
  });
}

function selectDnaStakeholder(index) {
  const nextIndex = Number(index);
  if (Number.isNaN(nextIndex)) return;
  const changed = nextIndex !== selectedDnaIndex;
  selectedDnaIndex = nextIndex;
  if (changed) syncDnaContactRowState();
  renderDnaDetail();
}

function refreshStakeholderDna() {
  renderDnaFilterOptions();
  renderDnaContacts();
}

const orgMeshLinks = [
  ["customer", "harborview", "link-org"],
  ["customer", "pkfare", "link-org"],
  ["customer", "travelhub", "link-org"],
  ["harborview", "travelhub", "link-org"],
  ["harborview", "skylane", "link-org"],
  ["pkfare", "derbysoft", "link-org"],
  ["travelhub", "derbysoft", "link-org"],
  ["derbysoft", "partnernet", "link-org"],
  ["derbysoft", "revenuesync", "link-org"],
  ["skylane", "partnernet", "link-org"]
];

const gdnLinks = [
  ["pkfare", "go", "link-blue"],
  ["pkfare", "exchange", "link-blue"],
  ["derbysoft", "exchange", "link-blue"],
  ["derbysoft", "bts", "link-blue"],
  ["go", "customer", "link-green"],
  ["exchange", "customer", "link-green"],
  ["bts", "customer", "link-green"],
  ["customer", "it-team", "link-orange"],
  ["customer", "data-office", "link-orange"],
  ["customer", "ops-team", "link-orange"],
  ["customer", "procurement", "link-orange"],
  ["customer", "finance-team", "link-orange"],
  ["customer", "security-team", "link-orange"],
  ["it-team", "lily", "link-purple"],
  ["ops-team", "kevin", "link-purple"],
  ["procurement", "jason", "link-purple"],
  ["finance-team", "emma-contact", "link-purple"],
  ["security-team", "david-contact", "link-purple"]
];

const demoSteps = [
  {
    id: "profile",
    status: "Account narrative",
    domain: "identity",
    hotspot: "hero",
    drawer: "profile"
  },
  {
    id: "identity",
    status: "Identity governance",
    domain: "identity",
    hotspot: "basic",
    drawer: "governance"
  },
  {
    id: "risk",
    status: "Risk explanation",
    domain: "health",
    hotspot: "health-matrix",
    drawer: "risk"
  },
  {
    id: "contacts",
    status: "Stakeholder path",
    domain: "identity",
    hotspot: "contacts",
    drawer: "contact-demo"
  },
  {
    id: "sync",
    status: "Source sync",
    domain: "identity",
    hotspot: "systems",
    drawer: "sync"
  },
  {
    id: "playbook",
    status: "Next action",
    domain: "lifecycle",
    hotspot: "lifecycle",
    drawer: "playbook"
  }
];

function mountIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    const key = element.getAttribute("data-icon");
    if (icons[key]) element.innerHTML = icons[key];
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatNow() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getCustomer() {
  return customers[currentCustomerKey];
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function renderTags(containerId, tags) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
}

function renderIdentityTags(tags) {
  const colors = ["green", "violet", "blue", "amber"];
  const container = document.getElementById("identityTags");
  container.innerHTML = tags
    .map((tag, index) => `<span class="tag ${colors[index] || "gray"}">${escapeHtml(tag)}</span>`)
    .join("");
}

function renderInfluence(value) {
  const bars = Array.from({ length: 5 }, (_, index) => `<i class="${index < value ? "on" : ""}"></i>`);
  return `<span class="influence-meter" aria-label="Influence ${value} out of 5">${bars.join("")}</span>`;
}

function renderContacts() {
  const { contacts } = getCustomer();
  const table = document.getElementById("contactsTable");
  table.innerHTML = contacts
    .map(
      (contact, index) => `
        <tr>
          <td><span class="role-badge ${contact.roleClass}">${escapeHtml(contact.role)}</span></td>
          <td><strong>${escapeHtml(contact.name)}</strong></td>
          <td>${escapeHtml(contact.title)}</td>
          <td>${renderInfluence(contact.influence)}</td>
          <td>
            <span class="contact-stack">
              <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>
              <span>${escapeHtml(contact.phone)}</span>
            </span>
          </td>
          <td>${escapeHtml(contact.im)}</td>
          <td>${escapeHtml(contact.responsibility)}</td>
          <td>
            <span class="row-actions">
              <button class="icon-button" data-contact-action="mail" data-index="${index}" aria-label="Email ${escapeHtml(contact.name)}">
                <span class="nav-icon" data-icon="mail"></span>
              </button>
              <button class="icon-button" data-contact-action="call" data-index="${index}" aria-label="Call ${escapeHtml(contact.name)}">
                <span class="nav-icon" data-icon="phone"></span>
              </button>
              <button class="icon-button" data-contact-action="profile" data-index="${index}" aria-label="Open ${escapeHtml(contact.name)} profile">
                <span class="nav-icon" data-icon="more"></span>
              </button>
            </span>
          </td>
        </tr>
      `
    )
    .join("");
  mountIcons(table);
}

function renderCustomer(key, options = {}) {
  currentCustomerKey = key;
  const customer = getCustomer();
  setText("customerInitials", customer.initials);
  setText("customerName", customer.overviewName || customer.name);
  setText("customerTier", customer.overviewTier || customer.tier);
  setText("customerIndustry", customer.overviewSegment || customer.industry);
  setText("customerArr", customer.arr);
  setText("customerExpiration", customer.expiration);
  setText("healthScore", customer.score);
  setText("healthBand", customer.health);
  setText("churnRisk", customer.churn);
  setText("oesScore", customer.oes);
  setText("npsScore", customer.nps);
  setText("executiveName", customer.executive.name);
  setText("executiveEmail", customer.executive.email);
  setText("csmName", customer.csm.name);
  setText("csmEmail", customer.csm.email);
  setText("infoCompanyName", customer.name);
  setText("infoCustomerId", customer.customerId);
  setText("infoTier", customer.tier);
  setText("infoVertical", customer.industry);
  setText("infoHq", customer.hq);
  setText("infoParent", customer.parent);
  setText("infoLocation", customer.location || customer.hq);
  setText("heroHealthScore", customer.score);
  const heroHealthRing = document.getElementById("heroHealthRing");
  if (heroHealthRing) heroHealthRing.style.setProperty("--score", customer.score);
  const scoreRing = document.getElementById("scoreRing");
  if (scoreRing) scoreRing.style.setProperty("--score", customer.score);
  renderTags("heroTags", customer.tags);
  renderIdentityTags(customer.tags);
  renderContacts();
  refreshStakeholderDna();
  if (!options.silent) toast(`Loaded ${customer.name}`);
}

function showDomain(domain) {
  document.querySelectorAll(".domain-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.domain === domain);
  });
  document.querySelectorAll(".domain-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.domainPanel === domain);
  });
  window.requestAnimationFrame(() => {
    renderGdnLinks();
    if (domain === "ecosystem") {
      scheduleOrgMeshRender();
      scheduleHierarchyRender();
    }
  });
}

function setEcosystemFocus(focus) {
  const panel = document.querySelector('[data-domain-panel="ecosystem"]');
  if (!panel || !focus) return;
  panel.querySelectorAll(".ecosystem-focus").forEach((item) => item.classList.remove("ecosystem-focus"));
  const targets = panel.querySelectorAll(`[data-ecosystem-focus-target="${focus}"]`);
  targets.forEach((item) => item.classList.add("ecosystem-focus"));
}

function edgePointFor(element, mapRect, toward) {
  const rect = element.getBoundingClientRect();
  const center = {
    x: rect.left - mapRect.left + rect.width / 2,
    y: rect.top - mapRect.top + rect.height / 2
  };
  const target = {
    x: toward.x - mapRect.left,
    y: toward.y - mapRect.top
  };
  const dx = target.x - center.x;
  const dy = target.y - center.y;
  if (Math.abs(dy) >= Math.abs(dx)) {
    return {
      x: center.x,
      y: dy > 0 ? rect.bottom - mapRect.top : rect.top - mapRect.top
    };
  }
  return {
    x: dx > 0 ? rect.right - mapRect.left : rect.left - mapRect.left,
    y: center.y
  };
}

function scheduleOrgMeshRender() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(renderOrgMeshLinks);
  });
}

function scheduleHierarchyRender() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(renderHierarchyLinks);
  });
}

function appendHierarchyPath(layer, d) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  layer.appendChild(path);
}

function renderHierarchyLinks() {
  const map = document.querySelector(".hierarchy-map");
  const layer = map?.querySelector(".hierarchy-link-layer");
  const ecoPanel = map?.closest('[data-domain-panel="ecosystem"]');
  if (!map || !layer || !ecoPanel?.classList.contains("active")) return;
  if (map.offsetParent === null) return;

  const mapRect = map.getBoundingClientRect();
  if (!mapRect.width || !mapRect.height) return;

  layer.setAttribute("viewBox", `0 0 ${mapRect.width} ${mapRect.height}`);
  layer.innerHTML = "";

  const root = map.querySelector(".hierarchy-root");
  const parent = map.querySelector(".hierarchy-parent");
  const branches = [...map.querySelectorAll(".branch-node")];
  if (!root || !parent || !branches.length) return;

  const anchorPoint = (element, edge) => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left - mapRect.left + rect.width / 2,
      y: edge === "top" ? rect.top - mapRect.top : rect.bottom - mapRect.top
    };
  };

  const fmt = (value) => value.toFixed(1);
  const rootBottom = anchorPoint(root, "bottom");
  const parentTop = anchorPoint(parent, "top");
  const parentBottom = anchorPoint(parent, "bottom");
  const branchTops = branches.map((branch) => anchorPoint(branch, "top"));
  const railY = parentBottom.y + (Math.min(...branchTops.map((point) => point.y)) - parentBottom.y) / 2;
  const branchXs = branchTops.map((point) => point.x);
  const leftX = Math.min(...branchXs);
  const rightX = Math.max(...branchXs);
  const centerX = parentBottom.x;

  appendHierarchyPath(
    layer,
    `M ${fmt(rootBottom.x)} ${fmt(rootBottom.y)} L ${fmt(parentTop.x)} ${fmt(parentTop.y)}`
  );

  appendHierarchyPath(
    layer,
    `M ${fmt(centerX)} ${fmt(parentBottom.y)} L ${fmt(centerX)} ${fmt(railY)} M ${fmt(leftX)} ${fmt(railY)} L ${fmt(rightX)} ${fmt(railY)}`
  );

  branchTops.forEach((point) => {
    appendHierarchyPath(layer, `M ${fmt(point.x)} ${fmt(railY)} L ${fmt(point.x)} ${fmt(point.y)}`);
  });
}

function renderOrgMeshLinks() {
  const map = document.querySelector(".org-network-map-inner");
  const layer = map?.querySelector(".org-link-layer");
  if (!map || !layer || map.offsetParent === null) return;
  const mapRect = map.getBoundingClientRect();
  if (!mapRect.width || !mapRect.height) return;
  layer.setAttribute("viewBox", `0 0 ${mapRect.width} ${mapRect.height}`);
  layer.innerHTML = "";

  const elementFor = (id) => map.querySelector(`[data-org-target="${id}"]`);
  const centerFor = (id) => {
    const element = elementFor(id);
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  };

  orgMeshLinks.forEach(([from, to, className]) => {
    const fromElement = elementFor(from);
    const toElement = elementFor(to);
    const toCenter = centerFor(to);
    const fromCenter = centerFor(from);
    if (!fromElement || !toElement || !toCenter || !fromCenter) return;
    const start = edgePointFor(fromElement, mapRect, toCenter);
    const end = edgePointFor(toElement, mapRect, fromCenter);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`);
    path.setAttribute("class", className);
    layer.appendChild(path);
  });
}

function switchNetworkView(button) {
  const viewName = button.dataset.networkView;
  document.querySelectorAll("[data-network-view]").forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  document.querySelectorAll("[data-network-view-panel]").forEach((panel) => {
    const isActive = panel.dataset.networkViewPanel === viewName;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
  window.requestAnimationFrame(() => {
    if (viewName === "footprint") renderGdnLinks();
    if (viewName === "hierarchy") scheduleOrgMeshRender();
  });
}

function renderGdnLinks() {
  const map = document.querySelector(".gdn-flow-map");
  const layer = map?.querySelector(".gdn-link-layer");
  if (!map || !layer || !map.closest(".domain-panel.active")) return;
  const mapRect = map.getBoundingClientRect();
  if (!mapRect.width || !mapRect.height) return;
  layer.setAttribute("viewBox", `0 0 ${mapRect.width} ${mapRect.height}`);
  layer.innerHTML = "";

  const pointFor = (id, side) => {
    const element = map.querySelector(`[data-ecosystem-focus-target="${id}"]`);
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
      x: side === "left" ? rect.left - mapRect.left : rect.right - mapRect.left,
      y: rect.top - mapRect.top + rect.height / 2
    };
  };

  gdnLinks.forEach(([from, to, className]) => {
    const start = pointFor(from, "right");
    const end = pointFor(to, "left");
    if (!start || !end) return;
    const curve = Math.max(36, Math.abs(end.x - start.x) * 0.45);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} C ${(start.x + curve).toFixed(1)} ${start.y.toFixed(1)}, ${(end.x - curve).toFixed(1)} ${end.y.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}`
    );
    path.setAttribute("class", className);
    layer.appendChild(path);
  });
}

function switchSubtab(button) {
  const tabName = button.dataset.subtab;
  document.querySelectorAll("[data-subtab]").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  document.querySelectorAll("[data-subtab-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.subtabPanel === tabName);
  });
}

function switchRiskTab(button) {
  const tabName = button.dataset.riskTab;
  document.querySelectorAll("[data-risk-tab]").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  document.querySelectorAll("[data-risk-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.riskPanel === tabName);
  });
}

function drawerTemplate(type, payload = {}) {
  const customer = getCustomer();
  const firstContact = customer.contacts[0];
  const contact = payload.contact || firstContact;
  const ecosystemLabels = {
    group: "Ardenbrook Holdings Group LLC",
    customer: "Ardenbrook Hospitality Group",
    pkfare: "PKFARE",
    derbysoft: "DerbySoft",
    go: "GO",
    exchange: "Exchange",
    bts: "BTS",
    beijing: "Ardenbrook Atlantic Division",
    shanghai: "Ardenbrook Lakeside Division",
    shenzhen: "Ardenbrook Pacific Division",
    suzhou: "Ardenbrook Harborview Bethesda",
    reseller: "Distribution & Access Model",
    "reseller-flag": "Is Through Reseller Flag",
    "partner-cid": "Partner CID",
    tier: "Governance Tier",
    "commission-tier": "Commission Tier",
    billing: "Billing Model",
    "billing-gdn": "Billing Routed Through GDN",
    products: "Products / Services",
    departments: "Customer Departments",
    contacts: "Customer Contacts",
    relationships: "Active Relationships",
    scholarship: "Scholarship Platform",
    "identity-gateway": "Identity Gateway",
    "data-insight": "Data Insight Suite",
    "api-service": "API Integration Service",
    "managed-support": "Managed Support",
    monitoring: "Real-time Monitoring Service",
    "it-team": "IT Team",
    "data-office": "Data Office",
    "ops-team": "Operations Team",
    procurement: "Procurement",
    "finance-team": "Finance",
    "security-team": "Security Team",
    lily: "Lily Sterling-Hughes",
    kevin: "Kevin Mitchell",
    jason: "Jason Caldwell",
    "emma-contact": "Emma Kensington",
    "david-contact": "David Sterling",
    connections: "Active Connections",
    vendor: "TravelHub Global",
    traffic: "Network Traffic Volume",
    booking: "Estimated Booking Volume",
    travelhub: "TravelHub Global",
    skylane: "SkyLane PMS",
    skylink: "SkyLink GDS",
    revenuesync: "RevenueSync",
    partnernet: "PartnerNet Connector"
  };
  const ecosystemContactPhones = {
    lily: "+1 (415) 555-0456",
    kevin: "+65 8123 4567",
    jason: "+1 (301) 555-0882",
    "emma-contact": "+1 (301) 555-0143",
    "david-contact": "+1 (202) 555-0198"
  };
  const ecosystemLabel = ecosystemLabels[payload.focus] || "Selected Ecosystem Entity";
  const ecosystemPhone = ecosystemContactPhones[payload.focus];
  const templates = {
    profile: {
      kicker: "Customer Single Image",
      title: "Trusted Account Narrative",
      body: `
        <section class="drawer-section">
          <h3>${escapeHtml(customer.name)}</h3>
          <div class="drawer-card">
            <strong>${escapeHtml(customer.tier)} · ${escapeHtml(customer.industry)}</strong>
            <p class="muted">ARR ${escapeHtml(customer.arr)} · Renewal ${escapeHtml(customer.expiration)} · Health ${customer.score}</p>
          </div>
        </section>
        <section class="drawer-section">
          <h3>Unified profile answers</h3>
          <ul class="drawer-list">
            <li>Identity confidence is 98.4% across HubSpot, Finance, ServiceNow, Monday, and warehouse records.</li>
            <li>Decision sponsor, technical owner, finance approver, and daily operator are mapped to one account.</li>
            <li>Expansion window is active because usage depth is improving while the legal review path is not started.</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" data-demo-step="identity">Open Governance</button>
          <button class="outline-button" data-demo-step="risk">Explain Risk</button>
        </div>
      `
    },
    governance: {
      kicker: "Identity & Governance",
      title: "Resolution & Stewardship",
      body: `
        <section class="drawer-section">
          <h3>Governed identifiers</h3>
          <ul class="drawer-list">
            <li>Primary CID: ${escapeHtml(customer.customerId)}</li>
            <li>Foreign keys reconcile to the same company name, parent hierarchy, and billing account.</li>
            <li>Salesforce warning remains open because account owner metadata is stale by 29 days.</li>
          </ul>
        </section>
        <section class="drawer-section">
          <h3>Human oversight</h3>
          <div class="drawer-card">
            <strong>Primary Data Steward</strong>
            <p>Jane Gallagher owns global distribution governance, guest-data controls, and hierarchy exception review.</p>
          </div>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" id="drawerSyncButton">Resolve Warning</button>
          <button class="outline-button" data-demo-step="contacts">Review Contacts</button>
        </div>
      `
    },
    risk: {
      kicker: "Health & Risk Matrix",
      title: "Explainable AI Score",
      body: `
        <section class="drawer-section">
          <h3>Composite score: ${customer.score}</h3>
          <div class="score-breakdown">
            <div><span>Financial Health</span><strong>92</strong><progress value="92" max="100"></progress></div>
            <div><span>Product Adoption</span><strong>81</strong><progress value="81" max="100"></progress></div>
            <div><span>Service Experience</span><strong>76</strong><progress value="76" max="100"></progress></div>
            <div><span>Relationship NPS</span><strong>88</strong><progress value="88" max="100"></progress></div>
          </div>
        </section>
        <section class="drawer-section">
          <h3>Primary drivers</h3>
          <ul class="drawer-list">
            <li>Renewal legal review is not started inside the T-120 window.</li>
            <li>CloudStay ecosystem node has elevated latency and 1.9% error rate.</li>
            <li>Admin NPS trails decision-maker NPS by 19 points.</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" data-demo-step="playbook">Run Playbook</button>
          <button class="outline-button" data-demo-step="sync">Check Sources</button>
        </div>
      `
    },
    "contact-demo": {
      kicker: "Stakeholder DNA",
      title: "Buying Center Path",
      body: `
        <section class="drawer-section">
          <h3>Recommended sequence</h3>
          <ul class="drawer-list">
            <li>Start with ${escapeHtml(customer.executive.name)} for executive business case alignment.</li>
            <li>Loop Jane Gallagher into integration scope and CloudStay latency review.</li>
            <li>Secure ${escapeHtml(customer.csm.name)} for renewal budget authority and auto-renewal timing.</li>
          </ul>
        </section>
        <section class="drawer-section">
          <h3>Relationship assets</h3>
          <div class="drawer-card">
            Last executive touch: QBR summary opened 2 days ago. Next recommended touch: expansion ROI memo.
          </div>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" id="drawerAddContact">Add Contact</button>
          <button class="outline-button" data-demo-step="risk">Back to Risk</button>
        </div>
      `
    },
    sync: {
      kicker: "Source Coverage",
      title: "Cross-System Sync",
      body: `
        <section class="drawer-section">
          <h3>Identity graph status</h3>
          <ul class="drawer-list">
            <li>HubSpot, Finance, ServiceNow, Monday, CustomerDB, and warehouse records are connected.</li>
            <li>Salesforce CRM has a warning on stale owner assignment and needs steward review.</li>
            <li>Last sync timestamps can be refreshed from the ownership matrix.</li>
          </ul>
        </section>
        <section class="drawer-section">
          <h3>Data flow</h3>
          <div class="drawer-card">Bi-directional sources update identity, lifecycle, support, product usage, and credit context.</div>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" id="drawerSyncMatrix">Sync Matrix</button>
          <button class="outline-button" data-demo-step="profile">Back to Profile</button>
        </div>
      `
    },
    playbook: {
      kicker: "AI Next Best Action",
      title: "Renewal Expansion Playbook",
      body: `
        <section class="drawer-section">
          <h3>Recommended actions</h3>
          <ul class="drawer-list">
            <li>Generate T-120 renewal brief with ARR baseline, forecasted upsell, and service risks.</li>
            <li>Create technical review task for CloudStay latency and API error rate.</li>
            <li>Send executive ROI memo to ${escapeHtml(customer.executive.name)} before legal review starts.</li>
          </ul>
        </section>
        <section class="drawer-section">
          <h3>Expected impact</h3>
          <div class="drawer-card">
            Forecasted upsell: $840K · Churn-risk reduction: 8 points · Manual reconciliation removed from CSM handoff.
          </div>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" id="createPlaybookTask">Create Tasks</button>
          <button class="outline-button" data-demo-step="identity">Verify Data</button>
        </div>
      `
    },
    contact: {
      kicker: "Contact Profile",
      title: contact.name,
      body: `
        <section class="drawer-section">
          <div class="drawer-card">
            <strong>${escapeHtml(contact.title)}</strong>
            <p class="muted">${escapeHtml(contact.role)} · Influence ${contact.influence}/5</p>
          </div>
          <ul class="drawer-list">
            <li>Email: ${escapeHtml(contact.email)}</li>
            <li>Phone: ${escapeHtml(contact.phone)}</li>
            <li>Preferred IM: ${escapeHtml(contact.im)}</li>
            <li>${escapeHtml(contact.responsibility)}</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button">Log Touchpoint</button>
          <button class="outline-button" data-demo-step="contacts">Buying Center</button>
        </div>
      `
    },
    contract: {
      kicker: "Contracts & Assets",
      title: "File Review",
      body: `
        <section class="drawer-section">
          <h3>Active contract assets</h3>
          <ul class="drawer-list">
            <li>Master Subscription Agreement · expires 2026-12-31</li>
            <li>API Addendum · liability cap $20,000,000</li>
            <li>Auto-renewal clause enabled · cancellation deadline T-90</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" data-demo-step="playbook">Use in Playbook</button>
        </div>
      `
    },
    documents: {
      kicker: "Attachments",
      title: "3 Documents",
      body: `
        <section class="drawer-section">
          <ul class="drawer-list">
            <li>MSA_Ardenbrook_2021.pdf · verified</li>
            <li>API_Addendum_2024.pdf · verified</li>
            <li>Security_Review_2025.pdf · next review 2025-08-28</li>
          </ul>
        </section>
      `
    },
    ecosystem: {
      kicker: "Ecosystem & Topology",
      title: "GDN Network Footprint",
      body: `
        <section class="drawer-section">
          <h3>Network role</h3>
          <ul class="drawer-list">
            <li>Ardenbrook Hospitality Group acts as the customer brand entity at the center of group companies, products, departments, and contacts.</li>
            <li>14 active relationships connect 4 group companies, 6 products / services, 6 departments, and 5 contacts.</li>
            <li>RevenueSync is currently degraded and should be reviewed before executive reporting.</li>
          </ul>
        </section>
        <section class="drawer-section">
          <h3>Current focus</h3>
          <div class="drawer-card">${escapeHtml(ecosystemLabel)} is mapped into the GDN topology with governed relationship ownership.</div>
        </section>
      `
    },
    "ecosystem-company": {
      kicker: "Ecosystem & Topology",
      title: ecosystemLabel,
      body: `
        <section class="drawer-section">
          <h3>Hierarchy context</h3>
          <ul class="drawer-list">
            <li>Belongs to the Ardenbrook Holdings Group LLC hierarchy and inherits brand-level governance rules.</li>
            <li>Regional divisions are connected to products through direct API and GDS distribution relationships.</li>
            <li>Parent, brand, region, and property identifiers keep billing, service, and ownership views aligned.</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" data-demo-step="sync">Check Sources</button>
        </div>
      `
    },
    "ecosystem-product": {
      kicker: "Products / Services",
      title: ecosystemLabel,
      body: `
        <section class="drawer-section">
          <h3>Service role</h3>
          <ul class="drawer-list">
            <li>Connected to the customer company through the governed GDN service layer.</li>
            <li>Supports routing, monitoring, identity, or analytics capabilities used by downstream departments.</li>
            <li>Relationship impact is counted in product/service coverage and active relationship totals.</li>
          </ul>
        </section>
      `
    },
    "ecosystem-department": {
      kicker: "Customer Department / Service Object",
      title: ecosystemLabel,
      body: `
        <section class="drawer-section">
          <h3>Served-by relationship</h3>
          <ul class="drawer-list">
            <li>Receives services from the customer company and connected GDN products.</li>
            <li>Department ownership clarifies handoff, issue routing, and approval responsibility.</li>
            <li>Mapped contacts provide the human path for operational follow-up.</li>
          </ul>
        </section>
      `
    },
    "ecosystem-contact": {
      kicker: "Customer Contact",
      title: ecosystemLabel,
      body: `
        ${
          ecosystemPhone
            ? `<section class="drawer-section">
          <div class="drawer-card"><strong>Phone</strong><p>${escapeHtml(ecosystemPhone)}</p></div>
        </section>`
            : ""
        }
        <section class="drawer-section">
          <h3>Relationship path</h3>
          <ul class="drawer-list">
            <li>Linked to one or more customer departments in the GDN relationship graph.</li>
            <li>Used by sales, success, support, and AI workflows to route the right next action.</li>
            <li>Contact responsibility is visible in the broader stakeholder DNA layer.</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="outline-button" data-demo-step="contacts">Open Stakeholders</button>
        </div>
      `
    },
    "ecosystem-node": {
      kicker: "Connected Entity",
      title: ecosystemLabel,
      body: `
        <section class="drawer-section">
          <h3>Node health</h3>
          <ul class="drawer-list">
            <li>Live node telemetry includes error rate, latency, scan recency, and 24-hour connection volume.</li>
            <li>Healthy nodes can be used for preferred routing and network expansion decisions.</li>
            <li>Degraded nodes should trigger support review before high-volume traffic is routed through them.</li>
          </ul>
        </section>
      `
    },
    "ecosystem-classification": {
      kicker: "Strategic Network Classification",
      title: ecosystemLabel,
      body: `
        <section class="drawer-section">
          <h3>Classification logic</h3>
          <ul class="drawer-list">
            <li>Strategy flags describe network value, executive visibility, traffic commitments, and preferred routing.</li>
            <li>Priority controls review cadence and escalation paths for ecosystem operations.</li>
            <li>These classifications are intended to support explainable AI recommendations.</li>
          </ul>
        </section>
      `
    },
    stakeholder: {
      kicker: "User & Stakeholder DNA",
      title: `${getSelectedStakeholder().name} · Interaction Timeline`,
      body: `
        <section class="drawer-section">
          <div class="drawer-card">
            <strong>${escapeHtml(getSelectedStakeholder().title)}</strong>
            <p class="muted">${escapeHtml(getSelectedStakeholder().role)} · Interest ${getSelectedStakeholder().interestScore}/100 · ${escapeHtml(engagementHealthLabel(getSelectedStakeholder().engagementHealth))}</p>
          </div>
          <ul class="drawer-list">
            ${getSelectedStakeholder()
              .interactions.map(
                (item) =>
                  `<li><strong>${escapeHtml(item.time)}</strong> · ${escapeHtml(item.event)} · ${escapeHtml(item.channel)} · ${escapeHtml(item.status)}</li>`
              )
              .join("")}
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" data-dna-log-touchpoint>Log Touchpoint</button>
          <button class="outline-button" data-demo-step="contacts">Buying Center</button>
        </div>
      `
    },
    voc: {
      kicker: "Experiential & VoC",
      title: "Closed-Loop Alert",
      body: `
        <section class="drawer-section">
          <ul class="drawer-list">
            <li>Competitor mention detected in two support comments.</li>
            <li>Primary sentiment cluster: reporting depth and API latency.</li>
            <li>Risk impact: service experience score -4 if unresolved for 14 days.</li>
          </ul>
        </section>
      `
    },
    tasks: {
      kicker: "Operations & Maintenance",
      title: "Create Operational Task",
      body: `
        <section class="drawer-section">
          <ul class="drawer-list">
            <li>Task category: Risk Mitigation</li>
            <li>Owner: IT Operations + CSM</li>
            <li>Due: before renewal legal review kickoff</li>
          </ul>
        </section>
        <div class="drawer-actions">
          <button class="primary-button" id="createPlaybookTask">Create Task</button>
        </div>
      `
    },
    tags: {
      kicker: "Tag Management",
      title: "Segmentation Labels",
      body: `
        <section class="drawer-section">
          <div class="theme-cloud">
            <span>Multi-Brand Hotel Group</span>
            <span>Global Chain</span>
            <span>CRS Connected</span>
            <span>Direct API Enabled</span>
            <span>Renewal Window</span>
            <span>GDN Provider</span>
            <span>Executive Sponsor</span>
          </div>
        </section>
      `
    }
  };

  if (templates[type]) return templates[type];

  return {
    kicker: "Linked System ID",
    title: type.charAt(0).toUpperCase() + type.slice(1),
    body: `
      <section class="drawer-section">
        <h3>Source details</h3>
        <ul class="drawer-list">
          <li>Mapped to ${escapeHtml(customer.name)} through CID resolution.</li>
          <li>Owner and source freshness are governed by the ownership matrix.</li>
          <li>Records contribute to the AI-ready customer context layer.</li>
        </ul>
      </section>
    `
  };
}

function openDrawer(type, payload) {
  const drawer = document.getElementById("insightDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const template = drawerTemplate(type, payload);
  document.getElementById("drawerKicker").textContent = template.kicker;
  document.getElementById("drawerTitle").textContent = template.title;
  document.getElementById("drawerBody").innerHTML = template.body;
  mountIcons(document.getElementById("drawerBody"));
  backdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  const drawer = document.getElementById("insightDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
}

function openModal() {
  document.getElementById("modalBackdrop").hidden = false;
}

function closeModal() {
  document.getElementById("modalBackdrop").hidden = true;
}

function toast(message) {
  const root = document.getElementById("toastRoot");
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  root.appendChild(element);
  window.setTimeout(() => {
    element.style.opacity = "0";
    element.style.transform = "translateY(-6px)";
  }, 2200);
  window.setTimeout(() => element.remove(), 2700);
}

function updateTimestamps() {
  const now = formatNow();
  document.querySelectorAll(".last-updated").forEach((element) => {
    element.textContent = now;
  });
  toast("Profile timestamps refreshed");
}

function syncMatrix() {
  const now = formatNow();
  document.querySelectorAll(".sync-time").forEach((element) => {
    element.textContent = now;
  });
  const warning = document.querySelector("#systemTable .pill.warning");
  if (warning) {
    warning.textContent = "Connected";
    warning.classList.remove("warning");
    warning.classList.add("success");
  }
  toast("Linked systems synchronized");
}

function exportContacts() {
  const customer = getCustomer();
  const rows = [
    ["Role", "Name", "Title", "Influence", "Email", "Phone", "Preferred IM", "Responsibility"],
    ...customer.contacts.map((contact) => [
      contact.role,
      contact.name,
      contact.title,
      contact.influence,
      contact.email,
      contact.phone,
      contact.im,
      contact.responsibility
    ])
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${customer.customerId}-contacts.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
  toast("Contacts exported");
}

function addContactFromForm(form) {
  const data = new FormData(form);
  const role = data.get("role");
  const classMap = {
    "Decision Maker": "decision",
    "IT & Technical Integration": "tech",
    "Operations & Admin": "ops",
    "Finance & Billing": "finance",
    "Commercial & Revenue": "commercial"
  };
  customers[currentCustomerKey].contacts.push({
    role,
    roleClass: classMap[role] || "commercial",
    name: data.get("name"),
    title: data.get("title"),
    influence: 4,
    email: data.get("email"),
    phone: data.get("phone"),
    im: data.get("im"),
    responsibility: data.get("responsibility")
  });
  renderContacts();
  refreshStakeholderDna();
  closeModal();
  toast("Contact added to stakeholder map");
}

function renderSearchResults(query = "") {
  const container = document.getElementById("searchResults");
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  const matches = Object.entries(customers).filter(([, customer]) => {
    return [customer.name, customer.customerId, customer.industry, customer.executive.name, customer.csm.name]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });
  container.innerHTML = matches.length
    ? matches
        .map(
          ([key, customer]) => `
            <button data-search-result="${key}">
              <strong>${escapeHtml(customer.name)}</strong>
              <span>${escapeHtml(customer.customerId)} · ${escapeHtml(customer.tier)} · ${escapeHtml(customer.industry)}</span>
            </button>
          `
        )
        .join("")
    : '<button type="button"><strong>No matching account</strong><span>Try customer, contact, or system ID.</span></button>';
  container.hidden = false;
}

function clearSpotlight() {
  document.querySelectorAll(".spotlight").forEach((element) => {
    element.classList.remove("spotlight", "pulse");
  });
}

function spotlight(hotspot) {
  clearSpotlight();
  const element = document.querySelector(`[data-hotspot="${hotspot}"]`);
  if (!element) return;
  element.classList.add("spotlight", "pulse");
  element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

function runDemoStep(stepId) {
  const step = demoSteps.find((item) => item.id === stepId) || demoSteps[0];
  demoIndex = demoSteps.findIndex((item) => item.id === step.id);
  showDomain(step.domain);
  document.getElementById("demoStatus").textContent = step.status;
  document.querySelectorAll(".scenario-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.demoStep === step.id);
  });
  window.setTimeout(() => spotlight(step.hotspot), 100);
  openDrawer(step.drawer);
}

function toggleAutoDemo() {
  const button = document.getElementById("autoDemoButton");
  if (demoTimer) {
    window.clearInterval(demoTimer);
    demoTimer = null;
    button.innerHTML = `<span class="nav-icon" data-icon="play"></span>`;
    mountIcons(button);
    toast("AI Insights paused");
    return;
  }
  runDemoStep(demoSteps[demoIndex].id);
  demoTimer = window.setInterval(() => {
    demoIndex = (demoIndex + 1) % demoSteps.length;
    runDemoStep(demoSteps[demoIndex].id);
  }, 2600);
  button.innerHTML = `<span class="nav-icon" data-icon="pause"></span>`;
  mountIcons(button);
}

function updateInsightsDockDensity() {
  const dock = document.querySelector(".demo-dock");
  if (!dock) return;
  const scrollable = document.documentElement.scrollHeight > window.innerHeight + 80;
  const distanceToBottom =
    document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
  dock.classList.toggle("small", scrollable && distanceToBottom < 180);
}

function wireEvents() {
  document.querySelectorAll(".domain-tab").forEach((button) => {
    button.addEventListener("click", () => {
      showDomain(button.dataset.domain);
      if (button.dataset.domain === "dna") refreshStakeholderDna();
    });
  });

  const dnaSearch = document.getElementById("dnaContactSearch");
  if (dnaSearch) dnaSearch.addEventListener("input", renderDnaContacts);
  ["dnaFilterOwnership", "dnaFilterPersona", "dnaFilterInterest"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.addEventListener("change", renderDnaContacts);
  });
  const dnaAddContact = document.getElementById("dnaAddContactButton");
  if (dnaAddContact) dnaAddContact.addEventListener("click", openModal);
  const dnaExport = document.getElementById("dnaExportButton");
  if (dnaExport) dnaExport.addEventListener("click", exportContacts);

  document.querySelectorAll("[data-subtab]").forEach((button) => {
    button.addEventListener("click", () => switchSubtab(button));
  });

  document.querySelectorAll("[data-risk-tab]").forEach((button) => {
    button.addEventListener("click", () => switchRiskTab(button));
  });

  document.querySelectorAll("[data-network-view]").forEach((button) => {
    button.addEventListener("click", () => switchNetworkView(button));
  });

  const healthSummary = document.getElementById("healthSummary");
  if (healthSummary) healthSummary.addEventListener("click", () => openDrawer("risk"));
  document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
  document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
  document.getElementById("addContactButton").addEventListener("click", openModal);
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("cancelModal").addEventListener("click", closeModal);
  const updateButton = document.getElementById("updateButton");
  if (updateButton) updateButton.addEventListener("click", updateTimestamps);
  document.getElementById("syncButton").addEventListener("click", () => {
    syncMatrix();
    openDrawer("sync");
  });
  document.getElementById("exportButton").addEventListener("click", exportContacts);
  document.getElementById("autoDemoButton").addEventListener("click", toggleAutoDemo);
  window.addEventListener("scroll", updateInsightsDockDensity, { passive: true });
  window.addEventListener("resize", () => {
    updateInsightsDockDensity();
    renderGdnLinks();
    renderOrgMeshLinks();
    renderHierarchyLinks();
  });

  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addContactFromForm(event.currentTarget);
  });

  document.getElementById("modalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "modalBackdrop") closeModal();
  });

  document.getElementById("customerSearch").addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  document.getElementById("searchButton").addEventListener("click", () => {
    const input = document.getElementById("customerSearch");
    renderSearchResults(input.value || "anxun");
  });

  document.addEventListener("click", (event) => {
    const drawerButton = event.target.closest("[data-drawer]");
    if (drawerButton) {
      const focus = drawerButton.dataset.ecosystemFocus;
      if (focus) setEcosystemFocus(focus);
      openDrawer(drawerButton.dataset.drawer, { focus });
      return;
    }

    const demoButton = event.target.closest("[data-demo-step]");
    if (demoButton) {
      if (demoTimer) toggleAutoDemo();
      runDemoStep(demoButton.dataset.demoStep);
      return;
    }

    const dnaRow = event.target.closest(".dna-contact-row");
    if (
      dnaRow &&
      !event.target.closest("[data-dna-view]") &&
      !event.target.closest("[data-dna-mail]") &&
      !event.target.closest("a[href^='mailto:']")
    ) {
      selectDnaStakeholder(dnaRow.dataset.dnaIndex);
      return;
    }

    const dnaView = event.target.closest("[data-dna-view]");
    if (dnaView) {
      selectDnaStakeholder(dnaView.dataset.dnaView);
      openDrawer("stakeholder");
      return;
    }

    const dnaMail = event.target.closest("[data-dna-mail]");
    if (dnaMail) {
      toast(`Email context opened for ${dnaMail.dataset.dnaMail}`);
      return;
    }

    const contactAction = event.target.closest("[data-contact-action]");
    if (contactAction) {
      const contact = getCustomer().contacts[Number(contactAction.dataset.index)];
      if (contactAction.dataset.contactAction === "mail") {
        toast(`Email context opened for ${contact.name}`);
      } else if (contactAction.dataset.contactAction === "call") {
        toast(`Call notes prepared for ${contact.name}`);
      } else {
        openDrawer("contact", { contact });
      }
      return;
    }

    const result = event.target.closest("[data-search-result]");
    if (result) {
      renderCustomer(result.dataset.searchResult);
      document.getElementById("searchResults").hidden = true;
      document.getElementById("customerSearch").value = "";
    }
  });

  document.getElementById("drawerBody").addEventListener("click", (event) => {
    if (event.target.closest("#drawerSyncButton") || event.target.closest("#drawerSyncMatrix")) {
      syncMatrix();
      spotlight("systems");
    }
    if (event.target.closest("#drawerAddContact")) {
      openModal();
    }
    if (event.target.closest("#createPlaybookTask")) {
      toast("Playbook tasks created");
      showDomain("operations");
      spotlight("operations");
    }
    if (event.target.closest("[data-dna-log-touchpoint]")) {
      toast(`Touchpoint logged for ${getSelectedStakeholder().name}`);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
      closeModal();
      clearSpotlight();
    }
  });
}

mountIcons();
wireEvents();
renderCustomer("anxun", { silent: true });
refreshStakeholderDna();
updateInsightsDockDensity();
renderGdnLinks();
scheduleHierarchyRender();
