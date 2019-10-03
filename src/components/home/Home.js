import React from 'react';
import './Home.css';

export default function Home() {

    return (
        <div>
            <div className="solarsystem">
                <div className="neptunelane">
                <div className="neptune"></div>
                    <div className="uranuslane">
                    <div className="uranus"></div>
                        <div className="saturnlane">
                        <div className="saturn"></div>
                            <div className="jupiterlane">
                            <div className="jupiter"></div>
                                <div className="marslane">
                                <div className="mars"></div>
                                    <div className="earthlane">
                                    <div className="earth"></div>
                                        <div className="venuslane">
                                        <div className="venus"></div>
                                            <div className="mercurylane">
                                            <div className="mercury"></div>
                                                <div className="sun">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
