document.addEventListener("DOMContentLoaded", function () {
  const loginDrawer = document.getElementById("login-drawer");
  const registerDrawer = document.getElementById("register-drawer");
  const cartDrawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("overlay");

  const loginTrigger = document.querySelector(".login-trigger");
  const cartTrigger = document.querySelector(".cart-trigger");
  const openRegisterLink = document.getElementById("open-register"); // ✅ correct ID

  const closeLoginBtn = document.getElementById("close-login");
  const closeRegisterBtn = document.getElementById("close-drawer");
  const closeCartBtn = document.getElementById("close-cart");

  // Open Login Drawer
  if (loginTrigger) {
    loginTrigger.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      registerDrawer?.classList.remove("open");
      loginDrawer.classList.add("open");
      overlay.classList.remove("hidden");
    });
  }

  // Open Cart Drawer
  if (cartTrigger) {
    cartTrigger.addEventListener("click", () => {
      loginDrawer.classList.remove("open");
      registerDrawer?.classList.remove("open");
      cartDrawer?.classList.add("open");
      overlay.classList.remove("hidden");
    });
  }

  // Open Register from Login Drawer
  if (openRegisterLink) {
    openRegisterLink.addEventListener("click", (e) => {
      e.preventDefault();
      loginDrawer.classList.remove("open");
      cartDrawer.classList.remove("open");
      registerDrawer.classList.add("open");
      overlay.classList.remove("hidden");
    });
  }

  // Close Drawers
  closeLoginBtn?.addEventListener("click", () => {
    loginDrawer.classList.remove("open");
    overlay.classList.add("hidden");
  });

  closeRegisterBtn?.addEventListener("click", () => {
    registerDrawer.classList.remove("open");
    overlay.classList.add("hidden");
  });

  closeCartBtn?.addEventListener("click", () => {
    cartDrawer.classList.remove("open");
    overlay.classList.add("hidden");
  });

  // Close All on Overlay Click
  overlay.addEventListener("click", () => {
    loginDrawer.classList.remove("open");
    registerDrawer.classList.remove("open");
    cartDrawer.classList.remove("open");
    overlay.classList.add("hidden");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
  const contentSections = document.querySelectorAll('.content-section');
  const dashboardDropdown = document.querySelector('.dropdown');
  const dashboardToggle = document.querySelector('.dropdown-toggle');
  const notificationTrigger = document.querySelector('.notification-trigger');
  const notificationDrawer = document.getElementById('notification-drawer');
  const closeNotificationButton = document.getElementById('close-notification');
  const overlay = document.getElementById('overlay');

  // Function to hide all content sections
  function hideAllSections() {
      contentSections.forEach(section => {
          section.classList.remove('active');
      });
  }

  // Function to activate a content section
  function showSection(id) {
      const sectionToShow = document.getElementById(id);
      if (sectionToShow) {
          sectionToShow.classList.add('active');
      }
  }

  // Handle sidebar link clicks
  sidebarLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('data-target');
          if (targetId) {
              hideAllSections();
              showSection(targetId);

              // Update active sidebar link
              sidebarLinks.forEach(l => l.parentNode.classList.remove('active'));
              this.parentNode.classList.add('active');
              if (this.classList.contains('dropdown-toggle')) {
                  this.parentNode.classList.add('active');
              } else {
                  // Ensure the parent dropdown is also visually active if a dropdown item is clicked
                  let parentDropdown = this.closest('.dropdown');
                  if (parentDropdown) {
                      parentDropdown.classList.add('active');
                      // Keep the dropdown open after a child is selected (optional)
                      parentDropdown.classList.add('open');
                      parentDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
                      parentDropdown.querySelector('.dropdown-menu').style.display = 'block';
                  }
              }
          }
      });
  });

  // Handle Dashboard dropdown toggle
  if (dashboardToggle) {
      dashboardToggle.addEventListener('click', function(event) {
          event.preventDefault();
          dashboardDropdown.classList.toggle('open');
          const expanded = this.getAttribute('aria-expanded') === 'true' || false;
          this.setAttribute('aria-expanded', !expanded);
          dashboardDropdown.querySelector('.dropdown-menu').style.display = expanded ? 'none' : 'block';
      });
  }

  // Handle notification drawer toggle
  if (notificationTrigger) {
      notificationTrigger.addEventListener('click', function() {
          notificationDrawer.classList.add('open');
          overlay.style.display = 'block';
      });
  }

  // Handle closing the notification drawer
  if (closeNotificationButton) {
      closeNotificationButton.addEventListener('click', function() {
          notificationDrawer.classList.remove('open');
          overlay.style.display = 'none';
      });
  }

  // Close notification drawer when clicking outside
  window.addEventListener('click', function(event) {
      if (event.target === overlay && notificationDrawer.classList.contains('open')) {
          notificationDrawer.classList.remove('open');
          overlay.style.display = 'none';
      }
  });

  // Initialize the active content section based on the initial active sidebar link
  const initialActiveLink = document.querySelector('.sidebar-menu li.active a');
  if (initialActiveLink && initialActiveLink.getAttribute('data-target')) {
      hideAllSections();
      showSection(initialActiveLink.getAttribute('data-target'));
  }
});

const menuBtn = document.getElementById('menu-btn');
const sideDrawer = document.getElementById('side-drawer');
const closeDrawer = document.getElementById('close-drawer');

menuBtn.addEventListener('click', () => {
  sideDrawer.classList.add('open');
});

closeDrawer.addEventListener('click', () => {
  sideDrawer.classList.remove('open');
});
