//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Footer -->
    <section class="footer">
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
                <span>Wednesday &nbsp; &nbsp; &nbsp; 9:00 AM - 8:00 PM **</span>
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
              <p class="hours-disclaimer">** Rotating Monday and Wednesday<br>for evening hours (5PM - 8PM).</p>
            </div>
            </div>
          </div>
       
        <!-- Map -->
        <div class="footer-item-container"><div class="footer-item">
          <div class="footer-heading">Map</div>
          <div class="footer-content">
          <div id="map" style="width: 230px; height: 200px;"></div>
          </div>
        </div>
        </div>
      </div>
     
      <div class="footer-bottom-section"><img class="footer-logo" src="assets/images/logo.svg"/></div>
      <div class="footer-bottom-section copyright">&copy; Copyright 2022 <a href="https://alexandrahionis.com" target="_blank"> AH Websites</a>
      </section>
  
        `;
  }
}

customElements.define("main-footer", Footer);
