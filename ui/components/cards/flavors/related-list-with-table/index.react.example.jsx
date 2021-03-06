/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'ui/components/cards/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';

export default (
  <Card>
    <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Contacts (1)</span></CardHeader>
    <CardBody>
      <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
        <thead>
          <tr className="slds-text-title--caps">
            <th scope="col"><div className="slds-truncate" title="Name">Name</div></th>
            <th scope="col"><div className="slds-truncate" title="Company">Company</div></th>
            <th scope="col"><div className="slds-truncate" title="Title">Title</div></th>
            <th scope="col"><div className="slds-truncate" title="Email">Email</div></th>
          </tr>
        </thead>
        <tbody>
          <tr className="slds-hint-parent">
            <th scope="row"><div className="slds-truncate" title="Adam Choi"><a href="javascript:void(0);">Adam Choi</a></div></th>
            <td><div className="slds-truncate" title="Company One">Company One</div></td>
            <td><div className="slds-truncate" title="Director of Operations">Director of Operations</div></td>
            <td><div className="slds-truncate" title="adam@company.com">adam@company.com</div></td>
          </tr>
        </tbody>
      </table>
    </CardBody>
    <CardFooter><a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a></CardFooter>
  </Card>
);
