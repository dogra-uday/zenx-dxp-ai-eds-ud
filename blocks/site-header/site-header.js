export default function decorate(block) {
  const images = block.querySelectorAll('img');

  const logo = images[0]?.cloneNode(true);
  const banner = images[1]?.cloneNode(true);

  block.textContent = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'site-header-wrapper';

  if (banner) {
    banner.classList.add('site-header-banner-image');
    wrapper.append(banner);
  }

  const content = document.createElement('div');
  content.className = 'site-header-content';

  if (logo) {
    logo.classList.add('site-header-logo');
    content.append(logo);
  }

  const heading = document.createElement('h1');
  heading.textContent = 'Industry Verticals';

  const subHeading = document.createElement('p');
  subHeading.textContent =
    'Accelerating Digital Transformation Across Industries';

  content.append(heading);
  content.append(subHeading);

  wrapper.append(content);
  block.append(wrapper);
}