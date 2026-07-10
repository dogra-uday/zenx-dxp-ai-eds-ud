export default function decorate(block) {
  const logoImage = 'content/dam/zenx-dxp-ai-eds-ud/logo.jpg';
  const headerImage = 'content/dam/zenx-dxp-ai-eds-ud/header-banner.jpg';

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