import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ReactVirtualizedList from "../../virtualized-list/VirtualizedList";
import SidePanel from "../side-panel/SidePanel";

const Container = styled.div`
  display: flex;

  main {
    height: 90vh;
    width: 80vw;

    h2 {
      text-align: center;
      margin: 24px 0 0 0;
    }
  }
`;

// Todo - Make a Layout for the webApp
export default function Content() {
  return (
    <Container>
      <SidePanel>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/virtualized-list"
        >
          React Virtualized List
        </NavLink>
      </SidePanel>

      <main>
        <Routes>
          <Route
            path="/virtualized-list"
            element={<ReactVirtualizedList props />}
          />
        </Routes>
      </main>
    </Container>
  );
}
