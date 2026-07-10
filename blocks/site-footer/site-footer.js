export default function decorate(block) {
  const footerImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600';

  block.innerHTML = `
    <footer class="site-footer">
      ${footerImage}

      <div class="footer-content">
        <h3>Indian Bank</h3>

        <p>
          Banking solutions for retail, corporate,
          SME and wealth customers.
        </p>

        <div class="footer-links">
          #About Us</a>
          #Privacy Policy</a>
          #
        </div>

        <p class="footer-copyright">
          © 2026 Indian Bank. All Rights Reserved.
        </p>
      </div>
    </footer>
  `;
}