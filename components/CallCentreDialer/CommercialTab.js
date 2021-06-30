import React from 'react';
import { TabProvider, TabPanel, TabLabel, TabContent, Tab, TabList } from 'react-web-tabs';

const blockElements = {
    content: 'tabs-content',
    panel: 'tabs-panel',
    label: 'tabs-title'
  }

const CommercialTab = () => {
    return(
        

            <div className="row">
            <h3 className="text-centre"><strong>Commercial</strong></h3>
                <TabProvider defaultTab="one">
            
            <section className="my-tabs">
              <TabList className="my-tablist col-lg-6 col-md-6">
                <Tab className="col-lg-3 col-md-3" tabFor="one">PRI BASE - DIALER</Tab>
                <span className="divider"></span>
                <Tab className="col-lg-3 col-md-3" tabFor="two" className="my-tab">GSM GATEWAY-DIALER</Tab>
              </TabList>
              <div className="wrapper">
                <TabPanel tabId="one">
                 <div className="">
                    <h5><strong>Auto Dialer – PRI Based</strong></h5>


                 </div>                  
                </TabPanel>
                <TabPanel tabId="two">
              
              
                </TabPanel>
               
              </div>
              </section>
          </TabProvider>
          </div>

    )
}

export default CommercialTab;