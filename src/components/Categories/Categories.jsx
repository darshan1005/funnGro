import React from "react";
import { Tabs } from "antd";
import './Categories.css';

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Social Media Marketing",
    children: (
      <>
        <p>Explore the dynamic world of social media marketing by engaging with brands and helping them grow their online presence.</p>
        <ul>
          <li>Create and schedule posts for various platforms such as Facebook, Instagram, Twitter, and LinkedIn.</li>
          <li>Analyze engagement metrics to understand audience behavior and improve content strategies.</li>
          <li>Develop innovative strategies to increase followers, engagement rates, and brand loyalty.</li>
          <li>Collaborate with influencers to amplify brand messages and reach wider audiences.</li>
          <li>Stay updated with the latest social media trends and best practices.</li>
        </ul>
      </>
    ),
  },
  {
    key: "2",
    label: "Video Creation",
    children: (
      <>
        <p>Dive into the creative process of video creation and learn how to produce compelling video content for different audiences.</p>
        <ul>
          <li>Scriptwriting and storyboarding to plan engaging video content.</li>
          <li>Filming techniques, including camera work, lighting, and sound.</li>
          <li>Editing skills using software like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve.</li>
          <li>Post-production techniques such as color correction, audio enhancement, and special effects.</li>
          <li>Creating promotional videos, tutorials, vlogs, and social media clips.</li>
        </ul>
      </>
    ),
  },
  {
    key: "3",
    label: "Website Design",
    children: (
      <>
        <p>Master the art of website design and help businesses create beautiful and functional online presences.</p>
        <ul>
          <li>Learn the fundamentals of HTML, CSS, and JavaScript for web development.</li>
          <li>Design responsive and user-friendly interfaces that work seamlessly on all devices.</li>
          <li>Understand user experience (UX) principles to create intuitive and engaging websites.</li>
          <li>Utilize design tools such as Adobe XD, Figma, or Sketch for prototyping.</li>
          <li>Work on real projects to build your portfolio and demonstrate your skills.</li>
        </ul>
      </>
    ),
  },
  {
    key: "4",
    label: "Influencer Marketing",
    children: (
      <>
        <p>Get involved in influencer marketing and connect brands with the right influencers to boost their campaigns.</p>
        <ul>
          <li>Identify and vet potential influencers that align with brand values and target audience.</li>
          <li>Manage influencer relationships and coordinate campaign details.</li>
          <li>Track campaign performance and calculate ROI to measure success.</li>
          <li>Create compelling influencer briefs and content guidelines.</li>
          <li>Stay informed about influencer marketing trends and emerging platforms.</li>
        </ul>
      </>
    ),
  },
  {
    key: "5",
    label: "Mobile App Development",
    children: (
      <>
        <p>Step into the world of mobile app development and create innovative applications for smartphones and tablets.</p>
        <ul>
          <li>Learn programming languages like Swift for iOS and Kotlin for Android.</li>
          <li>Understand mobile UI/UX design principles to create user-friendly apps.</li>
          <li>Develop and test mobile applications using development environments like Xcode and Android Studio.</li>
          <li>Integrate APIs and third-party services to enhance app functionality.</li>
          <li>Deploy apps to app stores and maintain them through updates and bug fixes.</li>
        </ul>
      </>
    ),
  },
  {
    key: "6",
    label: "Campus Ambassador",
    children: (
      <>
        <p>Become a campus ambassador and represent brands at your university, helping them reach a student audience.</p>
        <ul>
          <li>Organize events and promotions to raise brand awareness on campus.</li>
          <li>Collect feedback from peers to provide valuable insights to the brand.</li>
          <li>Use social media and other channels to promote brand messages.</li>
          <li>Develop leadership and communication skills through brand representation.</li>
          <li>Network with professionals and gain experience in marketing and public relations.</li>
        </ul>
      </>
    ),
  },
  {
    key: "7",
    label: "Research & Survey",
    children: (
      <>
        <p>Engage in research and survey projects, helping companies gather valuable data and insights.</p>
        <ul>
          <li>Design and distribute surveys to collect data from target audiences.</li>
          <li>Analyze survey results using statistical methods and software.</li>
          <li>Present findings and recommendations in detailed reports.</li>
          <li>Conduct market research to understand industry trends and consumer behavior.</li>
          <li>Collaborate with research teams to ensure data accuracy and reliability.</li>
        </ul>
      </>
    ),
  },
  {
    key: "8",
    label: "Data Entry",
    children: (
      <>
        <p>Get involved in data entry projects and help businesses manage and organize their information efficiently.</p>
        <ul>
          <li>Input data accurately into databases and systems.</li>
          <li>Verify and clean data to maintain high quality and accuracy.</li>
          <li>Maintain data integrity and confidentiality at all times.</li>
          <li>Use data management software and tools effectively.</li>
          <li>Assist in generating reports and summaries based on the data entered.</li>
        </ul>
      </>
    ),
  },
  {
    key: "9",
    label: "Voice Over",
    children: (
      <>
        <p>Explore the exciting field of voice over work and lend your voice to various projects and media.</p>
        <ul>
          <li>Record voice overs for videos, advertisements, audiobooks, and more.</li>
          <li>Work on voice modulation, clarity, and pronunciation.</li>
          <li>Collaborate with directors and producers to meet project requirements.</li>
          <li>Use professional recording equipment and software for high-quality output.</li>
          <li>Build a diverse voice over portfolio to showcase your talent.</li>
        </ul>
      </>
    ),
  },
  {
    key: "10",
    label: "Content Writing",
    children: (
      <>
        <p>Hone your content writing skills and create engaging and informative content for various audiences.</p>
        <ul>
          <li>Write articles, blogs, social media posts, and more.</li>
          <li>Research topics thoroughly to provide accurate and valuable information.</li>
          <li>Edit and proofread content for clarity, coherence, and error-free writing.</li>
          <li>Learn SEO best practices to optimize content for search engines.</li>
          <li>Collaborate with editors and content strategists to align with brand voice and goals.</li>
        </ul>
      </>
    ),
  },
  {
    key: "11",
    label: "Graphics Design",
    children: (
      <>
        <p>Immerse yourself in graphic design and learn how to create visually appealing designs for different media.</p>
        <ul>
          <li>Use design software like Adobe Photoshop, Illustrator, and InDesign.</li>
          <li>Create logos, banners, posters, and promotional materials.</li>
          <li>Understand color theory, typography, and composition.</li>
          <li>Develop creative concepts and bring them to life through design.</li>
          <li>Work on real projects to build a professional design portfolio.</li>
        </ul>
      </>
    ),
  },
  {
    key: "12",
    label: "Testing",
    children: (
      <>
        <p>Develop your testing skills and ensure that products meet quality standards before they reach the market.</p>
        <ul>
          <li>Conduct manual and automated testing on various software and applications.</li>
          <li>Identify and report bugs and issues, providing detailed descriptions and steps to reproduce.</li>
          <li>Work with development teams to resolve problems and improve product quality.</li>
          <li>Create and execute test plans and test cases.</li>
          <li>Understand different testing methodologies, including functional, performance, and security testing.</li>
        </ul>
      </>
    ),
  },
];

const Categories = () => (
  <section className="categories">
    <h2>Project Categories</h2>
    <p>
      Explore hundreds of live projects in each category. Register for the categories of your choice in the Funngro App and start collaborating with companies today.
    </p>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </section>
);

export default Categories;
