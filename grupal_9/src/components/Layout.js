import { Fragment } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

export default function Layout(props) {
    const { handleLogout } = props;
    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <Content handleLogout={handleLogout}>
                {props.children}
            </Content>
        </div>
    )

}