export default function decorate(block) {
  const logoImage =
    '/content/dam/placeholder/logo.png';

  const headerImage =
    '/content/dam/placeholder/banner.jpg';

  const heading = 'Welcome to Our Bank';

  const subHeading =
    'Enterprise Digital Banking Platform';

  block.innerHTML = `
    <div class="site-header-wrapper">
      <div class="site-header-banner">
        <img
          src   </div>

      <div class="site-header-content">
        ${logoImage} alt="Logo"
          loading="eager"
        >

        <h1>${heading}</h1>

        <p>${subHeading}</p>
      </div>
    </div>
  `;
}