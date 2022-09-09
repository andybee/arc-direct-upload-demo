export async function handler ({ isBase64Encoded, body }) {
  return {
    isBase64Encoded,
    body: isBase64Encoded ? Buffer.from(body, 'base64').toString('utf-8') : body,
  };
}
