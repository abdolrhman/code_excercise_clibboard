const crypto = require("crypto");

/**
 * Returns a deterministic partition key for the given event.
 * If the event has a partitionKey property, it is returned.
 * Otherwise, a SHA3-512 hash of the event is returned.
 * If the hash is longer than 256 characters, it is truncated.
 * If the event is null or undefined, the string "0" is returned.
 * If the event is not a string or object, it is converted to a string.
 * @param event
 * @returns {string} the partition key
 * @throws {Error} if the event is not a string, object, or null/undefined
 */
function deterministicPartitionKey(event) {
  if (event === null || event === undefined) {
    return "0";
  }
  if (typeof event === "string") {
    return event;
  }
  if (typeof event === "object") {
    if (event.partitionKey) {
      return event.partitionKey;
    }
    const hash = crypto.createHash("sha3-512");
    hash.update(JSON.stringify(event));
    return hash.digest("hex").substring(0, 256);
  }
  return deterministicPartitionKey(event.toString());
}

module.exports = {
  deterministicPartitionKey,
}
