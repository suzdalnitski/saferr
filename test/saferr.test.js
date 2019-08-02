import saferr from "../src";

describe("saferr", () => {
  describe("when regular function", () => {
    describe("when throws", () => {
      it("should return error as first esement of the tuple", () => {
        const testFunc = () => {
          throw "error";
        };

        const safeTestFunc = saferr(testFunc);

        const result = safeTestFunc();

        expect(result).toEqual(["error", null]);
      });
    });
  });
});
