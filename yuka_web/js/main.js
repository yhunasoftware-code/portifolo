/**
 * Main Application Logic - Abraham Alemu Portfolio
 * Strict 2-Color Palette (Violet & Cyan) with Consistent Typography
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.portfolioData || {};
  
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Spotlight mouse effect
  const spotlight = document.querySelector(".spotlight");
  if (spotlight) {
    window.addEventListener("pointermove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  // Mobile navigation toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
      } else {
        mobileMenu.classList.remove("hidden");
        mobileMenuBtn.innerHTML = `<i data-lucide="x" class="w-6 h-6"></i>`;
      }
      if (window.lucide) lucide.createIcons();
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        if (mobileMenuBtn) {
          mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
          if (window.lucide) lucide.createIcons();
        }
      });
    });
  }

  // Navbar background change on scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-[#07070d]/90", "backdrop-blur-xl", "shadow-xl", "border-b", "border-white/10");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-[#07070d]/90", "shadow-xl", "border-b", "border-white/10");
      navbar.classList.add("bg-transparent");
    }
  });

  // Project Category Filter
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("gradient-primary", "text-white", "border-transparent");
        b.classList.add("text-gray-400", "bg-white/5", "border-white/10");
      });

      btn.classList.add("gradient-primary", "text-white", "border-transparent");
      btn.classList.remove("text-gray-400", "bg-white/5", "border-white/10");

      const category = btn.getAttribute("data-category");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.classList.remove("hidden");
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.opacity = "1";
          }, 50);
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Project Modal System
  const projectModal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalTagline = document.getElementById("modal-tagline");
  const modalDescription = document.getElementById("modal-description");
  const modalHighlights = document.getElementById("modal-highlights");
  const modalTags = document.getElementById("modal-tags");
  const modalLiveLink = document.getElementById("modal-live-link");
  const modalGithubLink = document.getElementById("modal-github-link");
  const modalStats = document.getElementById("modal-stats");

  window.openProjectModal = function (projectId) {
    const project = data.projects.find((p) => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.title;
    modalTagline.textContent = project.tagline || project.category;
    modalDescription.textContent = project.description;

    // Highlights list
    modalHighlights.innerHTML = "";
    (project.highlights || []).forEach((item) => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2.5 text-sm text-gray-300";
      li.innerHTML = `
        <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <i data-lucide="check" class="w-3.5 h-3.5"></i>
        </span>
        <span>${item}</span>
      `;
      modalHighlights.appendChild(li);
    });

    // Tech Tags
    modalTags.innerHTML = "";
    (project.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tech-tag";
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    // Stats
    modalStats.innerHTML = "";
    if (project.stats) {
      Object.entries(project.stats).forEach(([key, val]) => {
        const div = document.createElement("div");
        div.className = "p-3 rounded-xl bg-white/5 border border-white/5 text-center";
        div.innerHTML = `
          <div class="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-1">${key}</div>
          <div class="text-sm font-semibold text-white">${val}</div>
        `;
        modalStats.appendChild(div);
      });
    }

    // Links
    modalLiveLink.href = project.liveUrl || "#";
    modalGithubLink.href = project.githubUrl || "#";

    projectModal.classList.remove("hidden");
    projectModal.classList.add("flex");
    document.body.style.overflow = "hidden";

    if (window.lucide) lucide.createIcons();
  };

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.add("hidden");
      projectModal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Toast System
  window.showToast = function (message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    const iconName = type === "success" ? "check-circle-2" : "alert-circle";
    const iconColor = type === "success" ? "text-cyan-400" : "text-purple-400";

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor}"></i>
      <span class="font-medium">${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  };

  // Copy to clipboard helper
  window.copyText = function (text, label) {
    navigator.clipboard.writeText(text).then(
      () => {
        window.showToast(`${label} copied to clipboard!`, "success");
      },
      () => {
        window.showToast(`Failed to copy ${label}`, "error");
      }
    );
  };

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("sender-name")?.value.trim();
      const email = document.getElementById("sender-email")?.value.trim();
      const message = document.getElementById("sender-message")?.value.trim();

      if (!name || !email || !message) {
        window.showToast("Please fill in all required fields.", "error");
        return;
      }

      // Button loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">
          <i data-lucide="loader-2" class="w-5 h-5"></i>
        </span>
        Sending Message...
      `;
      if (window.lucide) lucide.createIcons();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) lucide.createIcons();

        window.showToast("Thank you Abraham! Your message was received successfully.", "success");
        contactForm.reset();
      }, 1000);
    });
  }

  // Smooth active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-white", "font-semibold");
      link.classList.add("text-gray-400");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-white", "font-semibold");
        link.classList.remove("text-gray-400");
      }
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
        backToTopBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
        backToTopBtn.classList.remove("opacity-100", "translate-y-0");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
