/* Devoted Shift demo — shared fictional dataset. Every person, place, and number here is
   invented for the public demo. The demo date is frozen at Thursday, July 23, 2026. */
window.DEMO = {
  today: "Thursday, July 23, 2026",
  caregivers: [
    { id: 1, name: "Maria Santos",  initials: "MS", role: "HCA",  score: 4.8, phone: "(555) 014-2201", city: "Brookfield",  status: "Active",  skills: ["Dementia care", "Hoyer lift", "Driver"], avail: "Mon-Fri day", hours: 32 },
    { id: 2, name: "Faye Whitman",  initials: "FW", role: "CNA",  score: 4.6, phone: "(555) 014-2202", city: "Lakewood",    status: "Active",  skills: ["Wound care", "Diabetes care", "Driver"], avail: "Weekends + eve", hours: 24 },
    { id: 3, name: "Marta Rivers",  initials: "MR", role: "HCA",  score: 4.9, phone: "(555) 014-2203", city: "Cedar Falls", status: "Active",  skills: ["Companionship", "Meal prep"], avail: "Anytime", hours: 40 },
    { id: 4, name: "Sam Delgado",   initials: "SD", role: "CNA",  score: 4.2, phone: "(555) 014-2204", city: "Brookfield",  status: "Active",  skills: ["Transfers", "Driver", "Overnight"], avail: "Overnight", hours: 36 },
    { id: 5, name: "Kim Navarro",   initials: "KN", role: "HCA",  score: 4.5, phone: "(555) 014-2205", city: "Ashton",      status: "Active",  skills: ["Hospice support", "Spanish"], avail: "Mon-Sat day", hours: 28 },
    { id: 6, name: "Rosa Alvarez",  initials: "RA", role: "CNA",  score: 4.7, phone: "(555) 014-2206", city: "Miller Creek",status: "Active",  skills: ["Dementia care", "Wound care"], avail: "Weekdays", hours: 30 },
    { id: 7, name: "Daniel Osei",   initials: "DO", role: "HCA",  score: 4.1, phone: "(555) 014-2207", city: "Lakewood",    status: "Active",  skills: ["Transfers", "Driver"], avail: "Eve + weekends", hours: 20 },
    { id: 8, name: "Priya Nair",    initials: "PN", role: "LVN",  score: 4.9, phone: "(555) 014-2208", city: "Cedar Falls", status: "Active",  skills: ["Med management", "Wound care", "G-tube"], avail: "Weekdays day", hours: 38 },
    { id: 9, name: "Jordan Blake",  initials: "JB", role: "HCA",  score: 3.8, phone: "(555) 014-2209", city: "Ashton",      status: "Inactive",skills: ["Companionship"], avail: "On call", hours: 0 },
    { id:10, name: "Alice Zhang",   initials: "AZ", role: "CNA",  score: 4.4, phone: "(555) 014-2210", city: "Brookfield",  status: "Active",  skills: ["Overnight", "Hoyer lift", "Driver"], avail: "Night shifts", hours: 33 }
  ],
  clients: [
    { id: 1, name: "Eleanor Price",   initials: "EP", city: "Brookfield",   care: "Dementia care, 2x transfers", pref: "Female caregiver", shift: "Day 8a-4p" },
    { id: 2, name: "Harold Loomis",   initials: "HL", city: "Cedar Falls",  care: "Post-surgery recovery, driver required", pref: "No preference", shift: "Day 9a-1p" },
    { id: 3, name: "Grace Turner",    initials: "GT", city: "Lakewood",     care: "Companionship, meal prep", pref: "No preference", shift: "Eve 4p-8p" },
    { id: 4, name: "Victor Ames",     initials: "VA", city: "Ashton",       care: "Hospice support", pref: "Spanish speaking", shift: "Day 10a-2p" },
    { id: 5, name: "Nadia Osman",     initials: "NO", city: "Miller Creek", care: "Diabetes care, med reminders", pref: "Female caregiver", shift: "Overnight 10p-6a" },
    { id: 6, name: "Peter Halvorsen", initials: "PH", city: "Brookfield",   care: "Transfers, Hoyer lift", pref: "No preference", shift: "Day 8a-12p" },
    { id: 7, name: "Sofia Marchetti", initials: "SM", city: "Lakewood",     care: "Dementia care, wandering risk", pref: "Experienced with dementia", shift: "Day 7a-3p" },
    { id: 8, name: "June Park",       initials: "JP", city: "Cedar Falls",  care: "Wound care (LVN)", pref: "Licensed nurse", shift: "Eve 5p-9p" }
  ],
  openShifts: [
    { id: 1, client: "Eleanor Price",   when: "Today · 8:00a-4:00p",   reason: "Call-off (Faye Whitman, sick)", tier: "URGENT", uncovered: "6h 20m" },
    { id: 2, client: "Nadia Osman",     when: "Tonight · 10:00p-6:00a", reason: "Unfilled recurring",            tier: "TONIGHT", uncovered: "" },
    { id: 3, client: "Harold Loomis",   when: "Fri Jul 24 · 9:00a-1:00p", reason: "Caregiver PTO (Marta Rivers)", tier: "THIS WEEK", uncovered: "" },
    { id: 4, client: "Grace Turner",    when: "Sat Jul 25 · 4:00p-8:00p", reason: "Unfilled recurring",           tier: "THIS WEEK", uncovered: "" },
    { id: 5, client: "Sofia Marchetti", when: "Mon Jul 27 · 7:00a-3:00p", reason: "New client start",             tier: "NEXT WEEK", uncovered: "" }
  ],
  careNotes: [
    { id: 1, caregiver: "Marta Rivers", client: "Sofia Marchetti", shift: "Yesterday · Day", flag: "crit", note: "Client tried to leave the house twice during the afternoon. Redirected safely both times. Family notified.", ai: "Wandering risk escalating. 2 exit attempts in one shift, up from 0 last week. Recommend care plan review." },
    { id: 2, caregiver: "Priya Nair",   client: "June Park",       shift: "Yesterday · Eve", flag: "good", note: "Wound dressing changed on schedule. Site looks clean, no drainage. Client in good spirits.", ai: "Wound healing on track. No deviation from care plan." },
    { id: 3, caregiver: "Sam Delgado",  client: "Nadia Osman",     shift: "Last night · Overnight", flag: "warn", note: "Client refused the 11pm glucose check, accepted at 1am reading 168. Slept well after.", ai: "Med adherence deviation: glucose check delayed 2 hours. Second refusal this week." },
    { id: 4, caregiver: "Kim Navarro",  client: "Victor Ames",     shift: "Yesterday · Day", flag: "good", note: "Comfortable day. Family visited in the afternoon. Appetite low but stable.", ai: "Consistent with hospice baseline. No action needed." },
    { id: 5, caregiver: "Rosa Alvarez", client: "Eleanor Price",   shift: "Yesterday · Day", flag: "warn", note: "Slight bruise on left forearm noticed during bathing, client does not recall bumping anything.", ai: "Unexplained bruise documented with photo. Flag for nurse follow-up per protocol." }
  ],
  weeklyTasks: [
    { id: 1, task: "Follow up: Eleanor Price coverage for Friday", owner: "Scheduler", due: "Today", done: false, from: "Call-off" },
    { id: 2, task: "Nurse review: bruise report on Eleanor Price", owner: "Nurse",     due: "Today", done: false, from: "Care note flag" },
    { id: 3, task: "Confirm Marta Rivers PTO backfill",            owner: "Scheduler", due: "Thu",   done: true,  from: "PTO request" },
    { id: 4, task: "New client onboarding: Sofia Marchetti",       owner: "Admin",     due: "Fri",   done: false, from: "Intake" },
    { id: 5, task: "Monthly supervisory visit: Nadia Osman",       owner: "Nurse",     due: "Next week", done: false, from: "Compliance" }
  ],
  handoffs: [
    { id: 1, from: "Sam Delgado", to: "Maria Santos", client: "Nadia Osman", time: "6:00a today", note: "Glucose 168 at 1am after initial refusal. Watch morning reading. Breakfast prepped." },
    { id: 2, from: "Rosa Alvarez", to: "Faye Whitman", client: "Eleanor Price", time: "4:00p yesterday", note: "Bruise on left forearm documented and photographed. Nurse follow-up pending. Mood good." }
  ],
  match: function (shiftClient) {
    return [
      { rank: 1, name: "Marta Rivers", why: "Available, 4 prior shifts with this client, 12 min away", grade: "Clean fit", tone: "good" },
      { rank: 2, name: "Alice Zhang",  why: "Available, has required skills, 22 min away",             grade: "Clean fit", tone: "good" },
      { rank: 3, name: "Daniel Osei",  why: "Available after 4:00p only, partial overlap",             grade: "Partial",   tone: "warn" },
      { rank: 4, name: "Kim Navarro",  why: "Booked 10a-2p with Victor Ames, would need a move",       grade: "Conflict",  tone: "warn" },
      { rank: 5, name: "Jordan Blake", why: "Marked Inactive, shown for completeness, never hidden",   grade: "Buried",    tone: "crit" }
    ];
  }
};
/* Shared micro-helpers */
window.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
window.el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
