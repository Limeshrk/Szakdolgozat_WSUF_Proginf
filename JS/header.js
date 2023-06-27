window.addEventListener("DOMContentLoaded", function () {
  var headerHTML = `
    <header class="nav-header">
      <nav class="main-menu-area">
        <h2 class="offscreen">Main menu area</h2>
        <div class="menu-homelogo">
          <a href="index.html">
            <img
              src="./img/logo.png"
              alt="David Kovacs logo"
              class="menubar-logo"
            />
          </a>
        </div>

        <div class="main-menu-container">
        <i class="fas fa-bars menu-icon"></i>
          <div class="hide-menu">
          <i class="fa-solid fa-xmark close-icon"></i>
            <ul class="main-menu">
              <li class="menu-item">
                <a href="aboutme.html">Intro</a>
              </li>
              <li class="menu-item">
                <a href="schedules.html">Schedule</a>
              </li>
              <li class="menu-item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <div class="button-link-container">
              <a
                href="https://www.instagram.com/davidxkovacs/"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" title="Instagram"></i>
              </a>
              <a href="https://www.facebook.com/davidxkovacs" aria-label="Facebook">
                <i class="fab fa-facebook-f" title="Facebook"></i>
              </a>
              <a
                href="https://open.spotify.com/user/1l3f667a2ufvuwiqrxvikuflk"
                aria-label="Spotify"
              >
                <i class="fab fa-spotify" title="Spotify"></i>
              </a>
              <a href="https://soundcloud.com/davidxkovacs" aria-label="Soundcloud">
                <i class="fab fa-soundcloud" title="Soundcloud"></i>
              </a>
              <a
                href="https://www.mixcloud.com/davidxkovacs/"
                aria-label="Mixcloud"
              >
                <i class="fab fa-mixcloud" title="Mixcloud"></i>
              </a>
              <a
                href="https://www.beatport.com/artist/bonvibe/"
                aria-label="Beatport"
              >
                <i class="fas fa-headphones" title="Beatport"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>`;

  var newElement = document.createElement("div");
  newElement.innerHTML = headerHTML;
  document.body.insertBefore(newElement, document.body.firstChild);

  // Add event listener to menu icon
  var menuIcon = document.querySelector(".menu-icon");
  var hideMenu = document.querySelector(".hide-menu");

  menuIcon.addEventListener("click", function () {
    // Show the menu when the icon is clicked
    hideMenu.style.display = "flex";
  });

  // Add event listener to close icon
  var closeIcon = document.querySelector(".close-icon");

  closeIcon.addEventListener("click", function () {
    // Hide the menu when the close icon is clicked
    hideMenu.style.display = "none";
  });
});
