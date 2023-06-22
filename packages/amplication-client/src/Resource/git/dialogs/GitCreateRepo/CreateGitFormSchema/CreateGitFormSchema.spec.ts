import { CreateGitFormSchema } from "./CreateGitFormSchema";

describe("Testing the CreateGitFormSchema", () => {
<<<<<<< HEAD
  const validObject = { name: "ofek", public: true };
  const UnValidObjectPublic = { name: "ofek", public: 45 };
  const UnValidObjectNameShort = { name: "o", public: true };
=======
  const validObject = { name: "ofek", isPublic: true };
  const UnValidObjectPublic = { name: "ofek", isPublic: 45 };
  const UnValidObjectNameShort = { name: "o", isPublic: true };
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  it("should pass the validate", () => {
    return expect(CreateGitFormSchema.validate(validObject)).resolves.toBe(
      validObject
    );
  });
<<<<<<< HEAD
  it("should throw error if getting un valid public value", async () => {
=======
  it("should throw error if getting invalid value for isPublic property", async () => {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    return expect(
      CreateGitFormSchema.validate(UnValidObjectPublic)
    ).rejects.toThrowError();
  });
<<<<<<< HEAD
  it("should throw error if getting short name", () => {
=======
  it("should throw error if receiving a name shorter than 2 characters", () => {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    return expect(
      CreateGitFormSchema.validate(UnValidObjectNameShort)
    ).rejects.toThrowError();
  });
});
