export default function verifyUserLogin() {
  const isUserLogged = localStorage.getItem('userData');

  if (isUserLogged) {
    return true;
  } else {
    return false;
  }
}
