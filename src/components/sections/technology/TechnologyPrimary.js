"use client";

import ServiceSidebar from "@/components/shared/sidebars/ServiceSidebar";
import Image from "next/image";
import technologySample1 from "@/assets/img/technology/technology_sample1.png";
import technologySample2 from "@/assets/img/technology/technology_sample2.png";
import React from "react";

const TechnologyPrimary = () => {

  return (
    <div className="ltn__page-details-area ltn__service-details-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__page-details-inner ltn__service-details-inner">
              <div className="ltn__blog-img">
                <Image src={technologySample1} alt="Image" />
              </div>
              <p>
                {" "}
                <span className="ltn__first-letter">F</span>itness Room Concierge
                  (FRC) is a modern maintenance platform designed to keep your gym
                  running smoothly and your members happy. It eliminates the usual
                  frustration of tracking broken machines, waiting on service calls,
                  and juggling maintenance schedules. With FRC, every piece of equipment
                  in your facility becomes connected, trackable, and easy to manage
                  through one simple, intuitive system.
              </p>
              <p>
                  Every machine in your gym is tagged with a unique QR code that links directly to its digital profile. When an issue occurs, your staff can simply scan the code using a phone or tablet to instantly report the problem. There’s no need to fill out forms or make calls — the issue is logged right away, complete with optional photos and notes to help our technicians understand what’s wrong before they arrive.{" "}
              </p>

              <p>
                  Once submitted, the request flows directly into the FRC dashboard, where it’s automatically routed to the right service team. You can track the status of each request in real time — from the moment it’s received to when it’s completed. Gym managers can see which machines are available, which are under maintenance, and view a full history of past repairs and technician notes, all in one place. The system also provides visibility into equipment uptime, technician response times, and maintenance performance, so you always know how your facility is operating.{" "}
              </p>
              <div className="row">
                  <div className="col-lg-8">
                      <p>
                          Beyond reactive repairs, FRC helps you stay ahead with proactive planned maintenance programs. Our technicians perform regular inspections and preventive tasks to keep your equipment performing at its best, reducing downtime and unexpected costs. Every visit is logged within the system, ensuring your maintenance records are always complete and accessible.
                            <br/><br/>
                          For gyms enrolled in our maintenance programs, FRC provides clear reporting and transparency into service spend, warranty work, and performance metrics. You can easily export summaries for your internal records or financial tracking. Notifications and updates keep your team informed whenever a job is scheduled or completed, creating a seamless flow of communication between your staff, our service team, and technicians in the field.

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

              <p>
                  In short, FRC gives gym owners a smarter way to manage equipment care — fast, transparent, and hassle-free. With just a quick scan, issues are handled efficiently, maintenance stays on schedule, and your team can focus on delivering a great workout experience to every member, every day.
                  <br/><br/>
                  Access to the FRC Platform is included free of charge for all gyms enrolled in our Concierge Planned Maintenance Program, giving you full visibility into equipment performance, maintenance schedules, and service history.
                  For facilities not yet enrolled in a PM program, we offer a simple monthly subscription that unlocks the same technology — allowing your team to submit and track service requests, monitor performance metrics, and manage all maintenance activity in one place.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPrimary;
