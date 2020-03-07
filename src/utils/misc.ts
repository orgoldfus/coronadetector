const randomBoolean = (percentTrue: number) => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber < percentTrue;
}

export {
  randomBoolean
}