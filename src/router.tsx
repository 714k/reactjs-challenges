import { createBrowserRouter } from "react-router-dom";
import VirtualizedList from "./components/organisms/virtualized-list/VirtualizedList";
import ErrorPage from "./ErrorPage";

// TODO - Remove (testing purposes)
const itemsData = new Array(1000).fill(null).map((_, i) => ({
  id: `item-${i}`,
  content: `Item ${i}`,
  styles: {
    fontSize: "20px",
    paddingBottom: "20px",
    textAlign: "center",
  },
  classes: "md item-card",
}));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/virtualized-list",
    element: <VirtualizedList itemsData={itemsData} />,
    errorElement: <ErrorPage />,
  },
]);
