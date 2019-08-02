import saferr from "../src";

describe("saferr", () => {
  describe("when regular function", () => {
    describe("when throws", () => {
      const testFunc = () => {
        throw "error";
      };

      const safeTestFunc = saferr(testFunc);

      it("should return error as first element of the tuple", () => {
        const [error] = safeTestFunc();

        expect(error).toEqual("error");
      });

      it("should return null as second element of the tuple", () => {
        const [_, result] = safeTestFunc();

        expect(result).toEqual(null);
      });
    });

    describe("when does not throw", () => {
      const testFunc = () => {
        return "result";
      };

      const safeTestFunc = saferr(testFunc);

      it("should return null as first element of the tuple", () => {
        const [error] = safeTestFunc();

        expect(error).toEqual(null);
      });

      it("should return result as second element of the tuple", () => {
        const [_, result] = safeTestFunc();

        expect(result).toEqual("result");
      });
    });
  });

  describe("when async function", () => {
    describe("when throws", () => {
      const testFunc = async () => {
        throw "error";
      };

      const safeTestFunc = saferr(testFunc);

      it("should return error as first element of the tuple", async () => {
        const [error] = await safeTestFunc();

        expect(error).toEqual("error");
      });

      it("should return null as second element of the tuple", async () => {
        const [_, result] = await safeTestFunc();

        expect(result).toEqual(null);
      });
    });

    describe("when does not throw", () => {
      const testFunc = async () => {
        return "result";
      };

      const safeTestFunc = saferr(testFunc);

      it("should return null as first element of the tuple", async () => {
        const [error] = await safeTestFunc();

        expect(error).toEqual(null);
      });

      it("should return result as second element of the tuple", async () => {
        const [_, result] = await safeTestFunc();

        expect(result).toEqual("result");
      });
    });
  });
});
