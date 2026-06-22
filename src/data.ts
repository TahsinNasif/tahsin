import { Project, Testimony, TimelineEvent, ServiceExpertise, SkillItem } from "./types";

export const projects: Project[] = [
  {
    id: "finflow",
    title: "FinFlow",
    category: "Fintech",
    shortDescription: "Streamlining complex financial operations for international startups with a modern SaaS approach.",
    longDescription: "FinFlow is a high-fidelity web and mobile dashboard designed for modern global financial teams. Traditional fintech software is bloated, dense, and suffers from high latency. FinFlow resolves this with an ultra-responsive, modular bento UI layout, providing real-time multichain treasury visualization and single-click vendor payouts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlOLRboWdreku5fLyN9HLBQhYBTWKXCODsuzTgEsrMVQYkpzMX63Ccxrua6lO3m5AvqzNE6uDLkIBD9X5f8IeO1Z4AAtAU6I8JuUKWWwgRIsq6zwkPdS7RVjjL_fCGeR41TSqKvXN3YZ7HQqWO2KGG43qVKjLsxlea5oe_MZdlmP14LdKGs6hbp5dAKqLmUmP4Ol2F1bhQDGHS-w0il9cxJBZgVqDYNVU4MKWLsqhDhGWp0PabdHlEVzGWfEZJ4nkiAc00Ky7JfPo",
    altText: "FinFlow SaaS Dashboard mockup demonstrating elegant micro-graphs, transaction statements, and dark UI system.",
    metrics: [
      { label: "Engagement Incr.", value: "42%" },
      { label: "Trans. Vol.", value: "12M+" }
    ],
    challenge: "Treasury managers at rapid-scale startups were wasting hours daily copy-pasting data between disparate financial rails. The interface needed to display real-time values, complex regulatory validations, and transactional health on a unified interface without overwhelming the cognitive capacity of users.",
    solution: "Designed a clean, multi-layered dashboard using the 'progressive disclosure' structural pattern. Key treasury statistics are nested inside glowing micro-bento cards, while secondary details expand only on interaction. Implemented an elastic, tokenized Design System with clear feedback states that prevent erroneous high-value payouts.",
    process: [
      "User Research & Journey Mapping: Interviewed 14 Treasury Officers to pinpoint frictional pain points.",
      "Information Architecture: Re-engineered cross-rail data models into a modular three-tier card system.",
      "High-Fidelity UI Prototyping: Iterated on elegant dark theme variations using 8px padding increments.",
      "Usability Validation: Conducted unmoderated tests showing a 34% drop in common operation completion times.",
      "Engineering Handoff: Delivered responsive component tokens in Tailwind CSS directly to the frontend engineering team."
    ],
    role: "Lead Digital Product Designer",
    timeline: "May 2021 - Oct 2021"
  },
  {
    id: "healthsync",
    title: "HealthSync",
    category: "AI Healthcare",
    shortDescription: "Transforming patient care with predictive AI diagnostics and intuitive clinical workflows.",
    longDescription: "HealthSync is an immersive, clinical-grade operating dashboard designed in partnership with top radiologists and oncologists. By embedding state-of-the-art predictive AI models inside standard hospital systems (PACS), HealthSync highlights high-priority anomalies seamlessly, saving vital minutes during emergent triage.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVxYAI5it7Vox8SQyumbJvUgRuKlzzzEQKxxurUBH9nSq_-deC9Qhsr7YX_cdRH_oXn-fJDGKeV_LYm1XKdKCGF6NtmYB6EusxRbVwzX1r1BjjKX4F4r4jluGMRyY_xfaZcBrutS8Mwicy9FVnox61MM4vjIjCv6j5TSBtGAiGho-fIjao8R3_XWAO7B3WhvXWotbDM_Jh7aATKnDiRFIv_ylJqwFAb0rlFVGz2JmyzINhH649yx4B_kfN4_CuzwMOTiLvpgwZttA",
    altText: "HealthSync diagnostic application interface focusing on high-precision clinical data overlays.",
    metrics: [
      { label: "Completion Rate", value: "55%" },
      { label: "Medical Centers", value: "3k+" }
    ],
    challenge: "Radiology departments handle massive image loads, leading to physician burnout and diagnostic blindspots. Introducing AI as an external product created 'alert fatigue'. The design challenge was placing AI insights natively into existing radiologists' diagnostic workflows without forcing context switches.",
    solution: "Developed an elegant, high-contrast black-theme medical viewer interface supporting ambient 'halo glows' of prioritized diagnostic warnings. Clinical workflows were simplified with custom HUD-style panels, making sure radiologists can approve diagnoses or trigger automatic second-opinion reviews with a single keystroke.",
    process: [
      "Clinical Context Observation: Conducted shadow studies in three critical care environments.",
      "Co-Design Workshops: Met weekly with medical directors to establish dark-room eye comfort parameters.",
      "Component Architecture: Structured medical timeline modules and modular image slice viewers.",
      "Clickstream Analysis: Monitored target click pathways to remove 4 extraneous navigation layers."
    ],
    role: "Senior UX Designer / Researcher",
    timeline: "Nov 2022 - Mar 2023"
  },
  {
    id: "tasksphere",
    title: "TaskSphere",
    category: "SaaS",
    shortDescription: "A unified workspace for high-velocity teams to manage tasks, documents, and communication.",
    longDescription: "TaskSphere brings cohesive order to distributed organizations. It consolidates scattered project management trackers, team chat spaces, and document co-authoring tools into a single high-performance app centered on beautiful typographic flow.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpApsoWOHRgr3d2lXodMtUzut7tezM601Z6Qs95SqMFIglAdiWGFvMEL10alsQtgw67O-1jTkjWa6tX-lUA_D5kyjbvRLHub0rM7vUNaYIOfSBkRwOFQ-lC0N_bOxzbxwOEu27QmpefApQFl37T-3XXjTE7LEj-CG4drmL8syi-LPn9c8tLy1nsA9jUTrVbztJZPq1xupLlbQytrL5R8m84x2aPJWTZG_zxOaA2Qngj5YheLITqXf5Ncj6N4ZsXeRXq1lEckxMKTs",
    altText: "TaskSphere collaborative bento panel with rich file browser and project layout trackers.",
    metrics: [
      { label: "Team Velocity", value: "3.5x" },
      { label: "Active Users", value: "85k" }
    ],
    challenge: "Productivity suites are frequently bogged down by bloated navigation ribbons, slow sync engines, and confusing page depths. High-velocity workspace users wanted custom-configured panels with close to zero latency.",
    solution: "Initiated a unified Bento-Grid interface model. Teams can customize, pin, and collapse workspace columns easily. Integrated frictionless keyboard interactions ('Omnibar-first') for quick navigation and styled canvas view frames with subtle frosted-glass overlays.",
    process: [
      "Competitive Deep-dive: mapped 22 productivity tools to chart complexity vs power.",
      "Grid Prototype: Constructed real-time draggable viewport grids using framer modules.",
      "Refining Aesthetics: Adopted a warm technical theme with deep slate frames and bright indigo highlights."
    ],
    role: "Lead Interactive Designer",
    timeline: "Jun 2023 - Jan 2024"
  }
];

export const testimonials: Testimony[] = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "CEO @ Nova Labs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSdCs2yeXEa2ApBl2fOJlA8Uxugki6lIj2XdDEKeIvLxsDlRNQVUef3GiKsFX_GUFZGH-FRa4wGZ1n3qF7--mSf7vr2PAr8GEm_Q63Ph4YYKSx-3a_mJShx9uRVgXr7e9IsvCrdGBWKiLm0ODU-OC8ymSmW8guhrzg6ZhY3wKenKbl37g9WdBF83e6V5myyCnyLbqmIHSHZtyA8d14MrN1ihpU9afmjbjOBW65aySa3L0kbiBUYsK6qwbyHX3QI4a1sG-RXAlr1sQ",
    rating: 5,
    quote: "Alex transformed our fragmented product into a cohesive experience. His ability to balance business logic with beautiful design is rare and invaluable."
  },
  {
    id: "michael",
    name: "Michael Lee",
    role: "Product Lead @ BrightTech",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-520aoTNPmUd5znYnul58k2ZZTu_TNgtoHKx5reQD8wBOlCOn3aAY379Wt8JdE2CfQoA5iNBwoot_Tbuz0283cnlVlbrhwSqJlT8fy0QEllYHJm1Ls6S5iqck5_brdWBsf-C9ZrGOn7QtzgW2q8FoJF0AuhoEMCAQJ16cJqNNpgxHcLz0xs-i_B2lPGfAQpt2s7BilAaaxGoAs335coGHT_o8k2RD_RZOuIoUALquaTpiNdUSIPy8hJwOsUhxNb2z6kYyfCi8pUo",
    rating: 5,
    quote: "Working with Alex was the best decision we made for our rebrand. He didn't just give us a new look; he gave us a scalable design language that our engineers love."
  },
  {
    id: "emma",
    name: "Emma Carter",
    role: "Design Director @ FinFlow",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_eh2oY0y4MRnamBHRV_5wwtpXWeZSy35630YX2UkJOnAtgxTGDnMXDxYs2U7JonFw92JBaBoaNSVnM1ZR9XGygmzbu4ip_kKzdiSiBSaEmcGXBmEQcDwvsWcpg_0oXx_VzrDKmHM-x2nvKahxOcFhcCbhHPFGTRNa9t4f4lrvR08ltzZsVcgcIk3hhfoH7YBUZBy0Sq9tLJ6tL7bn-QvaySBWwnBENBEGfNdb9lFuxgpxq2Ngc-KEA1Rp6Yzx61pbb9-I0hEwwhc",
    rating: 5,
    quote: "Alex has a unique way of humanizing complex data. Our analytics dashboard went from overwhelming to delightful under his guidance."
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "nova",
    role: "Senior Product Designer",
    company: "Nova Labs",
    period: "2021 – Present",
    description: "Leading the design of core infrastructure products, mentoring junior designers, and implementing a company-wide design system.",
    isActive: true
  },
  {
    id: "bright",
    role: "Product Designer",
    company: "BrightTech",
    period: "2018 – 2021",
    description: "Shipped mobile-first solutions for enterprise e-commerce platforms, reducing cart abandonment by 24% through improved checkout flows.",
    isActive: false
  },
  {
    id: "pixel",
    role: "Visual Designer",
    company: "Pixel Studio",
    period: "2016 – 2018",
    description: "Crafting high-end marketing sites and brand identities for early-stage startups in the Silicon Valley ecosystem.",
    isActive: false
  }
];

export const services: ServiceExpertise[] = [
  {
    id: "prod-design",
    title: "Product Design",
    description: "End-to-end design from concept to final handoff, ensuring brand consistency and usability.",
    iconName: "Palette"
  },
  {
    id: "ux-research",
    title: "UX Research",
    description: "In-depth user testing, interviews, and audits to validate assumptions and find opportunities.",
    iconName: "Search"
  },
  {
    id: "design-sys",
    title: "Design Systems",
    description: "Developing component-based systems that empower developers and scale product growth.",
    iconName: "Layers"
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description: "High-fidelity interactive prototypes that demonstrate motion, flow, and micro-interactions.",
    iconName: "Cpu"
  }
];

export const skillsGrouped = {
  design: [
    { name: "Figma", level: 95 },
    { name: "Visual Design", level: 90 },
    { name: "Motion Design", level: 85 }
  ],
  research: [
    { name: "User Interviews", level: 88 },
    { name: "Usability Testing", level: 92 },
    { name: "Data Analysis", level: 80 }
  ],
  tools: [
    { name: "Webflow", level: 85 },
    { name: "Framer", level: 90 },
    { name: "Adobe CC", level: 82 }
  ],
  collaboration: [
    { name: "Agile / Scrum", level: 92 },
    { name: "Jira / Linear", level: 88 },
    { name: "Product Roadmap", level: 85 }
  ]
};
