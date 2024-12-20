class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
      <p>Designed and Developed by</p>
      <a href="https://alexandra-hionis-portfolio.herokuapp.com/" target="_blank"> click here</a>
      </div>
      </footer>
  </section>
        `;
  }
}

customElements.define("main-footer", Footer);
