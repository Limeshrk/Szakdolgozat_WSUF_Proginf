document.write(`
<header class="nav-header">
  <nav class="main-menu-area">
    <h2 class="offscreen">
    Main menu area
    </h2>
    <div class="menu-homelogo">
      <a href="index.html">
        <img
          src="./img/logo.png"
          alt="David Kovacs logo"
          class="menubar-logo"
        />
      </a>
    </div>
    <label for="toggle" class="toggle-label">
      <i class="fas fa-bars"></i>
    </label>
    <div class="main-menu-container">
      <div class="hide-menu">
        <input type="checkbox" id="toggle" class="menu-checkbox" />
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
          <a href="https://www.instagram.com/davidxkovacs/" aria-label="Instagram">
            <i
              class="fab fa-instagram"
              title="Instagram"           
            ></i>
          </a>
          <a href="https://www.facebook.com/davidxkovacs" aria-label="Facebook">
            <i
              class="fab fa-facebook-f"
              title="Facebook"
            ></i>
          </a>
          <a href="https://open.spotify.com/user/1l3f667a2ufvuwiqrxvikuflk" aria-label="Spotify">
            <i class="fab fa-spotify" title="Spotify"></i>
          </a>
          <a href="https://soundcloud.com/davidxkovacs" aria-label="Soundcloud">
            <i
              class="fab fa-soundcloud"
              title="Soundcloud"
              
            ></i>
          </a>
          <a href="https://www.mixcloud.com/davidxkovacs/" aria-label="Mixcloud">
            <i
              class="fab fa-mixcloud"
              title="Mixcloud"              
            ></i>
          </a>
          <a href="https://www.beatport.com/artist/bonvibe/" aria-label="Beatport">
            <i
              class="fas fa-headphones"
              title="Beatport"              
            ></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
`);
