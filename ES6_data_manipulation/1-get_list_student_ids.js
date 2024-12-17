const getListStudentIds = (students) => {
    // Check if the input is an array, return an empty array if not
    if (!Array.isArray(students)) {
      return [];
    }
    // Use the map function to return an array of student IDs
    return students.map((student) => student.id);
  };
  
  export default getListStudentIds;
  