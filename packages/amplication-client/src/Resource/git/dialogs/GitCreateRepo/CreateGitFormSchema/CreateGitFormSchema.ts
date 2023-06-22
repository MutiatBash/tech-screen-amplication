import { string, bool, object } from "yup";

export const CreateGitFormSchema = object().shape({
  name: string()
    .min(2, "Git repository name require minimum of 2 characters")
    .required("Repository name is missing"),
<<<<<<< HEAD
  public: bool().required("Must select if repo is public"),
=======
  isPublic: bool().required("Must select if repo is private"),
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
});
