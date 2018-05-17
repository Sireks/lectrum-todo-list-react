export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export const getUniqueID = (length = 15) => {
    if (
        typeof length !== "number" ||
        length === Infinity ||
        length === -Infinity
    ) {
        throw new Error("The function argument should be a number!");
    }

    let text = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};
