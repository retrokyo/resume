function SkillList(skills_json) {
  return (
    <div className="border-bottom border-light border-3 pt-2" id="dev-skills">
      <h5>
        <u>{skills_json.title}</u>
      </h5>
      <ul className="list-group list-group-flush">
        {skills_json.skill_list.map((skill) => {
          return (
            <li className="list-group-item py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-light printable">{skill}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillList;
