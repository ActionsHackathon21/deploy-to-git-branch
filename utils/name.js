export const getName = (req) => {
    return req.connection.remoteAddress
}