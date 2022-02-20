function WorkExp() {
  return (
    <div className="d-flex flex-column justify-content-around ms-2 pb-2 border-bottom border-3 border-light">
        <p className="display-6">Work Experience</p>
      <div id="rakuten">
        <div className="rakuten-info border border-secondary border-3 rounded p-2 bg-white text-dark" id="rakuten">
          <h5>Data Science Engineer</h5>
          <h6>2021-05 - Present | Rakuten Inc.</h6>
          <ul className="list-group list-group-flush p-1 rounded">
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Fully own cloud-based application from initial requirements to
                development, release, and post-release support
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Currently doing full-stack work to build a no-code/low-code ETL
                builder service with React in the front-end and Python in the
                back-end to empower internal users to create geospatial map
                layers without development resources.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Refactoring cloud hosted Kubernetes deployment to trim down on
                resource requirements
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Automation of operational tasks through Python, Bash Scripting,
                and Kubernetes Jobs
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Implemented a standard development environment to add
                consistency to development of the application
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Created standard user request flow by building an HTML form on
                Confluence that communicates directly to the teams JIRA board.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-dark">
              <p className="fs-6 mb-1 text-dark">
                Provided consultation, and participating in development of
                version 2 of a cloud-based BI Platform with sister team
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="oyo">
        <div className="oyo-info p-2">
          <h5>Business Intelligence Associate</h5>
          <h6>2019-10 - 2021-04 | OYO Japan</h6>
          <ul className="list-group list-group-flush p-1 rounded">
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-light printable">
                Created and maintained dashboard in Google Data Studio by
                creating a pipeline between our Data Warehouse, and AWS’s S3
                Cloud Object Storage via a combination of SQL, Python, and
                Airflow deployed on an AWS EC2 instance.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-light printable">
                Supported multiple business units analyst teams through crafting
                multi sourced ETL pipelines pulling from user files, the Data
                Warehouse, and publicly available data, with Python and Airflow
                deployed on Amazon EC2 deployed on an AWS EC2 instance.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-light printable">
                Supported marketing team by developing server-less Single Page
                Web Apps for marketing landing pages using the React Framework
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-light printable">
                Developed and maintained internally used Python packages for
                easily interacting with the Data Warehouse, and other tools used
                by analyst teams
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-light printable">
                Supported front end development team in handling development
                requests, for the React based web page, from marketing, and
                branding teams
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="honestbee">
        <div className="honestbee-info border border-secondary border-3 rounded p-2 bg-light text-dark">
          <h5>honestbee</h5>
          <h6>2018-08 - 2019-08</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-dark">
                Contextualized the operations team’s pain points, identifying
                the utilization of delivery staff for our grocery delivery
                vertical as our weak link through data analytics, by pulling raw
                data from our data lake via SQL (Amazon Redshift) through
                Looker, processing and visualizing with Python, packages:
                pandas, matplolib, and folium, along with Excel.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-dark">
                Improved contractual delivery personnel hiring rate, through the
                virtualization of entire on-boarding process by building a link
                from our survey platform provider to our system using JavaScript
                inside Google Apps Script.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-dark">
                Supported our food delivery vertical with analytics for
                targeting areas for restaurant acquisition, reducing cost of
                delivery staff, while balancing delivery times, with Python and
                Excel.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-dark">
                Drafted phase one of a fleet optimization system using
                Dijkstra's shortest path algorithm.
              </p>
            </li>
            <li className="list-group-item px-2 py-1 bg-transparent border-light">
              <p className="fs-6 mb-1 text-dark">
                Performed Time Series Analysys for capacity planning of number
                of drivers available for assignement on a per shop basis, based
                on day of week. and time of day taking into account seasonality
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
