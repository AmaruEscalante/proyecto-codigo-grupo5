import { Fragment } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

export default function Layout(props) {

    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <Content>
                {props.children}
            </Content>
        </div>
    )

}