import React, { Component } from 'react';
// import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { TabProvider, TabPanel, TabLabel, TabContent, Tab, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css';

const blockElements = {
  content: 'tabs-content',
  panel: 'tabs-panel',
  label: 'tabs-title'
}


const NavTab = () => {
    return (
      <div className="container ptb-80 pb-50">
        <div className="row">
          <TabProvider defaultTab="one">
            <section className="my-tabs">
              <TabList className="my-tablist">
                <Tab tabFor="one">INSIDE SALES</Tab>
                <span className="divider"></span>
                <Tab tabFor="two">SALES MANAGER</Tab>
                <span className="divider"></span>
                <Tab tabFor="three" className="my-tab">HR</Tab>
              </TabList>
              <div className="wrapper">
                <TabPanel tabId="one">
                  <h6><strong>Job Responsibility :</strong></h6>
                  <ol>
                    <li>Identify, generate, propose and close sales opportunities for Companys service over the phone.</li>
                    <li>Generate sales by cold/warm calling current and prospective customers.</li>
                    <li>Managing the entire Sales Cycle. (New Sales/ Cross Sales/ Upsell)</li>
                    <li>Work in a team environment stake holders.</li>
                    <li>Meet and/or exceed individual product and services target set by company.</li>
                  </ol>
                  <h6><strong>Desired Candidate Profile :</strong></h6>
                  <ol>
                    <li>Must have experience in Inside Sales/ Cold Calling / Lead generation.</li>
                    <li>Experience of Interaction with the business owners.</li>
                    <li>Excellent Communication, writing skills</li>
                    <li>Should have closed the leads in past</li>
                    <li>Experience of business operations</li>
                  </ol>
                  <h6><strong>Desired Candidate Profile :</strong></h6>
                  <h6>Salary is no bar for right candidate.</h6>
                </TabPanel>
                <TabPanel tabId="two">
                  <h6><strong>Job Purpose:</strong> To achieve sales targets by making effective sales presentations in a venue setting; to maintain high standards of service quality and attract and convert prospects into sales.</h6>
                  <br />
                  <h6><strong>Job Responsibility :</strong></h6>
                  <ol>
                    <li>Achieving stretched targets in a result-focused environment at IT/Software world.</li>
                    <li>Making powerful sales presentations resulting in high conversion ratio.</li>
                    <li>Handling objections and resolving customer conflicts by constantly connecting with them through meetings.</li>
                    <li>Maintaining strong client relationship and high level of customer service.</li>
                    <li>Preparing pre-sales proposals for prospective clients.</li>
                    <li>Identifying potential customers and new business opportunities within and outside the venue.</li>
                    <li>Keeping abreast with the organization’s Services.</li>
                    <li>Maintaining consistent average productivity.</li>
                    <li>Provide necessary support in first time for new customer and generate quality referrals from them.</li>
                  </ol>
                  <h6><strong>Skill Required:</strong></h6>
                  <h6 className="px-5">Applicant must enjoy working in a fast-paced environment and be able to thrive under pressure.</h6>
                  <h6 className="px-5">Should possess sound knowledge about the local market and IVR, LMS ot other IT/Software Services</h6>
                  <h6 className="px-5">Possess strong communication skills.</h6>
                  <h6 className="px-5">Have high closure orientation.</h6>
                </TabPanel>
                <TabPanel tabId="three">
                  <h6><strong>Job Responsibility:</strong></h6>         
                  <ol>
                    <li>Lead the development and execution of the Human Resources strategic plan and shorter term plans and initiatives to support the business strategies and promote a unified company culture.</li>
                    <li>To develop and implement HRpolicy across all areas of the organization including improving performance, maximizing attendance and providing effective management of change.</li>
                    <li>Develop an annual performance review process, including supervisors.</li>
                    <li>Create and implement recruitment and selection processes (requisition approval, interview techniques, assessments, reference checks, extending offers, etc.).</li>
                    <li>On joining, ensure proper on-boarding, hand-holding and orientation and induction of the new joinees.</li>
                    <li>Identify gaps in training programs and develop programs that meet the needs of management and employees.</li>
                    <li>Ensure all policies and procedures are up to date and legally compliant.</li>
                    <li>Maintains manual and electronic documents, files and records (e.g. background information, personnel files, vacancy listings, etc.) for the purpose of providing accurate information in compliance with regulatory requirements and established guidelines.</li>
                    <li>Ensure effective implementation of the disciplinary and grievance procedures for all employee groups.</li>
                    <li>Ensure payroll is completed accurately and to deadline.</li>
                    <li>Audit and authenticate all documents related to legal, salary statements and distribution, policies etc.</li>
                    <li>Maintain professional relations with the industry partners.</li>
                  </ol>
                  <h6><strong>Desired candidate profile :</strong></h6>
                  <h6 className="px-5">Candidate should have excellent interpersonal skills.</h6>
                  <h6 className="px-5">Candidate should be able to meet Hiring needs on priority in Minimum Time.</h6>
                  <h6 className="px-5">Candidate Should have good Experience in Hiring through different channels : Social networking, Campus, Employee Referrals, Job Portals,</h6>
                  <h6 className="px-5">Candidates should have experience in Candidates should have experience in Statutory Norms, Industrial Relations, Grievance Handling, Payment of Wages act, Labour Laws,PF & ESI.</h6>
                  <h6><strong>Salary :</strong></h6>
                  <h6 className="px-5">Salary is no bar for right candidate</h6>
                </TabPanel>
              </div>
            </section>
          </TabProvider>


          <div className="faq-contact">
            <form>
                  <div className="row">
                    <h3><strong>Job Seekers</strong></h3>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input type="text" placeholder="Post Applied For" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-control" />
                        </div>
                      </div>
                      
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control" />
                        </div>
                      </div>
                      
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input type="Number" placeholder="Phone Number" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                              <input type="Text" placeholder="State" className="form-control" />
                          </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                              <input type="Text" placeholder="Country" className="form-control" />
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <input type="radio" id="html" name="fav_language" value="Male" />
                        <label for="Male">Male</label><br />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="radio" id="css" name="fav_language" value="Female" />
                        <label for="Female">Female</label><br />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="radio" id="javascript" name="fav_language" value="TransGender" />
                        <label for="TransGender">TransGender</label>
                      </div>

                      <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                              <textarea name="Text" cols="30" rows="6" placeholder="Paste Your Resume" className="form-control"></textarea>
                          </div>
                      </div>
                      
                      <div className="col-lg-12 col-md-12">
                          <button className="btn btn-primary" type="submit">Submit Now!</button>
                      </div>
                  </div>
              </form>
            </div>
        </div>
      </div>
    )
  
}

export default NavTab;