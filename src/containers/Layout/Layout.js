import React, {Component} from 'react'
import Aux from '../../hoc/Auxc'
import classes from './Layout.module.css'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={ classes.Content }>
                    {this.props.children}
                </main>
                <div style={{textAlign: 'center'}}>ver 0.1</div>
            </Aux>
        )
    }
}

export default Layout