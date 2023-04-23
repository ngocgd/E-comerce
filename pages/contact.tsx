
import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import { GetServerSideProps } from 'next';
import { ProductTypeList } from 'types';

const Contact = () => (
  <Layout>
    <Breadcrumb props = 'All Product'/>
    <div>
        <header className="u-clearfix u-header u-header" id="sec-5653"><div className="u-clearfix u-sheet u-sheet-1" /></header>
        <section className="u-clearfix u-image u-section-1" id="sec-32e5" data-image-width={2250} data-image-height={1500}>
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-align-center u-form u-radius-50 u-white u-form-1">
              <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-25 u-form-vertical u-inner-form" source="email" name="form" style={{padding: '30px'}}>
                <h3 className="u-align-center u-custom-font u-font-ubuntu u-form-group u-form-text u-label-top u-text u-text-1"> Contact Us</h3>
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                  <label htmlFor="name-66b3" className="u-label">Name</label>
                  <input type="text" placeholder="Enter your Name" id="name-66b3" name="name" className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20" required />
                </div>
                <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-top">
                  <label htmlFor="email-66b3" className="u-label">Email</label>
                  <input type="email" placeholder="Enter a valid email address" id="email-66b3" name="email" className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20" required />
                </div>
                <div className="u-form-group u-form-message u-label-top">
                  <label htmlFor="message-66b3" className="u-label">Message</label>
                  <textarea placeholder="Enter your message" rows={4} cols={50} id="message-66b3" name="message" className="u-border-none u-grey-5 u-input u-input-rectangle u-radius-20" required defaultValue={""} />
                </div>
                <div className="u-form-gallery u-form-group u-gallery u-label-top u-layout-grid u-show-text-none u-form-group-5">
                  <label className="u-label">Gallery</label>
                  <div className="u-gallery-inner u-gallery-inner-1">
                    <div className="u-form-gallery-item u-gallery-item">
                      <div className="u-back-slide" data-image-width={1500} data-image-height={1000}>
                        <img className="u-back-image u-back-image-1" src="images/handsome-confident-smiling-man-with-hands-crossed-chest-1.jpg" />
                      </div>
                      <div className="u-over-slide">
                        <label className="u-block-43ef-24 u-field-label" style={{}}>
                          <input type="radio" name="gallery" defaultValue="Paul Scavo" className="u-field-input" />
                          <span className="u-gallery-heading">Paul Scavo</span>
                        </label>
                      </div>
                    </div>
                    <div className="u-form-gallery-item u-gallery-item">
                      <div className="u-back-slide" data-image-width={1500} data-image-height={1000}>
                        <img className="u-back-image u-back-image-2" src="images/fashionable-young-redhead-woman-with-braid-tattoo-shoulder-having-rest-indoors.jpg" />
                      </div>
                      <div className="u-over-slide">
                        <label className="u-block-43ef-29 u-field-label" style={{}}>
                          <input type="radio" name="gallery" defaultValue="Nina Larson" className="u-field-input" />
                          <span className="u-gallery-heading">Nina Larson</span>
                        </label>
                      </div>
                    </div>
                    <div className="u-form-gallery-item u-gallery-item">
                      <div className="u-back-slide" data-image-width={2247} data-image-height={1500}>
                        <img className="u-back-image u-back-image-3" src="images/pexels-photo-1036623.jpeg" />
                      </div>
                      <div className="u-over-slide">
                        <label className="u-block-43ef-34 u-field-label" style={{}}>
                          <input type="radio" name="gallery" defaultValue="Stella Hudson" className="u-field-input" />
                          <span className="u-gallery-heading">Stella Hudson</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-align-center u-form-group u-form-submit u-label-top">
                  <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-palette-4-base u-radius-20 u-btn-1">Submit</a>
                  <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                </div>
                <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden"  name="recaptchaResponse" />
                <input type="hidden" name="formServices" defaultValue="3eccc9919e036ac4fc77485e8793e86c" />
              </form>
            </div>
          </div>
        </section>
        <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-686b"><div className="u-clearfix u-sheet u-sheet-1">
            <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the Text Element.</p>
          </div></footer>
        <section className="u-backlink u-clearfix u-grey-80">
          <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
            <span>Web Templates</span>
          </a>
          <p className="u-text">
            <span>created with</span>
          </p>
          <a className="u-link" href="https://nicepage.me" target="_blank">
            <span>Best Website Builder</span>
          </a>. 
        </section>
      </div>
    <Footer />
  </Layout>
)
  
export default Contact
