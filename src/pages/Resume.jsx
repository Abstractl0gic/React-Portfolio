import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School"; 
import WorkIcon from "@mui/icons-material/Work";

function Resume() {
  return (
    <div className="Resume">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2010 – May 2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Texas A&M University
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            College Station, TX
          </h4>

          <p>• Physics, 32 Credits</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2016 – Jan 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Remote Support Engineer - Support.com
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>• Top 10% of customer satisfaction due to my ability to diagnose and
effectively communicate problems to a non technical customer base. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2018 – Mar 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Information Technology Specialist - Neuhaus Education Center
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bellaire, TX
          </h4>
          <p>
          • Co-designed and implemented a Student Information System using the Zoom API to automate remote class
scheduling, attendance tracking, and instructor accreditation
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023 - Nov 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rice Univesrity
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Houston, TX
          </h4>

          <p>Rice University Coding Boot Camp</p>
          <p>
          • Learned full stack web development utilizing the MERN scaffolding system, REST APIs, MySQL/NoSQL databases while contributing to 3 group projects utilizing the Agile development methodology.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Resume;