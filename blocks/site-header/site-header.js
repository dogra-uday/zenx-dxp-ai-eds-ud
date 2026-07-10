export default function decorate(block) {
  const logoImage = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Zensar_Logo.png';

  const headerImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600';

  const heading = 'Industry Verticals';

  const subHeading = 'Accelerating Digital Transformation Across Industries';

  block.innerHTML = `
    <div class="site-header-wrapper">
      <div class="site-header-banner">
        ${headerImage} alt="Industry Verticals Banner"
          class="site-header-banner-image"
          loading="eager"
        >
      </div>

      <div class="site-header-content">
        <img
          src="${logoImage}"
          alt="Zensar Logo"
          class="site-header-div>
  `;
}