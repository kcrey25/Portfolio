import React from 'react';
import Work from './Work';

import './experience.css';

const testoutExperience = [
  'Developed desktop simulations in the browser using React and TypeScript.',
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
    <>
      <div className="experience">
        <h1>Experience</h1>
      </div>
      <div className="experienceBody">
        <Work
          bulletPoints={testoutExperience}
          title="TestOut - Full-Stack Software Engineer"
          location="Pleasant Grove, Utah"
          timePeriod="Nov 2020 - Present"
          logoSrc="images/testoutlogo.png"
        />
        <Work
          bulletPoints={ivantiExperience}
          title="Ivanti - Software Engineer"
          location="South Jordan, Utah"
          timePeriod="Oct 2017 - Nov 2020"
          logoSrc="images/ivanti.jpg"
        />
        <Work
          bulletPoints={airForceExperience}
          title="U.S. Air Force - Software Engineer"
          location="Hill AFB, Utah"
          timePeriod="May 2016 - Oct 2017"
          logoSrc="images/AFLogo.jpg"
        />
        <Work
          bulletPoints={canyonsExperience}
          title="Canyons School District - Applications Engineer"
          location="Sandy, Utah"
          timePeriod="May 2015 - Sept 2015"
          logoSrc="images/CSD.jpg"
        />
        <Work
          bulletPoints={imagicomExperience}
          title="Imagicom - QA/Tech Support"
          location="Remote"
          timePeriod="Dec 2012 - May 2015"
          logoSrc="images/Imagicom.jpeg"
        />
      </div>
    </>
  );
};

export default Experience;
