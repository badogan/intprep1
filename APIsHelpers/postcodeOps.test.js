const index = require("./postcodeOps");

describe(".testing funnyFunction:", () => {
  test("testing funnyFunction with expected false is working", () => {
    expect(index.funnyFunction(11)).toBe(false);
  });

  test("testing funnyFunction with expected true is working", () => {
    expect(index.funnyFunction(10)).toBe(true);
  });
});

describe(".testing getParishForThePostcode:", () => {
  test(" ASYNC testing getParishForThePostcode is working - valid postcode", async () => {
    await expect(
      index.getParishForThePostcode("RG109NY")
    ).resolves.toStrictEqual({
      postcode: "RG109NY",
      result: "success",
      data: "Twyford"
    });
  });
  test(" ASYNC testing getParishForThePostcode-invalid postcode", async () => {
    await expect(
      index.getParishForThePostcode("RG109N")
    ).resolves.toStrictEqual({
      postcode: "RG109N",
      result: "fail",
      data: "invalid postcode"
    });
  });
  test(" ASYNC testing getParishForThePostcode is working - invalid backend URL", async () => {
    await expect(
      index.getParishForThePostcode("RG109NY", "lllll")
    ).resolves.toHaveProperty("result", "fail");
  });
  test(" ASYNC testing getParishForThePostcode-invalid postcode - null", async () => {
    await expect(index.getParishForThePostcode(null)).resolves.toStrictEqual({
      postcode: null,
      result: "fail",
      data: "invalid postcode"
    });
  });
});

describe(".testing findType function:", () => {
  test("testing findType is working for string - string expected", () => {
    expect(index.findType("string")).toBe("string");
  });
  test("testing findType is working for number - number expected", () => {
    expect(index.findType(2)).toBe("number");
  });
  test("testing findType is working for array - object expected", () => {
    expect(index.findType([1, 2, 3])).toBe("object");
  });
  test("testing findType is working for array - object expected", () => {
    expect(index.findType({ a: "b", c: "d" })).toBe("object");
  });
});
