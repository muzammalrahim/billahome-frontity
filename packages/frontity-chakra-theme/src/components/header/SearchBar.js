import React from "react";
import { connect } from "frontity";
import { Global, css } from "frontity";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section
        id="desktop-header-search"
        class="advanced-search advanced-search-nav "
        data-hidden="1"
        data-sticky="1"
      >
        <div class="container">
          <form
            class="houzez-search-form-js"
            method="get"
            autocomplete="off"
            action="https://billahome.com/search-results/"
          >
            <div class="advanced-search-v2 ">
              <div class="d-flex">
                <div class="flex-search fields-width ">
                  <div class="form-group">
                    <div class="dropdown bootstrap-select houzezSelectFilter houzezCountryFilter houzezFirstList houzez-country-js form-control">
                      <select
                        name="country[]"
                        data-target="houzezSecondList"
                        data-size="5"
                        class="houzezSelectFilter houzezCountryFilter houzezFirstList selectpicker houzez-country-js form-control"
                        title="All Countries"
                        data-none-results-text="No results matched {0}"
                        data-live-search="false"
                        data-container="body"
                        tabindex="-98"
                      >
                        <option class="bs-title-option" value=""></option>
                        <option value="">All Countries</option>
                        <option data-ref="australia" value="australia">
                          Australia
                        </option>
                        <option data-ref="united-states" value="united-states">
                          United States
                        </option>{" "}
                      </select>
                      <button
                        type="button"
                        class="btn dropdown-toggle btn-light bs-placeholder"
                        data-toggle="dropdown"
                        role="button"
                        title="All Countries"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">
                              All Countries
                            </div>
                          </div>{" "}
                        </div>
                      </button>
                      <div class="dropdown-menu " role="combobox">
                        <div
                          class="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabindex="-1"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                            css={css`
                              margin-top: 0px;
                              margin-bottom: 0px;
                            `}
                          >
                            <li>
                              <a
                                role="option"
                                class="dropdown-item"
                                id="bs-select-1-0"
                                tabindex="0"
                                aria-setsize="3"
                                aria-posinset="1"
                              >
                                <span class="text">All Countries</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                class="dropdown-item"
                                id="bs-select-1-1"
                                tabindex="0"
                                aria-setsize="3"
                                aria-posinset="2"
                              >
                                <span class="text">Australia</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                class="dropdown-item"
                                id="bs-select-1-2"
                                tabindex="0"
                                aria-setsize="3"
                                aria-posinset="3"
                              >
                                <span class="text">United States</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-search flex-grow-1">
                  <div class="form-group">
                    <div class="search-icon">
                      <input
                        name="keyword"
                        type="text"
                        class=" houzez-keyword-autocomplete form-control"
                        value=""
                        placeholder="Enter an address, town, street, zip or property ID"
                      />
                      <div id="auto_complete_ajax" class="auto-complete"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-search fields-width ">
                  <div class="form-group">
                    <div class="dropdown bootstrap-select houzezSelectFilter houzezCityFilter houzezThirdList houzez-city-js form-control">
                      <select
                        name="location[]"
                        data-target="houzezFourthList"
                        data-size="5"
                        class="houzezSelectFilter houzezCityFilter houzezThirdList selectpicker houzez-city-js form-control"
                        title="All Cities"
                        data-selected-text-format="count > 1"
                        data-live-search="true"
                        data-actions-box="true"
                        data-none-results-text="No results matched {0}"
                        data-container="body"
                        tabindex="-98"
                      >
                        <option class="bs-title-option" value=""></option>
                        <option value="">All Cities</option>
                        <option
                          data-ref="amsterdam"
                          data-belong=""
                          data-subtext=""
                          value="amsterdam"
                        >
                          Amsterdam
                        </option>
                        <option
                          data-ref="bangkok"
                          data-belong=""
                          data-subtext=""
                          value="bangkok"
                        >
                          Bangkok
                        </option>
                        <option
                          data-ref="barcelona"
                          data-belong=""
                          data-subtext=""
                          value="barcelona"
                        >
                          Barcelona
                        </option>
                        <option
                          data-ref="barnesby-drive"
                          data-belong="albany"
                          data-subtext="Albany"
                          value="barnesby-drive"
                        >
                          Barnesby Drive
                        </option>
                        <option
                          data-ref="chicago"
                          data-belong=""
                          data-subtext=""
                          value="chicago"
                        >
                          Chicago
                        </option>
                        <option
                          data-ref="cleveland"
                          data-belong=""
                          data-subtext=""
                          value="cleveland"
                        >
                          Cleveland
                        </option>
                        <option
                          data-ref="dubai"
                          data-belong=""
                          data-subtext=""
                          value="dubai"
                        >
                          Dubai
                        </option>
                        <option
                          data-ref="federal-way"
                          data-belong="washington"
                          data-subtext="Washington"
                          value="federal-way"
                        >
                          Federal Way
                        </option>
                        <option
                          data-ref="jakarta"
                          data-belong=""
                          data-subtext=""
                          value="jakarta"
                        >
                          Jakarta
                        </option>
                        <option
                          data-ref="london"
                          data-belong=""
                          data-subtext=""
                          value="london"
                        >
                          London
                        </option>
                        <option
                          data-ref="los-angeles"
                          data-belong=""
                          data-subtext=""
                          value="los-angeles"
                        >
                          Los Angeles
                        </option>
                        <option
                          data-ref="manchester-houston"
                          data-belong="texas"
                          data-subtext="Texas"
                          value="manchester-houston"
                        >
                          Manchester Houston
                        </option>
                        <option
                          data-ref="miami"
                          data-belong=""
                          data-subtext=""
                          value="miami"
                        >
                          Miami
                        </option>
                        <option
                          data-ref="new-york"
                          data-belong=""
                          data-subtext=""
                          value="new-york"
                        >
                          New York
                        </option>
                        <option
                          data-ref="paris"
                          data-belong=""
                          data-subtext=""
                          value="paris"
                        >
                          Paris
                        </option>
                        <option
                          data-ref="rome"
                          data-belong=""
                          data-subtext=""
                          value="rome"
                        >
                          Rome
                        </option>
                        <option
                          data-ref="sydney"
                          data-belong=""
                          data-subtext=""
                          value="sydney"
                        >
                          Sydney
                        </option>
                        <option
                          data-ref="tokyo"
                          data-belong=""
                          data-subtext=""
                          value="tokyo"
                        >
                          Tokyo
                        </option>{" "}
                      </select>
                      <button
                        type="button"
                        class="btn dropdown-toggle btn-light bs-placeholder"
                        data-toggle="dropdown"
                        role="button"
                        title="All Cities"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">
                              All Cities
                            </div>
                          </div>{" "}
                        </div>
                      </button>
                      <div class="dropdown-menu " role="combobox">
                        <div class="bs-searchbox">
                          <input
                            type="text"
                            class="form-control"
                            autocomplete="off"
                            role="textbox"
                            aria-label="Search"
                          />
                        </div>
                        <div
                          class="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabindex="-1"
                        >
                          <ul class="dropdown-menu inner show"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-search fields-width ">
                  <div class="form-group">
                    <div class="dropdown bootstrap-select show-tick status-js form-control">
                      <select
                        name="status[]"
                        data-size="5"
                        class="selectpicker status-js form-control"
                        title="Status"
                        data-live-search="false"
                        data-selected-text-format="count > 1"
                        data-actions-box="true"
                        multiple=""
                        data-select-all-text="Select All"
                        data-deselect-all-text="Deselect All"
                        data-none-results-text="No results matched {0}"
                        data-count-selected-text="{0} status selected"
                        data-container="body"
                        tabindex="-98"
                      >
                        <option data-ref="active" value="active">
                          Active
                        </option>
                        <option data-ref="pending" value="pending">
                          Pending
                        </option>
                        <option data-ref="rented" value="rented">
                          Rented
                        </option>
                        <option data-ref="sold" value="sold">
                          Sold
                        </option>{" "}
                      </select>
                      <button
                        type="button"
                        class="btn dropdown-toggle btn-light bs-placeholder"
                        data-toggle="dropdown"
                        role="button"
                        title="Status"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">Status</div>
                          </div>{" "}
                        </div>
                      </button>
                      <div class="dropdown-menu " role="combobox">
                        <div class="bs-actionsbox">
                          <div class="btn-group btn-group-sm btn-block">
                            <button
                              type="button"
                              class="actions-btn bs-select-all btn btn-light"
                            >
                              Select All
                            </button>
                            <button
                              type="button"
                              class="actions-btn bs-deselect-all btn btn-light"
                            >
                              Deselect All
                            </button>
                          </div>
                        </div>
                        <div
                          class="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabindex="-1"
                        >
                          <ul class="dropdown-menu inner show"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-search">
                  <a
                    class="btn advanced-search-btn btn-full-width"
                    data-toggle="collapse"
                    href="#advanced-search-filters"
                  >
                    <i class="houzez-icon icon-cog mr-1"></i> Advanced
                  </a>{" "}
                </div>

                <button type="submit" class="btn btn-search btn-secondary ">
                  Go
                </button>
              </div>
            </div>

            <div id="advanced-search-filters" class="collapse ">
              <div class="advanced-search-filters search-v1-v2">
                <div class="d-flex">
                  <div class="flex-search">
                    <div class="form-group">
                      <div class="dropdown bootstrap-select show-tick form-control">
                        <select
                          name="type[]"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Type"
                          data-live-search="true"
                          data-selected-text-format="count > 1"
                          data-actions-box="true"
                          multiple=""
                          data-select-all-text="Select All"
                          data-deselect-all-text="Deselect All"
                          data-count-selected-text="{0} types selected"
                          data-none-results-text="No results matched {0}"
                          data-container="body"
                          tabindex="-98"
                        >
                          <option data-ref="apartment" value="apartment">
                            Apartment
                          </option>
                          <option data-ref="commercial" value="commercial">
                            Commercial
                          </option>
                          <option
                            data-ref="commercial-lease"
                            value="commercial-lease"
                          >
                            Commercial Lease
                          </option>
                          <option data-ref="condo" value="condo">
                            Condo
                          </option>
                          <option data-ref="loft" value="loft">
                            Loft
                          </option>
                          <option
                            data-ref="multi-family-home"
                            value="multi-family-home"
                          >
                            Multi Family Home
                          </option>
                          <option
                            data-ref="single-family-home"
                            value="single-family-home"
                          >
                            Single Family Home
                          </option>
                          <option data-ref="townhouse" value="townhouse">
                            Townhouse
                          </option>
                          <option data-ref="villa" value="villa">
                            Villa
                          </option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="button"
                          title="Type"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">Type</div>
                            </div>{" "}
                          </div>
                        </button>
                        <div class="dropdown-menu " role="combobox">
                          <div class="bs-searchbox">
                            <input
                              type="text"
                              class="form-control"
                              autocomplete="off"
                              role="textbox"
                              aria-label="Search"
                            />
                          </div>
                          <div class="bs-actionsbox">
                            <div class="btn-group btn-group-sm btn-block">
                              <button
                                type="button"
                                class="actions-btn bs-select-all btn btn-light"
                              >
                                Select All
                              </button>
                              <button
                                type="button"
                                class="actions-btn bs-deselect-all btn btn-light"
                              >
                                Deselect All
                              </button>
                            </div>
                          </div>
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group">
                      <input
                        name="max-area"
                        type="text"
                        class="form-control "
                        value=""
                        placeholder="Max. Area "
                      />
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group prices-for-all">
                      <div class="dropdown bootstrap-select form-control">
                        <select
                          name="min-price"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Min. Price"
                          data-live-search="false"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value=""></option>
                          <option value="">Min. Price</option>
                          <option value="any">Any</option>
                          <option value="1000">$1,000</option>
                          <option value="5000">$5,000</option>
                          <option value="10000">$10,000</option>
                          <option value="50000">$50,000</option>
                          <option value="100000">$100,000</option>
                          <option value="200000">$200,000</option>
                          <option value="300000">$300,000</option>
                          <option value="400000">$400,000</option>
                          <option value="500000">$500,000</option>
                          <option value="600000">$600,000</option>
                          <option value="700000">$700,000</option>
                          <option value="800000">$800,000</option>
                          <option value="900000">$900,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1500000">$1,500,000</option>
                          <option value="2000000">$2,000,000</option>
                          <option value="2500000">$2,500,000</option>
                          <option value="5000000">$5,000,000</option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle bs-placeholder btn-light"
                          data-toggle="dropdown"
                          role="button"
                          title="Min. Price"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">
                                Min. Price
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div
                          class="dropdown-menu "
                          role="combobox"
                          css={css`
                            max-height: 207px;
                            overflow: hidden;
                            min-width: 111px;
                          `}
                        >
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                            css={css`
                              max-height: 205px;
                              overflow-y: auto;
                            `}
                          >
                            <ul class="dropdown-menu inner show">
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">Min. Price</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">Any</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$1,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$5,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$10,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$50,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$100,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$200,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$300,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$400,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$500,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$600,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$700,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$800,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$900,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$1,000,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$1,500,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$2,000,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$2,500,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$5,000,000</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group hide prices-only-for-rent">
                      <div class="dropdown bootstrap-select disabled form-control">
                        <select
                          name="min-price"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Min. Price"
                          data-live-search="false"
                          disabled="disabled"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value=""></option>
                          <option value="">Min. Price</option>
                          <option value="any">Any</option>
                          <option value="500">$500</option>
                          <option value="1000">$1,000</option>
                          <option value="2000">$2,000</option>
                          <option value="3000">$3,000</option>
                          <option value="4000">$4,000</option>
                          <option value="5000">$5,000</option>
                          <option value="7500">$7,500</option>
                          <option value="10000">$10,000</option>
                          <option value="15000">$15,000</option>
                          <option value="20000">$20,000</option>
                          <option value="25000">$25,000</option>
                          <option value="30000">$30,000</option>
                          <option value="40000">$40,000</option>
                          <option value="50000">$50,000</option>
                          <option value="75000">$75,000</option>
                          <option value="100000">$100,000</option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle disabled btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="button"
                          tabindex="-1"
                          aria-disabled="true"
                          title="Min. Price"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">
                                Min. Price
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div class="dropdown-menu " role="combobox">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group prices-for-all">
                      <div class="dropdown bootstrap-select form-control">
                        <select
                          name="max-price"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Max. Price"
                          data-live-search="false"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value=""></option>
                          <option value="">Max. Price</option>
                          <option value="any">Any</option>
                          <option value="5000">$5,000</option>
                          <option value="10000">$10,000</option>
                          <option value="50000">$50,000</option>
                          <option value="100000">$100,000</option>
                          <option value="200000">$200,000</option>
                          <option value="300000">$300,000</option>
                          <option value="400000">$400,000</option>
                          <option value="500000">$500,000</option>
                          <option value="600000">$600,000</option>
                          <option value="700000">$700,000</option>
                          <option value="800000">$800,000</option>
                          <option value="900000">$900,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1500000">$1,500,000</option>
                          <option value="2000000">$2,000,000</option>
                          <option value="2500000">$2,500,000</option>
                          <option value="5000000">$5,000,000</option>
                          <option value="10000000">$10,000,000</option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle bs-placeholder btn-light"
                          data-toggle="dropdown"
                          role="button"
                          title="Max. Price"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">
                                Max. Price
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div
                          class="dropdown-menu "
                          role="combobox"
                          css={css`
                            max-height: 207px;
                            overflow: hidden;
                            min-width: 125px;
                          `}
                        >
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                            css={css`
                              max-height: 205px;
                              overflow-y: auto;
                            `}
                          >
                            <ul class="dropdown-menu inner show">
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">Max. Price</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">Any</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$5,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$10,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$50,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$100,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$200,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$300,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$400,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$500,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$600,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$700,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$800,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$900,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$1,000,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$1,500,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$2,000,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$2,500,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$5,000,000</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  class="dropdown-item"
                                  aria-disabled="false"
                                  tabindex="0"
                                  aria-selected="false"
                                >
                                  <span class="text">$10,000,000</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group hide prices-only-for-rent">
                      <div class="dropdown bootstrap-select disabled form-control">
                        <select
                          name="max-price"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Max. Price"
                          data-live-search="false"
                          disabled="disabled"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value=""></option>
                          <option value="">Max. Price</option>
                          <option value="any">Any</option>
                          <option value="1000">$1,000</option>
                          <option value="2000">$2,000</option>
                          <option value="3000">$3,000</option>
                          <option value="4000">$4,000</option>
                          <option value="5000">$5,000</option>
                          <option value="7500">$7,500</option>
                          <option value="10000">$10,000</option>
                          <option value="15000">$15,000</option>
                          <option value="20000">$20,000</option>
                          <option value="25000">$25,000</option>
                          <option value="30000">$30,000</option>
                          <option value="40000">$40,000</option>
                          <option value="50000">$50,000</option>
                          <option value="75000">$75,000</option>
                          <option value="100000">$100,000</option>
                          <option value="150000">$150,000</option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle disabled btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="button"
                          tabindex="-1"
                          aria-disabled="true"
                          title="Max. Price"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">
                                Max. Price
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div class="dropdown-menu " role="combobox">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group">
                      <div class="dropdown bootstrap-select form-control">
                        <select
                          name="bedrooms"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Bedrooms"
                          data-live-search="false"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value=""></option>
                          <option value="">Bedrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="any">Any</option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="button"
                          title="Bedrooms"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">
                                Bedrooms
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div class="dropdown-menu " role="combobox">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group">
                      <div class="dropdown bootstrap-select form-control">
                        <select
                          name="bathrooms"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Bathrooms"
                          data-live-search="false"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value=""></option>
                          <option value="">Bathrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="any">Any</option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="button"
                          title="Bathrooms"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">
                                Bathrooms
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div class="dropdown-menu " role="combobox">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group">
                      <input
                        name="property_id"
                        type="text"
                        class=" form-control"
                        value=""
                        placeholder="Property ID"
                      />
                    </div>
                  </div>
                  <div class="flex-search">
                    <div class="form-group">
                      <div class="dropdown bootstrap-select show-tick form-control">
                        <select
                          name="label[]"
                          data-size="5"
                          class="selectpicker form-control"
                          title="Label"
                          data-selected-text-format="count > 1"
                          data-live-search="false"
                          data-actions-box="true"
                          multiple=""
                          data-select-all-text="Select All"
                          data-deselect-all-text="Deselect All"
                          data-none-results-text="No results matched {0}"
                          data-count-selected-text="{0} Labels"
                          data-container="body"
                          tabindex="-98"
                        >
                          <option data-ref="bank-owned" value="bank-owned">
                            Bank Owned
                          </option>
                          <option data-ref="for-rent" value="for-rent">
                            For Rent
                          </option>
                          <option
                            data-ref="for-rent-by-owner"
                            value="for-rent-by-owner"
                          >
                            For Rent By Owner
                          </option>
                          <option data-ref="for-sale" value="for-sale">
                            For Sale
                          </option>
                          <option
                            data-ref="for-sale-by-owner"
                            value="for-sale-by-owner"
                          >
                            For Sale By Owner
                          </option>
                          <option data-ref="foreclosure" value="foreclosure">
                            Foreclosure
                          </option>
                          <option data-ref="guest-house" value="guest-house">
                            Guest House
                          </option>
                          <option data-ref="home-stay" value="home-stay">
                            Home Stay
                          </option>
                          <option data-ref="hot-sale" value="hot-sale">
                            Hot Sale
                          </option>
                          <option
                            data-ref="new-construction"
                            value="new-construction"
                          >
                            New Construction
                          </option>
                          <option data-ref="open-house" value="open-house">
                            Open House
                          </option>
                          <option
                            data-ref="price-reduced"
                            value="price-reduced"
                          >
                            Price Reduced
                          </option>
                          <option
                            data-ref="short-term-rental"
                            value="short-term-rental"
                          >
                            Short Term Rental
                          </option>
                          <option
                            data-ref="vacation-rental"
                            value="vacation-rental"
                          >
                            Vacation Rental
                          </option>{" "}
                        </select>
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="button"
                          title="Label"
                        >
                          <div class="filter-option">
                            <div class="filter-option-inner">
                              <div class="filter-option-inner-inner">Label</div>
                            </div>{" "}
                          </div>
                        </button>
                        <div class="dropdown-menu " role="combobox">
                          <div class="bs-actionsbox">
                            <div class="btn-group btn-group-sm btn-block">
                              <button
                                type="button"
                                class="actions-btn bs-select-all btn btn-light"
                              >
                                Select All
                              </button>
                              <button
                                type="button"
                                class="actions-btn bs-deselect-all btn btn-light"
                              >
                                Deselect All
                              </button>
                            </div>
                          </div>
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="features-list-wrap">
                <a
                  class="btn-features-list"
                  data-toggle="collapse"
                  href="#features-list"
                >
                  <i class="houzez-icon icon-add-square"></i> Other Features{" "}
                </a>
                <div id="features-list" class="collapse">
                  <div class="features-list">
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="air-conditioning"
                      />
                      Air Conditioning<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="barbeque"
                      />
                      Barbeque<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="dryer"
                      />
                      Dryer<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="gym"
                      />
                      Gym<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="laundry"
                      />
                      Laundry<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="lawn"
                      />
                      Lawn<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="microwave"
                      />
                      Microwave<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="outdoor-shower"
                      />
                      Outdoor Shower<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="refrigerator"
                      />
                      Refrigerator<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="sauna"
                      />
                      Sauna<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="swimming-pool"
                      />
                      Swimming Pool<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="tv-cable"
                      />
                      TV Cable<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="washer"
                      />
                      Washer<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="wifi"
                      />
                      WiFi<span class="control__indicator"></span>
                    </label>
                    <label class="control control--checkbox">
                      <input
                        class=""
                        name="feature[]"
                        type="checkbox"
                        value="window-coverings"
                      />
                      Window Coverings<span class="control__indicator"></span>
                    </label>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(SearchBar);
