import { connect } from "frontity";
import React from "react";
import MainHeader from "./header";
import Navigation from "./navigation";
import SocialNav from "./social-menu";
import { SearchButton, SearchModal, SearchForm } from "../search";
import LoginAndReg from "./loginAndReg";

const Header = ({ state, actions }) => (
  <MainHeader>
    <Navigation menu={state.theme.menu} />
    {state.theme.showSocialLinks && (
      <SocialNav menu={state.theme.socialLinks} />
    )}
    <LoginAndReg onClick={actions.theme.openSearchModal} />
    <SearchButton onClick={actions.theme.openSearchModal} />
    <SearchModal
      isOpen={state.theme.isSearchModalOpen}
      onClose={actions.theme.closeSearchModal}
    >
      <SearchForm />
    </SearchModal>
  </MainHeader>
);

export default connect(Header);
