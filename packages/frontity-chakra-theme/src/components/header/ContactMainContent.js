import React from "react";
import PropTypes from "prop-types";

class ContactMainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div data-elementor-type="wp-post" data-elementor-id="1100" class="elementor elementor-1100" data-elementor-settings="[]">
      <div class="elementor-inner">
      <div class="elementor-section-wrap">
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-7e02fda5 elementor-section-height-min-height animated-slow elementor-section-boxed elementor-section-height-default elementor-section-items-middle animated fadeIn"
          data-id="7e02fda5"
          data-element_type="section"
        >
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-row">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5f31c85b"
                data-id="5f31c85b"
                data-element_type="column"
              >
                <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                    <div
                      class="elementor-element elementor-element-553d5ebf elementor-widget elementor-widget-heading"
                      data-id="553d5ebf"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h1 class="elementor-heading-title elementor-size-default">
                          Contact us
                        </h1>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-1dd2a9ed elementor-section-boxed elementor-section-height-default elementor-section-height-default ContactMainBackground"
          data-id="1dd2a9ed"
          data-element_type="section"
        >
          <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-row">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8cc5dc2"
                data-id="8cc5dc2"
                data-element_type="column"
              >
                <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                    <div
                      class="elementor-element elementor-element-40f5f50a elementor-widget elementor-widget-houzez_elementor_space"
                      data-id="40f5f50a"
                      data-element_type="widget"
                      data-widget_type="houzez_elementor_space.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="houzez-spacer">
                          <div class="houzez-spacer-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-304c53a8 elementor-section-content-top animated-slow elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn ContactMainBackground"
          data-id="304c53a8"
          data-element_type="section"
        >
          <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-row">
              <div
                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fdd22fc"
                data-id="fdd22fc"
                data-element_type="column"
              >
                <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                    <div
                      class="elementor-element elementor-element-3bc26e67 elementor-widget elementor-widget-text-editor"
                      data-id="3bc26e67"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-text-editor elementor-clearfix">
                          <p>Welcome Billahome Corp.</p>
                          <p>
                            Billahome Corp is a Real Estate Company in
                            Washington State. We are currently serving full real
                            estate service in State of Washington.
                          </p>
                          <p>
                            Send us messages and inquiries,we will get back to
                            you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-267cd831 elementor-button-align-stretch elementor-widget elementor-widget-houzez_elementor_contact_form"
                      data-id="267cd831"
                      data-element_type="widget"
                      data-widget_type="houzez_elementor_contact_form.default"
                    >
                      <div class="elementor-widget-container">
                        <form
                          class="elementor-form"
                          id="houzez-form-267cd831"
                          method="post"
                          name="New Form"
                          action="https://billahome.com/wp-admin/admin-ajax.php"
                        >
                          <input
                            type="hidden"
                            name="form_id"
                            value="267cd831"
                          />
                          <input
                            type="hidden"
                            name="houzez_contact_form"
                            value="yes"
                          />
                          <input
                            type="hidden"
                            name="action"
                            value="houzez_ele_contact_form"
                          />
                          <input
                            type="hidden"
                            name="source_link"
                            value="https://billahome.com/contact/"
                          />
                          <input
                            type="hidden"
                            name="lead_page_id"
                            value="1100"
                          />
                          <input
                            type="hidden"
                            name="email_to"
                            value="hello@favethemes.com"
                          />
                          <input
                            type="hidden"
                            name="email_subject"
                            value="New message"
                          />
                          <input type="hidden" name="email_to_cc" value="" />
                          <input type="hidden" name="email_to_bcc" value="" />
                          <input type="hidden" name="redirect_to" value="" />

                          <div class="elementor-form-fields-wrapper elementor-labels-above">
                            <div class="elementor-field-group elementor-column form-group elementor-field-group-name elementor-col-50 elementor-field-required elementor-mark-required">
                              <label
                                for="form-field-name"
                                class="elementor-field-label"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                id="form-field-name"
                                class="elementor-field form-control elementor-size-sm elementor-field-textual"
                                placeholder="Enter your name"
                                title="* First Name"
                                required="required"
                              />{" "}
                            </div>

                            <div class="elementor-field-group elementor-column form-group elementor-field-group-bf18955 elementor-col-50 elementor-field-required elementor-mark-required">
                              <label
                                for="form-field-bf18955"
                                class="elementor-field-label"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                id="form-field-bf18955"
                                class="elementor-field form-control elementor-size-sm elementor-field-textual"
                                placeholder="Enter your last name"
                                title="* Last Name"
                                required="required"
                              />{" "}
                            </div>

                            <div class="elementor-field-group elementor-column form-group elementor-field-group-email elementor-col-100 elementor-field-required elementor-mark-required">
                              <label
                                for="form-field-email"
                                class="elementor-field-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="form-field-email"
                                class="elementor-field form-control elementor-size-sm elementor-field-textual"
                                placeholder="Email"
                                title="* Email"
                                required="required"
                              />{" "}
                            </div>

                            <div class="elementor-field-group elementor-column form-group elementor-field-group-message elementor-col-100 elementor-field-required elementor-mark-required">
                              <label
                                for="form-field-message"
                                class="elementor-field-label"
                              >
                                Message
                              </label>
                              <textarea class="elementor-field-textual elementor-field elementor-size-sm" name="message" id="form-field-message" rows="4" placeholder="Message" required="required" title="* Message" spellcheck="false"></textarea> 
                            </div>

                            <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                              <button
                                type="submit"
                                class="btn houzez-submit-button houzez-contact-form-js elementor-button elementor-size-sm"
                              >
                                <i class="btn-loader houzez-loader-js"></i>
                                Submit{" "}
                              </button>
                            </div>
                          </div>
                          <br />
                          <div class="ele-form-messages"></div>
                          <div class="error-container"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-492b0d7e"
                data-id="492b0d7e"
                data-element_type="column"
              >
                <div class="elementor-column-wrap">
                  <div class="elementor-widget-wrap"></div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-14230b25"
                data-id="14230b25"
                data-element_type="column"
              >
                <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                    <div
                      class="elementor-element elementor-element-79b0d942 elementor-widget elementor-widget-text-editor"
                      data-id="79b0d942"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-text-editor elementor-clearfix">
                          <p class="padding-top">
                            <strong>For inquiries</strong>
                            <strong>&nbsp;contact:</strong>
                          </p>
                          <p>
                            Customer Service
                            <br />
                            contact@billahome.com
                          </p>
                          <p>206)304-1099</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-59f084f5 elementor-widget elementor-widget-text-editor"
                      data-id="59f084f5"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-text-editor elementor-clearfix">
                          <p class="padding-top">
                            <strong>Corporate&nbsp;</strong>
                            <b>headquarters</b>
                          </p>
                          <p class="padding-top">
                            <b>BIILAHOME CORP</b>
                          </p>
                          <p class="padding-top">
                            <strong>33530 1st Way South, #102</strong>
                          </p>
                          <p class="padding-top">
                            <strong>Federal Way, WA 98003</strong>
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-7315109 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                      data-id="7315109"
                      data-element_type="widget"
                      data-widget_type="social-icons.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-social-icons-wrapper elementor-grid">
                          <div class="elementor-grid-item elementor-grid-itemMargin ">
                            <a
                              class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-shrink elementor-repeater-item-4d4e750"
                              href="#"
                              target="_blank"
                            >
                              <span class="elementor-screen-only">
                                Facebook
                              </span>
                              <i class="fab fa-facebook"></i>{" "}
                            </a>
                          </div>
                          
                          <div class="elementor-grid-item elementor-grid-itemMargin ">
                            <a
                              class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-shrink elementor-repeater-item-a2d8d9c"
                              href="#"
                              target="_blank"
                            >
                              <span class="elementor-screen-only ">Twitter</span>
                              <i class="fab fa-twitter"></i>{" "}
                            </a>
                          </div>
                          <div class="elementor-grid-item elementor-grid-itemMargin">
                            <a
                              class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-shrink elementor-repeater-item-4483b35"
                              href="#"
                              target="_blank"
                            >
                              <span class="elementor-screen-only">Youtube</span>
                              <i class="fab fa-youtube"></i>{" "}
                            </a>
                          </div>
                          <div class="elementor-grid-item elementor-grid-itemMargin">
                            <a
                              class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-animation-shrink elementor-repeater-item-4cd5d30"
                              href="#"
                              target="_blank"
                            >
                              <span class="elementor-screen-only">
                                Linkedin
                              </span>
                              <i class="fab fa-linkedin"></i>{" "}
                            </a>
                          </div>
                          <div class="elementor-grid-item elementor-grid-itemMargin">
                            <a
                              class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink elementor-repeater-item-9e48d2c"
                              href="#"
                              target="_blank"
                            >
                              <span class="elementor-screen-only">
                                Instagram
                              </span>
                              <i class="fab fa-instagram"></i>{" "}
                            </a>
                          </div>
                          <div class="elementor-grid-item elementor-grid-itemMargin">
                            <a
                              class="elementor-icon elementor-social-icon elementor-social-icon-skype elementor-animation-shrink elementor-repeater-item-a996753"
                              href="#"
                              target="_blank"
                            >
                              <span class="elementor-screen-only">Skype</span>
                              <i class="fab fa-skype"></i>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-38186efc elementor-section-boxed elementor-section-height-default elementor-section-height-default ContactMainBackground"
          data-id="38186efc"
          data-element_type="section"
        >
          <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-row">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a2b0ea4"
                data-id="4a2b0ea4"
                data-element_type="column"
              >
                <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                    <div
                      class="elementor-element elementor-element-2c4f7c4a elementor-widget elementor-widget-spacer"
                      data-id="2c4f7c4a"
                      data-element_type="widget"
                      data-widget_type="spacer.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-spacer">
                          <div class="elementor-spacer-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      </div>
    );
  }
}

export default ContactMainContent;
