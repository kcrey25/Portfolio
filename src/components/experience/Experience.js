import React from 'react';
import Work from './Work';
import * as imgTestoutlogo from "../../resources/images/testoutlogo.png";
import * as imgIvanti from "../../resources/images/ivanti.jpg";
import * as imgAirForce from "../../resources/images/AFLogo.jpg";
import * as imgCsd from "../../resources/images/CSD.jpg";
import * as imgImagicom from "../../resources/images/Imagicom.jpeg";

import './experience.css';

const comptiaExperience = [
  'Mentored and trained several developers.',
  'Developed desktop simulations in the browser using React and TypeScript.',
  'Wrote automated tests to ensure code quality.',
  'Wrote source-to-source compilers to update old code to React and TypeScript.',
  'Leveraged Bitbucket as my source control and Jenkins as a build server.',
  'Improved and maintained existing code to reduce technical debt and fix issues.',
  'Contributed to React component libraries.'
];

const ivantiExperience = [
  'Developed solutions for Web, Windows desktop and Android applications.',
  'Added features which improved customer implementation time from months, down to a few hours.',
  'Added functional and unit tests which improved product quality and testing time.',
  'Worked with WebView and added custom themes and styling with CSS, HTML, and JavaScript.',
  'Wrote library templates in JavaScript to use for easy customization of our application.',
  'Used Jenkins as a build and automation server.'
];

const airForceExperience = [
  'WPF development using C# and XAML in an Agile/Scrum environment.',
  'Improved application maintainability by designing and implementing a new architecture.',
  'Maintained, enhanced, and reworked a large scale application.'
];

const canyonsExperience = [
  'Full stack development using JavaScript, HTML, CSS, SQL, Bootstrap, and ColdFusion.',
  'Developed 4 applications in full, completely remodeled 3 others, and maintained 15.',
  'Created and maintained databases using Microsoft SQL Server.',
  'Helped increase group morale by using teamwork to solve difficult problems.'
];

const imagicomExperience = [
  'Responsible for quality control using Project Tracking, SQL Server Management Studio, Virtual Machines, BrowserStack, IIS Manager, and SourceGear.',
  'Helped resolve customer concerns by narrowing down their issues and doing research to find the resolution.'
];

const Experience = () => {
  return (
    <React.Fragment>
      <div className="experience">
        <h1>Experience</h1>
      </div>
      <div className="experienceBody">
        <Work
          bulletPoints={comptiaExperience}
          title="CompTIA - Sr. Full-Stack Software Engineer"
          location="Remote (Amarillo, Texas)"
          timePeriod="Nov 2020 - Present"
          logoSrc={imgTestoutlogo}
        />
        <Work
          bulletPoints={ivantiExperience}
          title="Ivanti - Software Engineer"
          location="South Jordan, Utah"
          timePeriod="Oct 2017 - Nov 2020"
          logoSrc={imgIvanti}
        />
        <Work
          bulletPoints={airForceExperience}
          title="U.S. Air Force - Software Engineer"
          location="Hill AFB, Utah"
          timePeriod="May 2016 - Oct 2017"
          logoSrc={imgAirForce}
        />
        <Work
          bulletPoints={canyonsExperience}
          title="Canyons School District - Applications Engineer"
          location="Sandy, Utah"
          timePeriod="May 2015 - Sept 2015"
          logoSrc={imgCsd}
        />
        <Work
          bulletPoints={imagicomExperience}
          title="Imagicom - QA/Tech Support"
          location="Remote"
          timePeriod="Dec 2012 - May 2015"
          logoSrc={imgImagicom}
        />
      </div>
    </React.Fragment>
  );
};

export default Experience;
