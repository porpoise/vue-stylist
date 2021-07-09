const camelToKebab = (input: string): string =>
    input.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

export default camelToKebab;
