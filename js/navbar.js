// Navbar Component
class Navbar {
  constructor(currentPage = null) {
    this.currentPage = currentPage || this.getCurrentPage();
    
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split("/").pop() || "dashboard6.html";
    return filename;
  }

  // For redirecting

  createNavbarHTML() {
    return `
      <nav class="top-navbar" id="top-navbar">
        <div class="navbar-left">
          <i id="menu-toggle" class="fas fa-bars menu-icon"></i>
          <span class="navbar-title">UNO Minda</span>
        </div>
        <div class="navbar-right">
          <button id="logout-btn" class="logout-btn">
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </nav>

      <div class="sidebar" id="sidebar">
        <img
          src="uno-minda-transparent.png.png"
          alt="UNO Minda Logo"
          class="sidebar-logo" />
        <a href="dashboard6.html" class="sidebar-link ${
          this.currentPage === "dashboard6.html" ? "active" : ""
        }">
          <i class="fas fa-th-large"></i><span>Dashboard</span>
        </a>
        <a href="allocation6.html" class="sidebar-link ${
          this.currentPage === "allocation6.html" ? "active" : ""
        }">
          <i class="fas fa-project-diagram"></i><span>Allocation</span>
        </a>
        <a href="EmployeeMaster6.html" class="sidebar-link ${
          this.currentPage === "EmployeeMaster6.html" ? "active" : ""
        }">
          <i class="fas fa-users"></i><span>Employee Master</span>
        </a>
        
      </div>
    `;
  }

  // For styling

  createNavbarStyles() {
    return `
      <style>
        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .layout {
          display: flex;
          height: 100vh;
        }

        .top-navbar {
          height: 70px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          color: #333;
          padding: 0 20px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 240px;
          right: 0;
          z-index: 1001;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .top-navbar.collapsed {
          left: 0;
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-left: 5px;
        }

        .menu-icon {
          font-size: 24px;
          color: #e94360;
          cursor: pointer;
        }

        .navbar-title {
          font-size: 18px;
          font-weight: 600;
          color: #1e1e1e;
        }

        .navbar-right {
          display: flex;
          align-items: center;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #e94360;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .logout-btn:hover {
          background: #d63851;
          transform: translateY(-1px);
        }

        .logout-btn i {
          font-size: 16px;
        }

        .main {
          flex: 1;
          transition: margin-left 0.3s ease;
          margin-left: 240px;
        }

        .main.full {
          margin-left: 0;
        }

        .sidebar {
          width: 240px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          color: #333;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          padding: 30px 20px;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .sidebar.collapsed {
          transform: translateX(-240px);
        }
        
        .sidebar-logo {
          width: 180px;
          display: block;
          margin: 0 0 20px 10px;
        }
        
        .sidebar-link {
          display: flex;
          align-items: center;
          padding: 15px 18px;
          color: #555;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
        }
        
        .sidebar-link::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        
        .sidebar-link i {
          margin-right: 12px;
          font-size: 18px;
          transition: all 0.3s ease;
        }
        
        .sidebar-link:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          color: #333;
          transform: translateX(5px);
        }
        
        .sidebar-link:hover::before {
          transform: scaleY(1);
        }
        
        .sidebar-link:hover i {
          transform: scale(1.1);
          color: #667eea;
        }
        
        .sidebar-link.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          color: #333;
          font-weight: 600;
          transform: translateX(5px);
        }
        
        .sidebar-link.active::before {
          transform: scaleY(1);
        }
        
        .sidebar-link.active i {
          color: #667eea;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-240px);
            position: fixed;
            z-index: 1000;
          }

          .sidebar.collapsed {
            transform: translateX(0);
          }

          .top-navbar {
            left: 0 !important;
          }

          .main {
            margin-left: 0 !important;
          }
        }

        /* Desktop behavior - ensure sidebar is visible by default */
        @media (min-width: 769px) {
          .sidebar {
            transform: translateX(0);
          }

          .sidebar.collapsed {
            transform: translateX(-240px);
          }

          .top-navbar {
            left: 240px;
          }

          .top-navbar.collapsed {
            left: 0;
          }

          .main {
            margin-left: 240px;
          }

          .main.full {
            margin-left: 0;
          }
        }
      </style>
    `;
  }

  init() {
    // Add styles to head
    document.head.insertAdjacentHTML("beforeend", this.createNavbarStyles());

    // Add navbar HTML to body
    document.body.insertAdjacentHTML("afterbegin", this.createNavbarHTML());

    // Initialize navbar functionality
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main") || document.getElementById("main-content");
    const topNavbar = document.getElementById("top-navbar");
    const logoutBtn = document.getElementById("logout-btn");

    if (menuToggle && sidebar && topNavbar) {
      menuToggle.addEventListener("click", () => {
        const isDesktop = window.innerWidth > 768;
        
        if (isDesktop) {
          // Desktop behavior: toggle sidebar visibility
          sidebar.classList.toggle("collapsed");
          if (main) main.classList.toggle("full");
          topNavbar.classList.toggle("collapsed");
        } else {
          // Mobile behavior: toggle sidebar overlay
          sidebar.classList.toggle("collapsed");
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to logout?")) {
          // Use the global authManager from script.js
          if (typeof authManager !== "undefined") {
            authManager.logout();
          } else {
            // Fallback if authManager is not available
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userId");
            localStorage.removeItem("loginTime");
            window.location.href = "index.html";
          }
        }
      });
    }
  }
}

// Only auto-initialize if not manually initialized
// let navbarInitialized = false;

// document.addEventListener("DOMContentLoaded", () => {
//   // Check if navbar was manually initialized
//   if (!navbarInitialized && !document.getElementById("sidebar")) {
//     new Navbar().init();
//     navbarInitialized = true;
//   }
// });

// Export for module usage if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = Navbar;
}
