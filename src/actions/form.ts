interface SendMessageProps {
  name: string;
  email: string;
  comments: string;
}

export const sendMessage = async(data: SendMessageProps) => {
 return fetch("api/email", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data),
  })
    .then(() => ({ response: "ok" }))
    .catch((e) => {
      throw new Error(e);
    });
};
