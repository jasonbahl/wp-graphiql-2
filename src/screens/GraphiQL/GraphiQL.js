import GraphiQL from "graphiql";
import { useRef, useEffect } from "@wordpress/element";
import { getFetcher } from "../../utils/fetcher";
import styled from "styled-components";
import "./style.scss";
import { Spin } from "antd";
import GraphiQLToolbar from "./components/GraphiQLToolbar";
import {
  GraphiQLContextProvider,
  useGraphiQLContext,
} from "./context/GraphiQLContext";

const { hooks, useAppContext, GraphQL } = wpGraphiQL;
const { parse, specifiedRules } = GraphQL;

const StyledWrapper = styled.div`
  display: flex;
  .topBar {
    height: 50px;
  }
  .doc-explorer-title,
  .history-title {
    padding-top: 5px;
  }
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  overflow: hidden;
  width: 100%;
  .graphiql-container {
    border: 1px solid #ccc;
  }
  .graphiql-container .execute-button-wrap {
    margin: 0 14px;
  }
  padding: 20px;
`;

/**
 * The GraphiQL screen.
 *
 * @returns
 */
const GraphiQLScreen = () => {
  let graphiql = useRef(null);

  const appContext = useAppContext();
  const graphiqlContext = useGraphiQLContext();
  const { query, setQuery, externalFragments } = graphiqlContext;
  const { endpoint, nonce, schema, setSchema } = appContext;

  let fetcher = getFetcher(endpoint, { nonce });
  fetcher = hooks.applyFilters("graphiql_fetcher", fetcher, appContext);

  const beforeGraphiql = hooks.applyFilters("graphiql_before_graphiql", [], {
    ...appContext,
    ...graphiqlContext,
  });
  const afterGraphiQL = hooks.applyFilters("graphiql_after_graphiql", [], {
    ...appContext,
    ...graphiqlContext,
  });

  /**
   * Callback when the query is edited in GraphiQL
   *
   * @param editedQuery
   */
  const handleEditQuery = (editedQuery) => {
    let update = false;

    if (editedQuery === query) {
      return;
    }

    if (null === editedQuery || "" === editedQuery) {
      update = true;
    } else {
      try {
        parse(editedQuery);
        update = true;
      } catch (error) {
        return;
      }
    }

    // If the query is valid and should be updated
    if (update) {
      // Update the state with the new query
      setQuery(editedQuery);
    }
  };

  return (
    <StyledWrapper data-testid="wp-graphiql-wrapper" id="wp-graphiql-wrapper">
      {
        // Panels can hook here to render before GraphiQL
        beforeGraphiql.length > 0 ? beforeGraphiql : null
      }

      <GraphiQL
        ref={(node) => {
          graphiql = node;
        }}
        fetcher={(params) => {
          return fetcher(params);
        }}
        schema={schema}
        query={query}
        onEditQuery={handleEditQuery}
        validationRules={specifiedRules}
        readOnly={false}
        externalFragments={externalFragments}
        // @todo: Header editor should be enabled at some point,
        // and should work with the AuthSwitch as that really is
        // modifying the headers anyway.
        headerEditorEnabled={false}
        onSchemaChange={(newSchema) => {
          if (schema !== newSchema) {
            setSchema(newSchema);
          }
        }}
        variables={JSON.stringify(
          {
            first: 10,
          },
          null,
          2
        )}
      >
        <GraphiQL.Toolbar>
          <GraphiQLToolbar graphiql={() => graphiql} />
        </GraphiQL.Toolbar>
        <GraphiQL.Logo>{<></>}</GraphiQL.Logo>
      </GraphiQL>

      {
        // Panels can hook here to render after GraphiQL
        afterGraphiQL.length > 0 ? afterGraphiQL : null
      }
    </StyledWrapper>
  );
};

const GraphiQLScreenWithContext = () => {
  const appContext = useAppContext();
  const { schema } = appContext;

  return schema ? (
    <GraphiQLContextProvider appContext={appContext}>
      <GraphiQLScreen />
    </GraphiQLContextProvider>
  ) : (
    <Spin style={{ margin: `50px` }} />
  );
};

export default GraphiQLScreenWithContext;
