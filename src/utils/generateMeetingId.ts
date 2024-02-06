export const generateMeetingID = () => {
  let meetingID = "";
  const chars =
    "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  const maxPos = chars.length;

  //   we will loop through it   and get random charactor and ctreate random meeting Id which is of 8 charactor

  for (let i = 0; i < 8; i++) {
    meetingID += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return meetingID;
};
