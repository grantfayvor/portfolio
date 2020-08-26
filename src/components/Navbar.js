import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

class Navbar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            About: true,
            TechnicalSkills: false,
            Portfolio: false,
            blog: false,
        }
        this.handleActive = this.handleActive.bind(this)
    }

    handleActive(button) {
        switch (button) {
            case 'About':
                this.setState({
                    About: true,
                    TechnicalSkills: false,
                    Portfolio: false
                });
                break;
            case 'TechnicalSkills':
                this.setState({
                    About: false,
                    TechnicalSkills: true,
                    Portfolio: false
                });
                break;
            case 'Portfolio':
                this.setState({
                    About: false,
                    TechnicalSkills: false,
                    Portfolio: true
                });
                break;
            case 'blog':
                this.setState({
                    About: false,
                    TechnicalSkills: false,
                    Portfolio: false,
                    blog: true,
                });
                break;
            default: break;
        }
    }

    

    render() {
        return (
            <div className="col-xl-2">
                <nav class="navbar navbar-expand-xl navbar-light bg-light">
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul>
                            <div className="navMarker">
                                <Scrollspy items={['About', 'TechnicalSkills', 'Portfolio']} >
                                    <li ><a
                                        className={this.state.About ? 'active' : null}
                                        onClick={() => this.handleActive('About')}
                                        href="#About">About</a></li>
                                    <li><a
                                        className={this.state.TechnicalSkills ? 'active' : null}
                                        onClick={() => this.handleActive('TechnicalSkills')}
                                        href="#TechnicalSkills">Skills
      </a></li>
                                    <li><a
                                        className={this.state.Portfolio ? 'active' : null}
                                        onClick={() => this.handleActive('Portfolio')}
                                        href="#Portfolio">Portfolio</a></li>
                                </Scrollspy>
                            </div>
                            <div className="bloglink">
                                <li className="nav-link"><Link to="/blog" className={this.state.blog ? 'active' : null}
                                    onClick={() => this.handleActive('blog')}
                                >Blog </Link></li>

                            </div>
                        </ul>

                    </div>
                </nav>

            </div>
        )
    }
}


export default Navbar