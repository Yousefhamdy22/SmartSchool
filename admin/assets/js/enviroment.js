export let APIURL = "https://smartsns-001-site2.htempurl.com/";  //   http://localhost:5048/

export class endpoints {
  static getAllStudentAdd = `${APIURL}api/Students`;
  static getAllTeacherAdd = `${APIURL}api/Teachers`;  //Teachers/Admission
  static getAllJopAdd = `${APIURL}api/JobAdmission`;
}
