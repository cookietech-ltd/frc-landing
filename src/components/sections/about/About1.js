import Link from "next/link";
import React from "react";

const About1 = () => {
    return (
        <div className="ltn__about-us-area pt-115 pb-95">
            <div className="container">
                <div className="row">
                    <div className=" align-self-center">
                        <div className="about-us-info-wrap">
                            <div className="section-title-area ltn__section-title-2">
                                <h6 className="section-subtitle ltn__secondary-color">
                                    {"// technology and Transparency"}
                                </h6>
                                <h1 className="section-title">
                                    Real-Time Visibility and Transparency<span>.</span>
                                </h1>
                                <p>
                                    Everything from work order history to maintenance schedules is visible in real time, ensuring accountability and transparency across your entire facility.
                                </p>
                            </div>
                            <div className="about-us-info-wrap-inner about-us-info-devide">
                                <p>
                                    The FRC platform connects members, staff, and technicians in one seamless ecosystem. When a member reports an issue, staff review and approve it with one click. Technicians receive automatic updates, and management can track every step from the dashboard.
                                    Planned Maintenance customers receive full platform access as part of their program. Gyms not enrolled in a PM program can subscribe monthly to manage equipment and repairs through the same system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;
