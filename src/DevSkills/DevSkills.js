import SkillList from "../SkillList/SkillList";
import { DevDevSkills } from "./DevDevSkills";

function DevSkills() {
  return (
    <div className="border-bottom border-light border-3 pt-2" id="dev-skills">
      <h4>Developing/At Home Skills</h4>
      {SkillList(DevDevSkills)}
      <h5>
        <u>Current Work Applicable Skills</u>
      </h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-1 bg-transparent border-light">
          <p className="fs-6 mb-1 text-light printable">
            Dask (Python distributed DataFrames)
          </p>
        </li>
        <li className="list-group-item py-1 bg-transparent border-light">
          <p className="fs-6 mb-1 text-light printable">
            Flask (Python Micro Web Server)
          </p>
        </li>
        <li className="list-group-item py-1 bg-transparent border-light">
          <p className="fs-6 mb-1 text-light printable">
            Click (Python CLI package)
          </p>
        </li>
      </ul>
      <h5>
        <u>Languages</u>
      </h5>
      <p>Japanese</p>
    </div>
  );
}

export default DevSkills;
