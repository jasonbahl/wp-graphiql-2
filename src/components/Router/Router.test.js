import { LineChartOutlined } from "@ant-design/icons";
import {
  cleanup,
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
  act,
  renderHook
} from "@testing-library/react";
import Router from "./Router";

import { QueryParamProvider, useQueryParam } from "use-query-params";
import { hooks } from "../..";
import { AppContextProvider } from "../../context/AppContext";

beforeEach(() => {
  cleanup();
});

afterEach(() => {
  cleanup();
});

const render = (component) => {
  return rtlRender(
    <QueryParamProvider>
      <AppContextProvider >
        {component}
      </AppContextProvider>
    </QueryParamProvider>
    );
};

describe("Router", () => {
  test("it should render", async () => {
    await act(async () => {
      render(<Router />);
    });
  });

  test("router should render GraphiQL by default", async () => {
    await act(async () => {
      render(<Router />);
      expect(screen.getByTestId("router-screen-graphiql")).toBeInTheDocument();
    });
  });

  test("clicking router menu item changes route to associated screen", async () => {
    await act(async () => {
      render(<Router />);

      // Default router layout is graphiql
      expect(
        screen.queryByTestId("router-screen-graphiql")
      ).toBeInTheDocument();

      // help screen should not be rendered
      expect(
        screen.queryByTestId("router-screen-help")
      ).not.toBeInTheDocument();

      // click menu item to change route
      const button = screen.getByTestId("router-menu-item-help");
      fireEvent.click(button);

      await waitFor(() => {
        screen.queryByTestId("router-screen-help");
      });

      // graphiql screen should no longer be rendered
      expect(
        screen.queryByTestId("router-screen-graphiql")
      ).not.toBeInTheDocument();

      // click menu item to change route
      const graphiqlButton = screen.getByTestId("router-menu-item-graphiql");
      fireEvent.click(graphiqlButton);

      await waitFor(() => {
        screen.queryByTestId("router-screen-graphiql");
      });

      // graphiql screen should no longer be rendered
      expect(
        screen.queryByTestId("router-screen-help")
      ).not.toBeInTheDocument();

      // help screen should be rendered
      expect(
        screen.queryByTestId("router-screen-graphiql")
      ).toBeInTheDocument();
    });
  });

  test("clicking expand menu button expands the menu", async () => {
    await act(async () => {
      render(<Router />);
      let sider = screen.queryByTestId("graphiql-router-sider");
      let siderClassList = sider.classList;
      const trigger = screen.queryByTestId("router-menu-collapse-trigger");
      expect(trigger).toBeInTheDocument();
      expect(sider).toBeInTheDocument();

      // The sider should be collapsed by default
      expect(sider).toHaveClass("ant-layout-sider-collapsed");

      // Clicking the trigger should expand the sider
      fireEvent.click(trigger);

      // Wait for the sider to expand
      waitFor(() => {
        // The sider should now be expanded
        expect(sider).not.toHaveClass("ant-layout-sider-collapsed");
      });
    });
  });
});

describe("router filters", () => {
  beforeAll(() => {
    const { hooks } = wpGraphiQL;

    hooks.addFilter("graphiql_router_screens", "router-test", (screens) => {
      screens.push({
        id: "testScreen",
        title: "Test Screen Menu Item",
        icon: <LineChartOutlined />,
        render: () => <h2>Test Screen...</h2>,
      });
      return screens;
    });
  });

  afterAll(() => {
    hooks.removeAllFilters("graphiql_router_screens");
  });

  test("clicking filtered screen menu item should replace screen with filtered screen", async () => {
    await act(async () => {
      render(<Router />);

      expect(screen.getByText("Test Screen Menu Item")).toBeInTheDocument();

      // Wait for the state change caused by the click
      await waitFor(() => screen.queryByTestId("router-screen-graphiql"));

      // GraphiQL is the defualt screen we should see
      expect(screen.getByTestId("router-screen-graphiql")).toBeInTheDocument();

      // testScreen should not be present until we navigate to it
      expect(
        screen.queryByTestId("router-screen-testScreen")
      ).not.toBeInTheDocument();

      // Click the testScreen menu button
      const button = screen.queryByTestId("router-menu-item-testScreen");
      fireEvent.click(button);

      // Wait for the state change caused by the click
      await waitFor(() => screen.queryByTestId("router-screen-testScreen"));

      // IDE screen should not be present anymore
      expect(
        screen.queryByTestId("router-screen-graphiql")
      ).not.toBeInTheDocument();

      // testScreen screen should now be present
      expect(
        screen.queryByTestId("router-screen-testScreen")
      ).toBeInTheDocument();

      // click menu item to change route
      const graphiqlButton = screen.getByTestId("router-menu-item-graphiql");
      fireEvent.click(graphiqlButton);

      await waitFor(() => {
        screen.queryByTestId("router-screen-graphiql");
      });

      // graphiql screen should no longer be rendered
      expect(
        screen.queryByTestId("router-screen-testScreen")
      ).not.toBeInTheDocument();

      // help screen should be rendered
      expect(
        screen.queryByTestId("router-screen-graphiql")
      ).toBeInTheDocument();
    });
  });

  test("screens still show if filter reutrns null", async () => {
    await act(async () => {
      const { hooks } = wpGraphiQL;

      hooks.addFilter("graphiql_router_screens", "test", (screen) => {
        return null;
      });

      render(<Router />);

      // IDE is the defualt screen we should see
      expect(
        screen.queryByTestId("router-screen-graphiql")
      ).toBeInTheDocument();
    });
  });

  test('changing screens, causes screen query param to change', async () => {
    
    // check default screen query param is equal to default screen
    // click to change screen
    // assert that query param is now equal to new screen
    await act(async () => {
      render(<Router />);
      
      // graphiql is the defualt screen we should see
      expect( screen.getByTestId("router-screen-graphiql") ).toBeInTheDocument();
      const queryParam = window.location.search.split("=")[1];
      expect( queryParam ).toBe( "graphiql" );

      // click menu item to change route
      const button = screen.getByTestId("router-menu-item-help");
      fireEvent.click(button);

      await waitFor(() => {
        screen.queryByTestId("router-screen-help");
      } );

      // graphiql screen should no longer be rendered 
      expect( screen.queryByTestId("router-screen-graphiql") ).not.toBeInTheDocument(); 

      // testScreen screen should now be present
      expect( screen.queryByTestId("router-screen-help") ).toBeInTheDocument();

      // test that query param is now equal to new screen
      const newQueryParam = window.location.search.split("=")[1];
      expect( newQueryParam ).toBe( "help" );

    })


  })

});