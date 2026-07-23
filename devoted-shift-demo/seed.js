/* Devoted Shift demo v2 — shared fictional dataset. Every person, place, and number is invented.
   Demo date frozen: Wednesday, July 22, 2026 (matches the live-capture snapshot day). */
window.DEMO = {
  today: "Wednesday, July 22, 2026",
  todayShort: "Wednesday, July 22",
  greeting: "Good afternoon, Sam.",
  scheduler: { name: "Demo Scheduler", role: "Admin", initial: "D" },
  caregivers: [
    { id: 1, name: "Maria Santos",  initials: "MS", role: "HCA", score: 4.8, phone: "(555) 014-2201", city: "Brookfield",   lang: "English/Spanish", driver: true,  status: "Open",    isNew: false },
    { id: 2, name: "Faye Whitman",  initials: "FW", role: "CNA", score: 4.6, phone: "(555) 014-2202", city: "Lakewood",     lang: "English",         driver: true,  status: "Open",    isNew: false },
    { id: 3, name: "Marta Rivers",  initials: "MR", role: "HCA", score: 4.9, phone: "(555) 014-2203", city: "Cedar Falls",  lang: "English",         driver: true,  status: "Open",    isNew: false },
    { id: 4, name: "Sam Delgado",   initials: "SD", role: "CNA", score: 4.2, phone: "(555) 014-2204", city: "Brookfield",   lang: "English/Spanish", driver: false, status: "Limited", isNew: false },
    { id: 5, name: "Kim Navarro",   initials: "KN", role: "HCA", score: 4.5, phone: "(555) 014-2205", city: "Ashton",       lang: "English/Spanish", driver: true,  status: "Open",    isNew: false },
    { id: 6, name: "Rosa Alvarez",  initials: "RA", role: "CNA", score: 4.7, phone: "(555) 014-2206", city: "Miller Creek", lang: "Spanish",         driver: false, status: "Open",    isNew: false },
    { id: 7, name: "Daniel Osei",   initials: "DO", role: "HCA", score: 0,   phone: "(555) 014-2207", city: "Lakewood",     lang: "English",         driver: true,  status: "Open",    isNew: true  },
    { id: 8, name: "Priya Nair",    initials: "PN", role: "LVN", score: 4.9, phone: "(555) 014-2208", city: "Cedar Falls",  lang: "English",         driver: true,  status: "Limited", isNew: false },
    { id: 9, name: "Jordan Blake",  initials: "JB", role: "HCA", score: 3.8, phone: "(555) 014-2209", city: "Ashton",       lang: "English",         driver: false, status: "Open",    isNew: false, onCall: true },
    { id:10, name: "Alice Zhang",   initials: "AZ", role: "CNA", score: 4.4, phone: "(555) 014-2210", city: "Brookfield",   lang: "English",         driver: true,  status: "Open",    isNew: false }
  ],
  clients: ["Eleanor Price", "Harold Loomis", "Grace Turner", "Victor Ames", "Nadia Osman", "Peter Halvorsen", "Sofia Marchetti", "June Park"],
  rosterCounts: { total: 10, isNew: 1, missingInfo: 2 },
  openShifts: [
    { client: "Eleanor Price",   day: "Wed, Jul 29", window: "11:00 AM–7:00 PM", city: "Brookfield",   openFor: "4 days",  band: "NEXT WEEK · JUL 27 – AUG 2" },
    { client: "Eleanor Price",   day: "Thu, Jul 30", window: "11:00 AM–7:00 PM", city: "Brookfield",   openFor: "4 days",  band: "NEXT WEEK · JUL 27 – AUG 2" },
    { client: "Eleanor Price",   day: "Fri, Jul 31", window: "11:00 AM–7:00 PM", city: "Brookfield",   openFor: "4 days",  band: "NEXT WEEK · JUL 27 – AUG 2" },
    { client: "Nadia Osman",     day: "Sat, Aug 1",  window: "10:00 PM–6:00 AM", city: "Miller Creek", openFor: "2 days",  band: "NEXT WEEK · JUL 27 – AUG 2" },
    { client: "Grace Turner",    day: "Sun, Aug 2",  window: "4:00 PM–8:00 PM",  city: "Lakewood",     openFor: "6 hours", band: "NEXT WEEK · JUL 27 – AUG 2" },
    { client: "Harold Loomis",   day: "Mon, Aug 3",  window: "9:00 AM–1:00 PM",  city: "Cedar Falls",  openFor: "3 days",  band: "AUG 3 – AUG 9" },
    { client: "Sofia Marchetti", day: "Tue, Aug 4",  window: "7:00 AM–3:00 PM",  city: "Lakewood",     openFor: "2 days",  band: "AUG 3 – AUG 9" },
    { client: "Peter Halvorsen", day: "Wed, Aug 5",  window: "8:00 AM–12:00 PM", city: "Brookfield",   openFor: "5 hours", band: "AUG 3 – AUG 9" },
    { client: "June Park",       day: "Thu, Aug 6",  window: "5:00 PM–9:00 PM",  city: "Cedar Falls",  openFor: "2 days",  band: "AUG 3 – AUG 9" },
    { client: "Victor Ames",     day: "Fri, Aug 7",  window: "10:00 AM–2:00 PM", city: "Ashton",       openFor: "1 day",   band: "AUG 3 – AUG 9" }
  ],
  coverage: {
    weekLabel: "Jul 20 – Jul 26",
    days: [{d:"MON",n:20},{d:"TUE",n:21},{d:"WED",n:22,sel:true},{d:"THU",n:23},{d:"FRI",n:24},{d:"SAT",n:25},{d:"SUN",n:26}],
    shifts: [
      { name: "AM SHIFT", count: 4, range: "6:00 AM–2:00 PM" },
      { name: "PM SHIFT", count: 6, range: "2:00 PM–6:00 PM" },
      { name: "EVENING SHIFT", count: 5, range: "6:00 PM–10:00 PM" },
      { name: "OVERNIGHT SHIFT", count: 3, range: "10:00 PM–6:00 AM" }
    ],
    recommended: 8, otherPossible: 2,
    rows: [
      { name: "Marta Rivers",  city: "Cedar Falls",  driver: true },
      { name: "Alice Zhang",   city: "Brookfield",   driver: true },
      { name: "Maria Santos",  city: "Brookfield",   driver: true,  booked: "Booked by Devoted Shift · 8:00a–4:00p" },
      { name: "Kim Navarro",   city: "Ashton",       driver: true },
      { name: "Rosa Alvarez",  city: "Miller Creek", driver: false },
      { name: "Faye Whitman",  city: "Lakewood",     driver: true },
      { name: "Daniel Osei",   city: "Lakewood",     driver: true },
      { name: "Jordan Blake",  city: "Ashton",       driver: false, onCall: true },
      { name: "Priya Nair",    city: "Cedar Falls",  driver: true,  booked: "Booked by Devoted Shift · 9:00a–5:00p" },
      { name: "Sam Delgado",   city: "Brookfield",   driver: false }
    ]
  },
  yourDay: [
    { dotClass: "notes", title: "Care notes to review", sub: "2 flagged · 3 routine yesterday", href: "./notes-review.html" }
  ],
  devoLine: "2 things need your attention today — nothing urgent, so let's get ahead of them.",
  askChips: ["Who's free tomorrow in Brookfield?", "Who's free Saturday overnight?", "Who's available in Lakewood this week?", "What shifts are open today?", "Who has the most call-offs?", "What can you help me with?"],
  careNotes: {
    counts: { needsAction: 2, followUp: 2, routine: 3, all: 7 },
    rows: [
      { client: "Sofia Marchetti", am: { text: "Client tried to leave the house twice during the afternoon. Redirected safely both times. Family notified.", by: "Marta Rivers" }, pm: null, status: "Needs Action" },
      { client: "Nadia Osman", am: null, pm: { text: "Client refused the 11pm glucose check, accepted at 1am reading 168. Slept well after.", by: "Sam Delgado" }, status: "Needs Action" },
      { client: "Eleanor Price", am: { text: "Slight bruise on left forearm noticed during bathing, client does not recall bumping anything.", by: "Rosa Alvarez" }, pm: { missing: true, by: "Faye Whitman" }, status: "Follow-up" },
      { client: "Harold Loomis", am: { missing: true, by: "Kim Navarro" }, pm: null, status: "Follow-up" },
      { client: "June Park", am: { text: "Wound dressing changed on schedule. Site looks clean, no drainage. Client in good spirits.", by: "Priya Nair" }, pm: null, status: "Routine" },
      { client: "Victor Ames", am: { text: "Comfortable day. Family visited in the afternoon. Appetite low but stable.", by: "Kim Navarro" }, pm: { text: "Quiet evening, ate half of dinner, resting comfortably.", by: "Alice Zhang" }, status: "Routine" },
      { client: "Peter Halvorsen", am: { text: "Two Hoyer transfers completed smoothly. Client spent the morning reading on the porch.", by: "Maria Santos" }, pm: null, status: "Routine" }
    ],
    moreRoutine: 0
  },
  handoff: {
    openShifts: 10,
    notes: [],
    recentlyResolved: 2,
    followUps: 3,
    issuesToWatch: 2
  },
  tasks: [
    { pri: "HIGH", kind: "MANUAL", state: "OPEN", title: "Call Marta Rivers for current availability", desc: "Her availability calendar is due for its monthly refresh. Call her and enter the real availability in Edit Availability so she stays offerable.", who: "Marta Rivers", createdBy: "Demo Scheduler", assigned: "Unassigned" },
    { pri: "HIGH", kind: "SYSTEM", state: "OPEN", title: "Backfill Friday coverage for Eleanor Price", desc: "A call-off left Friday 11:00 AM–7:00 PM uncovered. 2 clean fits are free that day — run Find Coverage and lock one in.", who: "Eleanor Price", createdBy: "System", assigned: "Unassigned" },
    { pri: "MED", kind: "SYSTEM", state: "OPEN", title: "Nurse review: bruise report on Eleanor Price", desc: "Yesterday's care note documented an unexplained forearm bruise with photo. Route to the nurse for follow-up per protocol.", who: "Eleanor Price", createdBy: "System", assigned: "Unassigned" },
    { pri: "MED", kind: "SYSTEM", state: "OPEN", title: "New client onboarding: Sofia Marchetti", desc: "First shift starts Monday. Confirm care plan, introduce the assigned caregiver, and schedule the first supervisory visit.", who: "Sofia Marchetti", createdBy: "System", assigned: "Unassigned" }
  ],
  reports: {
    kpis: [
      { v: "96%", cls: "good", label: "Coverage rate (7d)", sub: "134 of 139 scheduled" },
      { v: "1", cls: "", label: "No-shows (90d)", sub: "from clock truth" },
      { v: "2", cls: "", label: "Starting within 24h", sub: "" }
    ],
    trend: [96,97,95,98,96,97,99,98,96,95,97,98,99,97,96,98,97,96,95,96],
    leaderboard: [
      { name: "Dana R.", filled: 18, avg: "36m", tasks: 9 },
      { name: "Miguel T.", filled: 14, avg: "44m", tasks: 7 },
      { name: "Ashley P.", filled: 11, avg: "49m", tasks: 5 }
    ]
  },
  forms: {
    categories: [
      { name: "DAILY CARE LOGS", count: 9, items: [
        { title: "Daily Care Notes", type: "DAILY NOTES" }, { title: "Vitals Log", type: "LOG TABLE" },
        { title: "Blood Sugar Log", type: "LOG TABLE" }, { title: "Weight Log", type: "LOG TABLE" },
        { title: "Fluid Intake Log", type: "LOG TABLE" }, { title: "Meal Intake Log", type: "LOG TABLE" },
        { title: "Bowel Movement Log", type: "LOG TABLE" }, { title: "Urine Log", type: "LOG TABLE" },
        { title: "Sleep Log", type: "LOG TABLE" } ] },
      { name: "PERSONAL CARE & MOBILITY", count: 4, items: [
        { title: "Bathing Assistance Checklist", type: "CHECKLIST" }, { title: "Transfer Safety Checklist", type: "CHECKLIST" },
        { title: "Range of Motion Log", type: "LOG TABLE" }, { title: "Fall Incident Report", type: "INCIDENT" } ] }
    ]
  },
  guides: [
    { cat: "AGENCY PROCEDURES", title: "Call-Off Procedure", desc: "The right way to call off a shift.", meta: "Office Procedure · 1-minute read" },
    { cat: "FEEDING TUBE CARE", title: "Feeding Tube Care Reminders", desc: "Safe daily habits for clients with a feeding tube.", meta: "Daily Care Reminder · 1-minute read" },
    { cat: "CARE NOTES", title: "How to Complete Care Notes", desc: "Clear, professional notes at the end of every shift.", meta: "Office Procedure · 1-minute read" },
    { cat: "OFFICE & COMMUNICATION", title: "How to Contact the Office", desc: "Reach the right Devoted Shift team fast.", meta: "Office Procedure · 1-minute read" },
    { cat: "NUTRITION & HYDRATION", title: "NPO (Nothing By Mouth)", desc: "Client asks for water, ice chips, food, candy, or gum while on an NPO order.", meta: "What To Do If... · 1-minute read" },
    { cat: "NUTRITION & HYDRATION", title: "Nutrition & Hydration Guide", desc: "Helping clients eat and drink enough every day.", meta: "Daily Care Reminder · 1-minute read" },
    { cat: "REPOSITIONING", title: "Repositioning Guide", desc: "Prevent pressure sores with safe repositioning.", meta: "Daily Care Reminder · 1-minute read" },
    { cat: "AGENCY PROCEDURES", title: "Running Late Procedure", desc: "What to do when you'll arrive late.", meta: "Office Procedure · 1-minute read" }
  ],
  profile: {
    name: "Maria Santos", initials: "MS", score: 4.8, role: "HCA",
    updated: "Updated 6 days ago · by Dana R.", nextUpdate: "Next update due Aug 15, 2026",
    aiSummary: "Maria has an overall reliability score of 97%, with 1 call-off and 0 late arrivals on record. She prefers 8–10 hour day shifts and 32 weekly hours, with no overnights. She works well with dementia, hospice, and behavioral support clients, and can drive clients in Brookfield, Lakewood, and Cedar Falls.",
    reliability: { pct: 97, callOffs: 1, issueHistory: 1 },
    workPrefs: [
      ["Preferred minimum shift", "8 hours"], ["Preferred maximum shift", "10 hours"],
      ["Transportation", "Has own vehicle · Can drive clients"],
      ["Preferred service areas", "Brookfield, Lakewood, Cedar Falls"],
      ["Maximum travel distance", "25 miles"], ["Preferred weekly hours", "32"],
      ["English proficiency", "Fluent"]
    ],
    employment: [
      ["How long with Devoted Shift", "2 yrs 4 mos"], ["Caregiving experience", "6 years"],
      ["Total hours worked", "3,740 h"], ["Last client served", "Nadia Osman"]
    ],
    commLog: { date: "Jul 16, 2026", from: "Office", count: 1, reason: "Mandatory Training Reminder", keyInfo: "Dementia care refresher module; Email sent 7/16/26; Mandatory completion" },
    blocked: ["Peter Halvorsen"],
    restrictions: ["No Overnight", "Heavy lifting restriction due to work history"],
    generalNotes: [
      "Prefers morning starts; strongest with structured routines.",
      "Families frequently ask for her by name; gentle with morning routines."
    ],
    calendar: { month: "July 2026", todayN: 22, devotedDays: {4:"8:00a–8:00p", 5:"8:00a–8:00p", 22:"8:00a–4:00p"}, openTag: n => (n % 2 ? "Afternoon" : "Morning"), unavailable: [12, 13, 26, 27] }
  }
};
window.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
window.el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

/* ---- System switcher (platform launcher) — injected on every page from the shared seed ---- */
window.DEMO.systems = [
  { name: "Scheduling Intelligence", sub: "You are here", tone: "#1E40AF", here: true,
    icon: '<rect x="3" y="4.5" width="18" height="16" rx="2" stroke-width="2"/><path d="M3 9h18M8 3v3M16 3v3" stroke-width="2" stroke-linecap="round"/>' },
  { name: "Team Hub", sub: "Staff directory, comms & collaboration", tone: "#1F7A4A", badge: "LIVE",
    icon: '<circle cx="9" cy="8" r="3" stroke-width="2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke-width="2" stroke-linecap="round"/><path d="M16 6.6a3 3 0 0 1 0 5.4M20.5 19a5.6 5.6 0 0 0-3-4.4" stroke-width="2" stroke-linecap="round"/>' },
  { name: "HR", sub: "Onboarding, records & time-off", tone: "#BD8312", badge: "SOON",
    icon: '<rect x="3" y="5" width="18" height="14" rx="2" stroke-width="2"/><circle cx="8.5" cy="11" r="2" stroke-width="2"/><path d="M14 10h4M14 13.5h4M5 16.6c.6-1.6 2-2.3 3.5-2.3s2.9.7 3.5 2.3" stroke-width="1.8" stroke-linecap="round"/>' },
  { name: "Finance", sub: "Payroll, billing & invoicing", tone: "#11546F", badge: "SOON",
    icon: '<circle cx="12" cy="12" r="9" stroke-width="2"/><path d="M12 7v10M14.6 9.3c-.5-.8-1.5-1.3-2.6-1.3-1.4 0-2.5.8-2.5 2 0 1.3 1.1 1.8 2.6 2s2.5.8 2.5 2.1c0 1.2-1.1 2-2.6 2-1.2 0-2.2-.5-2.7-1.4" stroke-width="1.8" stroke-linecap="round"/>' },
  { name: "Recruiting", sub: "Applicants & hiring pipeline", tone: "#5A6B7A", badge: "SOON",
    icon: '<circle cx="10" cy="8" r="3.2" stroke-width="2"/><path d="M4 19a6 6 0 0 1 12 0" stroke-width="2" stroke-linecap="round"/><path d="M19 8v6M16 11h6" stroke-width="2" stroke-linecap="round"/>' },
  { name: "Marketing", sub: "Referrals, CRM & community outreach", tone: "#B5468A", badge: "SOON",
    icon: '<path d="M4 10v4h3l6 4V6l-6 4H4z" stroke-width="2" stroke-linejoin="round"/><path d="M17 9a4 4 0 0 1 0 6" stroke-width="2" stroke-linecap="round"/>' },
  { name: "Digital Marketing", sub: "Website, social media, SEO & campaigns", tone: "#7A4FB5", badge: "SOON",
    icon: '<circle cx="12" cy="12" r="9" stroke-width="2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke-width="1.6"/>' },
  { name: "Company", sub: "Policies, compliance, quality & company resources", tone: "#3A6B7A", badge: "SOON",
    icon: '<path d="M4 21V5l8-2 8 2v16" stroke-width="2" stroke-linejoin="round"/><path d="M9 21v-4h6v4M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01" stroke-width="2" stroke-linecap="round"/>' },
  { name: "Training", sub: "Orientation, courses & certifications", tone: "#C0662A", badge: "SOON",
    icon: '<path d="M3 9l9-4 9 4-9 4-9-4z" stroke-width="2" stroke-linejoin="round"/><path d="M7 11v4c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5v-4M21 9v4" stroke-width="2" stroke-linecap="round"/>' }
];
(function () {
  function init() {
    var brand = document.querySelector(".brand");
    var rail = document.querySelector(".rail");
    if (!brand || !rail) return;
    var pop = document.createElement("div");
    pop.className = "sw-pop";
    pop.setAttribute("role", "menu");
    var rows = window.DEMO.systems.map(function (s) {
      return '<button class="sw-row' + (s.here ? " here" : "") + '" type="button">' +
        '<span class="sw-ico" style="background:' + s.tone + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">' + s.icon + "</svg></span>" +
        '<span class="t"><b>' + s.name + "</b><span>" + s.sub + "</span></span>" +
        (s.badge ? '<span class="sw-badge ' + s.badge.toLowerCase() + '">' + s.badge + "</span>" : "") +
        "</button>";
    }).join("");
    pop.innerHTML = '<div class="sw-head"><b>Devoted Shift Platform</b><span>SWITCH SYSTEM</span></div>' + rows;
    document.body.appendChild(pop);
    brand.setAttribute("aria-label", "Switch system");
    brand.addEventListener("click", function (e) {
      e.preventDefault();
      pop.classList.toggle("open");
    });
    pop.addEventListener("click", function (e) {
      var row = e.target.closest(".sw-row");
      if (row) pop.classList.remove("open");
    });
    document.addEventListener("click", function (e) {
      if (!pop.contains(e.target) && !brand.contains(e.target)) pop.classList.remove("open");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") pop.classList.remove("open");
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
