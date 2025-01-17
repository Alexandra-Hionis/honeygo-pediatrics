class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <input type="checkbox" id="announcement-toggle" class="announcement-toggle">
    <section class="announcement gradient-gray">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        <div class="announcement-content">
        <label for="announcement-toggle" class="close-btn">&times;</label>
        <h2>Service Announcement</h2>
        <p>
            We now offer comprehensive evaluation, treatment, and ongoing care for
            behavioral issues and ADHD, along with a pediatric weight loss
            management program.
        </p>
        </div>
    </section>
    <!-- Footer -->
    <section class="to-top-container">
    <div class="to-top">
    <!-- to top button -->
    <a href="#top">
      <button class="to-top__button">
      <i class="fa-solid fa-angle-up"></i>
      </button>
    </a>
    </div>
    <footer class="footer gradient-gray">
   
      <div class="footer-top-portion">
        <!-- Contact -->
        <div class="footer-item-container"><div class="footer-item">
          <div class="footer-heading">Contact</div>
          <div class="footer-content">
          <a href="http://maps.google.com/?q=8114 Sandpiper Circle, Suite 100, Nottingham, Maryland, 21236">8114 Sandpiper Circle, Suite 100<br>Nottingham, MD 21236</a>         
          <p>Phone:<a href="tel:4109338101"> 410-933-8101</a></p>
          <p>Fax: 410-933-8106</p>
          </div>
        </div>
        </div>
        <!-- Hours -->
        <div class="footer-item-container"><div class="footer-item">
          <div class="footer-heading">Hours</div>
          <div class="footer-content footer-content-hours">
              <div>
                <span>Monday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9:00 AM - 8:00 PM **</span></div>
              <div>
                <span>Tuesday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9:00 AM - 5:00 PM</span>
              </div>
              <div>
                <span>Wednesday &nbsp; &nbsp; &nbsp; 9:00 AM - 5:00 PM</span>
              </div>
              <div>
                <span>Thursday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9:00 AM - 5:00 PM</span>
              </div>
              <div>
                <span>Friday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 9:00 AM - 5:00 PM</span>
              </div>
              <div>
                <span>Saturday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9:00 AM - 12:30 PM</span>
              </div>
              <p class="hours-disclaimer">** Rotating Mondays for evening hours (5PM - 8PM).</p>
              <p class="hours-disclaimer"><strong
              >walk in hours for sick patients with acute / urgent care needs:
              <br />9 AM - 10 AM Monday - Friday <br />9 AM - 10 AM
              Saturdays
            </strong></p>
            </div>
            </div>
          </div>
         
        <!-- Map -->
        <div class="footer-item-container">
        <div class="footer-item">
          <div class="footer-heading">Map</div>
          <div class="footer-content">
          <div id="map" style="width: 230px; height: 200px;"></div>
          </div>
        </div>
        </div>
      </div>
     
      <div class="footer-bottom-section"><img class="footer-logo" src="assets/images/logo.svg"/></div>
      <div class="footer-bottom-section copyright">&copy; <span id="currentYear"></span> Honeygo Pediatrics LLC </div>
      <div class="footer-bottom-section copyright">
      </div>
      </footer>
  </section>
        `;
  }
}

customElements.define("main-footer", Footer);
