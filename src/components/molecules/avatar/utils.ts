export const getInitialsFromName = (name: string) => {
  // take the first Initail in each word
  // Uppercase the initials

  // divide the name by space
  // take the first two words
  const [firstname, lastname] = name.split(' ');
  const [firstInitial] = firstname.split('');
  const [secondInitial] = lastname.split('');

  return `${firstInitial}${secondInitial}`.toUpperCase();
};
