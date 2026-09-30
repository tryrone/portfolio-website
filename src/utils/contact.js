export function createEmailUrl(email, { name, senderEmail, message }) {
  const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`);
  const body = encodeURIComponent(
    `Name: ${name.trim()}\nEmail: ${senderEmail.trim()}\n\n${message.trim()}`,
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}
