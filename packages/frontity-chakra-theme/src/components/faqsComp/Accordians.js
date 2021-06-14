import React, { useState } from "react";
import { connect } from "frontity";
import { Global, css } from "frontity";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Accordians({ state, actions, libraries }) {
  const [count, setCount] = useState(false);
  const [countTwo, setCountTwo] = useState(false);
  const [countThree, setCountThree] = useState(false);
  const [countFour, setCountFour] = useState(false);
  const [countFive, setCountFive] = useState(false);

  //   function handleClick() {
  //     console.log('Click happened');
  //     setCount(!count);
  // }

  return (
    <div className="container mb-3">
      <div
        class="elementor-element elementor-element-dee16b2 elementor-widget elementor-widget-accordion"
        data-id="dee16b2"
        data-element_type="widget"
        data-widget_type="accordion.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-accordionOne" role="tablist">
            <div class="elementor-accordionOne-item">
              <div
                id="elementor-tab-title-2331"
                class="elementor-tab-title"
                data-tab="1"
                role="tab"
                onClick={() => setCount(!count)}
                aria-controls="elementor-tab-content-2331"
                aria-expanded="false"
                tabindex="-1"
                aria-selected="false"
              >
                <span
                  class="elementor-accordionOne-icon elementor-accordionOne-icon-left"
                  aria-hidden="true"
                >
                  <span class="elementor-accordionOne-icon-closed">
                    <ChevronDownIcon mr={2} w={6} h={6} color="black" />
                  </span>
                  <span class="elementor-accordionOne-icon-opened">
                    <i class="fas fa-minus"></i>
                  </span>
                </span>
                <a class="elementor-accordionOne-title" href="">
                  Is It free to use? all information available to buyer and
                  seller?
                </a>
              </div>
              {count && (
                <div
                  id="elementor-tab-content-2331"
                  class={`elementor-tab-content elementor-clearfix ${
                    count === 1 ? "ddblock" : "ddnone"
                  }`}
                  data-tab="1"
                  role="tabpanel"
                  aria-labelledby="elementor-tab-title-2331"
                >
                  <p>
                    Billahome.com offers totally free membership to buyer,
                    seller and even to real estate brokers. Free of house for
                    sale listing, rent listing service. Commercial property
                    listing service. Anyone can register and use billahome.com
                    service at free of charge.&nbsp;
                  </p>
                </div>
              )}
            </div>
            <div class="elementor-accordionOne-item">
              <div
                id="elementor-tab-title-2332"
                onClick={() => setCountTwo(!countTwo)}
                class="elementor-tab-title"
                data-tab="2"
                role="tab"
                aria-controls="elementor-tab-content-2332"
                aria-expanded="false"
              >
                <span
                  class="elementor-accordionOne-icon elementor-accordionOne-icon-left"
                  aria-hidden="true"
                >
                  <span class="elementor-accordionOne-icon-closed">
                    <ChevronDownIcon mr={2} w={6} h={6} color="black" />
                  </span>
                  <span class="elementor-accordionOne-icon-opened">
                    <i class="fas fa-minus"></i>
                  </span>
                </span>
                <a class="elementor-accordionOne-title" href="">
                  Is there a limit to listing? How many listings can I submit in
                  a month?
                </a>
              </div>
              {countTwo && (
                <div
                  id="elementor-tab-content-2332"
                  class="elementor-tab-content elementor-clearfix ddnone"
                  data-tab="2"
                  role="tabpanel"
                  aria-labelledby="elementor-tab-title-2332"
                >
                  <p>
                    There is no limit to the number of listings. Anyone who is
                    legally and in accordance with our site’s user terms can be
                    listed indefinitely, and sell business more quickly and
                    accurately with the freedom of billahome.com platform and
                    resources.
                  </p>
                </div>
              )}
            </div>
            <div class="elementor-accordionOne-item">
              <div
                id="elementor-tab-title-2333"
                onClick={() => setCountThree(!countThree)}
                class="elementor-tab-title"
                data-tab="3"
                role="tab"
                aria-controls="elementor-tab-content-2333"
                aria-expanded="false"
              >
                <span
                  class="elementor-accordionOne-icon elementor-accordionOne-icon-left"
                  aria-hidden="true"
                >
                <span class="elementor-accordionOne-icon-closed">
                <ChevronDownIcon mr={2} w={6} h={6} color="black" />
              </span>
                  <span class="elementor-accordionOne-icon-opened">
                    <i class="fas fa-minus"></i>
                  </span>
                </span>
                <a class="elementor-accordionOne-title" href="">
                  Is there any commission or any additional cost or fees to post
                  on billahome.com?
                </a>
              </div>
              { countThree && <div
                id="elementor-tab-content-2333"
                class="elementor-tab-content elementor-clearfix"
                data-tab="3"
                role="tabpanel"
                aria-labelledby="elementor-tab-title-2333"
              >
                <p>
                  There are no hidden fees or commission.&nbsp; However, you
                  have to be careful in buying and selling home or renting a
                  property. Use your own discretion or by expert to study enough
                  about the property that listed before make decision. As we
                  have cleared stated in our terms of use BillaHome.com takes no
                  responsibility. BillaHome.com is a just online listing
                  advertisement company.
                </p>
              </div> }
            </div>
            <div class="elementor-accordionOne-item">
              <div
                id="elementor-tab-title-2334"
                onClick={() => setCountFour(!countFour)}
                class="elementor-tab-title"
                data-tab="4"
                role="tab"
                aria-controls="elementor-tab-content-2334"
                aria-expanded="false"
              >
                <span
                  class="elementor-accordionOne-icon elementor-accordionOne-icon-left"
                  aria-hidden="true"
                >
                <span class="elementor-accordionOne-icon-closed">
                <ChevronDownIcon mr={2} w={6} h={6} color="black" />
              </span>
                  <span class="elementor-accordionOne-icon-opened">
                    <i class="fas fa-minus"></i>
                  </span>
                </span>
                <a class="elementor-accordionOne-title" href="">
                  Do I need to sign up or register on billahome.com to upload
                  listing, searches, posts, leave comments, ask question to
                  seller?
                </a>
              </div>
              {countFour && <div
                id="elementor-tab-content-2334"
                class="elementor-tab-content elementor-clearfix"
                data-tab="4"
                role="tabpanel"
                aria-labelledby="elementor-tab-title-2334"
              >
                <p>
                  Yes, you need to register. As a buyer, finding, searching a
                  home or contacting to seller can be done without registration,
                  but registration must be done to upload or posting a house to
                  site.
                </p>
              </div> }
            </div>
            <div class="elementor-accordionOne-item">
              <div
                id="elementor-tab-title-2335"
                onClick={() => setCountFive(!countFive)}
                class="elementor-tab-title"
                data-tab="5"
                role="tab"
                aria-controls="elementor-tab-content-2335"
                aria-expanded="false"
              >
                <span
                  class="elementor-accordionOne-icon elementor-accordionOne-icon-left"
                  aria-hidden="true"
                >
                <span class="elementor-accordionOne-icon-closed">
                <ChevronDownIcon mr={2} w={6} h={6} color="black" />
              </span>
                  <span class="elementor-accordionOne-icon-opened">
                    <i class="fas fa-minus"></i>
                  </span>
                </span>
                <a class="elementor-accordionOne-title" href="">
                  Forgot password - how do I recover the password?
                </a>
              </div>
            {countFive &&   <div
                id="elementor-tab-content-2335"
                class="elementor-tab-content elementor-clearfix"
                data-tab="5"
                role="tabpanel"
                aria-labelledby="elementor-tab-title-2335"
              >
                <p>
                  If you forget your password, please click on lost password
                  link next to loin section, and we will email a reset the
                  password link via your email.&nbsp;
                </p>
              </div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(Accordians);
