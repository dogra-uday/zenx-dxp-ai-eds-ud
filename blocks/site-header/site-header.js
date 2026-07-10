export default function decorate(block) {
  const logoImage = 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400';

  const headerImage = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600';

  const heading = 'Indian Bank';

  const subHeading = 'Digital Banking Platform';

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
