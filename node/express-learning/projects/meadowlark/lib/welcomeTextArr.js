const welcomeTextArr = ['欢迎使用', 'Welcome to use', '歡迎使用', 'Velkommen til brug', 'Добро пожаловать в использование', '大歓迎です', 'Bienvenue à utiliser', '오신 것을 환영합니다']

exports.getWelcomeText = () => {
  const idx = Math.floor(Math.random() * welcomeTextArr.length)
  return welcomeTextArr[idx]
}