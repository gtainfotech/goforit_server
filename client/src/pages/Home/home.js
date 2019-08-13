import React, { Component } from 'react';
import Header from '../Header';

import './home.css';


class HomePage extends Component {
    render() {
        return (

            <div className="homepage">
                <Header />
                <div className="container">
                    <div className='siteSummary'>
                        <p>The new way to monetize any talent or possessions you've got. And to navigate your way through life. Go ad free online;
                            get paid to view ads, or get paid even to advertise depending on how valueable you find your ad to be to the viewer. We
                            also provide mechant accounts with VERY low fee for those who choose not to transfer to another financial instituion.
                    </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePage;