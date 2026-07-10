export default function decorate(block) {
  const rows = [...block.children];

  const getField = (label) => rows.find(
    (row) => row.firstElementChild
      && row.firstElementChild.textContent.trim() === label,
  )?.children?.[1];

  const logo = getField('Logo Image');
  const banner = getField('Header Image');
  const heading = getField('Heading');
  const subHeading = getField('Sub Heading');

  block.textContent = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'site-header';

  if (banner) {
    const bannerContainer = document.createElement('div');
    bannerContainer.className = 'site-header-banner';
    bannerContainer.append(banner.cloneNode(true));
    wrapper.append(bannerContainer);
  }

  const content = document.createElement('div');
  content.className = 'site-header-content';

  if (logo) {
    const logoContainer = document.createElement('div');
    logoContainer.className = 'site-header-logo';
    logoContainer.append(logo.cloneNode(true));
    content.append(logoContainer);
  }

  if (heading?.textContent?.trim()) {
    const h1 = document.createElement('h1');
    h1.textContent = heading.textContent.trim();
    content.append(h1);
  }

  if (subHeading?.textContent?.trim()) {
    const p = document.createElement('p');
    p.textContent = subHeading.textContent.trim();
    content.append(p);
  }

  wrapper.append(content);
  block.append(wrapper);
}