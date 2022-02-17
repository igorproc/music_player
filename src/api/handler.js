const handler = {
  user(code){
    switch(code){
      case 100:
        return 'Неверная почта'
      case 101:
        return 'Пароль должен содержать больше 6 символов'
      case 102:
        return 'Неверное имя'
      case 103:
        return 'Неверный формат даты'
      case 104:
        return 'Неверный пол'
      case 105:
        return 'Пользователь уже существует'
      case 106:
        return 'Неверный пароль'
      case 107:
        return 'Пользователь не зарегестрирован'
      case 108:
        return 'Пользователь не найден'
      case 109:
        return 'Invalid refresh token'
    }
  }
}

export default handler