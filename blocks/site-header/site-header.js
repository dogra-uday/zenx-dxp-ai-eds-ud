export default function decorate(block) {
  const logoImage = '/content/dam/zenx-eds-site/zensar-logo.png';
  const headerImage = '/content/dam/zenx-eds-site/header-banner.jpg';

  block.innerHTML = `
    <div class="site-header-wrapper">
      <img
        src="${headerImage}"
        alt="Header Banner"
       }"
          alt="Zensar Logo"
          class="site-header-logo"
        >

        <h1>Industry Verticals</h1>

        <p>
          Accelerating Digital Transformation Across Industries
        </p>
      </div>
    </div>
  `;
}