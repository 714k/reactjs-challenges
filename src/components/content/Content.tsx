import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ReactVirtualizedList from "../../react-virtualized-list/ReactVirtualizedList";
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

export default function Content() {
  return (
    <Container>
      <SidePanel>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/react-virtualized-list"
        >
          React Virtualized List
        </NavLink>
      </SidePanel>

      <main>
        <Routes>
          <Route
            path="/react-virtualized-list"
            element={<ReactVirtualizedList />}
          />
        </Routes>
      </main>
    </Container>
  );
}
