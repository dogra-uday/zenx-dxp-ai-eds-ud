export default function decorate(block) {
  block.innerHTML = `
    <footer class="site-footer">
      <img
        class="footer-image"
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
        alt="Industry Verticals"
        loading="lazy"
      >

      <div class="footer-content">
        <h3>Industry Verticals</h3>

        <p>
          Banking • Insurance • Healthcareechnologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  `;
}