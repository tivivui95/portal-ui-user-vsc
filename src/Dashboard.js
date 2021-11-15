import React, { useState } from "react";

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const Dashboard = () => {
    const [ data, setData ] = useState(0);
    return (
        <>
        <Row style={{ margin: 0 }}>
            <div style={{width: '20rem', margin: 0, padding: 0 }}>
                <Card style={{height: '100vh',  margin: 0, padding: 0 }}>
                <Card.Body style={{margin: 0, padding: 0 }}>
                <Navigation 
                    // you can use your own router's api to get pathname
                    activeItemId="/management/members"
                    onSelect={({itemId}) => {
                    switch ({itemId}) {
                        case '/dashboard':
                        setData(1);
                        break;
                    
                        default:
                        setData(2);
                        break;
                    }
                    
                    }}
                    items={[
                    {
                        title: 'Dashboard',
                        itemId: '/dashboard',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                        title: 'Management',
                        itemId: '/management',
                        elemBefore: () => <Icon name="users" />,
                        subNav: [
                        {
                            title: 'Projects',
                            itemId: '/management/projects',
                        },
                        {
                            title: 'Members',
                            itemId: '/management/members',
                        },
                        ],
                    },
                    {
                        title: 'Another Item',
                        itemId: '/another',
                        subNav: [
                        {
                            title: 'Teams',
                            itemId: '/management/teams',
                        },
                        ],
                    },
                    ]}
                />
                </Card.Body>
                </Card>
            </div>
            <Col>{data===1 ? (<div>Hello</div>) : data===2 ? (<div>Hi</div>) : (<div>Default</div>)}</Col>
        </Row>
        </>
    );
};

export default Dashboard;