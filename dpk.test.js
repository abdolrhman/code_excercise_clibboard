const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns a deterministic partition key for the given event or create a new one", () => {
    const event = {
      partitionKey: "pk",
    };
    expect(deterministicPartitionKey(event)).toEqual("pk");
  });

  it("returns a 0 if the event is null or undefined", () => {
    expect(deterministicPartitionKey(null)).toEqual("0");
    expect(deterministicPartitionKey(undefined)).toEqual("0");
  });

  it("returns a SHA3-512 hash of the event if the event is not a string or object", () => {
     expect(deterministicPartitionKey("event")).toEqual("event");
  });
});

