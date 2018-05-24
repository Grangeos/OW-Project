import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';



class Abilities extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          activeTab: -1
        };
      }

     setActiveTab(index) {
         if (this.state.activeTab === index) {
             this.setState({ activeTab: -1 });
         } else {
             this.setState({
                 activeTab: index
             });
         }
       }
  render() {
      const { activeTab } = this.state;
    return (
      <div className="wrapperButton">
        <Button onClick={() => this.activeTab(0)}>
          click
        </Button>
        <Collapse in={activeTab === 0}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Well>
          </div>
        </Collapse>

      </div>
    );
  }
}

export default Abilities;
