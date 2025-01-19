export function abbreviateAddress(
  address: string,
  startLength = 4,
  endLength = 4
) {
  if (address.length <= startLength + endLength) {
    return address; // Return the original address if it's too short to abbreviate
  }
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}
