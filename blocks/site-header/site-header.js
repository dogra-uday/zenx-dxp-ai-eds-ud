export default function decorate(block) {
  const rows = [...block.children];

  const getField = (label) => rows.find(
    (row) => row.firstElementChild
      && row.firstElementChild.textContent.trim() === label,
  )?.children?.[1];

  const headerImage = getField('Header Image');
  const logoImage = getField('Logo Image');
  const heading = getField('Heading');
  const subHeading = getField('Sub Heading');

  block.textContent = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'site-header-wrapper';

  if (headerImage) {
    const banner = document.createElement('div');
    banner.className = 'site-header-banner';
    banner.append(headerImage.cloneNode(true));
    wrapper.append(banner);
  }

  const content = document.createElement('div');
  content.className = 'site-header-content';

  if (logoImage) {
    const logo = document.createElement('div');
    logo.className = 'site-header-logo';
    logo.append(logoImage.cloneNode(true));
    content.append(logo);
  }

  const h1 = document.createElement('h1');
  h1.textContent = heading?.textContent?.trim() || 'Industry Verticals';
  content.append(h1);

  const p = document.createElement('p');
  p.textContent = subHeading?.textContent?.trim()
    || 'Accelerating Digital Transformation Across Industries';
  content.append(p);

  wrapper.append(content);
  block.append(wrapper);
}