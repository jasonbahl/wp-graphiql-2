import { Layout, Card, Row, Col, Divider, Button, PageHeader, Tabs, Spin } from "antd";
import {diffLines, formatLines} from 'unidiff';
import {parseDiff, Diff, Hunk} from 'react-diff-view';
import tokenize from './utils/tokenize';
import { useState, useMemo, useEffect, useCallback } from '@wordpress/element';
const { useAppContext } = wpGraphiQL;
const { printSchema, buildClientSchema } = wpGraphiQL.GraphQL;
const { Header, Content } = Layout;
import 'react-diff-view/style/index.css';

import newText from './currentSchema';
import oldText from "./prevSchema";

const renderToken = (token, defaultRender, i) => {
    switch (token.type) {
        case 'space':
            console.log(token);
            return (
                <span key={i} className="space">
                    {token.children && token.children.map((token, i) => renderToken(token, defaultRender, i))}
                </span>
            );
        default:
            return defaultRender(token, i);
    }
};

const EMPTY_HUNKS = [];

const DiffViewer = () => {

    const [{type, hunks}, setDiff] = useState('');
    
    const updateDiffText = useCallback(() => {
        const diffText = formatLines(diffLines(oldText, newText), {context: 3});
        console.log( { diffText } );
        const [diff] = parseDiff(diffText, {nearbySequences: 'zip'});
        console.log( { diff } );
        setDiff(diff);
    }, [oldText, newText, setDiff]);

    useEffect(() => {
        updateDiffText();
    }, [oldText, newText, setDiff]);

    const tokens = useMemo(() => { hunks ? tokenize(hunks) : null }, [hunks]);

    return (
        hunks ? 
        <Diff
            viewType="unified"
            diffType={type}
            hunks={hunks || EMPTY_HUNKS}
            tokens={tokens}
            renderToken={renderToken}
        >
            {hunks => hunks.map(hunk => <Hunk key={hunk.content} hunk={hunk} />)}
        </Diff> : <Spin />
    )

}


const Schema = () => {

    const { schema } = useAppContext();
    const printedSchema = schema ? printSchema(schema) : null;
    const prevSchema = '';

    return schema ? (
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
                            <DiffViewer />
                        </Tabs.TabPane>
                    </Tabs>
                </Content>
            </Layout>
        </Layout>
    ) : null;
}

export default Schema;