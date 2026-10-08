const projectData = {
  careme: {
    title: "Care-Me Platform",
    subtitle: "Healthcare & Beauty Reservation Platform",
    description: "A comprehensive multi-platform healthcare and beauty reservation system built from scratch. Features multi-role access for Admin, Owner, Manager, Collaborator, and Client roles with real-time notifications, admin dashboards, and a Flutter mobile app. Includes advanced booking system, calendar management, payment processing, and analytics.",
    duration: "1.5+ Years",
    role: "Lead Fullstack Developer",
    status: "Pre-launch",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Flutter", "Stripe", "AWS", "Redis", "JWT"],
    features: [
      "Multi-role access control system (RBAC)",
      "Real-time notifications and updates",
      "Comprehensive admin dashboards",
      "Flutter mobile application (iOS & Android)",
      "Payment integration with Stripe",
      "Calendar and appointment management",
      "Review and rating system",
      "Email and SMS notifications",
      "Advanced search and filtering",
      "Production deployment on AWS",
      "Full system architecture design",
      "API documentation and testing"
    ],
    link: "https://github.com/dhia13"
  },
  bistrodz: {
    title: "BistroDZ",
    subtitle: "Restaurant POS & Management System",
    description: "A complete restaurant POS and management system with role-based access. Features multi-space support, real-time table ordering, stock management, receipt printing, and comprehensive analytics. Currently serving 10+ active restaurants with real-time synchronization across devices.",
    duration: "Recently Launched - 6 Months Development",
    role: "Fullstack Developer",
    status: "Live - 10+ Active Restaurants",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "AWS S3", "Printer API"],
    features: [
      "Role-based access control (Owner, Manager, Waiter)",
      "Multi-space restaurant support",
      "Real-time table ordering and synchronization",
      "Advanced stock management system",
      "Receipt printing and POS integration",
      "Comprehensive analytics dashboard",
      "Sales reports and insights",
      "Menu management system",
      "Customer management",
      "Production deployment on AWS",
      "Mobile-responsive design",
      "Offline mode support"
    ],
    link: "https://github.com/dhia13"
  },
  dopm: {
    title: "DOPM",
    subtitle: "Frontend Delivery Tracking App",
    description: "A comprehensive frontend delivery tracking application built for a French client. Features real-time GPS tracking, interactive maps, order status updates, delivery notifications, and an intuitive user dashboard with order history and live tracking capabilities.",
    duration: "Freelance Project - 3 Months",
    role: "Frontend Developer",
    status: "Completed & Deployed",
    technologies: ["React", "TypeScript", "Real-time Tracking", "Map Integration", "User Dashboard", "Responsive Design"],
    features: [
      "Real-time GPS delivery tracking",
      "Interactive map integration",
      "Order status updates",
      "Push notifications",
      "User dashboard with order history",
      "Responsive mobile-first design",
      "Multi-language support (FR/EN)"
    ],
    link: "https://github.com/dhia13"
  },
  construction: {
    title: "Construction Management",
    subtitle: "Dashboard & Workflow Development",
    description: "A comprehensive construction management system featuring advanced dashboard analytics, workflow automation, project tracking, resource management, and team collaboration tools. Designed to streamline construction project management from planning to completion.",
    duration: "Freelance Project - 4 Months",
    role: "Fullstack Developer",
    status: "Completed & In Production",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Dashboard Analytics", "Workflow Engine"],
    features: [
      "Advanced dashboard with real-time analytics",
      "Workflow automation engine",
      "Project tracking and milestones",
      "Resource management system",
      "Team collaboration tools",
      "Document management",
      "Reporting and insights",
      "Mobile-responsive interface"
    ],
    link: "https://github.com/dhia13"
  },
  pdfextractor: {
    title: "Pdf-Extractor",
    subtitle: "Open Source PDF Processing Tool",
    description: "An open-source Node.js tool for PDF processing. Available on GitHub for the developer community.",
    duration: "Open Source",
    role: "Creator",
    status: "Active",
    technologies: ["Node.js", "PDF Processing"],
    features: [
      "PDF text extraction",
      "PDF manipulation",
      "Open source",
      "Community contributions"
    ],
    link: "https://github.com/dhia13/Pdf-Extractor"
  },
  hermeslib: {
    title: "HermesLib",
    subtitle: "Open Source JavaScript Library",
    description: "An open-source JavaScript utility library providing helpful functions for developers. Available on GitHub.",
    duration: "Open Source",
    role: "Creator",
    status: "Active",
    technologies: ["JavaScript", "Utility Functions"],
    features: [
      "Utility functions",
      "Helper methods",
      "Open source",
      "Community contributions"
    ],
    link: "https://github.com/dhia13/HermesLib"
  }
};

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  
  modalBody.innerHTML = `
    <h2 id="modal-title" class="modal-title">${project.title}</h2>
    <p class="modal-subtitle">${project.subtitle}</p>
    <div class="modal-meta">
      <span class="modal-badge">${project.duration}</span>
      <span class="modal-badge">${project.role}</span>
      <span class="modal-badge modal-badge-status">${project.status}</span>
    </div>
    <p class="modal-description">${project.description}</p>
    <div class="modal-section">
      <h3 class="modal-section-title">Technologies</h3>
      <div class="modal-tech-tags">
        ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h3 class="modal-section-title">Key Features</h3>
      <ul class="modal-features">
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-actions">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-red">View on GitHub</a>
      <button onclick="closeProjectModal()" class="btn btn-white">Close</button>
    </div>
  `;
  
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.setAttribute("aria-hidden", "true");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// Make functions globally available
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

