import { Component, OnInit } from '@angular/core';
import {IService } from './iservice';
import {IEmployee} from '../employee';
import { ServiceTemplateComponent } from './service-template/service-template.component';
import { fadeInAnimation } from '../_animations';

@Component({
  templateUrl: './services.component.html'
  , styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  servicesArray: IService[]
  selectedService: IService;
  constructor() { }

  ngOnInit() {
    
    this.servicesArray = [
      {
        'serviceName':'Program Design',
        'serviceDescription': `<p>Beginning a new program or organization is an exciting prospect!  
        It can also become  a daunting and overwhelming experience.  
        At Tailwinds Research and Consulting, we understand that a friend who can meet with you, 
        hold your hand, and walk alongside you in this process can make all the difference in the world. 
        We will help you identify, articulate, and document answers to the following critical questions:<p>
        <ul>
          <li> Who does your program seek to serve?</li>
          <li>How will you reach your intended audience?</li>
          <li>What are the outcomes that you desire to bring about?</li>
          <li>Who else is working in this area, and how might you formulate a partnership?</li>
        </ul>      
        <p>Are you ready to move from your great idea to a clear and actionable plan?  If so, please contact us today!</p>
        `
      },
      {
        'serviceName':`Program (and Organizational) Evaluation`,
        'serviceDescription':`<p>Whether you have been doing your work for six months, six years, or are just beginning, it is a good idea to determine how you will evaluate your work.  In addition to helping you secure funding and support, a good evaluation framework will allow you to see how your operation can be improved from a variety of perspectives---not just the final outcome.  Evaluation doesn’t need to be a highly involved, highly technical, or scary process.  Tailwinds Research and Consulting will help you design a practical, tailored evaluation framework that responds to the following critical questions:</p>
        <ul>
        <li>Have we been reaching the right people or organizations?</li>
        <li>Are the people that we reach satisfied with the way that we have interacted with them?</li>
        <li>Are our employees and/or contractors satisfied with the way that management interacts with them?</li>
        <li>Do our employees and/or contractors feel satisfied with their work environment?</li>
        <li>How might the quality of the relationships between staff members be affecting our productivity and success as an organization?</li>
        <li>How satisfied are our partners?</li>
        <li>What is our reputation in the community?</li>
        <li>Are we achieving the outcomes that we seek?</li>
        <li>What would a comprehensive evaluation plan for our organization look like?</li></ul>        
        <p>Are you ready to look under the hood of your organization and see how a few things could be tweaked in order to make the engine run more smoothly?  If so, we’re waiting to hear from you!</p>
        `
      },
      {
        'serviceName':`Implementation Planning and Support`,
        'serviceDescription': `<p>So you’ve secured the resources that you need for your program--Yaay!  Now, you need to figure out where to start and how to get the project off the ground.  Dropping the ball on important deliverables and taking too long to gear up can make your organization seem unreliable.  Tailwinds Research and Consulting can help you develop a step-by-step action plan, a project timeline, and accountabilty tools that will keep your project on schedule.  We will also check in with your organization regularly, to ensure that you are making good progress.  Implementation planning and support encompasses a wide variety of services that include the following tasks:</p>
        <ul>
          <li>Project management</li>
          <li>Developing advisory boards</li>
          <li>Securing MOUs</li>
          <li>Arranging meetings with partners</li>
          <li>Coordinating marketing and media outputs</li>
        </ul>
        
        <p>Are you ready to get organized and get your project off to a great start? Contact us today and let’s get to work!</p>
        `
      },
      {
        'serviceName': 'Grant Writing Support',
        'serviceDescription':`<p>You’ve set your sights on a funding opportunity that is right up your alley, and you’ve decided that your organization will go after it.  Now, you have lots of work to do in order to ensure that you respond thoroughly to all of the RFP requirements and stand out from other applicants.  At Tailwinds Research and Consulting, we understand what funders really want to see when they read through your proposal.  Let us bring you closer to victory by offering the following grant writing support services:</p>
        <ul>
          <li>Proposal review and edits</li>
          <li>Literature (background research) review</li>
          <li>Evaluation plan development</li>
          <li>Sustainability plan development</li>
        </ul>
        `
      }
    ]
    this.selectedService = this.servicesArray[0];
  }
  clickedService(service: IService): void {
    this.selectedService = service;
  };

}
