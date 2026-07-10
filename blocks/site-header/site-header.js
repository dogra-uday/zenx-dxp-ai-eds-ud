export default function decorate(block) {
const logoImage = '/images/zensar.png';
  const headerImage = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600';

const heading = 'Industry Verticals';
const subHeading = 'Accelerating Digital Transformation Across Industries';

  block.innerHTML = `
    <div class="site-header-wrapper">
      <div class="site-header-banner">
        <img
          src="${headerImage}"
          alt="Header Banner"
          class="site-header-banner-image"
 
          alt="Logo"
          class="site-header-logo"
/div>
  `;
}
