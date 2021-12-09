import { Layout, Card, Row, Col, Divider, Button, PageHeader, Tabs } from "antd";
import SchemaVoyager from "./components/Voyager/Voyager";
const { Header, Content } = Layout;

const Schema = () => {
    return (
        <Layout>
            <PageHeader
                style={{
                    backgroundColor: "#fff",
                }} 
                title="Schema"
                subTitle="Tools for interacting with and exploring the WPGraphQL Schema"
            />
            <Layout style={{ padding: '20px' }}>
                <Content style={{ backgroundColor: '#fff', padding: '20px' }}>
                    <Tabs
                        type="card"
                        size="large"
                        defaultActiveKey="sdl"
                    >
                        <Tabs.TabPane tab="SDL" key="sdl">
                            <h2>Schema as SDL...</h2>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Voyager" key="voyager">
                            <SchemaVoyager />
                        </Tabs.TabPane>
                    </Tabs>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Schema;