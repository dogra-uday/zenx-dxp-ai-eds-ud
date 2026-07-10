export default function decorate(block) {
  const logoImage = '/content/dam/zenx-eds-site/zensar-logo.png';

  const headerImage = '/content/dam/zenx-eds-site/header-banner.jpg';

  const heading = 'Industry Verticals';

  const subHeading = 'Accelerating Digital Transformation Across Industries';

  block.innerHTML = `
    <div class="site-header-wrapper">
      <div class="site-header-banner">
        ${headerImage}
      </div>

      <div class="site-header-content">
        ${logoImage}

        <h1>${heading}</h1>

        <p>${subHeading}</p>
      </div>
    </div>
  `;
}