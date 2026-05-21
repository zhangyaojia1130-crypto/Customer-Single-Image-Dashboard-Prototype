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
    initials: "AC",
    name: "Anxun Technology Co., Ltd.",
    tier: "Tier 2",
    industry: "Technology / Software",
    arr: "$12,560,000",
    expiration: "2026-12-31",
    score: 86,
    health: "Healthy",
    churn: "Low",
    oes: "8.1 / 10",
    nps: "42",
    executive: { name: "David Lee", email: "david.lee@anxun.com" },
    csm: { name: "Emma Wang", email: "emma.wang@anxun.com" },
    customerId: "CUST-ANXUN-06078",
    hq: "Beijing, China",
    parent: "Anxun Group",
    tags: ["Strategic", "High Value", "SaaS"],
    contacts: [
      {
        role: "Decision Maker",
        roleClass: "decision",
        name: "David Lee",
        title: "CTO",
        influence: 5,
        email: "david.lee@anxun.com",
        phone: "+86 138 0000 0001",
        im: "WeChat: davidlee",
        responsibility: "Technical decision owner and executive sponsor."
      },
      {
        role: "IT & Technical Integration",
        roleClass: "tech",
        name: "Jane Zhang",
        title: "Head of IT",
        influence: 5,
        email: "jane.zhang@anxun.com",
        phone: "+86 139 0000 0002",
        im: "WhatsApp: jane.it",
        responsibility: "Key stakeholder for platform integration and delivery."
      },
      {
        role: "Operations & Admin",
        roleClass: "ops",
        name: "Michael Chen",
        title: "Product Manager",
        influence: 4,
        email: "michael.chen@anxun.com",
        phone: "+86 137 0000 0003",
        im: "WeChat: michaelchen",
        responsibility: "Drives daily operational coordination."
      },
      {
        role: "Finance & Billing",
        roleClass: "finance",
        name: "Emma Wang",
        title: "Finance Director",
        influence: 5,
        email: "emma.wang@anxun.com",
        phone: "+86 136 0000 0004",
        im: "WeChat: emmawang",
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
  container.insertAdjacentHTML("beforeend", '<button class="tag add-tag" data-drawer="tags">+2</button>');
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
  setText("customerName", customer.name);
  setText("customerTier", customer.tier);
  setText("customerIndustry", customer.industry);
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
  document.getElementById("scoreRing").style.setProperty("--score", customer.score);
  renderTags("heroTags", customer.tags);
  renderIdentityTags(customer.tags);
  renderContacts();
  if (!options.silent) toast(`Loaded ${customer.name}`);
}

function showDomain(domain) {
  document.querySelectorAll(".domain-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.domain === domain);
  });
  document.querySelectorAll(".domain-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.domainPanel === domain);
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
            <p>Jane Zhang owns exception review, duplicate merge approval, and security review scheduling.</p>
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
            <li>Loop Jane Zhang into integration scope and CloudStay latency review.</li>
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
            <li>MSA_Anxun_2021.pdf · verified</li>
            <li>API_Addendum_2024.pdf · verified</li>
            <li>Security_Review_2025.pdf · next review 2025-08-28</li>
          </ul>
        </section>
      `
    },
    ecosystem: {
      kicker: "Ecosystem & Topology",
      title: "Connected Entity Context",
      body: `
        <section class="drawer-section">
          <h3>Network role</h3>
          <ul class="drawer-list">
            <li>Acts as both data provider and data consumer in GDN.</li>
            <li>48 active entity connections create measurable network value.</li>
            <li>CloudStay node is the current operational watch item.</li>
          </ul>
        </section>
      `
    },
    stakeholder: {
      kicker: "User & Stakeholder DNA",
      title: "Decision-Maker Matrix",
      body: `
        <section class="drawer-section">
          <ul class="drawer-list">
            <li>David Lee: champion and executive sponsor.</li>
            <li>Emma Wang: economic approver with renewal authority.</li>
            <li>Jane Zhang: technical buyer and delivery gatekeeper.</li>
          </ul>
        </section>
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
            <span>Strategic</span>
            <span>High Value</span>
            <span>SaaS</span>
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
    button.addEventListener("click", () => showDomain(button.dataset.domain));
  });

  document.querySelectorAll("[data-subtab]").forEach((button) => {
    button.addEventListener("click", () => switchSubtab(button));
  });

  document.querySelectorAll("[data-risk-tab]").forEach((button) => {
    button.addEventListener("click", () => switchRiskTab(button));
  });

  document.getElementById("healthSummary").addEventListener("click", () => openDrawer("risk"));
  document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
  document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
  document.getElementById("addContactButton").addEventListener("click", openModal);
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("cancelModal").addEventListener("click", closeModal);
  document.getElementById("updateButton").addEventListener("click", updateTimestamps);
  document.getElementById("syncButton").addEventListener("click", () => {
    syncMatrix();
    openDrawer("sync");
  });
  document.getElementById("exportButton").addEventListener("click", exportContacts);
  document.getElementById("autoDemoButton").addEventListener("click", toggleAutoDemo);
  window.addEventListener("scroll", updateInsightsDockDensity, { passive: true });
  window.addEventListener("resize", updateInsightsDockDensity);

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
      openDrawer(drawerButton.dataset.drawer);
      return;
    }

    const demoButton = event.target.closest("[data-demo-step]");
    if (demoButton) {
      if (demoTimer) toggleAutoDemo();
      runDemoStep(demoButton.dataset.demoStep);
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
updateInsightsDockDensity();
