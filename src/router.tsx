import { createBrowserRouter } from "react-router-dom";
import VirtualizedList from "./virtualized-list/VirtualizedList";
import ErrorPage from "./ErrorPage";

// TODO - Remove (testing purposes)
const items = new Array(1000)
  .fill(null)
  .map((_, i) => ({ id: `item-${i}`, content: `Item ${i}` }));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/virtualized-list",
    element: (
      <VirtualizedList items={items} itemHeight={50} visibleItems={10} />
    ),
    errorElement: <ErrorPage />,
  },
]);
