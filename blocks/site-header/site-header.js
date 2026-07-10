export default function decorate(block) {
  const logoImage = '/content/dam/zenx-dxp-ai-eds-ud/logo.jpg';
  const headerImage = '/content/dam/zenx-dxp-ai-eds-ud/header-banner.jpg';

  block.innerHTML = `
    <div class="site-header-wrapper">
      Image}"
        alt="Header Banner"
        class="site-header-banner-image"
        loading="eager"
        onerror="this.style.display='none';"
      >

      <div class="site-header-content">
        <img
          src="${logoImage}"
          alt="Zensar Logo"
          class="site-header-logo"
          loadings Industries
        </p>
      </div>
    </div>
  `;
}