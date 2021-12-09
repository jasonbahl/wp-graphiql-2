import { Voyager } from 'graphql-voyager'
import 'graphql-voyager/dist/voyager.css'

const { useAppContext } = window.wpGraphiQL;

const SchemaVoyager = () => {

    const { endpoint } = useAppContext();
    const worker = window.wpGraphiQLSettings.voyagerWorkerUrl ?? null;

    const introspectionProvider = (query) => {
        return fetch(endpoint, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: query }),
        }).then((response) => response.json());
      }

    return (
        <div style={{ display: 'flex', height: '100%' }}>
        <Voyager 
            introspection={introspectionProvider}
            workerURI={worker}
        />
        </div>
    )
}

export default SchemaVoyager;