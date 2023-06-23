const initState = {
  projects: [
    { id: 1, title: "test 1", content: "blah blah blah" },
    { id: 2, title: "test 2", content: "blah blah blah" },
    { id: 3, title: "test 3", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
      return state;
    case "CREATE_PROJECT_ERR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
