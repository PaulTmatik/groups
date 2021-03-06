export const isType = (value, typename) => {
    const regex = /^\[object (\S+?)\]$/;

    const matches = Object.prototype.toString.call(value).match(regex) || [];

    return (matches[1] || "undefined").toLowerCase() === typename.toLowerCase();
}