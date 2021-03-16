import React from "react";

import styled from "styled-components";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <h1>Sidebar</h1>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  > h1 {
    padding-top: 70px;
    color: red;
  }
`;
