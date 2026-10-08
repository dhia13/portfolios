"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";
import "./project-modal.js";

// Development mode check (set to false in production)
const DEV_MODE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

document.addEventListener("DOMContentLoaded", () => {
  // Hide page loader
  const pageLoader = document.getElementById("page-loader");
  if (pageLoader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        pageLoader.classList.add("hidden");
        setTimeout(() => {
          pageLoader.style.display = "none";
        }, 500);
      }, 300);
    });
  }

  // Scroll progress indicator
  const scrollProgress = document.getElementById("scroll-progress");
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.width = scrolled + "%";
    });
  }

  AOS.init({
    once: true,
  });
  form();
  skillbar();

  // Update copyright year dynamically
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Animate statistics numbers
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current) + (target >= 10 ? "+" : "");
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + (target >= 10 ? "+" : "");
      }
    };

    updateCounter();
  };

  // Intersection Observer for statistics
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number");
        statNumbers.forEach((stat) => {
          if (!stat.classList.contains("animated")) {
            stat.classList.add("animated");
            animateCounter(stat);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Animate skill bars in skills section when scrolled into view
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("skills-section-visible");
        const skillBars = entry.target.querySelectorAll(".skill-level-bar");
        skillBars.forEach((bar, index) => {
          const width = bar.getAttribute("data-width") || bar.style.width;
          bar.setAttribute("data-width", width);
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, index * 100);
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.querySelector(".skills");
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // Initialize skill bars with data-width attribute
  const skillBars = document.querySelectorAll(".skill-level-bar");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    if (width) {
      bar.setAttribute("data-width", width);
    }
  });

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectBoxes = document.querySelectorAll(".project-box");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectBoxes.forEach((box) => {
        const categories = box.getAttribute("data-category") || "";
        
        if (filterValue === "all" || categories.includes(filterValue)) {
          box.style.display = "block";
          setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "scale(1)";
          }, 10);
        } else {
          box.style.opacity = "0";
          box.style.transform = "scale(0.8)";
          setTimeout(() => {
            box.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Don't trigger shortcuts when typing in inputs/textarea
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    // Alt/Ctrl + Key combinations
    if (e.altKey || e.ctrlKey) {
      switch (e.key.toLowerCase()) {
        case "h":
          e.preventDefault();
          document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "a":
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "s":
          e.preventDefault();
          document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "p":
          e.preventDefault();
          document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "c":
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "t":
          e.preventDefault();
          themeToggle?.click();
          break;
      }
    }

    // Escape key to close modals
    if (e.key === "Escape") {
      const modal = document.getElementById("project-modal");
      if (modal && modal.classList.contains("open")) {
        closeProjectModal();
      }
      // Close mobile menu
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
        navBtnImg.src = "img/icons/open.svg";
      }
    }
  });

  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const currentTheme = localStorage.getItem("theme") || "light";
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark" && themeIcon) {
    themeIcon.textContent = "☀️";
  }

  themeToggle?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (themeIcon) {
      themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
    }
  });

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  //Hamburger menu with accessibility
  navBtn.onclick = () => {
    const isOpen = nav.classList.toggle("open");
    navBtn.setAttribute("aria-expanded", isOpen);
    if (isOpen) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            navBtn.setAttribute("aria-expanded", "false");
            navBtnImg.src = "img/icons/open.svg";
          }
        }
      }
    });
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  // Image loading states and error handling with error boundaries
  const projectImages = document.querySelectorAll(".project-img");
  
  projectImages.forEach((img, index) => {
    try {
      // Add skeleton loader
      const skeleton = document.createElement("div");
      skeleton.className = "image-skeleton";
      skeleton.style.width = "100%";
      skeleton.style.height = "250px"; // Default height
      img.parentElement.insertBefore(skeleton, img);
      
      // Handle image load
      if (img.complete && img.naturalHeight !== 0) {
        skeleton.remove();
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", () => {
          skeleton.remove();
          img.classList.add("loaded");
          // Add fade-in animation
          setTimeout(() => {
            img.style.opacity = "1";
          }, 100);
        });
        
        img.addEventListener("error", () => {
          skeleton.remove();
          img.classList.add("error");
          img.src = ""; // Remove broken image
          img.alt = "Image not available";
          if (DEV_MODE) {
            console.warn(`Failed to load image: ${img.getAttribute("data-src") || img.src}`);
          }
        });
      }
    } catch (error) {
      if (DEV_MODE) {
        console.error(`Error handling image ${index}:`, error);
      }
      // Fallback: ensure image is visible even if error handling fails
      img.style.opacity = "1";
    }
  });

  // Error boundary for JavaScript errors
  window.addEventListener("error", (event) => {
    if (DEV_MODE) {
      console.error("JavaScript error caught:", event.error);
    }
    // You can add error reporting here (e.g., send to analytics)
  });

  // Error boundary for unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    if (DEV_MODE) {
      console.error("Unhandled promise rejection:", event.reason);
    }
    // Prevent default browser error handling
    event.preventDefault();
  });

  // Performance monitoring
  if ("PerformanceObserver" in window) {
    // Monitor Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (DEV_MODE) {
          console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (e) {
      if (DEV_MODE) {
        console.log("LCP monitoring not supported");
      }
    }

    // Monitor First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (DEV_MODE) {
            console.log("FID:", entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
    } catch (e) {
      if (DEV_MODE) {
        console.log("FID monitoring not supported");
      }
    }

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    try {
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            if (DEV_MODE) {
              console.log("CLS:", clsValue);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (e) {
      if (DEV_MODE) {
        console.log("CLS monitoring not supported");
      }
    }
  }

  // Log page load performance
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0];
      if (perfData && DEV_MODE) {
        console.log("Page Load Time:", perfData.loadEventEnd - perfData.fetchStart, "ms");
        console.log("DOM Content Loaded:", perfData.domContentLoadedEventEnd - perfData.fetchStart, "ms");
        console.log("Time to First Byte:", perfData.responseStart - perfData.fetchStart, "ms");
      }
    }, 0);
  });
});
