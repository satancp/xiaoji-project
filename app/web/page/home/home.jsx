import React, { Component } from 'react';
import HomeLayout from 'component/homelayout/homelayout.jsx';
import './home.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { canDisplay: false };
    }

    componentDidMount() {
        const cache = cookies.get('loginInfo');
        if (!cache) {
            this.setState({ canDisplay: false });
            window.location = '/user/login';
        } else {
            this.setState({ canDisplay: true });
        }
    }

    render() {
        return <div>{this.state.canDisplay ? <HomeLayout>Home Page</HomeLayout> : null}</div>;
    }
}

export default Home;
