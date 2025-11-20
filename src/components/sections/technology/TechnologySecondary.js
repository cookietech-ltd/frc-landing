"use client";

import ServiceSidebar from "@/components/shared/sidebars/ServiceSidebar";
import Image from "next/image";
import technologySample1 from "@/assets/img/technology/technology_sample1.png";
import technologySample2 from "@/assets/img/technology/technology_sample2.png";
import React from "react";

const TechnologySecondary = () => {

  return (
    <div className="ltn__page-details-area ltn__service-details-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__page-details-inner ltn__service-details-inner">
              <p>
                {" "}
                <span className="ltn__first-letter">T</span>he FRC platform connects every part of your equipment service process in one simple system. When a member notices an equipment issue, they scan the QR code to submit a quick report. Staff review and approve each request, and once approved it appears in the FRC dashboard for our technicians and support team to handle.
              </p>

              <div className="row">
                  <div className="col-lg-8">
                      <p>
                          Every request is tracked from start to finish, and each machine builds a complete history of repairs, technician notes, and planned maintenance visits. Managers can monitor real time status updates and understand overall performance at a glance.
                            <br/><br/>
                          Gyms enrolled in our planned maintenance program receive full access to the platform at no cost. For gyms that want FRC to handle non warranty repairs and facilitate warranty claims, the platform can be deployed for a monthly subscription fee.
                            <br/><br/>
                          The system is fully integrated with the FRC technician network and support team. To ensure consistent service quality, it currently does not support external service providers.

                      </p>
                      <div className="ltn__service-list-menu text-uppercase mt-50">
                          <ul>
                              <li>
                                  <i className="fas fa-qrcode"></i> Scan the Code – Each machine has a QR code. Scan it to report an issue in seconds.{" "}
                                  {" "}
                              </li>
                              <li>
                                  <i className="fas fa-mail-reply"></i> Submit a Request – Add a short description, photo, or note and send it instantly.{" "}
                              </li>
                              <li>
                                  <i className="fas fa-arrow-trend-up"></i> Track Progress – Watch your service request move from received → assigned → completed.{" "}
                              </li>
                              <li>
                                  <i className="fas fa-bell"></i> Get Notified – Receive updates when a technician is scheduled or work is finished.{" "}
                              </li>
                              <li>
                                  <i className="fas fa-calendar-plus"></i> Stay Ahead – Use planned maintenance programs to prevent issues before they happen.{" "}
                              </li>
                          </ul>
                      </div>
                  </div>
                <div className="col-lg-4">
                  <Image src={technologySample2} alt="image"  />
                </div>
              </div>

              {/* <p>
                  In short, FRC gives gym owners a smarter way to manage equipment care — fast, transparent, and hassle-free. With just a quick scan, issues are handled efficiently, maintenance stays on schedule, and your team can focus on delivering a great workout experience to every member, every day.
                  <br/><br/>
                  Access to the FRC Platform is included free of charge for all gyms enrolled in our Concierge Planned Maintenance Program, giving you full visibility into equipment performance, maintenance schedules, and service history.
                  For facilities not yet enrolled in a PM program, we offer a simple monthly subscription that unlocks the same technology — allowing your team to submit and track service requests, monitor performance metrics, and manage all maintenance activity in one place.
              </p> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySecondary;
